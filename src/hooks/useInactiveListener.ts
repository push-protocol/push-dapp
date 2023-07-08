// // React + Web3 Essentials
import { useWeb3React } from '@web3-react/core'
import { useEffect } from 'react'

// // Internal Components
import { hooks, metaMask } from '../connectors/metaMask';
import { getAddChainParameters } from '../connectors/chains';
import { useSwitchChain } from '../connectors/chains'
import { WalletConnect } from "@web3-react/walletconnect-v2";
import { Network } from "@web3-react/network";
import { handleChangeAllowedNetwork } from '../helpers/ChainHelper';

// // const { useChainId, useAccounts, useIsActivating, useIsActive, useProvider, useENSNames } = hooks;

export function useInactiveListener(suppress: boolean = false) {
    const { connector, isActive } = useWeb3React();
//     // const isActive = useIsActive();
//     // const isActivating = useIsActivating();
//     // const chainId = useChainId();

//   // console.log('got here', isActive, isActivating, chainId);
  
    useEffect((): any => {
      const providerConnector = connector;
      const { ethereum } = window;
        const handleChainChanged = async (chainId: string| number) => {
          console.log("Handling 'chainChanged' event with payload", chainId)

          // providerConnector.activate(getAddChainParameters(chainId))

        }
        const handleAccountsChanged = (accounts: string[]) => {
          console.log("Handling 'accountsChanged' event with payload", accounts, providerConnector)
          if (accounts.length > 0) {
            // activate(injected)
          }
        }
          const handleNetworkChanged = async (networkId: string | number) => {
          console.log("Handling 'networkChanged' event with payload", networkId)
          handleChangeAllowedNetwork(parseInt(networkId), providerConnector?.provider, providerConnector);
        }
  
        providerConnector?.provider?.on('chainChanged', handleChainChanged)
        providerConnector?.provider?.on('accountsChanged', handleAccountsChanged)
        providerConnector?.provider?.on('networkChanged', handleNetworkChanged)
  
        return () => {
          if (providerConnector?.provider?.removeListener) {
            providerConnector?.provider?.removeListener('chainChanged', handleChainChanged)
            providerConnector?.provider?.removeListener('accountsChanged', handleAccountsChanged)
            providerConnector?.provider?.removeListener('networkChanged', handleNetworkChanged)
          }
        }
    }, [connector, isActive, suppress])
  }