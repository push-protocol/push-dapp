import { useEffect, useState } from 'react';
import {
  createSocketConnection,
  EVENTS
} from '@epnsproject/sdk-socket';
import { toast } from "react-toastify";
import { convertAddressToAddrCaip } from '../helpers/CaipHelper';

export type SDKSocketHookOptions = {
  account?: string | null,
  env?: string,
  chainId?: number,
};

export const useSDKSocket = ({ account, env, chainId }: SDKSocketHookOptions) => {
  const [epnsSDKSocket, setEpnsSDKSocket] = useState<any>(null);
  const [isSDKSocketConnected, setIsSDKSocketConnected] = useState(epnsSDKSocket?.connected);

  const addSocketEvents = () => {
    epnsSDKSocket?.on(EVENTS.CONNECT, () => {
      setIsSDKSocketConnected(true);
    });

    epnsSDKSocket?.on(EVENTS.DISCONNECT, () => {
      setIsSDKSocketConnected(false);
    });

    epnsSDKSocket?.on(EVENTS.USER_FEEDS, (feedList: any) => {
      /**
       * We receive a feed list which has 1 item.
       */
      try {
        const [feed] = feedList || [];
        const { payload } = feed || {};
        const { title, body } = payload?.notification || {};

        const msgPayloadString = `${title} ${body}`;
    
        toast.dark(msgPayloadString, {
          type: toast.TYPE.INFO,
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 10000,
          hideProgressBar: false,
        });
      } catch (e) {
        console.error('DAPP Error while diplaying received Notification: ', e);
      }     
    });
  };

  const removeSocketEvents = () => {
    epnsSDKSocket?.off(EVENTS.CONNECT);
    epnsSDKSocket?.off(EVENTS.DISCONNECT);
    epnsSDKSocket?.off(EVENTS.USER_FEEDS);
  };

  useEffect(() => {
    if (epnsSDKSocket) {
      addSocketEvents();
    }
  
    return () => {
      if (epnsSDKSocket) {
        removeSocketEvents();
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
        user: convertAddressToAddrCaip(account, chainId),
        env,
      });
      setEpnsSDKSocket(connectionObject);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account, chainId, env]);


  return {
    epnsSDKSocket,
    isSDKSocketConnected,
  }
};