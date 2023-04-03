// React + Web3 Essentials
import React, { useContext } from 'react';

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

  return (
    <Container>
      {localStream && (
        <LocalVideoContainer
          className={callAccepted && !callEnded ? 'connectionAccepted' : null}
          style={localVideoStyles}
        >
          <LocalVideo
            ref={myVideo}
            playsInline
            muted
            autoPlay
          />
        </LocalVideoContainer>
      )}
      {callAccepted && !callEnded && (
        <IncomingVideo
          playsInline
          ref={userVideo}
          autoPlay
        />
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

  &.connectionAccepted {
    position: absolute;
    width: inherit;
    right: 20px;
    bottom: 20px;
    height: 25%;
  }
`;

const LocalVideo = styled.video`
  height: 100%;
  width: 100%;
  border-radius: inherit;

  &.connectionAccepted {
    border: 1px solid #ffffff8c;
  }
`;

const IncomingVideo = styled.video`
  width: 60%;
`;
