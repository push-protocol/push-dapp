import { WalletState } from '@web3-onboard/core';
import { useConnectWallet } from '@web3-onboard/react';
import { appConfig } from 'config';
import { ethers } from 'ethers';
import { createContext, useMemo, useState } from 'react';

export enum ReadOnlyWalletMode {
  READ_ONLY_MODE = '(Read Only)',
  GUEST_MODE = '(Guest Mode)',
}

export type GlobalContextType = {
  readOnlyWallet: string;
  setReadOnlyWallet: React.Dispatch<React.SetStateAction<string>>;
  mode: ReadOnlyWalletMode;
  setMode: React.Dispatch<React.SetStateAction<ReadOnlyWalletMode>>;
  sidebarCollapsed: boolean;
  setSidebarCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  globalWallet: WalletState | null;
  setGlobalWallet: React.Dispatch<React.SetStateAction<WalletState | null>>;
  provider: ethers.providers.JsonRpcProvider;
};

export const GlobalContext = createContext<GlobalContextType | null>(null);

const GlobalContextProvider = ({ children }) => {
  const [readOnlyWallet, setReadOnlyWallet] = useState<string>('0x0000000000000000000000000000000000000001');
  const [mode, setMode] = useState<ReadOnlyWalletMode>(ReadOnlyWalletMode.GUEST_MODE);
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false);
  const [globalWallet, setGlobalWallet] = useState<WalletState | null>(null);

  const provider = useMemo(() => {
    return globalWallet
      ? new ethers.providers.Web3Provider(globalWallet.provider, 'any')
      : new ethers.providers.JsonRpcProvider(appConfig.coreRPC);
  }, [globalWallet]);

  return (
    <GlobalContext.Provider
      value={{
        setReadOnlyWallet,
        readOnlyWallet,
        mode,
        setMode,
        sidebarCollapsed,
        setSidebarCollapsed,
        globalWallet,
        setGlobalWallet,
        provider,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
