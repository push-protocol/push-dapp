// React + Web3 Essentials
import React, { useContext, useEffect, useRef } from 'react';

// External Packages
import styled, { useTheme } from 'styled-components';

// Internal Components
import { ImageV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { device } from 'config/Globals';
import { VideoCallContext } from 'contexts/VideoCallContext';
import { VideoCallStatus } from '@pushprotocol/restapi';
import { ChatUserContext } from 'contexts/ChatUserContext';
import { Context } from 'modules/chat/ChatModule';
import { AppContext } from 'types/chat';
import { AppContext as MainContext } from 'contexts/AppContext';
import { AppContextType } from 'types/context';
import { shortenText } from 'helpers/UtilityHelper';

type VideoPlayerType = {
  localVideoStyles?: {};
};

const VideoPlayer = ({ localVideoStyles }: VideoPlayerType) => {
  const localVideoRef = useRef(null);
  const incomingVideoRef = useRef(null);
  const { videoCallData } = useContext(VideoCallContext);
  const { connectedUser } = useContext(ChatUserContext);
  const { currentChat }: AppContext = useContext<AppContext>(Context);
  const { web3NameList }:AppContextType=React.useContext(MainContext);
  const web3Name=web3NameList[videoCallData.incoming[0].address]
  const theme=useTheme();

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
        <IncomingVideoContainer background={videoCallData.incoming[0].video ? "transparent" : theme.chat.snapFocusBg }>
          <IncomingVideoInnerContainer 
            width={videoCallData.incoming[0].video ? "auto":"100%"}
            minHeight={videoCallData.incoming[0].video ? "auto":"100%"}
          >
            <IncomingVideo ref={incomingVideoRef} display={videoCallData.incoming[0].video?'block':'none'}/>

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
              {web3Name ? web3Name : shortenText(videoCallData.incoming[0].address,5)}
            </SpanV2>
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
`;

const LocalVideoContainer = styled(ItemVV2)`
  overflow: hidden;
  height: 100%;
  border-radius: 34px;
  margin: 1% auto;
  z-index: 2;
  aspect-ratio: 16/9;

  @media ${device.laptopL} {
    aspect-ratio: 16/9;
  }

  @media (max-width: 1239px) {
    aspect-ratio: 4/3;
  }

  @media ${device.laptop} {
    aspect-ratio: 4/3;
  }
  
  @media (max-width: 820px) {
    aspect-ratio: 3/4;
  }

  @media (max-width: 768px) {
    aspect-ratio: 3/4;
  }
  @media ${device.mobileL} {
    height: 60%;
    aspect-ratio: 9/20;
  }
  @media ${device.mobileM} {
    aspect-ratio: 9/23;
  }
  @media ${device.mobileS} {
    aspect-ratio: 9/27;
  }

  &.connectionAccepted {
    border-radius: 24px;
    height: 18vh;
    max-height: 18vh;
    position: absolute;
    width: inherit;
    right: 9px;
    bottom: 9px;
    @media ${device.laptop} {
      right: 9px;
    }
    @media ${device.tablet} {
      bottom: 5px;
      right: 5px;
    }
    @media ${device.mobileL} {
      border-radius: 16px;
      bottom: 5px;
      right: 5px;
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
  width: auto;
  height: 100%;
  display:${props=> props.display};
 
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
  background-color: ${props=> props.background};
  /* left: 2.5%; */
  border-radius: 34px;
  z-index: 1;
  width: 100%;

  /* @media (max-height: 800px) {
    max-height: 50vh;
  }
  @media (max-width: 425px) {
    border-radius: 20px;
  } */
`;

const IncomingVideoInnerContainer=styled.div`
  width: ${props => props.width};
  min-height: 100%;
  max-height: 100%;
  border-radius: 34px;
  position: relative;
  @media (max-width:820px){
    width: 100%;
    min-height:${props => props.minHeight};
    max-height: 100%;
  }
`

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
  justify-content: center;
  align-items: center;
  left:50%;
  top: 50%;
  transform: translate(-50%,-50%);

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
  left: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 18px;
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

const NameBadge = styled(SpanV2)`
  padding: 3px 8px;
  border-radius: 8px;
  background: rgba(46, 49, 59, 0.75);
  color: #fff;
  z-index: 3;
`
