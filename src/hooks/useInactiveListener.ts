// // React + Web3 Essentials
import { useWeb3React } from '@web3-react/core'
import { useEffect } from 'react'

// // Internal Components
import { hooks, metaMask } from '../connectors/metaMask';
import { getAddChainParameters } from '../connectors/chains';
import { useSwitchChain } from '../connectors/chains'
import { WalletConnect } from "@web3-react/walletconnect-v2";
import { Network } from "@web3-react/network";
import { handleChangeNetwork } from '../helpers/ChainHelper';

// // const { useChainId, useAccounts, useIsActivating, useIsActive, useProvider, useENSNames } = hooks;

export function useInactiveListener(suppress: boolean = false) {
    const { connector, isActive, provider, chainId } = useWeb3React();
//     // const isActive = useIsActive();
//     // const isActivating = useIsActivating();
//     // const chainId = useChainId();

//   // console.log('got here', isActive, isActivating, chainId);
  
    useEffect((): any => {
      const providerConnector = connector;
      const { ethereum } = window;
        const handleChainChanged = async () => {
          // console.log("Handling 'chainChanged' event with payload", chainId)
          const newChain = providerConnector?.provider?.chainId as any;

          try {
          console.log(newChain,'new chain tried', providerConnector);
            if (providerConnector instanceof WalletConnect || providerConnector instanceof Network) {
                await providerConnector.activate(newChain === -1 ? undefined : newChain);
                console.log('listen 1');
              } else {
                await providerConnector.activate(newChain === -1 ? undefined : getAddChainParameters(newChain));
                console.log('listen 2');
              }
          } catch (error) {
           handleChangeNetwork(newChain, providerConnector?.provider);   
          }
          // activate(injected)

        }
        const handleAccountsChanged = (accounts: string[]) => {
          console.log("Handling 'accountsChanged' event with payload", accounts)
          if (accounts.length > 0) {
            // activate(injected)
          }
        }
        const handleNetworkChanged = async (networkId: string | number) => {
          console.log("Handling 'networkChanged' event with payload", networkId, providerConnector)
        
          try {
            if (providerConnector instanceof WalletConnect || providerConnector instanceof Network) {
                await providerConnector.activate(networkId === -1 ? undefined : networkId);
              } else {
                await providerConnector.activate(networkId === -1 ? undefined : getAddChainParameters(networkId));
              }
          } catch (error) {
           handleChangeNetwork(networkId, providerConnector?.provider);   
          }
        }
  
        // console.log(providerConnector?.provider, 'provider');
        providerConnector?.provider?.on('chainChanged', handleChainChanged)
        providerConnector?.provider?.on('accountsChanged', handleAccountsChanged)
        providerConnector?.provider?.on('networkChanged', handleNetworkChanged)
  
        return () => {
          if (providerConnector.removeListener) {
            providerConnector.removeListener('connect', handleConnect)
            providerConnector.removeListener('chainChanged', handleChainChanged)
            providerConnector.removeListener('accountsChanged', handleAccountsChanged)
            providerConnector.removeListener('networkChanged', handleNetworkChanged)
          }
        }
    }, [connector, isActive, chainId, suppress])
  }