import { CONSTANTS, NotificationEvent } from '@pushprotocol/restapi';
import { useEffect, useState } from 'react';
import { notification } from 'blocks';
import { useSelector } from 'react-redux';
import { NotificationOverlay, NotificationToast } from 'common';

export const useStream = () => {
  const [isStreamConnected, setIsStreamConnected] = useState<boolean>(false);
  const [notificationFeed, setNotificationFeed] = useState<NotificationEvent | null>(null);
  const { userPushSDKInstance } = useSelector((state: any) => {
    return state.user;
  });
  const attachListeners = async () => {
    userPushSDKInstance?.stream?.on(CONSTANTS.STREAM.CONNECT, (err: Error) => {
      console.debug(
        'src::common::hooks::useStream::attachListeners::CONNECT::',
        userPushSDKInstance?.uid,
        userPushSDKInstance?.stream?.uid,
        userPushSDKInstance?.stream
      );
      setIsStreamConnected(true);
    });

    userPushSDKInstance?.stream?.on(CONSTANTS.STREAM.DISCONNECT, (err: Error) => {
      console.debug(
        'src::common::hooks::useStream::attachListeners::DISCONNECT::',
        userPushSDKInstance?.uid,
        userPushSDKInstance?.stream?.uid,
        userPushSDKInstance?.stream
      );
      setIsStreamConnected(false);
    });
    userPushSDKInstance?.stream?.on(CONSTANTS.STREAM.NOTIF, (data: NotificationEvent) => {
      console.debug(
        'src::common::hooks::useStream::attachListeners::NOTIF::',
        userPushSDKInstance,
        userPushSDKInstance?.uid,
        userPushSDKInstance?.stream?.uid,
        userPushSDKInstance?.stream,
        data
      );
      //confirm if only needed for inbox and discuss the working in older file for video
      // if (data.event === NotificationEventType.INBOX)
      //shift to app.tsx maybe

      notification.show({
        overlay: <NotificationToast notification={data} />,
      });
      setNotificationFeed(data);
    });
  };
  // const removeListeners = () => {
  //   userPushSDKInstance?.stream?.off(CONSTANTS.STREAM.CONNECT);
  //   userPushSDKInstance?.stream?.off(CONSTANTS.STREAM.DISCONNECT);
  //   userPushSDKInstance?.stream?.off(CONSTANTS.STREAM.NOTIF);
  // };
  useEffect(() => {
    (async () => {
      if (userPushSDKInstance && userPushSDKInstance?.stream && userPushSDKInstance?.readmode())
        await attachListeners();
    })();

    // Cleanup listener on unmount
    return () => {
      // (async()=>{
      //   await userPushSDKInstance.reinit([
      //     CONSTANTS.STREAM.NOTIF, // Listen for notification events
      //     CONSTANTS.STREAM.CONNECT, // Listen for connection events
      //     CONSTANTS.STREAM.DISCONNECT, // Listen for disconnection events
      //   ]);
      // })();
      // removeListeners();
    };
  }, [userPushSDKInstance]);

  return { isStreamConnected, notificationFeed }; // Return the event data so components can use it
};
