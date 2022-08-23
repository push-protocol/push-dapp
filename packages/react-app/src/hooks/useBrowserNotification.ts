import { useState, useEffect } from 'react'
import { toast } from "react-toastify";

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