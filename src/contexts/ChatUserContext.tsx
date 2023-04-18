import * as PushAPI from "@pushprotocol/restapi";
import { ProgressHookType } from "@pushprotocol/restapi";
import { useWeb3React } from '@web3-react/core';
import { LOADER_SPINNER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { appConfig } from 'config';
import { ethers } from 'ethers';
import * as w2wHelper from 'helpers/w2w';
import React, { createContext, useState } from 'react';
import { BlockedLoadingI, ConnectedUser, User } from 'types/chat';

export const ChatUserContext = createContext({})

//this context is global and it is called in APP.tsx
const ChatUserContextProvider = (props) => {
  const [connectedUser, setConnectedUser] = useState<ConnectedUser>();
  const { account, chainId, library } = useWeb3React<ethers.providers.Web3Provider>();

  //this blocked loading is a modal which shows during the PGP keys generation time
  const [blockedLoading, setBlockedLoading] = useState<BlockedLoadingI>({
    enabled: false,
    title: null,
  });
  const [pgpPvtKey,setPgpPvtKey] = useState(null);
  const [localPeer,setLocalPeer]= useState({
    peer:'',
    peerID:''
  })
  const [connectedPeerID,setConnectedPeerID] = useState({
    peerID:''
  });
  const [displayQR,setDisplayQR] = useState(false);

  interface onboardingProgressI {
    enabled: boolean;
    hookInfo: ProgressHookType;
    spinnerType: number;
    progress: number;
  }
  
  // To reformat errors
  const onboardingProgressReformatter = (progressHook: ProgressHookType) => {
    let onboardingProgress: onboardingProgressI = {
      enabled: true,
      hookInfo: progressHook,
      spinnerType: LOADER_SPINNER_TYPE.PROCESSING,
      progress: 0
    };

    if (progressHook) {
      switch (progressHook.progressId) {
        case "PUSH-CREATE-01":
          onboardingProgress.hookInfo.progressTitle = "Creating Push Profile";
          onboardingProgress.progress = 10;
          break;
        case "PUSH-CREATE-02":
          onboardingProgress.hookInfo.progressTitle = "1/3 - Profile Generation";
          onboardingProgress.progress = 25;
          break;
        case "PUSH-CREATE-03":
          onboardingProgress.hookInfo.progressTitle = "2/3 - Profile Encryption";
          onboardingProgress.progress = 50;
          break;
        case "PUSH-CREATE-04":
          onboardingProgress.hookInfo.progressTitle = "3/3 - Profile Sync";
          onboardingProgress.progress = 75;
          break;
        case "PUSH-CREATE-05":
          onboardingProgress.hookInfo.progressTitle = "Push Profile Created";
          onboardingProgress.progress = 99;
          break;
        case "PUSH-DECRYPT-01":
          onboardingProgress.hookInfo.progressTitle = "Decrypting Push Profile";
          break;
        case "PUSH-DECRYPT-02":
          onboardingProgress.enabled = false;
          onboardingProgress.hookInfo.progressTitle = "Push Profile Unlocked";
          break;
        case "PUSH-UPGRADE-01":
          onboardingProgress.hookInfo.progressTitle = "1/4 - Profile Generation";
          onboardingProgress.progress = 35;
          break;
        case "PUSH-UPGRADE-02":
          onboardingProgress.hookInfo.progressTitle = "2/4 - Decrypting Old Profile";
          onboardingProgress.progress = 50;
          break;
        case "PUSH-UPGRADE-03":
          onboardingProgress.hookInfo.progressTitle = "3/4 - New Profile Encryption";
          onboardingProgress.progress = 75;
          break;
        case "PUSH-UPGRADE-04":
          onboardingProgress.hookInfo.progressTitle = "4/4 - Profile Sync";
          onboardingProgress.progress = 90;
          break;
        case "PUSH-UPGRADE-05":
          onboardingProgress.hookInfo.progressTitle = "Push Profile Upgraded";
          onboardingProgress.progress = 99;
          break;
        case "PUSH-ERROR-00":
          onboardingProgress.hookInfo.progressTitle = "User Rejected Signature";
          onboardingProgress.spinnerType = LOADER_SPINNER_TYPE.ERROR;
          break;
        case "PUSH-ERROR-01":
          onboardingProgress.hookInfo.progressTitle = "Upgrade Failed";
          onboardingProgress.spinnerType = LOADER_SPINNER_TYPE.ERROR;
          break;
        case "PUSH-ERROR-02":
          onboardingProgress.hookInfo.progressTitle = "Decrypting Keys Failed";
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
    });

  };

  const getUser = async () => {
    console.log("getUser");
    const caip10: string = w2wHelper.walletToCAIP10({ account });
    const user: User = await PushAPI.user.get({ 
      account: caip10,
      env: appConfig.appEnv
    });
    let connectedUser: ConnectedUser;

    // TODO: Change this to do verification on ceramic to validate if did is valid
    if (user?.did.includes('did:3:')) {
      throw Error('Invalid DID');
    }

    // new user might not have a private key
    if (user && user.encryptedPrivateKey) {
      if (user.wallets.includes(',') || !user.wallets.includes(caip10)) {
        throw Error('Invalid user');
      }
      const _signer = await library.getSigner();
      const privateKeyArmored = await PushAPI.chat.decryptPGPKey({
        encryptedPGPPrivateKey: user.encryptedPrivateKey,
        signer: _signer,
        env: appConfig.appEnv,
        toUpgrade: true,
        progressHook: onboardingProgressReformatter
      });

      setPgpPvtKey(privateKeyArmored);
      connectedUser = { ...user, privateKey: privateKeyArmored };
    } else {
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

  const createUserIfNecessary = async (): Promise<ConnectedUser> => {
    try {
      const signer = await library.getSigner();
      await PushAPI.user.create({ 
        account: account,
        env: appConfig.appEnv,
        signer: signer,
        progressHook: onboardingProgressReformatter
      });
      const createdUser = await PushAPI.user.get({
        account: account,
        env: appConfig.appEnv
      });
      const pvtkey = await PushAPI.chat.decryptPGPKey({
        encryptedPGPPrivateKey: createdUser.encryptedPrivateKey,
        signer: signer,
        env: appConfig.appEnv,
        toUpgrade: true,
        progressHook: onboardingProgressReformatter
      });

      const createdConnectedUser = { ...createdUser, privateKey: pvtkey };
      setConnectedUser(createdConnectedUser);
      setPgpPvtKey(pvtkey);

      return createdConnectedUser ;
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ChatUserContext.Provider value={{ 
      getUser, 
      connectedUser, 
      setConnectedUser, 
      blockedLoading,
      setBlockedLoading, 
      createUserIfNecessary,
      pgpPvtKey,
      setPgpPvtKey,
      localPeer,
      setLocalPeer,
      connectedPeerID,
      setConnectedPeerID,
      displayQR,
      setDisplayQR
      }}>
      {props.children}
    </ChatUserContext.Provider>
  );
};

export default ChatUserContextProvider;
