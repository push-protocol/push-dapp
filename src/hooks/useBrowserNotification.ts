// React + Web3 Essentials
import { useContext, useEffect, useState } from 'react';

// External Packages
import { useAccount } from './useAccount';
import { GlobalContext } from 'contexts/GlobalContext';

export function useBrowserNotification() {
  const { account } = useAccount();
  const { readOnlyWallet } = useContext(GlobalContext);
  const [triggerNotification, setTriggerNotification] = useState(false);

  useEffect(() => {
    if (!('serviceWorker' in navigator)) return;
    if (!account || account == readOnlyWallet) return;
    (async function () {
      const { browserFunction } = require('firebase');
      await browserFunction(account);
    })();
  }, [account]);

  useEffect(() => {
    if (!('serviceWorker' in navigator)) return;
    const { onMessageListener } = require('firebase');
    onMessageListener()
      .then((payload) => {
        if (!('Notification' in window)) {
          // useStream handles this case of showing in page notif (if showing notifs is not allowed)
        } else {
          const notificationTitle = payload.notification.title;
          const notificationOptions = {
            title: payload?.notification?.title,
            body: payload?.notification?.body,
            image: payload?.data?.aimg,
            icon: payload?.data?.icon,
            data: {
              url: payload?.data?.acta || payload?.data?.url,
            },
          };
          var notification = new Notification(notificationTitle, notificationOptions);
        }
      })
      .catch((err) => console.error('failed: ', err))
      .finally(() => setTriggerNotification(!triggerNotification)); //retrigger the listener after it has been used once
  }, [triggerNotification]);
}
