// React + Web3 Essentials
import React, { useContext, useEffect, useRef } from 'react';

// External Packages
import styled from 'styled-components';

// Internal Components
import { ImageV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { device } from 'config/Globals';
import { VideoCallContext } from 'contexts/VideoCallContext';
import { VideoCallStatus } from '@pushprotocol/restapi';
import { ChatUserContext } from 'contexts/ChatUserContext';
import { Context } from 'modules/chat/ChatModule';
import { AppContext } from 'types/chat';
import { max } from 'lodash';

type VideoPlayerType = {
  localVideoStyles?: {};
};

const VideoPlayer = ({ localVideoStyles }: VideoPlayerType) => {
  const localVideoRef = useRef(null);
  const incomingVideoRef = useRef(null);
  const { videoCallData } = useContext(VideoCallContext);
  const { connectedUser } = useContext(ChatUserContext);
  const { currentChat }: AppContext = useContext<AppContext>(Context);

  useEffect(() => {
    if (localVideoRef.current) {
      let video = localVideoRef.current;
      video.srcObject = videoCallData.local.stream;
      video.play();
    }
  }, [localVideoRef, videoCallData.local.stream]);

  useEffect(() => {
    if (incomingVideoRef.current) {
      let video = incomingVideoRef.current;
      video.srcObject = videoCallData.incoming[0].stream;
      video.play();
    }
  }, [incomingVideoRef, videoCallData.incoming[0].stream]);

  return (
    <Container>
      {videoCallData.local.stream && (
        <LocalVideoContainer
          className={
            videoCallData.incoming[0].status === VideoCallStatus.CONNECTED
              ? !videoCallData.local.stream.getVideoTracks()[0].enabled
                ? 'connectionAccepted videoOff'
                : 'connectionAccepted videoOn'
              : null
          }
          style={localVideoStyles}
        >
          <LocalVideo
            ref={localVideoRef}
            muted
          />
          {!videoCallData.local.stream.getVideoTracks()[0].enabled ? (
            <VideoDisabledContainer>
              <PfpContainerMini>
                <ImageV2
                  height="100%"
                  width="100%"
                  alt={`Profile pic`}
                  src={connectedUser?.profilePicture}
                  objectFit="cover"
                />
              </PfpContainerMini>
            </VideoDisabledContainer>
          ) : null}
        </LocalVideoContainer>
      )}
      {videoCallData.incoming[0].status === VideoCallStatus.CONNECTED && (
        <IncomingVideoContainer>
          <IncomingVideo ref={incomingVideoRef} />

          {!videoCallData.incoming[0].video && (
            <VideoDisabledContainer>
              <PfpContainer>
                <ImageV2
                  height="100%"
                  width="100%"
                  alt={`Profile pic`}
                  src={currentChat?.profilePicture}
                  objectFit="cover"
                />
              </PfpContainer>
            </VideoDisabledContainer>
          )}

          <ProfileInfoMini position="absolute">
            <PfpContainerMini>
              <ImageV2
                height="100%"
                width="100%"
                alt={`Profile pic`}
                src={currentChat?.profilePicture}
                objectFit="cover"
              />
            </PfpContainerMini>
            <SpanV2
              padding="10px"
              borderRadius="24px"
              background="#ffffffbb"
              zIndex="3"
            >
              {videoCallData.incoming[0].address}
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
  height: 50vh;
  max-height: 50vh;
  border-radius: 34px;
  margin: 2% auto;
  z-index: 2;

  @media ${device.laptopL} {
    aspect-ratio: 16/9;
  }

  @media ${device.laptop} {
    aspect-ratio: 16/9;
  }
  
  @media {max-width : 768px} {
    aspect-ratio: 4/3;
  }
  @media ${device.mobileL} {
    width: auto;
    max-width: 100%;
  }
  @media ${device.mobileM} {
    width: auto;
    max-width: 100%;
  }

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
  background-color: ${(props) => props.theme.chat.snapFocusBg};
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
  margin: 10px 10px 10px -5px;
  width: 5rem;
  height: 5rem;
  max-width: 5rem;
  border-radius: 100%;
  overflow: hidden;

  @media ${device.mobileL} {
    width: 3.5rem;
    height: 3.5rem;
    max-width: 3rem;
    margin: auto 1rem auto -0.2rem;
  }

  @media ${device.mobileS} {
    width: 2.5rem;
    height: 2.5rem;
    max-width: 2.5rem;
    margin: auto 1rem auto -0.2rem;
  }
`;
