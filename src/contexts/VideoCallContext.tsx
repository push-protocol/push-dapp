// React + Web3 Essentials
import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';
import React, { createContext, useContext, useMemo, useState } from 'react';
import {ChatUserContext} from './ChatUserContext';
import {AppContext} from '../../src/types/chat';
import { Context } from 'modules/chat/ChatModule';
import Constants from '@pushprotocol/restapi/src/lib/constants';

const VideoCallContext = createContext(null);

const VideoCallContextProvider:React.FC<React.ReactNode> = ({ children }) => {

  const {chainId } = useWeb3React<ethers.providers.Web3Provider>();
  const { connectedUser } = useContext(ChatUserContext);


  const { currentChat }: AppContext = React.useContext<AppContext>(Context);

  const [localStream, setLocalStream] = useState<PushAPI.IMediaStream>();
  const [incomingStream, setIncomingStream] = useState<PushAPI.IMediaStream>();
  const [receivedSignalData, setReceivedSignalData] = useState<any>({});

  const [videoCallInfo, setVideoCallInfo] = useState<PushAPI.VideoCallInfoType>(
    {
      senderAddress: '',
      receiverAddress: '',
      callStatus: 0,
      chatId: '',
    }
  );
  
  // video signalling data state
 
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

  const createWrapper = async (): Promise<void> => {
    console.log("INITIALIZE LOCAL STREAM");

    try {
      if (!localStream) {
        await VideoObject.create();
      }
    } catch (err) {
      console.log('Error in getting local stream', err);
    }
  };

  const requestWrapper = (senderAddress: string, recipientAddress: string): void => {
    console.log("CALL USER");
    const chatId = currentChat?.chatId;
    const pgpPrivateKey = connectedUser?.pgpPrivateKey;
    const env = Constants.ENV.PROD;
    try{
      VideoObject.request('',chainId,recipientAddress,senderAddress,chatId,'',pgpPrivateKey,env);
    }catch(err){
      console.log('Error in requesting video call', err);
    }
  };

  const incomingCall = (videoMeta: any) => {
    console.log("INCOMING CALL");
    
  };

  const acceptRequestWrapper = (recipientAddress: string, senderAddress: string): void => {
    console.log("ANSWER CALL");
    const chatId = currentChat?.chatId;
    const pgpPrivateKey = connectedUser?.pgpPrivateKey;
    const env = Constants.ENV.PROD;
    try{
      VideoObject.request(receivedSignalData,'',chainId,recipientAddress,senderAddress,chatId,'',pgpPrivateKey,env);
    }catch(err){
      console.log('Error in requesting video call', err);
    }

  };

  const establishWrapper = (videoMeta) => {
    console.log("ACCEPT CALL");

  };

  const endWrapper = () => {
    console.log("LEAVE CALL");

  };

  return (
    <VideoCallContext.Provider
      value={{
       
      }}
    >
      {children}
    </VideoCallContext.Provider>
  );
};

export { VideoCallContextProvider, VideoCallContext };
