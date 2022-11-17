// React + Web3 Essentials
import { useWeb3React } from '@web3-react/core'
import { useEffect } from 'react'

// Internal Components
import { injected } from 'connectors'

export function useInactiveListener(suppress: boolean = false) {
    const { active, error, activate, connector } = useWeb3React()
  
    useEffect((): any => {
      const providerConnector = connector;
      if (providerConnector && providerConnector.on && !active && !error && !suppress) {
        const handleConnect = () => {
          console.log("Handling 'connect' event")
          activate(injected)
        }
        const handleChainChanged = (chainId: string | number) => {
          console.log("Handling 'chainChanged' event with payload", chainId)
          activate(injected)
        }
        const handleAccountsChanged = (accounts: string[]) => {
          console.log("Handling 'accountsChanged' event with payload", accounts)
          if (accounts.length > 0) {
            activate(injected)
          }
        }
        const handleNetworkChanged = (networkId: string | number) => {
          console.log("Handling 'networkChanged' event with payload", networkId)
          activate(injected)
        }
  
        providerConnector.on('connect', handleConnect)
        providerConnector.on('chainChanged', handleChainChanged)
        providerConnector.on('accountsChanged', handleAccountsChanged)
        providerConnector.on('networkChanged', handleNetworkChanged)
  
        return () => {
          if (providerConnector.removeListener) {
            providerConnector.removeListener('connect', handleConnect)
            providerConnector.removeListener('chainChanged', handleChainChanged)
            providerConnector.removeListener('accountsChanged', handleAccountsChanged)
            providerConnector.removeListener('networkChanged', handleNetworkChanged)
          }
        }
      }
    }, [active, error, suppress, activate])
  }