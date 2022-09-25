import {
  createSocketConnection,
  EVENTS
} from '@epnsproject/sdk-socket';
import { showNotifcationToast } from 'components/reusables/toasts/toastController';
import { useEffect, useState } from 'react';
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

    epnsSDKSocket?.on(EVENTS.USER_FEEDS, (feedItem: any) => {
      /**
       * We receive a feedItem
       */
      try {
        const { payload } = feedItem || {};        
        showNotifcationToast(payload);
        
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

  }, [account, chainId, env]);


  return {
    epnsSDKSocket,
    isSDKSocketConnected,
  }
};