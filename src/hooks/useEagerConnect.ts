// React + Web3 Essentials
import { useWeb3React } from '@web3-react/core';
import { useCallback, useContext, useEffect, useState } from 'react';

// Internal Components
// import { isLedgerDappBrowserProvider } from '@pushprotocol/ledgerlive';
import { URI_AVAILABLE } from '@web3-react/walletconnect-v2'
// import { walletConnectV2 } from 'connectors/walletConnectV2';
import { walletConnectV2, hooks as walletConnectV2Hooks } from 'connectors/walletConnectV2';
import { metaMask, hooks as metaMaskhooks,  } from "connectors/metaMask";
import { getAddChainParameters } from '../connectors/chains';
import { ErrorContext } from '../contexts/ErrorContext';
import { WalletConnect } from '@web3-react/walletconnect-v2'

// Internal Configs
import { appConfig } from 'config';

const { useIsActivating: useMMIsActivating } = metaMaskhooks;
const { useIsActivating: useWCIsActivating } = walletConnectV2Hooks;

export function useEagerConnect() {
  const { connector, isActive, chainId, isActivating } = useWeb3React();
  const [tried, setTried] = useState(false);
  const { setAuthError } = useContext(ErrorContext);
  const desiredChain = appConfig.coreContractChain;
  const chainIds = appConfig.allowedNetworks;



  const isMMActivating = useMMIsActivating();
  const isWCActivating = useWCIsActivating();

  const activateConnector = useCallback(async (label: string) => {
    try {
      switch (label) {
        case "MetaMask":
          if(window.ethereum.networkVersion){
            await metaMask.activate(chainIds.includes(parseInt(window.ethereum.networkVersion)) ? '' : getAddChainParameters(desiredChain));
          }
          else{
            await metaMask.activate();
          }
          break;

        case "WalletConnect":
          await walletConnectV2.activate(appConfig.coreContractChain);
          break;

        default:
          break;
      }
    } catch (error) {
      console.error("Failed to connect wallet. Please try again.", error);
      setAuthError(error);
    }
  }, []);

   // log URI when available
   useEffect(() => {
    walletConnectV2.events.on(URI_AVAILABLE, (uri: string) => {
      console.log(`uri: ${uri}`)
    })
  }, [])

  // attempt to connect eagerly on mount
  useEffect(() => {
    walletConnectV2.connectEagerly().catch((error) => {
      console.debug('Failed to connect eagerly to walletconnect', error)
    })

  }, [])

  useEffect(() => {
    if(window.ethereum === undefined || window.ethereum.networkVersion === undefined){
      setAuthError({
       message: 'Web3 not enabled, install MetaMask on desktop or visit from a dApp browser on mobile',
      })
      return;
     } 
    if (isActive || isActivating) return;
   


      try {
        if (connector instanceof WalletConnect){
          activateConnector("WalletConnect");
        }
        else {
          activateConnector("MetaMask");
          }
       setTried(true);
      } catch (error) {
        setAuthError(error)
      }
  }, []);

  return tried
}