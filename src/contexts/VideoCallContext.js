// React + Web3 Essentials
import React, { createContext, useEffect, useRef, useState } from 'react';

// External Packages
import Peer from 'simple-peer';
import { io } from 'socket.io-client';

// Internal Configs
import { appConfig } from "config";

const VideoCallContext = createContext();

// const socket = io('http://localhost:5000');
// const socket = io('https://warm-wildwood-81069.herokuapp.com');

const VideoCallContextProvider = ({ children }) => {
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [receiverPeerSignalled, setRecieverPeerSignalled] = useState(false);
  const [stream, setStream] = useState();
  const [name, setName] = useState('Joe');
  const [call, setCall] = useState({});
  const [me, setMe] = useState('');

  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();

  const initializeStream = async (address) => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      setStream(stream);
      myVideo.current.srcObject = stream;
      setMe(address)

      // socket.on('callUser', ({ from, name: callerName, signal }) => {
      //   setCall({ isReceivingCall: true, from, name: callerName, signal });
      // });
    } catch (err) {
      console.log("Error in getting self stream", err);
    }
  }

  let peer = null;
  const callUser = (fromAddress, toAddress) => {
    peer = new Peer({ initiator: true, trickle: false, stream });

    peer.on('signal', (data) => {
      // send a notification to the user
      // Prepare post request
      // 1 is call initiated, 2 is call answered
      const videoPayload = {
        userToCall: toAddress, 
        fromUser: fromAddress,
        signalData: data, 
        name: name,
        status: 1,
      }
      let identityPayload = {
        notification: {
          title: 'VideoCall',
          body: 'VideoCall',
        },
        data: {
          amsg: 'VideoCall',
          asub: 'VideoCall',
          type: '3',
          etime: Date.now() + 245543,
          hidden: "1",
          videoMeta: videoPayload
        },
      };

      const identityType = 2;
      const stringifiedData = JSON.stringify(identityPayload);
      const identity = `${identityType}+${stringifiedData}`;

      const payload = {
        "sender": `eip155:42:${fromAddress}`,
        "recipient": `eip155:42:${toAddress}`,
        "identity": identity,
        "source": "PUSH_VIDEO"
      }
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      };
      fetch(`${appConfig.w2wApiUrl}/v1/payloads/video/poc`, requestOptions);

      //socket.emit('callUser', { userToCall: address, signalData: data, from: me, name });
    });

    peer.on('stream', (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });

    // socket.on('callAccepted', (signal) => {
    //   setCallAccepted(true);

    //   peer.signal(signal);
    // });

    connectionRef.current = peer;
  };

  const incomingCall = (videoMeta) => {
    if (!call.isReceivingCall) {
      console.log("Setting Incoming Call");
      // console.log(videoMeta); 
      setCall({ isReceivingCall: true, from: videoMeta.fromUser, name: videoMeta.callerName, signal: videoMeta.signalData });  
    }
  }

  const answerCall = (toAddress, fromAddress) => {
    setCallAccepted(true);
    const peer2 = new Peer({ initiator: false, trickle: false, stream });
    
    console.log("Sending Payload for answer call - Step 1")

    peer2.once('signal', (data) => {
      // send answer call notification
      // Prepare post request
      // 1 is call initiated, 2 is call answered, 3 is completed
      console.log("Sending Payload for answer call - Peer on Signal - Step 2")
      if (!receiverPeerSignalled) {
        setRecieverPeerSignalled(true);

        console.log("Sending Payload for answer call - Peer on Signal - Step 3", receiverPeerSignalled)
          const videoPayload = {
            userToCall: toAddress, 
            fromUser: fromAddress,
            signalData: data, 
            name: name,
            status: 2,
          }
          let identityPayload = {
            notification: {
              title: 'VideoCall',
              body: 'VideoCall',
            },
            data: {
              amsg: 'VideoCall',
              asub: 'VideoCall',
              type: '3',
              etime: Date.now() + 245543,
              hidden: "1",
              videoMeta: videoPayload
            },
          };
  
          const identityType = 2;
          const stringifiedData = JSON.stringify(identityPayload);
          const identity = `${identityType}+${stringifiedData}`;
  
          const payload = {
            "sender": `eip155:42:${fromAddress}`,
            "recipient": `eip155:42:${toAddress}`,
            "identity": identity,
            "source": "PUSH_VIDEO"
          }
          const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          };
          fetch(`${appConfig.w2wApiUrl}/v1/payloads/video/poc`, requestOptions);
      }
      // socket.emit('answerCall', { signal: data, to: call.from });
    });

    peer2.on('stream', (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });

    peer2.signal(call.signal);
    connectionRef.current = peer2;
  };

  const acceptCall = (videoMeta) => {
    if (!callAccepted) {
      setCallAccepted(true);
      console.log("Accepted Call Data", videoMeta);
      console.log("acceptCall PeerInstance", connectionRef.current);
      connectionRef.current.signal(videoMeta.signalData);
    }
  }

  const leaveCall = () => {
    setCallEnded(true);
    setRecieverPeerSignalled(false);
    setCallAccepted(false);
    
    connectionRef.current.destroy();
    window.location.reload();
  };

  return (
    <VideoCallContext.Provider value={{
      initializeStream,
      call,
      callAccepted,
      myVideo,
      userVideo,
      stream,
      name,
      setName,
      callEnded,
      me,
      callUser,
      leaveCall,
      answerCall,
      incomingCall,
      acceptCall
    }}
    >
      {children}
    </VideoCallContext.Provider>
  );
};

export { VideoCallContextProvider, VideoCallContext };
