import { createContext, useState } from 'react';

export enum ReadOnlyWalletMode {
  READ_ONLY_MODE = '(Read Only)',
  GUEST_MODE = '(Guest Mode)',
}

export type GlobalContextType = {
  readOnlyWallet: string;
  setReadOnlyWallet: React.Dispatch<React.SetStateAction<string>>;
  mode: ReadOnlyWalletMode;
  setMode: React.Dispatch<React.SetStateAction<ReadOnlyWalletMode>>;
  sidebarCollapsed:boolean;
  setSidebarCollapsed:React.Dispatch<React.SetStateAction<boolean>>;
};

export const GlobalContext = createContext<GlobalContextType | null>(null);

const GlobalContextProvider = ({ children }) => {
  const [readOnlyWallet, setReadOnlyWallet] = useState<string>();
  const [mode, setMode] = useState<ReadOnlyWalletMode>();
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false);

  return (
    <GlobalContext.Provider
      value={{
        setReadOnlyWallet,
        readOnlyWallet,
        mode,
        setMode,
        sidebarCollapsed,
        setSidebarCollapsed
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
