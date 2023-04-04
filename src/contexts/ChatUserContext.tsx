import * as PushAPI from "@pushprotocol/restapi";
import { useWeb3React } from '@web3-react/core';
import { LOADER_SPINNER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { appConfig } from 'config';
import { ethers } from 'ethers';
import CryptoHelper from 'helpers/CryptoHelper';
import * as w2wHelper from 'helpers/w2w';
import { generateKeyPair } from 'helpers/w2w/pgp';
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

  const getUser = async () => {
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
      const privateKeyArmored: string = await PushAPI.chat.decryptPGPKey({
        encryptedPGPPrivateKey: user.encryptedPrivateKey,
        signer: _signer,
        env:appConfig.appEnv,
        // toUpgrade: false,
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
      // This is a new user
      setBlockedLoading({
        enabled: true,
        title: 'Step 1/4: Generating secure keys for your account',
        progressEnabled: true,
        progress: 30,
        progressNotice:
          'This step is is only done for first time users and might take a few seconds. PGP keys are getting generated to provide you with secure yet seamless chat',
      });
      await new Promise((r) => setTimeout(r, 200));
     
      setBlockedLoading({
        enabled: true,
        title: 'Step 2/4: Encrypting your keys',
        progressEnabled: true,
        progress: 60,
        progressNotice: 'Please sign the transaction to continue. Steady lads, chat is almost ready!',
      });

      const signer = await library.getSigner();
      await PushAPI.user.create({ 
        account: account,
        env: appConfig.appEnv,
        signer: signer
      });
      const createdUser = await PushAPI.user.get({
        account: account,
        env: appConfig.appEnv
      });
      const pvtkey = await PushAPI.chat.decryptPGPKey({
        encryptedPGPPrivateKey: createdUser.encryptedPrivateKey,
        signer: signer,
        env: appConfig.appEnv,
        // toUpgrade: false
      });
      setBlockedLoading({
        enabled: true,
        title: 'Step 3/4: Syncing account info',
        progressEnabled: true,
        progress: 85,
        progressNotice: 'This might take a couple of seconds as push nodes sync your info for the first time!',
      });

     
      const createdConnectedUser = { ...createdUser, privateKey: pvtkey };
      setConnectedUser(createdConnectedUser);
      setPgpPvtKey(pvtkey);

      setBlockedLoading({
        enabled: false,
        title: 'Step 4/4: Done, Welcome to Push Chat!',
        spinnerType: LOADER_SPINNER_TYPE.COMPLETED,
        progressEnabled: true,
        progress: 100,
      });
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
