// React + Web3 Essentials
import React, { useContext, useEffect, useRef } from 'react';

// External Packages
import styled from 'styled-components';

// Internal Components
import { ImageV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import UserInfo from 'components/video/UserInfo';
import { device } from 'config/Globals';
import { VideoCallContext } from 'contexts/VideoCallContext';
import { VideoCallInfoI } from 'types/chat';

type VideoPlayerType = {
  videoCallInfo?: VideoCallInfoI;
  localVideoStyles?: {};
};

const VideoPlayer = ({ videoCallInfo, localVideoStyles }: VideoPlayerType) => {
  const localVideoRef = useRef(null);
  const { callAccepted, userVideo, callEnded, localStream, incomingVideoOn, incomingAudioOn } =
    useContext(VideoCallContext);

  useEffect(() => {
    if (localVideoRef.current) {
      let video = localVideoRef.current;
      video.srcObject = localStream;
      video.play();
    }
  }, [localVideoRef, localStream]);

  console.log('Local Video : ', localStream);

  return (
    <Container>
      {localStream && (
        <LocalVideoContainer
          className={callAccepted && !callEnded ? !localStream.getVideoTracks()[0].enabled ? 'connectionAccepted videoOff' : 'connectionAccepted videoOn' : null}
          style={localVideoStyles}
        >
          <LocalVideo ref={localVideoRef} muted />
          {!localStream.getVideoTracks()[0].enabled ? (
            <VideoDisabledContainer>
              <PfpContainerMini>
                <ImageV2
                  height="100%"
                  width="100%"
                  alt={`Profile pic`}
                  src={videoCallInfo.fromProfilePic}
                  objectFit="cover"
                />
              </PfpContainerMini>
            </VideoDisabledContainer>
          ) : null}
        </LocalVideoContainer>
      )}
      {callAccepted && !callEnded && (
        <IncomingVideoContainer>
          <IncomingVideo
            playsInline
            ref={userVideo}
            autoPlay
          />
          
          {!incomingVideoOn &&
            <VideoDisabledContainer>
              <PfpContainer>
                <ImageV2
                  height="100%"
                  width="100%"
                  alt={`Profile pic`}
                  src={videoCallInfo.toProfilePic}
                  objectFit="cover"
                />
              </PfpContainer>
            </VideoDisabledContainer>
          }
          
          <ProfileInfoMini
            position="absolute"
          >
            <PfpContainerMini>
              <ImageV2
                height="100%"
                width="100%"
                alt={`Profile pic`}
                src={videoCallInfo.toProfilePic}
                objectFit="cover"
              />
            </PfpContainerMini>
            <SpanV2
              padding="10px"
              borderRadius="24px"
              background="#ffffffbb"
              zIndex="3"
            >
              {videoCallInfo.address}
            </SpanV2>
          </ProfileInfoMini>
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
  overflow: hidden;
`;

const LocalVideoContainer = styled(ItemVV2)`
  overflow: hidden;
  height: 47vh;
  max-height: 47vh;
  border-radius: 34px;
  margin: 0 auto;
  z-index: 2;

  &.connectionAccepted {
    border-radius: 24px;
    height: 18vh;
    max-height: 18vh;
    position: absolute;
    width: inherit;
    right: 35px;
    bottom: 8px;
    @media ${device.laptop} {
      right: 26px;
    }
    @media ${device.tablet} {
      bottom: -10px;
      right: 25px;
    }
    @media ${device.mobileL} {
      border-radius: 16px;
      bottom: -18px;
      right: 2.4%;
    }

    &.videoOff {
      background: #eeeeeeee;
    }

    &.videoOff > video {
      visibility: hidden;
    }
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
    @media (max-width: 768px) {
      height: 12vh;
      width: 18vh;
    }
  }
`;

const IncomingVideo = styled.video`
  border-radius: 34px;
  width: 100%;
  height: auto;

  @media (max-width: 768px) {
    width: auto;
    height: 100%;
  }
  @media (max-width: 425px) {
    border-radius: 20px;
  }
`;

const IncomingVideoContainer = styled(ItemVV2)`
  overflow: hidden;
  /* height: 20vh;
  max-height: 62vh;
  width: 95%; */
  background-color: #000000;
  /* left: 2.5%; */
  border-radius: 34px;
  z-index: 1;

  /* @media (max-height: 800px) {
    max-height: 50vh;
  }
  @media (max-width: 425px) {
    border-radius: 20px;
  } */
`;

const IncomingEnsContainer = styled(ItemVV2)`
  position: absolute;
  height: 10px;
  width: fit-content;
  padding: 10px;
  border-radius: 24px;
  background-color: #ffffff;
  opacity: 0.8;
  z-index: 3;
  left: 1.5%;
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

  &.connectionAccepted {
    visibility: hidden;
  }
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

const ProfileInfoMini = styled(ItemHV2)`
  left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 10px;
`;

const PfpContainerMini = styled(ItemVV2)`
  margin: 10px;
  width: 3rem;
  height: 3rem;
  max-width: 3rem;
  border-radius: 100%;
  overflow: hidden;

  @media ${device.mobileL} {
    width: 2.875rem;
    height: 2.875rem;
    max-width: 2.875rem;
  }

  @media ${device.mobileS} {
    width: 2.5rem;
    height: 2.5rem;
    max-width: 2.5rem;
  }
`;
