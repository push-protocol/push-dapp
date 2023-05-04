// React + Web3 Essentials
import React, { createContext, useMemo, useState } from 'react';

const VideoCallContext = createContext(null);

const VideoCallContextProvider:React.FC<React.ReactNode> = ({ children }) => {
  const [localStream, setLocalStream] = useState<PushAPI.IMediaStream>();
  const [incomingStream, setIncomingStream] = useState<PushAPI.IMediaStream>();

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

  const requestWrapper = (senderAddress: string, recipientAddress: string, chatId): void => {
    console.log("CALL USER");

  };

  const incomingCall = (videoMeta: any) => {
    console.log("INCOMING CALL");
    
  };

  const acceptRequestWrapper = (toAddress: string, fromAddress: string): void => {
    console.log("ANSWER CALL");

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
