// React + Web3 Essentials
import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { produce } from 'immer';

import * as PushAPI from '@pushprotocol/restapi';

import { appConfig } from 'config';
import { initVideoCallData } from '@pushprotocol/restapi/src/lib/video';
import { ChatUserContext } from './ChatUserContext';

interface RequestWrapperOptionsType {
  senderAddress: string;
  recipientAddress: string;
  chatId: string;
}

interface AcceptRequestWrapperOptionsType {
  senderAddress: string;
  recipientAddress: string;
  chatId: string;
  signalData?: any;
}

interface VideoCallMetaDataType {
  recipientAddress: string;
  senderAddress: string;
  chatId: string;
  signalData?: any;
  status: number;
}

const VideoCallContext = createContext(null);

const VideoCallContextProvider: React.FC<React.ReactNode> = ({ children }) => {
  const videoObjectRef = useRef(null);

  const { chainId, account, library } = useWeb3React();
  const { connectedUser, createUserIfNecessary } = useContext(ChatUserContext);

  const [data, setData] = useState<PushAPI.VideoCallData>(initVideoCallData);

  useEffect(() => {
    if (!library || !account || !connectedUser) return null;

    (async () => {
      let createdUser;
      if (!connectedUser.publicKey) {
        createdUser = await createUserIfNecessary();
      }
      videoObjectRef.current = new PushAPI.video.Video({
        signer: library.getSigner(account),
        chainId,
        pgpPrivateKey: connectedUser.privateKey || createdUser?.privateKey,
        env: appConfig.appEnv,
        setData,
      });
    })();
  }, [connectedUser, library, account]);

  // wrapper methods over the class methods

  const createWrapper = async (): Promise<void> => {
    if (!data.local.stream) {
      await videoObjectRef.current.create({ video: true, audio: true });
    }
  };

  const requestWrapper = ({ senderAddress, recipientAddress, chatId }: RequestWrapperOptionsType): void => {
    videoObjectRef.current.request({
      senderAddress,
      recipientAddress,
      chatId,
    });
  };

  const acceptRequestWrapper = ({
    senderAddress,
    recipientAddress,
    chatId,
    signalData,
  }: AcceptRequestWrapperOptionsType): void => {
    videoObjectRef.current.acceptRequest({
      signalData: signalData ? signalData : data.meta.initiator.signal,
      senderAddress,
      recipientAddress,
      chatId,
    });
  };

  const connectWrapper = (videoCallMetaData: VideoCallMetaDataType) => {
    videoObjectRef.current.connect({ signalData: videoCallMetaData.signalData });
  };

  const disconnectWrapper = () => {
    videoObjectRef.current.disconnect();
  };

  // to set an incoming call
  const incomingCall = async (videoCallMetaData: VideoCallMetaDataType) => {
    videoObjectRef.current.setData((oldData) => {
      return produce(oldData, (draft) => {
        draft.local.address = videoCallMetaData.recipientAddress;
        draft.incoming[0].address = videoCallMetaData.senderAddress;
        draft.incoming[0].status = PushAPI.VideoCallStatus.RECEIVED;
        draft.meta.chatId = videoCallMetaData.chatId;
        draft.meta.initiator.address = videoCallMetaData.senderAddress;
        draft.meta.initiator.signal = videoCallMetaData.signalData;
      });
    });
  };

  const toggleVideoWrapper = () => {
    videoObjectRef.current.enableVideo({ state: !data.local.video });
  };

  const toggleAudioWrapper = () => {
    videoObjectRef.current.enableAudio({ state: !data.local.audio });
  };

  return (
    <VideoCallContext.Provider
      value={{
        videoCallData: data,
        setVideoCallData: setData,
        createWrapper,
        requestWrapper,
        acceptRequestWrapper,
        connectWrapper,
        disconnectWrapper,
        incomingCall,
        toggleVideoWrapper,
        toggleAudioWrapper,
        isVideoCallInitiator:
          data.incoming[0].status !== PushAPI.VideoCallStatus.UNINITIALIZED
            ? videoObjectRef.current?.isInitiator
            : () => {},
      }}
    >
      {children}
    </VideoCallContext.Provider>
  );
};

export { VideoCallContextProvider, VideoCallContext };
