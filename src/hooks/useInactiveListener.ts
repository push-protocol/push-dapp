// // React + Web3 Essentials
import { useWeb3React } from '@web3-react/core'
import { useContext, useEffect } from 'react'

// // Internal Components
import { hooks, metaMask } from '../connectors/metaMask';
import { getAddChainParameters } from '../connectors/chains';
import { useSwitchChain } from '../connectors/chains'
import { WalletConnect } from "@web3-react/walletconnect-v2";
import { Network } from "@web3-react/network";
import { handleChangeAllowedNetwork } from '../helpers/ChainHelper';
import { ErrorContext } from 'contexts/ErrorContext';

// // const { useChainId, useAccounts, useIsActivating, useIsActive, useProvider, useENSNames } = hooks;

export function useInactiveListener(suppress: boolean = false) {
    const { connector, isActive, chainId } = useWeb3React();
    const { setAuthError } = useContext(ErrorContext);
//     // const isActive = useIsActive();
//     // const isActivating = useIsActivating();


  
    useEffect((): any => {
      const providerConnector = connector;
      // const { ethereum } = window;
        if(chainId && providerConnector instanceof WalletConnect){
          handleChangeAllowedNetwork(chainId, providerConnector?.provider, providerConnector);
        }
        
        const handleChainChanged = async (chainId: string| number) => {
          console.log("Handling 'chainChanged' event with payload", chainId)
          if(providerConnector?.provider?.chainId && providerConnector instanceof WalletConnect){
              await providerConnector.activate(providerConnector?.provider?.chainId)
          }
          else{
            // await providerConnector.activate()
          }
          // providerConnector.activate(getAddChainParameters(chainId))

        }
        const handleAccountsChanged = async (accounts: string[]) => {
          console.log("Handling 'accountsChanged' event with payload", accounts)
          if (accounts.length > 0) {
            await providerConnector.activate()
          }
        }
          const handleNetworkChanged = async (networkId: string | number) => {
          console.log("Handling 'networkChanged' event with payload", networkId)
          handleChangeAllowedNetwork(parseInt(networkId), providerConnector?.provider, providerConnector).then((res)=> res !== undefined && setAuthError({ message: res }));
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
    }, [connector, isActive, suppress, chainId])
  }