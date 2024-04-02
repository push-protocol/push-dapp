// React + Web3 Essentials
import { ProgressHookType, PushAPI } from '@pushprotocol/restapi';
import { ethers } from 'ethers';
import useModalBlur from 'hooks/useModalBlur';
import React, { createContext, useContext, useEffect, useState } from 'react';

// Internal Components
import { LOADER_SPINNER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { appConfig } from 'config';
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
  onboardingProgressI,
  Web3NameListType,
} from 'types/context';
import { GlobalContext, ReadOnlyWalletMode } from './GlobalContext';

export const AppContext = createContext<AppContextType | null>(null);

const AppContextProvider = ({ children }) => {
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
      console.log('Wallet Connected >>>', walletConnected);
      if (walletConnected.length > 0) {
        return walletConnected[0];
      } else {
        return null;
      }
    }
  };

  const handleConnectWallet = async (showToast = false, toastMessage?: string) => {
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

    if (wallet?.accounts?.length > 0) {
      const userPushInstance = await initializePushSDK();
      return userPushInstance;
    } else {
      const walletConnected = await connect();
      if (walletConnected.length > 0) {
        const userPushInstance = await initializePushSDK(walletConnected[0]);
        return userPushInstance;
      } else {
        return null;
      }
    }
  };

  const initialisePushSdkGuestMode = async () => {
    let userInstance;
    userInstance = await PushAPI.initialize({
      account: readOnlyWallet,
      env: appConfig.appEnv,
      alpha: { feature: ['SCALABILITY_V2'] },
    });
    dispatch(setUserPushSDKInstance(userInstance));
  };

  const initialisePushSdkReadMode = async () => {
    let userInstance;
    userInstance = await PushAPI.initialize({
      env: appConfig.appEnv,
      account: account,
      alpha: { feature: ['SCALABILITY_V2'] },
    });
    dispatch(setUserPushSDKInstance(userInstance));
    return userInstance;
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

  const initializePushSDK = async (wallet?: any) => {
    let userInstance;
    console.log('Initialising Push General Mode');
    try {
      let web3Provider = provider;
      let currentAddress = wallet ? wallet.accounts[0].address : account;

      if (wallet) {
        web3Provider = new ethers.providers.Web3Provider(wallet.provider, 'any');
      }

      const librarySigner = web3Provider?.getSigner(currentAddress);
      userInstance = await PushAPI.initialize(librarySigner!, {
        env: appConfig.appEnv,
        account: currentAddress,
        progressHook: onboardingProgressReformatter,
        alpha: { feature: ['SCALABILITY_V2'] },
      });
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
      return userInstance;
    } catch (error) {
      // Handle initialization error
      console.log('Errror !!!!!', error);
      return null;
    }
  };

  const getUser = async () => {
    const caip10: string = w2wHelper.walletToCAIP10({ account });
    const user = await userPushSDKInstance.info();
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

  useEffect(() => {
    const librarySigner = provider?.getSigner(account);
    // if (!account || !appConfig?.appEnv) return;
    if (wallet?.accounts?.length > 0) {
      initialisePushSdkReadMode();
    } else {
      initialisePushSdkGuestMode();
    }
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
        initialisePushSdkReadMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
