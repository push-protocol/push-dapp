import { useEffect, useState } from 'react';
import { useConnectWallet, useSetChain } from '@web3-onboard/react';
import { ethers } from 'ethers';

export const useAccount = () => {
  const [{ wallet, connecting }, connect, disconnect, updateBalances, setWalletModules, setPrimaryWallet] =
    useConnectWallet();
  const [address, setAddress] = useState<string>(wallet && wallet.accounts.length > 0 ? wallet.accounts[0].address : undefined);

  const [{ chains, connectedChain, settingChain }, setChain] = useSetChain();

  const isActive = () => {
    return wallet && wallet.accounts.length > 0 ? true : false;
  };

  const switchChain = async (desiredChain: number) => {
    setChain({ chainId: ethers.utils.hexValue(desiredChain) });
  };

  useEffect(() => {
    if(wallet && wallet.accounts.length > 0) {
      setAddress(wallet.accounts[0].address);
      (async () => {
        const ethersProvider = new ethers.providers.Web3Provider(wallet.provider);
        const signer = ethersProvider.getSigner();
        const walletAddress = await signer.getAddress();
        setAddress(walletAddress);
      })();
    }
  }, [wallet]);

  return {
    wallet,
    connecting,
    connect,
    disconnect,
    updateBalances,
    setWalletModules,
    setPrimaryWallet,
    provider: wallet ? new ethers.providers.Web3Provider(wallet.provider, 'any') : undefined,
    account: address,
    chainId: connectedChain ? Number(connectedChain.id) : undefined,
    isActive,
    setChain,
    switchChain,
    settingChain,
    chains,
  };
};
