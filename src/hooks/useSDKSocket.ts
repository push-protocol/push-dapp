// React + Web3 Essentials
import { useContext, useEffect, useState } from 'react';

// Internal Components
import { createSocketConnection, EVENTS } from '@pushprotocol/socket';
import { showNotifcationToast } from 'components/reusables/toasts/toastController';
import { VideoCallContext } from 'contexts/VideoCallContext';
import { convertAddressToAddrCaip } from '../helpers/CaipHelper';


// Types
export type SDKSocketHookOptions = {
  account?: string | null;
  env?: ENV;
  chainId?: number;
  socketType?: 'chat' | 'notification',
};

export const useSDKSocket = ({ account, env, chainId,socketType }: SDKSocketHookOptions) => {
  const [epnsSDKSocket, setEpnsSDKSocket] = useState<any>(null);
  const [isSDKSocketConnected, setIsSDKSocketConnected] = useState(epnsSDKSocket?.connected);
  const [messagesSinceLastConnection, setMessagesSinceLastConnection] = useState<any>('');
  const [groupInformationSinceLastConnection, setGroupInformationSinceLastConnection] = useState<any>('');
  const { incomingCall, acceptCall } = useContext(VideoCallContext);
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
          if (payload?.data?.additionalMeta && feedItem?.source === 'PUSH_VIDEO') {
            const additionalMeta = JSON.parse(payload.data.additionalMeta);

            console.log("RECEIVED CALL FEED", additionalMeta);

            if (additionalMeta.status === 1) {
              // incoming call
              incomingCall(additionalMeta);
            } else if (additionalMeta.status === 2) {
              // call answered
              acceptCall(additionalMeta);
            }
          } else {
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
      console.log(groupInfo)
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
        user: socketType == 'chat'?account:convertAddressToAddrCaip(account, chainId),
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
