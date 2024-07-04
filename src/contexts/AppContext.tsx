// React + Web3 Essentials
import { CONSTANTS, ProgressHookType, PushAPI } from '@pushprotocol/restapi';
import { ethers } from 'ethers';
import useModalBlur from 'hooks/useModalBlur';
import { createContext, useContext, useEffect, useRef, useState } from 'react';

// Internal Components
import { LOADER_SPINNER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { appConfig } from 'config/index.js';
import { traceStackCalls } from 'helpers/DebugHelper';
import { toChecksumAddress } from 'helpers/UtilityHelper';
import * as w2wHelper from 'helpers/w2w';
import { useAccount } from 'hooks';
import useToast from 'hooks/useToast';
import { MdError } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { setUserPushSDKInstance } from 'redux/slices/userSlice';
import { ConnectedUser } from 'types/chat';
import {
  AppContextType,
  BlockedLoadingI,
  ConnectedPeerIDType,
  LocalPeerType,
  Web3NameListType,
  onboardingProgressI,
} from 'types/context';
import { GlobalContext } from './GlobalContext';

export const AppContext = createContext<AppContextType | null>(null);

const AppContextProvider = ({ children }) => {
  // To ensure intialize via [account] is not run on certain logic points
  const shouldInitializeRef = useRef(true); // Using a ref to control useEffect execution

  const { connect, provider, account, wallet, connecting } = useAccount();
  const web3onboardToast = useToast();

  const { readOnlyWallet } = useContext(GlobalContext);

  const [web3NameList, setWeb3NameList] = useState<Web3NameListType>({});
  const [snapInstalled, setSnapInstalled] = useState(false);

  const [pgpPvtKey, setPgpPvtKey] = useState(null);
  const [connectedUser, setConnectedUser] = useState<ConnectedUser>();
  const [localPeer, setLocalPeer] = useState<LocalPeerType>({
    peer: '',
    peerID: '',
  });
  const [connectedPeerID, setConnectedPeerID] = useState<ConnectedPeerIDType>({
    peerID: '',
  });
  const [blockedLoading, setBlockedLoading] = useState<BlockedLoadingI>({
    enabled: false,
    title: null,
  });
  const [displayQR, setDisplayQR] = useState<boolean>(false);

  const { userPushSDKInstance } = useSelector((state: any) => {
    return state.user;
  });

  const [SnapState, setSnapState] = useState<number>(1);
  const {
    isModalOpen: isMetamaskPushSnapOpen,
    showModal: showMetamaskPushSnap,
    ModalComponent: MetamaskPushSnapModalComponent,
  } = useModalBlur();

  const dispatch = useDispatch();

  const connectWallet = async (showToast = false, toastMessage?: string) => {
    if (showToast) {
      web3onboardToast.showMessageToast({
        toastMessage: toastMessage || 'Please connect your wallet to continue',
        toastTitle: 'Connect Wallet',
        toastType: 'ERROR',
        getToastIcon: (size) => (
          <MdError
            size={size}
            color="red"
          />
        ),
      });
    }

    if (!(wallet?.accounts?.length > 0)) {
      const walletConnected = await connect();
      console.debug('src::contexts::AppContext::connectWallet::WalletConnected', walletConnected);
      if (walletConnected.length > 0) {
        return walletConnected[0];
      } else {
        return null;
      }
    }
  };

  // TODO: Change function name to handleConnectWalletAndUser
  const handleConnectWallet = async ({ remember = false, showToast = false, toastMessage = undefined } = {}) => {
    shouldInitializeRef.current = false; // Directly modify the ref to disable useEffect execution

    if (showToast) {
      web3onboardToast.showMessageToast({
        toastMessage: toastMessage || 'Please connect your wallet to continue',
        toastTitle: 'Connect Wallet',
        toastType: 'ERROR',
        getToastIcon: (size) => (
          <MdError
            size={size}
            color="red"
          />
        ),
      });
    }

    let user;

    if (wallet?.accounts?.length > 0) {
      user = await initializePushSDK();
    } else {
      const walletConnected = await connect();
      if (walletConnected.length > 0) {
        user = await initializePushSDK(walletConnected[0]);
      }
    }

    if (remember) {
      if (user && !user.readmode()) {
        storePGPKeyForUser(user.account, user.decryptedPgpPvtKey);
      }
    }

    // reset the ref to true
    shouldInitializeRef.current = true; // Directly modify the ref to disable useEffect execution

    return user;
  };

  // Remove PGP key from local storage
  const removePGPKeyForUser = (account: string) => {
    const key = getUniquePGPKey(account);
    localStorage.removeItem(key);
  };

  // Store PGP key in local storage
  const storePGPKeyForUser = (account: string, pgpPvtKey: string) => {
    const key = getUniquePGPKey(account);
    localStorage.setItem(key, pgpPvtKey);
  };

  // Retrieve PGP key from local storage
  const retrieveUserPGPKeyFromStorage = (account: string) => {
    const key = getUniquePGPKey(account);
    const value = localStorage.getItem(key);

    if (isPGPKey(value)) {
      return value;
    }

    return null;
  };

  // Append unique key for PGP key
  const getUniquePGPKey = (account: string) => {
    let address = w2wHelper.walletToCAIP10({ account });
    const uniqueKey = `push-user-${address}-pgp`;
    return uniqueKey;
  };

  // Check if the string is a PGP key
  const isPGPKey = (str: string | null) => {
    if (!str) return false;

    const pgpPublicKeyRegex = /-----BEGIN PGP PUBLIC KEY BLOCK-----[\s\S]*-----END PGP PUBLIC KEY BLOCK-----/;
    const pgpPrivateKeyRegex = /-----BEGIN PGP PRIVATE KEY BLOCK-----[\s\S]*-----END PGP PRIVATE KEY BLOCK-----/;

    return pgpPublicKeyRegex.test(str) || pgpPrivateKeyRegex.test(str);
  };

  const shouldCreateNewPushUser = async (checksumAddr: string, signer: any) => {
    // check if push sdk is already initialized with same account
    return !(
      userPushSDKInstance?.account === checksumAddr &&
      userPushSDKInstance?.env === appConfig.appEnv &&
      userPushSDKInstance?.signer === signer &&
      !userPushSDKInstance.readmode()
    );
  };

  const initializePushSdkGuestMode = async () => {
    // Return if new push user is not necessary
    if (!shouldCreateNewPushUser(readOnlyWallet, null)) return userPushSDKInstance;

    let userInstance;
    userInstance = await PushAPI.initialize({
      account: readOnlyWallet,
      env: appConfig.appEnv,
      alpha: { feature: ['SCALABILITY_V2'] },
    });

    console.debug('src::contexts::AppContext::initializePushSdkGuestMode::User Instance Initialized', userInstance);
    dispatch(setUserPushSDKInstance(userInstance));
  };

  const initializePushSdkReadMode = async () => {
    // traceStackCalls(); // Incase we want to see what function called this

    // get decrypted pgp keys from local storage
    const decryptedPGPKeys = retrieveUserPGPKeyFromStorage(account);

    // Return if new push user is not necessary
    if (!shouldCreateNewPushUser(account, decryptedPGPKeys ? provider?.getSigner(account) : null))
      return userPushSDKInstance;

    // call initializePushSDK if decryptedPGPKeys is not null
    if (decryptedPGPKeys) {
      console.debug('src::contexts::AppContext::initializePushSdkReadMode::Called initializePushSDK()');
      return initializePushSDK();
    }

    // else initialize push sdk in read mode
    const userInstance = await PushAPI.initialize(null, {
      decryptedPGPPrivateKey: null,
      env: appConfig.appEnv,
      account: account,
      alpha: { feature: ['SCALABILITY_V2'] },
    });

    console.debug('src::contexts::AppContext::initializePushSdkReadMode::User Instance Initialized', userInstance);
    dispatch(setUserPushSDKInstance(userInstance));
    return userInstance;
  };

  const initializePushSDK = async (wallet?: any) => {
    // convert address to checksum
    let currentAddress = toChecksumAddress(wallet ? wallet.accounts[0].address : account);

    // Return if new push user is not necessary
    if (!shouldCreateNewPushUser(currentAddress, provider?.getSigner(currentAddress))) return userPushSDKInstance;

    traceStackCalls();
    let userInstance;

    try {
      let web3Provider = provider;

      if (wallet) {
        web3Provider = new ethers.providers.Web3Provider(wallet.provider, 'any');
      }

      const librarySigner = web3Provider?.getSigner(currentAddress);
      const decryptedPGPKeys = retrieveUserPGPKeyFromStorage(currentAddress);

      if (decryptedPGPKeys) {
        userInstance = await PushAPI.initialize(librarySigner!, {
          decryptedPGPPrivateKey: decryptedPGPKeys,
          env: appConfig.appEnv,
          account: currentAddress,
          progressHook: onboardingProgressReformatter,
          alpha: { feature: ['SCALABILITY_V2'] },
        });
      } else {
        userInstance = await PushAPI.initialize(librarySigner!, {
          env: appConfig.appEnv,
          account: currentAddress,
          progressHook: onboardingProgressReformatter,
          alpha: { feature: ['SCALABILITY_V2'] },
        });
      }

      console.debug('src::contexts::AppContext::initializePushSDK::User Intance Initialized', userInstance);
      if (userInstance) {
        setBlockedLoading({
          enabled: false,
          title: 'Push Profile Setup Complete',
          spinnerType: LOADER_SPINNER_TYPE.COMPLETED,
          progressEnabled: false,
          progress: 100,
        });
      }
      dispatch(setUserPushSDKInstance(userInstance));

      // connect stream as well
      await setupStream(userInstance);
      return userInstance;
    } catch (error) {
      // Handle initialization error
      console.error('src::contexts::AppContext::initializePushSDK::Error', error);
      return null;
    }
  };

  const setupStream = async (userInstance: any) => {
    // Connect stream as well
    const stream = await userInstance.initStream([
      CONSTANTS.STREAM.CONNECT,
      CONSTANTS.STREAM.DISCONNECT,
      CONSTANTS.STREAM.CHAT,
      CONSTANTS.STREAM.CHAT_OPS,
      CONSTANTS.STREAM.NOTIF,
      CONSTANTS.STREAM.VIDEO,
    ]);

    stream.on(CONSTANTS.STREAM.CONNECT, () => {
      console.debug('src::contexts::AppContext::setupStream::CONNECT::');
    });

    await stream.connect();
    console.debug('src::contexts::AppContext::setupStream::User Intance Stream Connected', userInstance);
  };

  // To reformat errors
  const onboardingProgressReformatter = (progressHook: ProgressHookType) => {
    let onboardingProgress: onboardingProgressI = {
      enabled: true,
      hookInfo: progressHook,
      spinnerType: LOADER_SPINNER_TYPE.PROCESSING,
      progress: 0,
      errorMessage: '',
    };

    if (progressHook) {
      switch (progressHook.progressId) {
        case 'PUSH-CREATE-01':
          onboardingProgress.hookInfo.progressTitle = 'Creating Push Profile';
          onboardingProgress.progress = 10;
          break;
        case 'PUSH-CREATE-02':
          onboardingProgress.hookInfo.progressTitle = '1/3 - Profile Generation';
          onboardingProgress.progress = 25;
          break;
        case 'PUSH-CREATE-03':
          onboardingProgress.hookInfo.progressTitle = '2/3 - Profile Encryption';
          onboardingProgress.progress = 50;
          break;
        case 'PUSH-CREATE-04':
          onboardingProgress.hookInfo.progressTitle = '3/3 - Profile Sync';
          onboardingProgress.progress = 75;
          break;
        case 'PUSH-CREATE-05':
          onboardingProgress.hookInfo.progressTitle = 'Push Profile Created';
          onboardingProgress.progress = 99;
          break;
        case 'PUSH-DECRYPT-01':
          onboardingProgress.hookInfo.progressTitle = 'Decrypting Push Profile';
          break;
        case 'PUSH-DECRYPT-02':
          onboardingProgress.enabled = false;
          onboardingProgress.hookInfo.progressTitle = 'Push Profile Unlocked';
          break;
        // case "PUSH-UPGRADE-01":
        //     onboardingProgress.hookInfo.progressTitle = "1/4 - Profile Generation";
        //     onboardingProgress.progress = 35;
        //     break;
        case 'PUSH-UPGRADE-02':
          onboardingProgress.hookInfo.progressTitle = '1/5 - Profile Generation';
          onboardingProgress.progress = 15;
          break;
        case 'PUSH-AUTH-UPDATE-01':
          onboardingProgress.hookInfo.progressTitle = '2/5 - Decrypting Old Profile';
          onboardingProgress.progress = 30;
          break;
        case 'PUSH-AUTH-UPDATE-02':
          onboardingProgress.hookInfo.progressTitle = '3/5 - New Profile Encryption';
          onboardingProgress.progress = 45;
          break;
        case 'PUSH-AUTH-UPDATE-03':
          onboardingProgress.hookInfo.progressTitle = '4/5 - Profile Sync';
          onboardingProgress.progress = 60;
          break;
        case 'PUSH-AUTH-UPDATE-04':
          onboardingProgress.hookInfo.progressTitle = '5/5 - Upgradation Complete';
          onboardingProgress.progress = 75;
          break;
        // case "PUSH-UPGRADE-03":
        //     onboardingProgress.hookInfo.progressTitle = "3/4 - New Profile Encryption";
        //     onboardingProgress.progress = 75;
        //     break;
        // case "PUSH-UPGRADE-04":
        //     onboardingProgress.hookInfo.progressTitle = "4/4 - Profile Sync";
        //     onboardingProgress.progress = 90;
        //     break;
        case 'PUSH-UPGRADE-05':
          onboardingProgress.hookInfo.progressTitle = 'Push Profile Upgraded';
          onboardingProgress.progress = 99;
          break;
        case 'PUSH-PROFILE-UPDATE-01':
          onboardingProgress.hookInfo.progressTitle = 'Updating User Profile';
          break;
        case 'PUSH-PROFILE-UPDATE-02':
          onboardingProgress.enabled = false;
          onboardingProgress.hookInfo.progressTitle = 'User Profile Updated';
          break;
        case 'PUSH-ERROR-00':
          onboardingProgress.errorMessage =
            'The sign in was rejected by the user. You can still continue in read-only mode.';
          onboardingProgress.hookInfo.progressTitle = 'Profile Unlock Unsuccessful';
          onboardingProgress.spinnerType = LOADER_SPINNER_TYPE.ERROR;
          break;
        case 'PUSH-ERROR-01':
          onboardingProgress.errorMessage = 'Upgrade Failed';
          onboardingProgress.hookInfo.progressTitle = 'Upgrade Failed';
          onboardingProgress.spinnerType = LOADER_SPINNER_TYPE.ERROR;
          break;
        case 'PUSH-ERROR-02':
          onboardingProgress.errorMessage = 'Decrypting Keys Failed';
          onboardingProgress.hookInfo.progressTitle = 'Decrypting Keys Failed';
          onboardingProgress.spinnerType = LOADER_SPINNER_TYPE.ERROR;
          break;
      }
    } else {
    }

    // This is a new user
    setBlockedLoading({
      enabled: onboardingProgress.enabled,
      title: onboardingProgress.hookInfo.progressTitle,
      spinnerType: onboardingProgress.spinnerType,
      progressEnabled: onboardingProgress.progress ? true : false,
      progress: onboardingProgress.progress,
      progressNotice: onboardingProgress.hookInfo.progressInfo,
      errorMessage: onboardingProgress.errorMessage,
    });
  };

  const getUser = async () => {
    const caip10: string = w2wHelper.walletToCAIP10({ account });
    const user = userPushSDKInstance ? await userPushSDKInstance.info() : null;
    let connectedUser: ConnectedUser;

    // TODO: Change this to do verification on ceramic to validate if did is valid
    if (user?.did.includes('did:3:')) {
      throw Error('Invalid DID');
    }

    // new user might not have a private key
    if (user && user.encryptedPrivateKey) {
      if (user.wallets.includes(',') || !user.wallets?.toLowerCase().includes(caip10?.toLowerCase())) {
        throw Error('Invalid user');
      }
      const privateKeyArmored = userPushSDKInstance.decryptedPgpPvtKey;
      setPgpPvtKey(privateKeyArmored);
      connectedUser = { ...user, privateKey: privateKeyArmored };
    } else {
      //TODO: This will not be needed now because push user is created and info has user and user.encryptedPrivateKey both
      connectedUser = {
        // We only need to provide this information when it's a new user
        name: 'john-snow',
        profilePicture:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAvklEQVR4AcXBsW2FMBiF0Y8r3GQb6jeBxRauYRpo4yGQkMd4A7kg7Z/GUfSKe8703fKDkTATZsJsrr0RlZSJ9r4RLayMvLmJjnQS1d6IhJkwE2bT13U/DBzp5BN73xgRZsJMmM1HOolqb/yWiWpvjJSUiRZWopIykTATZsJs5g+1N6KSMiO1N/5DmAkzYTa9Lh6MhJkwE2ZzSZlo7xvRwson3txERzqJhJkwE2bT6+JhoKTMJ2pvjAgzYSbMfgDlXixqjH6gRgAAAABJRU5ErkJggg==',
        wallets: caip10,
        about: '',
        allowedNumMsg: 0,
        did: caip10,
        encryptedPrivateKey: '',
        encryptionType: '',
        numMsg: 0,
        publicKey: '',
        sigType: '',
        signature: '',
        linkedListHash: '',
        privateKey: '',
      };
    }

    setConnectedUser(connectedUser);
  };

  // Connect wallet and try to initialize push sdk
  useEffect(() => {
    // return if this ref is marke false
    if (!shouldInitializeRef.current) return;

    const initialize = async () => {
      // const librarySigner = await provider?.getSigner(account); // If you need to use librarySigner in async operations
      // if (!account || !appConfig?.appEnv) return;
      if (wallet?.accounts?.length > 0) {
        await initializePushSdkReadMode();
      } else {
        await initializePushSdkGuestMode();
      }
    };
    initialize();
  }, [account]);

  const createUserIfNecessary = async (): Promise<ConnectedUser> => {
    try {
      const signer = await provider.getSigner();
      await PushAPI.user.create({
        account: account,
        env: appConfig.appEnv,
        signer: signer,
        progressHook: onboardingProgressReformatter,
      });
      const createdUser = await PushAPI.user.get({
        account: account,
        env: appConfig.appEnv,
      });
      const pvtkey = await PushAPI.chat.decryptPGPKey({
        encryptedPGPPrivateKey: createdUser.encryptedPrivateKey,
        signer: signer,
        env: appConfig.appEnv,
        toUpgrade: true,
        progressHook: onboardingProgressReformatter,
      });

      const createdConnectedUser = { ...createdUser, privateKey: pvtkey };
      setConnectedUser(createdConnectedUser);
      setPgpPvtKey(pvtkey);

      return createdConnectedUser;
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <AppContext.Provider
      value={{
        web3NameList,
        setWeb3NameList,
        MetamaskPushSnapModalComponent,
        showMetamaskPushSnap,
        setSnapState,
        initializePushSDK,
        SnapState,
        handleConnectWallet,
        connectWallet,
        setSnapInstalled,
        snapInstalled,
        setBlockedLoading,
        blockedLoading,
        getUser,
        connectedUser,
        setConnectedUser,
        pgpPvtKey,
        setPgpPvtKey,
        localPeer,
        setLocalPeer,
        connectedPeerID,
        setConnectedPeerID,
        displayQR,
        setDisplayQR,
        createUserIfNecessary,
        initializePushSdkReadMode,
        removePGPKeyForUser,
        storePGPKeyForUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
