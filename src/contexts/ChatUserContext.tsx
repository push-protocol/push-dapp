import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';
import React, { createContext, useState } from 'react';
import { ConnectedUser, User } from 'types/chat';
import * as w2wHelper from 'helpers/w2w';
import * as PushNodeClient from 'api';
import CryptoHelper from 'helpers/CryptoHelper';

export const ChatUserContext = createContext({
    connectedUser:null,
    setConnectedUser:(value:any) => {},
    getUser: () => {}
  });

const ChatUserContextProvider = (props) => {
  const [connectedUser,setConnectedUser] = useState<ConnectedUser>();
  const { account, chainId, library } = useWeb3React<ethers.providers.Web3Provider>();

  const getUser = async () => {
    const caip10: string = w2wHelper.walletToCAIP10({ account, chainId });
    const user: User = await PushNodeClient.getUser({ caip10 });
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

      const privateKeyArmored: string = await CryptoHelper.decryptWithWalletRPCMethod(
        library.provider,
        user.encryptedPrivateKey,
        account
      );
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

  return (
    <ChatUserContext.Provider value={{ getUser, connectedUser, setConnectedUser }}>
      {props.children}
    </ChatUserContext.Provider>
  );
};

export default ChatUserContextProvider;
