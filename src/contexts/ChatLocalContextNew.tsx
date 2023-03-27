import React, { createContext, useState } from 'react';

export enum TabOption {
  Inbox = 'inbox',
  Requests = 'requests',
}

type ChatLocalContextType = {
  activeTab: TabOption;
  setActiveTab: React.Dispatch<React.SetStateAction<TabOption>>;
  selectedChat: string;
  setSelectedChat: React.Dispatch<React.SetStateAction<string>>;
  blockedLoading: boolean;
  setBlockedLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ChatLocalContext = createContext<ChatLocalContextType>({
  activeTab: TabOption.Inbox,
  setActiveTab: () => {},
  selectedChat: '',
  setSelectedChat: () => {},
  blockedLoading: false,
  setBlockedLoading: () => {},
});

type ChatLocalContextProviderProps = {
  children: React.ReactNode;
};

const ChatLocalContextProviderNew: React.FC<ChatLocalContextProviderProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<TabOption>(TabOption.Inbox);
  const [selectedChat, setSelectedChat] = useState<string>('');
  const [blockedLoading, setBlockedLoading] = useState<boolean>(false);

  const tabContextValue: ChatLocalContextType = {
    activeTab,
    setActiveTab,
    selectedChat,
    setSelectedChat,
    blockedLoading,
    setBlockedLoading,
  };

  return (
    <ChatLocalContext.Provider value={tabContextValue}>{children}</ChatLocalContext.Provider>
  );
};

export default ChatLocalContextProviderNew;
