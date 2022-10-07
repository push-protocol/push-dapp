import { appConfig } from "config";
import React, { createContext, useEffect, useRef, useState } from 'react';
import Peer from 'simple-peer';
import { io } from 'socket.io-client';

const VideoCallContext = createContext();

// const socket = io('http://localhost:5000');
const socket = io('https://warm-wildwood-81069.herokuapp.com');

const VideoCallContextProvider = ({ children }) => {
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
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

      socket.on('callUser', ({ from, name: callerName, signal }) => {
        setCall({ isReceivingCall: true, from, name: callerName, signal });
      });
    } catch (err) {
      console.log("Error in getting self stream", err);
    }
  }

  const callUser = (fromAddress, toAddress) => {
    const peer = new Peer({ initiator: true, trickle: false, stream });

    peer.on('signal', (data) => {
      // send a notification to the user
      // Prepare post request
      const videoPayload = {
        userToCall: toAddress, 
        signalData: data, 
        from: me, 
        name: name
      }
      let identityPayload = {
        notification: {
          title: 'VideoCall',
          body: 'VideoCall',
        },
        data: {
          acta: '',
          aimg: '',
          amsg: 'VideoCall',
          asub: '',
          type: '3',
          secret: '',
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
      fetch(`${appConfig.w2wApiUrl}/v1/payloads/video/poc`, requestOptions)
          .then(response => response.json())
          .then(data => console.log(data));

      //socket.emit('callUser', { userToCall: address, signalData: data, from: me, name });
    });

    peer.on('stream', (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });

    socket.on('callAccepted', (signal) => {
      setCallAccepted(true);

      peer.signal(signal);
    });

    connectionRef.current = peer;
  };

  const callRequested = ({ address, ens, signal, id }) => {

  }

  const answerCall = () => {
    setCallAccepted(true);

    const peer = new Peer({ initiator: false, trickle: false, stream });

    peer.on('signal', (data) => {
      socket.emit('answerCall', { signal: data, to: call.from });
    });

    peer.on('stream', (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });

    peer.signal(call.signal);

    connectionRef.current = peer;
  };

  const leaveCall = () => {
    setCallEnded(true);

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
    }}
    >
      {children}
    </VideoCallContext.Provider>
  );
};

export { VideoCallContextProvider, VideoCallContext };
