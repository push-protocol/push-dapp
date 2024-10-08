import { useContext, useEffect, useState } from 'react';
import { useAccount } from './useAccount';
import {
  NotificationEvent,
  NotificationEventType,
  STREAM,
} from '@pushprotocol/restapi/src/lib/pushstream/pushStreamTypes';
import { VideoCallContext } from 'contexts/VideoCallContext';
import { ADDITIONAL_META_TYPE } from '@pushprotocol/restapi/src/lib/payloads';
import { VideoCallStatus } from '@pushprotocol/restapi';
import { useSelector } from 'react-redux';

const useSDKStream = () => {
  const { account } = useAccount();
  const { userPushSDKInstance } = useSelector((state: any) => {
    return state.user;
  });
  const [stream, setStream] = useState(null);
  const { incomingCall, connectWrapper, requestWrapper, acceptRequestWrapper, isVideoCallInitiator } =
    useContext(VideoCallContext);

  useEffect(() => {
    if (!account || !userPushSDKInstance) return;

    stream?.on(STREAM.NOTIF, async (feedItem: NotificationEvent) => {
      /**
       * We receive a feedItem
       */
      try {
        if (feedItem.event === NotificationEventType.INBOX) {
          // if video call notif, skip notification
          // currently for video calls only
          if (feedItem.message.payload.meta.type === `${ADDITIONAL_META_TYPE.PUSH_VIDEO}+1`) {
            const videoCallMetaData = JSON.parse(feedItem.message.payload.meta.data);
            console.log('RECIEVED VIDEO DATA', videoCallMetaData);

            if (videoCallMetaData.status === VideoCallStatus.INITIALIZED) {
              incomingCall(videoCallMetaData);
            } else if (
              videoCallMetaData.status === VideoCallStatus.RECEIVED ||
              videoCallMetaData.status === VideoCallStatus.RETRY_RECEIVED
            ) {
              connectWrapper(videoCallMetaData);
            } else if (videoCallMetaData.status === VideoCallStatus.DISCONNECTED) {
              window.location.reload();
            } else if (videoCallMetaData.status === VideoCallStatus.RETRY_INITIALIZED && isVideoCallInitiator()) {
              requestWrapper({
                senderAddress: videoCallMetaData.recipientAddress,
                recipientAddress: videoCallMetaData.senderAddress,
                chatId: videoCallMetaData.chatId,
                retry: true,
              });
            } else if (videoCallMetaData.status === VideoCallStatus.RETRY_INITIALIZED && !isVideoCallInitiator()) {
              acceptRequestWrapper({
                signalData: videoCallMetaData.signalData,
                senderAddress: videoCallMetaData.recipientAddress,
                recipientAddress: videoCallMetaData.senderAddress,
                chatId: videoCallMetaData.chatId,
                retry: true,
              });
            }
          }
        }
      } catch (e) {
        console.error('DAPP Error while diplaying received Notification: ', e);
      }
    });
  }, [account, userPushSDKInstance, stream]);

  useEffect(() => {
    if (userPushSDKInstance?.signer) {
      (async () => {
        if (userPushSDKInstance?.stream && !userPushSDKInstance?.stream?.disconnected) {
          setStream(userPushSDKInstance?.stream);
        } else {
          const stream = await userPushSDKInstance.initStream([STREAM.CONNECT, STREAM.DISCONNECT, STREAM.NOTIF]);
          stream.connect();
          setStream(stream);
        }
      })();
    }
  }, [userPushSDKInstance]);

  return stream;
};

export default useSDKStream;
