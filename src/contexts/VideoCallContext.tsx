// React + Web3 Essentials
import React, { createContext, useEffect, useRef, useState } from 'react';

// External Packages
import Peer from 'simple-peer';

// Internal Configs
import { appConfig } from '../config';

interface videoPayloadType {
  userToCall: string;
  fromUser: string;
  signalData: any;
  name: string;
  status: number;
}

interface payloadType {
  sender: string;
  recipient: string;
  identity: string;
  source: string;
}

const VideoCallContext = createContext(null);

const VideoCallContextProvider:React.FC<React.ReactNode> = ({ children }) => {
  const [callAccepted, setCallAccepted] = useState<boolean>(false);
  const [callEnded, setCallEnded] = useState<boolean>(false);
  const [receiverPeerSignalled, setRecieverPeerSignalled] = useState<boolean>(false);
  const [localStream, setLocalStream] = useState<MediaStream>();
  const [name, setName] = useState<string>('Joe');
  const [call, setCall] = useState<any>({});
  const [me, setMe] = useState<string>('');
  const[isVideoOn, setVideoOn] = useState<boolean>(true);
  const [isAudioOn, setAudioOn] = useState<boolean>(true);
  const [incomingVideoOn, setIncomingVideoOn] = useState<boolean>(true);
  const [incomingAudioOn, setIncomingAudioOn] = useState<boolean>(true);
  const[isPeerConnected, setPeerConnected] = useState<boolean>(false);

  const myVideo = useRef<any>();
  const userVideo = useRef<any>();
  const connectionRef = useRef<any>();

  /**
   * Initializes the local stream and sets the local stream to the user's video element.           
   * @param {string} address - the address of the user who is calling the function           
   * @returns None           
   */
  const initializeLocalStream = async (address: string): Promise<void> => {
    console.log("INITIALIZE LOCAL STREAM");

    try {
      const localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      setLocalStream(localStream);
      myVideo.current.srcObject = localStream;
      setMe(address);
    } catch (err) {
      console.log('Error in getting self localStream', err);
    }
  };

  function endLocalStream(){
    if(localStream){
      console.log("END LOCAL STREAM")
      const peer = connectionRef.current;
      peer.send(JSON.stringify({ type: 'endLocalStream', endLocalStream: true }));
      window.location.reload();
      localStream.getTracks().forEach(track => track.stop());
    }
  }

   function restartLocalStream(){
    console.log("RESTART LOCAL STREAM");
    var vidTrack = localStream.getVideoTracks();
    vidTrack.forEach(track => track.enabled = true);
  }

  function stopLocalStream () {
    console.log("STOP LOCAL STREAM");
    var vidTrack = localStream.getVideoTracks();
    vidTrack.forEach(track => track.enabled = false);
  };

  function restartAudio(){
    console.log("RESTART AUDIO");
    var audTrack = localStream.getAudioTracks();
    audTrack.forEach(track => track.enabled = true);
  }

  function stopAudio(){
    console.log("STOP AUDIO");
    var audTrack = localStream.getAudioTracks();
    audTrack.forEach(track => track.enabled = false);
  }


  function isJSON(str:string) {
    try {
        return (JSON.parse(str) && !!str);
    } catch (e) {
        return false;
    }
}
  

  function VideoToggler(){
    if(isVideoOn === false){
      if(isPeerConnected)
      {
        const peer = connectionRef.current;
        peer.send(JSON.stringify({ type: 'isVideoOn', isVideoOn: true }));
      }
      console.log("INITIALIZE LOCAL STREAM");
      setVideoOn(true);
      restartLocalStream();
    }if(isVideoOn === true && localStream){
      console.log("STOP LOCAL STREAM");
      if(isPeerConnected){
        const peer = connectionRef.current;
        peer.send(JSON.stringify({ type: 'isVideoOn', isVideoOn: false }));
      }
      setVideoOn(false);
      stopLocalStream();
    }
  }

  function AudioToggler(){
    if(isAudioOn === false){
      if(isPeerConnected){
        const peer = connectionRef.current;
        peer.send(JSON.stringify({ type: 'isAudioOn', isAudioOn: true }));
      }
      console.log("RESTART AUDIO");
      setAudioOn(true);
      restartAudio();
    }if(isAudioOn === true && localStream){
      if(isPeerConnected){
        const peer = connectionRef.current;
        peer.send(JSON.stringify({ type: 'isAudioOn', isAudioOn: false }));
      }
      console.log("STOP AUDIO");
      setAudioOn(false);
      stopAudio();
    }
  }

  


  /**
   * Call the user with the given address.       
   * @param {string} fromAddress - The address of the user who is calling.       
   * @param {string} toAddress - The address of the user who is being called.       
   * @returns None       
   */
  const callUser = (fromAddress: string, toAddress: string): void => {
    console.log("CALL USER");

    console.log("LOCAL STREAM CALL USER", localStream);
    const peer = new Peer({ initiator: true, trickle: false, stream: localStream });

    peer.on('signal', (data) => {
      console.log("CALL USER -> SIGNAL CALLBACK");

      const notificationText = `Video Call from ${fromAddress}`;

      // send a notification to the user
      // Prepare post request
      // 1 is call initiated, 2 is call answered
      const videoPayload: videoPayloadType = {
        userToCall: toAddress,
        fromUser: fromAddress,
        signalData: data,
        name: name,
        status: 1,
      };
      let identityPayload = {
        notification: {
          title: notificationText,
          body: notificationText,
        },
        data: {
          amsg: 'VideoCall',
          asub: 'VideoCall',
          type: '3',
          etime: Date.now() + 245543,
          hidden: '1',
          videoMeta: videoPayload,
        },
      };

      const identityType: number = 2;
      const stringifiedData: string = JSON.stringify(identityPayload);
      const identity: string = `${identityType}+${stringifiedData}`;

      const payload: payloadType = {
        sender: `eip155:42:${fromAddress}`,
        recipient: `eip155:42:${toAddress}`,
        identity: identity,
        source: 'PUSH_VIDEO',
      };
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      };
      fetch(`${appConfig.w2wApiUrl}/v1/payloads/video/poc`, requestOptions);
    });

    peer.on('connect', () => {
      // wait for 'connect' event before using the data channel
      peer.send('hey reciever, how is it going?')
      setPeerConnected(true);
      if(isVideoOn === false){
        peer.send(JSON.stringify({ type: 'isVideoOn', isVideoOn: false }));
      }
      if(isAudioOn === false){
        peer.send(JSON.stringify({ type: 'isAudioOn', isAudioOn: false }));
      }
      if(isVideoOn === true){
        peer.send(JSON.stringify({ type: 'isVideoOn', isVideoOn: true }));
      }
      if(isAudioOn === true){
        peer.send(JSON.stringify({ type: 'isAudioOn', isAudioOn: true }));
      }
    })
    
    peer.on('data', data => {
      // got a data channel message
      console.log('got a message from reciever: ' + data)
      if(isJSON(data)){
        const dataObj = JSON.parse(data);
        if(dataObj.type === 'isVideoOn'){
          console.log("IS VIDEO ON", dataObj.isVideoOn);
          setIncomingVideoOn(dataObj.isVideoOn);
        }if(dataObj.type === 'isAudioOn'){
          console.log("IS AUDIO ON", dataObj.isAudioOn);
          setIncomingAudioOn(dataObj.isAudioOn);
        }
        if(dataObj.type === 'endLocalStream'){
          console.log("END LOCAL STREAM", dataObj.endLocalStream);
          window.location.reload();
        }
      }
    })

    peer.on('stream', (currentStream: MediaStream) => {
      console.log("GOT STREAM BACK IN CALLUSER");
      
      userVideo.current.srcObject = currentStream;
      userVideo.current.play();
    });

    connectionRef.current = peer;
  };

  /**
   * Handles incoming calls.           
   * @param {any} videoMeta - the video meta data of the incoming call.           
   * @returns None           
   */
  const incomingCall = (videoMeta: any) => {
    console.log("INCOMING CALL");
    
    if (!call.isReceivingCall) {
      console.log('Setting Incoming Call');
      setCall({
        isReceivingCall: true,
        from: videoMeta.fromUser,
        name: videoMeta.callerName,
        signal: videoMeta.signalData,
      });
    }
  };

  /**
   * Answer a call from a user.           
   * @param {string} toAddress - The address of the user to answer the call from.           
   * @param {string} fromAddress - The address of the user to answer the call to.           
   * @returns None           
   */
  const answerCall = (toAddress: string, fromAddress: string): void => {
    console.log("ANSWER CALL");

    setCallAccepted(true);
    console.log("LOCAL STREAM ANSWER CALL", localStream);
    
    const peer2: any = new Peer({ initiator: false, trickle: false, stream: localStream });
    console.log("answer call -> data", call);
    peer2.signal(call.signal);

    console.log('Sending Payload for answer call - Step 1');

    peer2.on('signal', (data) => {
      console.log("ANSWER CALL -> SIGNAL CALLBACK");
      console.log("RECIEVER PEER SIGNALED", receiverPeerSignalled)

      // send answer call notification
      // Prepare post request
      // 1 is call initiated, 2 is call answered, 3 is completed
      console.log('Sending Payload for answer call - Peer on Signal - Step 2');
      if (!receiverPeerSignalled) {
        setRecieverPeerSignalled(true);

        const notificationText = `Video Call from ${fromAddress}`;

        console.log('Sending Payload for answer call - Peer on Signal - Step 3', receiverPeerSignalled);
        const videoPayload: videoPayloadType = {
          userToCall: toAddress,
          fromUser: fromAddress,
          signalData: data,
          name: name,
          status: 2,
        };
        let identityPayload = {
          notification: {
            title: notificationText,
            body: notificationText,
          },
          data: {
            amsg: 'VideoCall',
            asub: 'VideoCall',
            type: '3',
            etime: Date.now() + 245543,
            hidden: '1',
            videoMeta: videoPayload,
          },
        };

        const identityType: number = 2;
        const stringifiedData: string = JSON.stringify(identityPayload);
        const identity: string = `${identityType}+${stringifiedData}`;

        const payload: payloadType = {
          sender: `eip155:42:${fromAddress}`,
          recipient: `eip155:42:${toAddress}`,
          identity: identity,
          source: 'PUSH_VIDEO',
        };
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        };
        fetch(`${appConfig.w2wApiUrl}/v1/payloads/video/poc`, requestOptions);
      }
      // socket.emit('answerCall', { signal: data, to: call.from });
    });

    peer2.on('connect', () => {
      // wait for 'connect' event before using the data channel
      peer2.send('hey caller, how is it going?')
      setPeerConnected(true);
      if(isVideoOn === false){
        peer2.send(JSON.stringify({ type: 'isVideoOn', isVideoOn: false }));
      }
      if(isAudioOn === false){
        peer2.send(JSON.stringify({ type: 'isAudioOn', isAudioOn: false }));
      }
      if(isVideoOn === true){
        peer2.send(JSON.stringify({ type: 'isVideoOn', isVideoOn: true }));
      }
      if(isAudioOn === true){
        peer2.send(JSON.stringify({ type: 'isAudioOn', isAudioOn: true }));
      }
    })
    
    peer2.on('data', data => {
      // got a data channel message
      console.log('got a message from caller: ' + data)
      if(isJSON(data)){
        const dataObj = JSON.parse(data);
        if(dataObj.type === 'isVideoOn'){
          console.log("IS VIDEO ON", dataObj.isVideoOn);
          setIncomingVideoOn(dataObj.isVideoOn);
        }if(dataObj.type === 'isAudioOn'){
          console.log("IS AUDIO ON", dataObj.isAudioOn);
          setIncomingAudioOn(dataObj.isAudioOn);
        }
        if(dataObj.type === 'endLocalStream'){
          console.log("END LOCAL STREAM", dataObj.endLocalStream);
          window.location.reload();
        }
      }
    })

    peer2.on('stream', (currentStream: MediaStream) => {
      console.log("GOT STREAM BACK IN ANSWERCALL");
      
      userVideo.current.srcObject = currentStream;
      userVideo.current.play();
    });


    connectionRef.current = peer2;
  };

  /**
   * Accepts a call from a user.           
   * @param {VideoMeta} videoMeta - The video meta data of the peer.           
   * @returns None           
   */
  const acceptCall = (videoMeta) => {
    console.log("ACCEPT CALL");

    if (!callAccepted) {
      setCallAccepted(true);
      console.log('Accepted Call Data', videoMeta);
      console.log('acceptCall PeerInstance', connectionRef.current);
      connectionRef.current.signal(videoMeta.signalData);
    }
  };

  /**
   * Leave the call.           
   * @returns None           
   */
  const leaveCall = () => {
    console.log("LEAVE CALL");

    setCallEnded(true);
    setRecieverPeerSignalled(false);
    setCallAccepted(false);

    connectionRef.current.destroy();
    window.location.reload();
  };

  return (
    <VideoCallContext.Provider
      value={{
        initializeLocalStream,
        call,
        callAccepted,
        myVideo,
        userVideo,
        localStream,
        name,
        setName,
        callEnded,
        me,
        callUser,
        leaveCall,
        answerCall,
        incomingCall,
        acceptCall,
        VideoToggler,
        AudioToggler,
        isVideoOn,
        isAudioOn,
        endLocalStream,
        incomingVideoOn,
        incomingAudioOn
      }}
    >
      {children}
    </VideoCallContext.Provider>
  );
};

export { VideoCallContextProvider, VideoCallContext };
