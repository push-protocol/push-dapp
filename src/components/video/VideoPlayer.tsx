// React + Web3 Essentials
import React, { useContext,useEffect,useState } from 'react';

// External Packages
import { makeStyles } from '@material-ui/core';
import styled from 'styled-components';

// Internal Components
import { VideoCallContext } from 'contexts/VideoCallContext';
import { ItemVV2 } from 'components/reusables/SharedStylingV2';

type VideoPlayerType = {
  localVideoStyles?: {};
};

const VideoPlayer = ({ localVideoStyles }: VideoPlayerType) => {
  const { name, callAccepted, myVideo, userVideo, callEnded, me, localStream, call } = useContext(VideoCallContext);

  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const[windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Container>
      {localStream && (
        <LocalVideoContainer
          className={callAccepted && !callEnded ? 'connectionAccepted' : null}
          style={localVideoStyles}
          windowWidth={windowWidth}
        >
          <LocalVideo
            ref={myVideo}
            playsInline
            muted
            autoPlay
            windowWidth={windowWidth}
          />
        </LocalVideoContainer>
      )}
      {callAccepted && !callEnded && (
        <IncomingVideoContainer windowHeight={windowHeight}  >
          <IncomingVideo
            playsInline
            ref={userVideo}
            autoPlay
            windowWidth={windowWidth}
          />
          <IncomingEnsContainer>
            <p>ens.eth</p>
          </IncomingEnsContainer>
        </IncomingVideoContainer>
      )}
    </Container>
  );
};
export default VideoPlayer;

const Container = styled(ItemVV2)`
  height: fit-content;
  max-height: fit-content;
  min-height: fit-content;
`;

const LocalVideoContainer = styled(ItemVV2)`
  overflow: hidden;
  height: 47vh;
  max-height: 47vh;
  transition: all 0.25 linear;
  border-radius: 34px;
  margin: 0 auto;
  z-index: 2;

  &.connectionAccepted {
    position: absolute;
    width: inherit;
    right: 4%;
    bottom:  ${({ windowWidth }) => (windowWidth < 425 ? '-30vh' : '20px')};
    height: 25%;
  }
`;

const LocalVideo = styled.video`
  height: ${({ windowWidth }) => (windowWidth < 425 ? '12vh' : '100%')};
  width: ${({ windowWidth }) => (windowWidth < 425 ? '18vh' : '100%')};
  border-radius: inherit;
  object-fit: cover;

  &.connectionAccepted {
    border: 1px solid #ffffff8c;
    z-index: 2;
  }
`;

const IncomingVideo = styled.video`
  border-radius: 34px;
  width: ${({ windowWidth }) => (windowWidth < 425 ? 'auto' : '100%')};
  height: ${({ windowWidth }) => (windowWidth < 425 ? '100%' : 'auto')};
`;

const IncomingVideoContainer = styled(ItemVV2)`
  overflow: hidden;
  height: 20vh;
  max-height: ${({ windowHeight }) => (windowHeight < 800 ? '50vh' : '62vh')};
  width: 95%;
  background-color: #000000;
  left: 2.5%;
  border-radius: 34px;
  z-index: 1;
`;

const IncomingEnsContainer = styled(ItemVV2)`
position: absolute;
  height: 10px;
  width: fit-content;
  padding: 10px;
  border-radius: 24px;
  background-color: #FFFFFF;
  opacity: 0.8;
  z-index: 3;
  left 1.5%;
  bottom: 3.5%;
`;
