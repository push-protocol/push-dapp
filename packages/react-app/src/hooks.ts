import { useState, useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { isLedgerDappBrowserProvider } from '@epnsproject/sdk-ledgerlive';
import { toast } from "react-toastify";

import { injected, ledgerLiveConnector } from './connectors'

require('dotenv').config();

export function useEagerConnect() {
  const { activate, active } = useWeb3React()

  const [tried, setTried] = useState(false)

  useEffect(() => {
    // If running on a ledger live app, use ledger connector. Else use injected connector
    if (isLedgerDappBrowserProvider()) {
      activate(ledgerLiveConnector, undefined, true).catch(() => {
        setTried(true);
      });
    } else {
      injected.isAuthorized().then((isAuthorized: boolean) => {
        if (isAuthorized) {
          activate(injected, undefined, true).catch(() => {
            setTried(true);
          });
        } else {
          setTried(true);
        }
      });
    }
  }, [activate]) // intentionally only running on mount (make sure it's only mounted once :))

  // if the connection worked, wait until we get confirmation of that to flip the flag
  useEffect(() => {
    if (!tried && active) {
      setTried(true)
    }
  }, [tried, active])

  return tried
}

export function useInactiveListener(suppress: boolean = false) {
  const { active, error, activate } = useWeb3React()

  useEffect((): any => {
    const { ethereum } = window as any
    if (ethereum && ethereum.on && !active && !error && !suppress) {
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

      ethereum.on('connect', handleConnect)
      ethereum.on('chainChanged', handleChainChanged)
      ethereum.on('accountsChanged', handleAccountsChanged)
      ethereum.on('networkChanged', handleNetworkChanged)

      return () => {
        if (ethereum.removeListener) {
          ethereum.removeListener('connect', handleConnect)
          ethereum.removeListener('chainChanged', handleChainChanged)
          ethereum.removeListener('accountsChanged', handleAccountsChanged)
          ethereum.removeListener('networkChanged', handleNetworkChanged)
        }
      }
    }
  }, [active, error, suppress, activate])
}

export function useDeviceWidthCheck(deviceWidth: number) {
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }

  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);

  return width <= deviceWidth;
}

export function useBrowserNotification(account){
  const [triggerNotification, setTriggerNotification] = useState(false);
   
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return
    if (!account) return;
    (async function () {
      const {browserFunction} = require('firebase')
      await browserFunction(account);
    })();
  }, [account]);

  useEffect(() => {
    if (!("serviceWorker" in navigator)) return
    const {onMessageListener} = require("firebase")
    onMessageListener().then(payload => {
      if (!("Notification" in window)) {
        toast.dark(`${payload.notification.body} from: ${payload.notification.title}`, {
          type: toast.TYPE.DARK,
          autoClose: 5000,
          position: "top-right"
        });
      } else {
        console.log('\n\n\n\n\n')
        console.log("revieced push notification")
        console.log('\n\n\n\n\n')
        const notificationTitle = payload.notification.title;
        const notificationOptions = {
          title: payload.data.app,
          body: payload.notification.body,
          image: payload.data.aimg,
          icon: payload?.data?.icon,
          data: {
            url: payload?.data?.acta || payload?.data?.url,
          },
        };
        var notification = new Notification(notificationTitle, notificationOptions);
      }
    }).catch(err => console.log('failed: ', err))
      .finally(() => setTriggerNotification(!triggerNotification)); //retrigger the listener after it has been used once
  }, [triggerNotification]);
}