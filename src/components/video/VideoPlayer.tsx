// React + Web3 Essentials
import React, { useContext, useEffect, useRef } from 'react';

// External Packages
import styled, { useTheme } from 'styled-components';

// Internal Components
import { ImageV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { device } from 'config/Globals';
import { VideoCallContext } from 'contexts/VideoCallContext';
import { VideoCallStatus } from '@pushprotocol/restapi';
import { Context } from 'modules/chat/ChatModule';
import { ChatUserAppContext } from 'types/chat';
import { AppContext, AppContext as MainContext } from 'contexts/AppContext';
import { AppContextType } from 'types/context';
import { shortenText } from 'helpers/UtilityHelper';
import Lock from 'assets/chat/group-chat/lockdark.svg'

type VideoPlayerType = {
  localVideoStyles?: {};
  incoming?: boolean;
};

const VideoPlayer = ({ localVideoStyles, incoming }: VideoPlayerType) => {
  const localVideoRef = useRef(null);
  const incomingVideoRef = useRef(null);
  const { videoCallData, isCallAccepted } = useContext(VideoCallContext);
  const { connectedUser } = useContext(AppContext);
  const { currentChat }: ChatUserAppContext = useContext<ChatUserAppContext>(Context);
  const { web3NameList }: AppContextType = React.useContext(MainContext);
  const web3Name = web3NameList[videoCallData.incoming[0].address];
  const theme = useTheme();

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
  const shortnedAddress =
    videoCallData.incoming[0].address.substring(0, 6) +
    '...' +
    videoCallData.incoming[0].address.substring(videoCallData.incoming[0].address.length - 6);

  return (
    <Container>
      {videoCallData.incoming[0].status === VideoCallStatus.CONNECTED && (
        <EncryptionMessage>
          <Image src={Lock} />
          End-to-end encrypted
        </EncryptionMessage>
      )}
      {videoCallData.local.stream && (
        <LocalVideoContainer
          incomingStyle={incoming}
          className={
            videoCallData.incoming[0].status === VideoCallStatus.CONNECTED
              ? !videoCallData.local.stream.getVideoTracks()[0].enabled
                ? 'connectionAccepted videoOff'
                : 'connectionAccepted videoOn'
              : 'connectionNotAccepted'
          }
          style={localVideoStyles}
        >
          
            <LocalVideo
              ref={localVideoRef}
              muted
              className={
                videoCallData.incoming[0].status === VideoCallStatus.CONNECTED
                  ? 'connectionAccepted'
                  : 'connectionNotAccepted'
              }
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
        <IncomingVideoContainer background={videoCallData.incoming[0].video ? 'transparent' : theme.chat.snapFocusBg}>
          <IncomingVideoInnerContainer
            width={videoCallData.incoming[0].video ? 'auto' : '100%'}
            minHeight={videoCallData.incoming[0].video ? 'auto' : '100%'}
          >
            <IncomingVideo
              ref={incomingVideoRef}
              display={videoCallData.incoming[0].video ? 'block' : 'none'}
            />

            {!videoCallData.incoming[0].video && (
              <VideoDisabledContainer className="incomingCallvideoOff">
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
              <NameBadge>{web3Name ? web3Name : shortenText(videoCallData.incoming[0].address, 5)}</NameBadge>
            </ProfileInfoMini>
          </IncomingVideoInnerContainer>
        </IncomingVideoContainer>
      )}
    </Container>
  );
};
export default VideoPlayer;

const Container = styled(ItemVV2)`
  overflow: hidden;
  margin: 2% auto 1% auto;
  width: 100%;
`;

const LocalVideoContainer = styled(ItemVV2)`
  overflow: hidden;
  height: 100%;
  border-radius: 34px;
  z-index: 2;
  // aspect-ratio: ${(props) => props.incomingStyle || '16/9'};

  // @media ${device.laptopL} {
  //   aspect-ratio: ${(props) => props.incomingStyle || '16/9'};
  // }

  // @media (max-width: 1239px) {
  //   aspect-ratio: ${(props) => props.incomingStyle || '4/3'};
  // }

  // @media ${device.laptop} {
  //   aspect-ratio: ${(props) => props.incomingStyle || '4/3'};
  // }

  // @media (max-width: 820px) {
  //   aspect-ratio: ${(props) => props.incomingStyle || '3/4'};
  // }

  // @media (max-width: 768px) {
  //   aspect-ratio: ${(props) => props.incomingStyle || '3/4'};
  // }
  // @media ${device.mobileL} {
  //   height: 60%;
  //   aspect-ratio: ${(props) => props.incomingStyle || '9/20'};
  // }
  // @media ${device.mobileM} {
  //   aspect-ratio: ${(props) => props.incomingStyle || '9/23'};
  // }
  // @media ${device.mobileS} {
  //   aspect-ratio: ${(props) => props.incomingStyle || '9/27'};
  // }

  &.connectionNotAccepted {
    @media (min-width: 1024px) {
      aspect-ratio: 16/9;
    }
  }

  &.connectionAccepted {
    border-radius: 24px;
    height: 18vh;
    max-height: 18vh;
    position: absolute;
    width: auto;
    right: 8px;
    bottom: 8px;

    @media ${device.laptop} {
      right: 8px;
    }
    @media ${device.tablet} {
      bottom: 8px;
      right: 8px;
    }
    @media ${device.mobileL} {
      border-radius: 16px;
      aspect-ratio: ${(props) => props.incomingStyle || '4/3'};
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
    z-index: 2;
    width: auto;
    @media (max-width: 768px) {
      height: 16vh;
      width: auto;
    }
  }
  &.connectionNotAccepted {
    @media (min-width: 1024px) {
      aspect-ratio: 16/9;
      height: 100%;
      width: auto;
    }
  }
`;

const IncomingVideo = styled.video`
  border-radius: 34px;
  width: auto;
  height: 100%;
  display: ${(props) => props.display};

  @media (max-width: 820px) {
    width: 100%;
    height: auto;
    object-fit: cover;
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
  background-color: ${(props) => props.background};
  /* left: 2.5%; */
  border-radius: 34px;
  z-index: 1;
  width: auto;

  /* @media (max-height: 800px) {
    max-height: 50vh;
  }
  @media (max-width: 425px) {
    border-radius: 20px;
  } */
`;

const IncomingVideoInnerContainer = styled.div`
  width: ${(props) => props.width};
  min-height: 100%;
  max-height: 100%;
  border-radius: 34px;
  position: relative;
  @media (max-width: 820px) {
    width: 100%;
    min-height: ${(props) => props.minHeight};
    max-height: 100%;
  }
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  justify-content: center;
  align-items: center;

  &.connectionAccepted {
    visibility: hidden;
  }

  }
`;

const PfpContainer = styled(ItemVV2)`
  width: 5rem;
  height: 5rem;
  max-width: 5rem;
  border-radius: 100%;
  overflow: hidden;

  @media ${device.mobileL} {
    width: 3.5rem;
    height: 3.5rem;
    max-width: 2.875rem;
  }

  // @media ${device.mobileS} {
  //   width: 2.5rem;
  //   height: 2.5rem;
  //   max-width: 2.5rem;
  // }
`;

const ProfileInfoMini = styled(ItemHV2)`
  left: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 18px;
`;

const PfpContainerMini = styled(ItemVV2)`
  width: 3.5rem;
  height: 3.5rem;
  max-width: 5rem;
  border-radius: 100%;
  overflow: hidden;

  @media ${device.mobileL} {
    width: 3.5rem;
    height: 3.5rem;
    max-width: 3rem;
  }

  // @media ${device.mobileS} {
  //   width: 2.5rem;
  //   height: 2.5rem;
  //   max-width: 2.5rem;
  // }
`;

const NameBadge = styled(SpanV2)`
  padding: 3px 8px;
  border-radius: 8px;
  background: rgba(46, 49, 59, 0.75);
  color: #fff;
  z-index: 3;
`;

const Image = styled.img`
  width: 10px;
  margin-right: 12px;
  position: relative;
  bottom: -1px;
`;

const EncryptionMessage = styled.div`
  box-sizing: border-box;
  color: ${(props) => props.theme.default.secondaryColor};
  max-width: 556px;
  font-weight: 400;
  font-size: 15px;
  line-height: 130%;
  background-color: ${(props) => props.theme.default.bg};
  padding: 10px 15px;
  border-radius: 14px;
  text-align: center;
  margin-bottom: 10px;
  max-height: 37px;
`;
