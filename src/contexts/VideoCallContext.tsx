// React + Web3 Essentials
import React, { createContext, useEffect, useMemo, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';

import * as PushAPI from '@pushprotocol/restapi';

import Constants, { ENV } from '@pushprotocol/restapi/src/lib/constants';
import { appConfig } from 'config';

interface RequestWrapperOptionsType {
  senderAddress: string;
  recipientAddress: string;
  chatId: string;
  pgpPrivateKey: string | null;
}

interface AcceptRequestWrapperOptionsType {
  senderAddress: string;
  recipientAddress: string;
  chatId: string;
  pgpPrivateKey: string | null;
}

interface VideoCallMetaDataType {
  recipientAddress: string;
  senderAddress: string;
  chatId: string;
  signalingData?: any;
  status: number;
}

const VideoCallContext = createContext(null);

const VideoCallContextProvider: React.FC<React.ReactNode> = ({ children }) => {
  const { chainId, library } = useWeb3React<ethers.providers.Web3Provider>();

  const [localStream, setLocalStream] = useState<PushAPI.IMediaStream>();
  const [incomingStream, setIncomingStream] = useState<PushAPI.IMediaStream>();

  const [videoCallInfo, setVideoCallInfo] = useState<PushAPI.VideoCallInfoType>({
    senderAddress: '',
    receiverAddress: '',
    callStatus: 0,
    chatId: '',
  });

  const [receivedSignalData, setReceivedSignalData] = useState();

  const [isVideoOn, setIsVideoOn] = useState(false);
  const [isAudioOn, setIsAudioOn] = useState(false);

  const [isIncomingVideoOn, setIsIncomingVideoOn] = useState(true);
  const [isIncomingAudioOn, setIsIncomingAudioOn] = useState(true);

  const VideoObject = useMemo(() => {
    return new PushAPI.video.Video({
      localStream,
      setLocalStream,
      incomingStream,
      setIncomingStream,
      videoCallInfo,
      setVideoCallInfo,
      isVideoOn,
      setIsVideoOn,
      isAudioOn,
      setIsAudioOn,
      isIncomingVideoOn,
      setIsIncomingVideoOn,
      isIncomingAudioOn,
      setIsIncomingAudioOn,
    });
  }, []);

  // wrapper methods over the class methods

  const createWrapper = async (): Promise<void> => {
    console.log('CREATE WRAPPER');

    try {
      if (!localStream) {
        await VideoObject.create();
      }
    } catch (err) {
      console.log('Error in getting local stream', err);
    }
  };

  const requestWrapper = ({
    senderAddress,
    recipientAddress,
    chatId,
    pgpPrivateKey,
  }: RequestWrapperOptionsType): void => {
    console.log('REQUEST WRAPPER');
    try {
      VideoObject.request({
        library,
        chainId,
        senderAddress,
        recipientAddress,
        chatId,
        onRecieveMessage: (message) => {
          console.log('received a message', message);
        },
        pgpPrivateKey,
        env: appConfig.appEnv,
      });
    } catch (err) {
      console.log('Error in requesting video call', err);
    }
  };

  const acceptRequestWrapper = ({
    senderAddress,
    recipientAddress,
    chatId,
    pgpPrivateKey,
  }: AcceptRequestWrapperOptionsType): void => {
    console.log('ACCEPT REQUEST WRAPPER');

    try {
      VideoObject.acceptRequest({
        signalData: receivedSignalData,
        library,
        chainId,
        senderAddress,
        recipientAddress,
        chatId,
        onRecieveMessage: (message) => {
          console.log('received a message', message);
        },
        pgpPrivateKey,
        env: appConfig.appEnv,
      });
    } catch (err) {
      console.log('Error in requesting video call', err);
    }
  };

  const establishWrapper = (videoCallMetaData: VideoCallMetaDataType) => {
    console.log('ESTABLISH WRAPPER');
    VideoObject.establish({ signalData: videoCallMetaData.signalingData });
  };

  const endWrapper = () => {
    console.log('END WRAPPER');
  };

  // to set an incoming call
  const incomingCall = async (videoCallMetaData: VideoCallMetaDataType) => {
    setReceivedSignalData(videoCallMetaData.signalingData);
    setVideoCallInfo({
      senderAddress: videoCallMetaData.recipientAddress,
      receiverAddress: videoCallMetaData.senderAddress,
      callStatus: 2,
      chatId: videoCallMetaData.chatId,
    });
  };

  // temp
  useEffect(()=>{
    console.log("INCOMING STREAM", incomingStream);
  }, [incomingStream])

  return (
    <VideoCallContext.Provider
      value={{
        localStream,
        videoCallInfo,
        setVideoCallInfo,
        createWrapper,
        requestWrapper,
        acceptRequestWrapper,
        establishWrapper,
        endWrapper,
        incomingCall,
      }}
    >
      {children}
    </VideoCallContext.Provider>
  );
};

export { VideoCallContextProvider, VideoCallContext };
