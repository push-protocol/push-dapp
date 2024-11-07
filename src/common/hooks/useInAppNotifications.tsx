import { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { CONSTANTS, NotificationEvent } from '@pushprotocol/restapi';

import { deviceSizes, notification } from 'blocks';
import { InAppChannelNotifications, InAppChatNotifications } from 'common';

import { useDeviceWidthCheck } from 'hooks';

export const useInAppNotifications = () => {
  const [isStreamConnected, setIsStreamConnected] = useState<boolean>(false);
  const [newMessages, setNewMessages] = useState<Record<string, Array<any>>>({});
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
      if (data.source != 'PUSH_CHAT')
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
        userPushSDKInstance?.stream.connected(),
        userPushSDKInstance?.stream?.uid,
        userPushSDKInstance?.stream
      );

      if ((data.event === 'chat.message' || data.event === 'chat.request') && data.origin === 'other') {
        let updatedMessages: Record<string, Array<any>> = newMessages;
        if (!updatedMessages[data.chatId]) {
          updatedMessages[data.chatId] = [];
        }
        // Ensure the chat array length does not exceed 5 messages
        if (updatedMessages[data.chatId].length > 5) {
          updatedMessages[data.chatId] = updatedMessages[data.chatId].slice(-5);
        }
        if (!(updatedMessages[data.chatId].length && data.event === 'chat.request')) {
          updatedMessages[data.chatId].push(data);
        }
        setNewMessages(updatedMessages);
        notification.show(
          {
            overlay: (
              <InAppChatNotifications
                chatDetails={updatedMessages[data.chatId]}
                onClose={() => {
                  resetChatMessages(data.chatId);
                  notification.hide();
                }}
              />
            ),
            position: isMobile ? 'top-center' : 'bottom-right',
            duration: 5000,
            onAutoClose: () => resetChatMessages(data.chatId),
            onClick: () => {
              resetChatMessages(data.chatId);
              notification.hide();
            },
          },
          data.chatId
        );
      }
    });
  };

  /* remove previous messages for a particular chat*/
  const resetChatMessages = (chatId: string) => {
    const updatedMessages = newMessages;
    delete updatedMessages[chatId];
    setNewMessages(updatedMessages);
  };

  const streamAttach = () => {
    if (userPushSDKInstance && userPushSDKInstance?.stream) {
      attachListeners();
    }
  };
  const streamCleanup = () => {
    if (userPushSDKInstance && userPushSDKInstance?.stream) {
      userPushSDKInstance?.stream?.disconnect();
    }
  };

  useEffect(() => {
    streamAttach();
    return () => {
      streamCleanup();
    };
  }, [userPushSDKInstance?.account, userPushSDKInstance?.readmode()]);

  return { isStreamConnected };
};
