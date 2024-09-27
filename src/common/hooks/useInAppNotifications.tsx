import { CONSTANTS, NotificationEvent } from '@pushprotocol/restapi';
import { useEffect, useState } from 'react';
import { notification } from 'blocks';
import { useSelector } from 'react-redux';
import { InAppNotifications } from 'common';

export const useInAppNotifications = () => {
  const [isStreamConnected, setIsStreamConnected] = useState<boolean>(false);
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
        userPushSDKInstance?.stream
      );
      notification.show({
        overlay: <InAppNotifications notification={data} />,
      });
      // setTimeout(() => {
      //   notification.hide();
      // }, 10000);
    });
  };

  useEffect(() => {
    (async () => {
      if (userPushSDKInstance && userPushSDKInstance?.stream && userPushSDKInstance?.readmode())
        await attachListeners();
    })();

    // Cleanup listener on unmount
    return () => {};
  }, [userPushSDKInstance]);

  return { isStreamConnected };
};
