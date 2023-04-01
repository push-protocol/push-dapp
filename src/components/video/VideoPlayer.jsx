// React + Web3 Essentials
import React, { useContext } from 'react';

// External Packages
import { makeStyles } from '@material-ui/core';
import styled from 'styled-components';

// Internal Components
import { VideoCallContext } from 'contexts/VideoCallContext';
import { ItemVV2 } from 'components/reusables/SharedStylingV2';

const useStyles = makeStyles((theme) => ({
  video: {
    width: '550px',
    [theme.breakpoints.down('xs')]: {
      width: '300px',
    },
  },
  gridContainer: {
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  paper: {
    padding: '10px',
    border: '2px solid black',
    margin: '10px',
  },
}));

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, me, localStream, call } = useContext(VideoCallContext);
  const classes = useStyles();

  return (
    <Container>
      {localStream && (
        <LocalVideoContainer className={callAccepted && !callEnded ? 'connectionAccepted' : null}>
          <LocalVideo
            ref={myVideo}
            playsInline
            muted
            autoPlay
          />
        </LocalVideoContainer>
      )}
      {callAccepted && !callEnded && (
        <IncomingVideoContainer>
        <IncomingVideo
          playsInline
          ref={userVideo}
          autoPlay
        />
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
  height: 90vh;
  max-height: 90vh;
  transition: all 0.25 linear;
  z-index: 2;

  &.connectionAccepted {
    position: absolute;
    width: inherit;
    right: 4%;
    bottom: 20px;
    height: 25%;
  }
`;

const LocalVideo = styled.video`
  height: 100%;
  border-radius: 34px;

  &.connectionAccepted {
    border: 1px solid #ffffff8c;
    border-radius: 24px;
  }
`;

const IncomingVideo = styled.video`
  border-radius: 34px;
  width: 100%;
`;

const IncomingVideoContainer = styled(ItemVV2)`
overflow: hidden;
height: 500px;
max-height: 500px;
width: 95%;
background-color: #000000;
left: 2.5%;
border-radius: 34px;
z-index: 1;
`;