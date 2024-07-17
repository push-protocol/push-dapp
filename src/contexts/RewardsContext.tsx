import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthModalContextType {
  isAuthModalVisible: boolean;
  setIsAuthModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthModalContext = createContext<AuthModalContextType | undefined>(undefined);

export const RewardsContextProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthModalVisible, setIsAuthModalVisible] = useState(false);

  return (
    <AuthModalContext.Provider value={{ isAuthModalVisible, setIsAuthModalVisible }}>
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
