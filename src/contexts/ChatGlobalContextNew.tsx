import React, { createContext, useState } from 'react';
import { ChatsNew, ConnectedUser, Feeds, FeedsNew, UserFeeds } from 'types/chat';

type ChatGlobalContextType = {
  connectedUser: ConnectedUser,
  setConnectedUser: (connectedUser: ConnectedUser) => void,
  userFeeds: UserFeeds,
  setChats: (chats:ChatsNew, id:string) => void,
  setInbox: (inbox:FeedsNew,id:string) => void,
  setRequests: (requests:Feeds,id:string) => void,
}

export const ChatGlobalContextNew = createContext<ChatGlobalContextType>({} as ChatGlobalContextType);

const ChatGlobalContextProviderNew = (props) => {
  const [connectedUser, setConnectedUser] = useState<ConnectedUser>();
  const [userFeeds, setUserFeeds] = useState<UserFeeds>();
  
  const setInbox = (inbox:FeedsNew, id:string) => {
    setUserFeeds(prevUserFeeds => ({
        ...prevUserFeeds,
        [id]: { ...prevUserFeeds[id], inbox:inbox}
    }));
  }
  
  const setRequests = (requests:Feeds, id:string) => {
    setUserFeeds(prevUserFeeds => ({
        ...prevUserFeeds,
        [id]: { ...prevUserFeeds[id], requests:requests}
    }));
  }

  const setChats = (chats:ChatsNew, id:string) => {
    setUserFeeds(prevUserFeeds => ({
        ...prevUserFeeds,
        [id]: { ...prevUserFeeds[id], chats:chats}
    }));
  }
  return (
    <ChatGlobalContextNew.Provider value={{ 
      connectedUser, 
      setConnectedUser,
      userFeeds,
      setChats,
      setInbox,
      setRequests,
      }}>
      {props.children}
    </ChatGlobalContextNew.Provider>
  );
};

export default ChatGlobalContextProviderNew;
