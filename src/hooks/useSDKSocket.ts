// React + Web3 Essentials
import { useContext, useEffect, useState } from 'react';

// Internal Components
import { createSocketConnection, EVENTS } from '@pushprotocol/socket';
import { showNotifcationToast } from 'components/reusables/toasts/toastController';
import { VideoCallContext } from 'contexts/VideoCallContext';
import { convertAddressToAddrCaip } from '../helpers/CaipHelper';
import { VideoCallStatus } from '@pushprotocol/restapi';
import { ADDITIONAL_META_TYPE } from '@pushprotocol/restapi/src/lib/payloads/constants';
import { ENV } from '@pushprotocol/restapi/src/lib/constants';
import { SpaceContext } from 'contexts/SpaceContext';

// Types
export type SDKSocketHookOptions = {
  account?: string | null;
  env?: ENV;
  chainId?: number;
  socketType?: 'chat' | 'notification';
};

export const useSDKSocket = ({ account, env, chainId, socketType }: SDKSocketHookOptions) => {
  const [epnsSDKSocket, setEpnsSDKSocket] = useState<any>(null);
  const [isSDKSocketConnected, setIsSDKSocketConnected] = useState(epnsSDKSocket?.connected);
  const [messagesSinceLastConnection, setMessagesSinceLastConnection] = useState<any>('');
  const [groupInformationSinceLastConnection, setGroupInformationSinceLastConnection] = useState<any>('');
  const { videoCallData, incomingCall, connectWrapper, requestWrapper, acceptRequestWrapper, isVideoCallInitiator } =
    useContext(VideoCallContext);

  const addSocketEvents = () => {
    epnsSDKSocket?.on(EVENTS.CONNECT, () => {
      setIsSDKSocketConnected(true);
    });

    epnsSDKSocket?.on(EVENTS.DISCONNECT, () => {
      setIsSDKSocketConnected(false);
    });

    epnsSDKSocket?.on(EVENTS.USER_FEEDS, (feedItem: any) => {
      /**
       * We receive a feedItem
       */
      try {
        const { payload } = feedItem || {};

        if (Object.keys(payload).length > 0) {
          // if additional meta, skip notification
          // currently for video calls only
          if (payload?.data?.additionalMeta?.type === `${ADDITIONAL_META_TYPE.PUSH_VIDEO}+1`) {
            const videoCallMetaData = JSON.parse(payload.data.additionalMeta.data);
            console.debug('RECIEVED VIDEO DATA', videoCallMetaData);

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
          } else if(
            payload?.data?.additionalMeta?.data === "PUSH SPACE META MESSAGE" ||  payload?.data?.additionalMeta?.type === `${ADDITIONAL_META_TYPE.PUSH_SPACE}+1`){
            // uiweb will handle this
          }
          else {
            showNotifcationToast(payload);
          }
        }
      } catch (e) {
        console.error('DAPP Error while diplaying received Notification: ', e);
      }
    });

    epnsSDKSocket?.on(EVENTS.CHAT_RECEIVED_MESSAGE, (chat: any) => {
      /**
       * We receive a 1 message.
       */
      setMessagesSinceLastConnection(chat);
    });

    //change this event name once sdk is published
    epnsSDKSocket?.on(EVENTS.CHAT_GROUPS, (groupInfo: any) => {
      /**
       * We receive a group creation or updated event.
       */
      console.info(groupInfo);
      setGroupInformationSinceLastConnection(groupInfo);
    });
  };

  const removeSocketEvents = () => {
    epnsSDKSocket?.off(EVENTS.CONNECT);
    epnsSDKSocket?.off(EVENTS.DISCONNECT);
    epnsSDKSocket?.off(EVENTS.USER_FEEDS);
    epnsSDKSocket?.off(EVENTS.CHAT_GROUPS);
    epnsSDKSocket?.off(EVENTS.CHAT_RECEIVED_MESSAGE);
  };

  useEffect(() => {
    if (epnsSDKSocket) {
      addSocketEvents();
    }

    return () => {
      if (epnsSDKSocket) {
        removeSocketEvents();
      }
    };
  }, [epnsSDKSocket]);

  /**
   * Whenever the requisite params to create a connection object change
   *  - disconnect the old connection
   *  - create a new connection object
   */
  useEffect(() => {
    if (account && chainId && env) {
      if (epnsSDKSocket) {
        epnsSDKSocket?.disconnect();
      }

      // this is auto-connect on instantiation
      const connectionObject = createSocketConnection({
        user: socketType == 'chat' ? account : convertAddressToAddrCaip(account, chainId),
        socketType,
        env,
      });
      setEpnsSDKSocket(connectionObject);
    }
  }, [account, chainId, env]);

  return {
    epnsSDKSocket,
    isSDKSocketConnected,
    messagesSinceLastConnection,
    groupInformationSinceLastConnection,
  };
};
