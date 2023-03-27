import React, { createContext, useState } from 'react';

// Define an enum for the available tab options
export enum TabOption {
  Inbox = 'inbox',
  Requests = 'requests',
}

// Define the type for the local context
type ChatLocalContextType = {
  activeTab: TabOption; // The currently active tab option
  setActiveTab: React.Dispatch<React.SetStateAction<TabOption>>; // Function to set the active tab
  selectedChat: string; // The ID of the currently selected chat
  setSelectedChat: React.Dispatch<React.SetStateAction<string>>; // Function to set the selected chat
  blockedLoading: boolean; // Flag indicating if the chat is currently blocked due to something (true when chat is blocked and some work is happening like user creation modal)
  setBlockedLoading: React.Dispatch<React.SetStateAction<boolean>>; // Function to set the blocked loading state
};

// Create the local context with default values
export const ChatLocalContext = createContext<ChatLocalContextType>({
  activeTab: TabOption.Inbox,
  setActiveTab: () => {},
  selectedChat: '',
  setSelectedChat: () => {},
  blockedLoading: false,
  setBlockedLoading: () => {},
});

// Define the props type for the local context provider
type ChatLocalContextProviderProps = {
  children: React.ReactNode;
};

// Create the local context provider component
const ChatLocalContextProviderNew: React.FC<ChatLocalContextProviderProps> = ({ children }) => {
  // Define the state for the local context
  const [activeTab, setActiveTab] = useState<TabOption>(TabOption.Inbox);
  const [selectedChat, setSelectedChat] = useState<string>('');
  const [blockedLoading, setBlockedLoading] = useState<boolean>(false);

  // Combine the state and setter functions into a single context value object
  const tabContextValue: ChatLocalContextType = {
    activeTab,
    setActiveTab,
    selectedChat,
    setSelectedChat,
    blockedLoading,
    setBlockedLoading,
  };

  // Render the provider with the context value and children
  return (
    <ChatLocalContext.Provider value={tabContextValue}>{children}</ChatLocalContext.Provider>
  );
};

// Export the local context provider component
export default ChatLocalContextProviderNew;
