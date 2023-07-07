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
  const { connector, isActive } = useWeb3React();
  const [tried, setTried] = useState(false);
  const { setAuthError } = useContext(ErrorContext);


  const isMMActivating = useMMIsActivating();
  const isWCActivating = useWCIsActivating();

  const activateConnector = useCallback(async (label: string) => {
    try {
      switch (label) {
        case "MetaMask":
          // await metaMask.activate();
          await metaMask.activate(getAddChainParameters(appConfig.coreContractChain));
          // window.localStorage.setItem("connectorId", getName(metaMask));
          break;

        case "WalletConnect":
          await walletConnectV2.activate(appConfig.coreContractChain);
          console.log('i am here');
          break;

        default:
          break;
      }
    } catch (error) {
      console.error("Failed to connect wallet. Please try again.", error);
      // getErrorMessage(error);
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
    // if (isActive) return;

    // if(connector instanceof WalletConnect){
      // activateConnector("WalletConnect");
    // }
    // else {
    //   activateConnector("MetaMask");
    // }
  }, []);

  return tried
}