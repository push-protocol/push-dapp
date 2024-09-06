import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthModalContextType {
  isAuthModalVisible: boolean;
  setIsAuthModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isLocked: boolean;
  setIsLocked: React.Dispatch<React.SetStateAction<boolean>>;
  resetEpoch: boolean;
  setResetEpoch: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthModalContext = createContext<AuthModalContextType | undefined>(undefined);

export const RewardsContextProvider = ({ children }: { children: ReactNode }) => {
  // context state for modal visibility option
  const [isAuthModalVisible, setIsAuthModalVisible] = useState(false);
  // context state for locked status in rewards activities
  const [isLocked, setIsLocked] = useState(true);
  // context state for current epoch status
  const [resetEpoch, setResetEpoch] = useState(false);

  return (
    <AuthModalContext.Provider
      value={{ isAuthModalVisible, setIsAuthModalVisible, isLocked, setIsLocked, resetEpoch, setResetEpoch }}
    >
      {children}
    </AuthModalContext.Provider>
  );
};

export const useRewardsContext = () => {
  const context = useContext(AuthModalContext);
  if (context === undefined) {
    throw new Error('useRewardsContext must be used within an RewardsContextProvider');
  }
  return context;
};
