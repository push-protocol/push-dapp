import { useContext, useEffect, useState } from 'react';
import { useAccount } from './useAccount';
import { AppContext } from 'contexts/AppContext';
import {
  NotificationEvent,
  NotificationEventType,
  STREAM,
} from '@pushprotocol/restapi/src/lib/pushstream/pushStreamTypes';
import { VideoCallContext } from 'contexts/VideoCallContext';
import { ADDITIONAL_META_TYPE } from '@pushprotocol/restapi/src/lib/payloads';
import { PushAPI, VideoCallStatus } from '@pushprotocol/restapi';
import { showNotifcationToast } from 'components/reusables/toasts/toastController';
import { useSelector } from 'react-redux';

const eventlistener = async (pushAPI: PushAPI, eventName: string, triggerFunc: (data) => void): Promise<void> => {
  pushAPI.stream.on(eventName, (data: any) => {
    console.log('Stream Event Received', eventName);
    console.log(data);
    console.log('\n');
    triggerFunc(data);
  });
};

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
          } else {
            showNotifcationToast(feedItem);
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
        const stream = await userPushSDKInstance.initStream([STREAM.CONNECT, STREAM.DISCONNECT, STREAM.NOTIF]);
        stream.connect();
        setStream(stream);
      })();
    }
  }, [userPushSDKInstance]);

  return stream;
};

export default useSDKStream;
