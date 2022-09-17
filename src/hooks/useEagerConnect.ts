import { isLedgerDappBrowserProvider } from '@epnsproject/sdk-ledgerlive';
import { useWeb3React } from '@web3-react/core';
import { injected, ledgerLiveConnector } from 'connectors';
import { useEffect, useState } from 'react';

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