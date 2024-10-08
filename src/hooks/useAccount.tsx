import { useConnectWallet, useSetChain } from '@web3-onboard/react';
import { appConfig } from 'config/index.js';
import { GlobalContext } from 'contexts/GlobalContext';
import { ethers } from 'ethers';
import { useContext, useMemo } from 'react';

export const useAccount = () => {
  const { readOnlyWallet, setMode, setReadOnlyWallet, provider } = useContext(GlobalContext);

  const [{ wallet, connecting }, connect, disconnect, updateBalances, setWalletModules, setPrimaryWallet] =
    useConnectWallet();

  const [{ chains, connectedChain, settingChain }, setChain] = useSetChain();

  const switchChain = async (desiredChain: number) => {
    return setChain({ chainId: ethers.utils.hexValue(desiredChain) });
  };

  const isActive = useMemo(() => {
    if (readOnlyWallet) {
      return true;
    } else {
      return wallet && wallet.accounts.length > 0 ? true : false;
    }
  }, [wallet, readOnlyWallet]);

  const account = useMemo(() => {
    if (wallet && wallet.accounts.length > 0) {
      return ethers.utils.getAddress(wallet.accounts[0].address);
    } else {
      return readOnlyWallet;
    }
  }, [wallet, readOnlyWallet]);

  const chainId = useMemo(() => {
    if (connectedChain) return Number(connectedChain.id);
    if (readOnlyWallet) return appConfig.coreContractChain;
    return appConfig.coreContractChain;
  }, [connectedChain, readOnlyWallet]);

  return {
    wallet: wallet ? wallet : readOnlyWallet,
    walletAddress: wallet ? wallet.accounts[0]?.address : readOnlyWallet,
    isWalletConnected: !!wallet?.accounts?.length,
    connecting,
    connect,
    disconnect,
    updateBalances,
    setWalletModules,
    setPrimaryWallet,
    provider,
    account: account,
    chainId,
    isActive,
    setChain,
    switchChain,
    settingChain,
    chains,
  };
};
