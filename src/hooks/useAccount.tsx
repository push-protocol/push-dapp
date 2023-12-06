import { useConnectWallet, useSetChain } from '@web3-onboard/react';
import { appConfig } from 'config';
import { AppContext } from 'contexts/AppContext';
import { GlobalContext } from 'contexts/GlobalContext';
import { ethers } from 'ethers';
import { useContext, useMemo, useState } from 'react';

export const useAccount = () => {

  const { readOnlyWallet } = useContext(GlobalContext);

  const [{ wallet, connecting }, connect, disconnect, updateBalances, setWalletModules, setPrimaryWallet] =
    useConnectWallet();

  const [{ chains, connectedChain, settingChain }, setChain] = useSetChain();

  const switchChain = async (desiredChain: number) => {
    return setChain({ chainId: ethers.utils.hexValue(desiredChain) });
  };

  const provider = useMemo(() => {
    return wallet ? new ethers.providers.Web3Provider(wallet.provider, 'any') : new ethers.providers.JsonRpcProvider(appConfig.coreRPC);
  }, [wallet]);

  const isActive = useMemo(() => {
    if (readOnlyWallet) {
      return true;
    } else {
      return wallet && wallet.accounts.length > 0 ? true : false
    }

  }, [wallet, readOnlyWallet]);

  const account = useMemo(() => {
    return wallet && wallet.accounts.length > 0 ? ethers.utils.getAddress(wallet.accounts[0].address) : undefined;
  }, [wallet]);

  return {
    wallet: wallet ? wallet : readOnlyWallet,
    connecting,
    connect,
    disconnect,
    updateBalances,
    setWalletModules,
    setPrimaryWallet,
    provider,
    account: account ? account : readOnlyWallet,
    chainId: connectedChain ? Number(connectedChain.id) : readOnlyWallet ?  appConfig.coreContractChain : undefined,
    isActive,
    setChain,
    switchChain,
    settingChain,
    chains,
  };
};
