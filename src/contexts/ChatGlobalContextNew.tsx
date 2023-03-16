import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';
import React, { createContext, useState } from 'react';
import { ChatsNew, ConnectedUser, Feeds, FeedsNew, MessageIPFS, User, UserFeeds } from 'types/chat';
import * as PushAPI from "@pushprotocol/restapi";
import CryptoHelper from 'helpers/CryptoHelper';
import { displayDefaultUser } from 'helpers/w2w/user';
import { appConfig } from 'config';
import { walletToCAIP10 } from 'helpers/w2w';

export const ChatGlobalContext = createContext({});

const ChatGlobalContextNew = (props) => {
  const [connectedUser, setConnectedUser] = useState<ConnectedUser>();
  const [userFeeds, setUserFeeds] = useState<UserFeeds>();
  const { account, library } = useWeb3React<ethers.providers.Web3Provider>();
  
  const setInbox = (inbox:FeedsNew,id:string) => {
    setUserFeeds(prevUserFeeds => ({
        ...prevUserFeeds,
        [id]: { ...prevUserFeeds[id], inbox:inbox}
    }));
  }
  
  const setRequests = (requests:Feeds,id:string) => {
    setUserFeeds(prevUserFeeds => ({
        ...prevUserFeeds,
        [id]: { ...prevUserFeeds[id], requests:requests}
    }));
  }

  const setChats = (chats:ChatsNew,id:string) => {
    setUserFeeds(prevUserFeeds => ({
        ...prevUserFeeds,
        [id]: { ...prevUserFeeds[id], chats:chats}
    }));
  }
  return (
    <ChatGlobalContext.Provider value={{ 
      connectedUser, 
      setConnectedUser,
      userFeeds,
      setChats,
      setInbox,
      setRequests,
      }}>
      {props.children}
    </ChatGlobalContext.Provider>
  );
};

export default ChatGlobalContextNew;
