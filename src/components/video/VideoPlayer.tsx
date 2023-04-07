// React + Web3 Essentials
import React, { useContext, useEffect, useRef } from 'react';

// External Packages
import { makeStyles } from '@material-ui/core';
import styled from 'styled-components';

// Internal Components
import { VideoCallContext } from 'contexts/VideoCallContext';
import {ImageV2, ItemVV2  } from 'components/reusables/SharedStylingV2';
import UserInfo from 'components/video/UserInfo';
import { device } from 'config/Globals';


type VideoPlayerType = {
  localVideoStyles?: {};
  videoStatus?: boolean;
};

const VideoPlayer = ({ localVideoStyles,videoStatus }: VideoPlayerType) => {
  const localVideoRef = useRef(null);
  const { name, callAccepted, myVideo, userVideo, callEnded, me, localStream, call,incomingVideoOn,incomingAudioOn } = useContext(VideoCallContext);

  useEffect(() => {
    if (localVideoRef.current) {
      let video = localVideoRef.current;
      video.srcObject = localStream;
      video.play();
    }
  }, [localVideoRef, localStream]);

  console.log('Local Video : ',localStream)

  return (
    <Container>
      {localStream && (
        <LocalVideoContainer
          className={callAccepted && !callEnded ? 'connectionAccepted' : null}
          style={localVideoStyles}
        >
          <LocalVideo ref={localVideoRef} />
          {
            !localStream.getVideoTracks()[0].enabled ? (
              <VideoDisabledContainer>
                <PfpContainer>
        <ImageV2
          height="100%"
          width='100%'
          alt={`Profile pic`}
          src={''}
          objectFit="cover"
        />
      </PfpContainer>
              </VideoDisabledContainer>
            ) : null
          }
        </LocalVideoContainer>
      )}
      {callAccepted && !callEnded && (
        <IncomingVideoContainer>
          <IncomingVideo
            playsInline
            ref={userVideo}
            autoPlay
          />{
            !incomingVideoOn ? (
              <VideoDisabledContainer>
                <PfpContainer>
                  <ImageV2
                    height="100%"
                    width='100%'
                    alt={`Profile pic`}
                    src={''}
                    objectFit="cover"
                  />
                </PfpContainer>
              </VideoDisabledContainer>
            ) : null
          }
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
    bottom: 20px;
    height: 25%;
  }
`;

const LocalVideo = styled.video`
  height: 100%;
  width: 100%;
  border-radius: inherit;
  object-fit: cover;

  &.connectionAccepted {
    border: 1px solid #ffffff8c;
    z-index: 2;
  }
`;

const IncomingVideo = styled.video`
  border-radius: 34px;
  width: 100%;
`;

const IncomingVideoContainer = styled(ItemVV2)`
  overflow: hidden;
  height: 20vh;
  max-height: 65vh;
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

const VideoDisabledContainer = styled(ItemVV2)`
  position: absolute;
  width: fit-content;
  text-align: center;
  color: white;
  z-index: 10;
  left: 45%;
  justify-content: center;
  align-items: center;
  `;

  const PfpContainer = styled(ItemVV2)`
  width: 5rem;
  height: 5rem;
  max-width: 5rem;
  margin: 0 1rem 0 0;
  border-radius: 100%;
  overflow: hidden;

  @media ${device.mobileL} {
    width: 2.875rem;
    height: 2.875rem;
    max-width: 2.875rem;
    margin: auto 1rem auto 0.3rem;
  }

  @media ${device.mobileS} {
    width: 2.5rem;
    height: 2.5rem;
    max-width: 2.5rem;
    margin: auto 0.5rem auto 0rem;
  }
`;