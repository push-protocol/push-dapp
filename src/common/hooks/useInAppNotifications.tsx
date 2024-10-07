import { useEffect, useState } from 'react';

import { CONSTANTS, NotificationEvent } from '@pushprotocol/restapi';
import { useSelector } from 'react-redux';

import { deviceSizes, notification } from 'blocks';
import { InAppChannelNotifications } from 'common';

import { useDeviceWidthCheck } from 'hooks';

export const useInAppNotifications = () => {
  const [isStreamConnected, setIsStreamConnected] = useState<boolean>(false);
  const isMobile = useDeviceWidthCheck(parseInt(deviceSizes.mobileL));
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
        overlay: <InAppChannelNotifications notificationDetails={data} />,
        position: isMobile ? 'top-center' : 'bottom-right',
        duration: 5000,
      });
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
