import { useContext, useEffect, useState } from 'react';

import { CONSTANTS, NotificationEvent } from '@pushprotocol/restapi';
import { useSelector } from 'react-redux';

import { deviceSizes, notification } from 'blocks';
import { InAppChannelNotifications, InAppChatNotifications } from 'common';

import { useDeviceWidthCheck } from 'hooks';
import { Context } from 'modules/chat/ChatModule';

export const useInAppNotifications = () => {
  const [isStreamConnected, setIsStreamConnected] = useState<boolean>(false);
  // const { setSelectedChatId } = useContext(Context);
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
        userPushSDKInstance?.stream,
        data
      );
      if (data.source !== 'PUSH_CHAT')
        notification.show({
          overlay: <InAppChannelNotifications notificationDetails={data} />,
          position: isMobile ? 'top-center' : 'bottom-right',
          duration: 5000,
          onClick: () => {
            notification.hide();
          },
        });
    });
    userPushSDKInstance?.stream?.on(CONSTANTS.STREAM.CHAT, (data: any) => {
      console.debug(
        'src::common::hooks::useStream::attachListeners::CHAT::',
        userPushSDKInstance?.uid,
        userPushSDKInstance?.stream?.uid,
        userPushSDKInstance?.stream,
        data
      );

      if (data.event === 'chat.message' || data.event === 'chat.request') {
        if (data.origin === 'other')
          notification.show({
            overlay: <InAppChatNotifications chatDetails={data} />,
            position: isMobile ? 'top-center' : 'bottom-right',
            duration: 5000,
            // onClose: () => {
            //   notification.hide();
            // },
            onClick: () => {
              notification.hide();
            },
          });
      }

      //attached image text

      //group
      //stacking
    });
  };

  useEffect(() => {
    (async () => {
      if (userPushSDKInstance && userPushSDKInstance?.stream) {
        await attachListeners();
      }
    })();

    // Cleanup listener on unmount
    return () => {};
  }, [userPushSDKInstance?.account]);

  return { isStreamConnected };
};
