
import React, { createContext, useState } from 'react';

// Define an enum for the available tab options
export enum SpaceTabOption {
  Spaces = 'spaces',
  Requests = 'requests'
}

// Define the type for the local context
type SpaceLocalContextType = {
  activeTab: SpaceTabOption; // The currently active tab option
  setActiveTab: React.Dispatch<React.SetStateAction<SpaceTabOption>>; // Function to set the active tab
  selectedSpace: string; // The ID of the currently selected space
  setSelectedSpace: React.Dispatch<React.SetStateAction<string>>; // Function to set the selected space
};

// Create the local context with default values
export const SpaceLocalContext = createContext<SpaceLocalContextType>({
  activeTab: SpaceTabOption.Spaces,
  setActiveTab: () => {},
  selectedSpace: '',
  setSelectedSpace: () => {},
});

// Define the props type for the local context provider
type SpaceLocalContextProviderProps = {
  children: React.ReactNode;
};

// Create the local context provider component
export const SpaceLocalContextProvider: React.FC<SpaceLocalContextProviderProps> = ({ children }) => {
  // Define the state for the local context
  const [activeTab, setActiveTab] = useState<SpaceTabOption>(SpaceTabOption.Spaces);
  const [selectedSpace, setSelectedSpace] = useState<string>('');

  // Combine the state and setter functions into a single context value object
  const tabContextValue: SpaceLocalContextType = {
    activeTab,
    setActiveTab,
    selectedSpace,
    setSelectedSpace,
  };

  // Render the provider with the context value and children
  return (
    <SpaceLocalContext.Provider value={tabContextValue}>{children}</SpaceLocalContext.Provider>
  );
};
