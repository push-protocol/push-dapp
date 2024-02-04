// React + Web3 Essentials
import React, { useContext } from 'react';

// External Packages
import styled from 'styled-components';

// Internal Components
import LoaderSpinner, {
  LOADER_OVERLAY,
  LOADER_TYPE,
  PROGRESS_POSITIONING,
} from 'components/reusables/loaders/LoaderSpinner';
import { ImageV2, ItemHV2, ItemVV2, SectionV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import UserInfo from 'components/video/UserInfo';
import VideoPlayer from 'components/video/VideoPlayer';
import { VideoCallContext } from 'contexts/VideoCallContext';
import { useDeviceWidthCheck } from 'hooks';
import { BlockedLoadingI } from 'types/context';
import audioIcon from '../../assets/icons/audio-icon.svg';
import audioOffIcon from '../../assets/icons/audio-off-icon.svg';
import endCallIcon from '../../assets/icons/end-call-icon.svg';
import videoIcon from '../../assets/icons/video-icon.svg';
import videoOffIcon from '../../assets/icons/video-off-icon.svg';
import CallButton from './CallButton';
import MediaToggleButton from './MediaToggleButton';
import { VideoCallStatus } from '@pushprotocol/restapi';
import { Context } from 'modules/chat/ChatModule';
import { ChatUserAppContext } from 'types/chat';
import { OnConnectingVideoCall } from './OnConnectingVideoCall';

// Internal Configs
import GLOBALS from 'config/Globals';
// import EndToEnd from './EndToEnd';

type OutgoingOngoingCallType = {
  blockedLoading: BlockedLoadingI;
};

const userInfoImmersiveStyles = {
  position: 'absolute',
  top: '2%',
  left: '0',
  zIndex: '3',
  width: '100vw',
  maxWidth: '100vw',
  justifyContent: 'center',
};

const playerImmersiveStyles = {
  height: '100vh',
  maxHeight: '100vh',
};

const callControlsImmersiveStyles = {
  position: 'absolute',
  bottom: '4%',
  left: '0',
  width: '100vw',
  maxWidth: '100vw',
  justifyContent: 'center',
};

const OutgoingOngoingCall = ({ blockedLoading }: OutgoingOngoingCallType) => {
  const {
    videoCallData,
    disconnectWrapper,
    toggleVideoWrapper,
    toggleAudioWrapper,
    isCallAccepted,
  } = useContext(VideoCallContext);
  const isImmersive = useDeviceWidthCheck(425) && videoCallData.incoming[0].status === VideoCallStatus.INITIALIZED;
  const { currentChat }: ChatUserAppContext = useContext<ChatUserAppContext>(Context);

  return (
    <Container>
      {/* <EndToEnd /> */}
      {isCallAccepted ? (
        <OnConnectingVideoCall/>
      ) : (
        <>
          {/* remote user info */}
          {videoCallData.incoming[0].status !== VideoCallStatus.CONNECTED && (
            <UserInfo
              // TODO: make this dynamic with remote user's info
              pfp={currentChat?.profilePicture}
              username={''}
              address={`${videoCallData.incoming[0].address}`}
              status="Calling"
              containerStyles={isImmersive ? userInfoImmersiveStyles : {}}
              fontColor={isImmersive ? 'white' : null}
            />
          )}

          {/* display the local and incoming video */}
          <VideoPlayer localVideoStyles={isImmersive ? playerImmersiveStyles : {}} />
        </>
      )}

      {/* display video call controls */}
      <VideoCallControlsContainer style={isImmersive ? callControlsImmersiveStyles : {}}>
        <MediaToggleButton
          iconSrc={videoCallData.local.video ? videoIcon : videoOffIcon}
          iconWidth="23px"
          backgroundColor={videoCallData.local.video ? 'white' : '#e60808'}
          onClick={toggleVideoWrapper}
        />
        <MediaToggleButton
          iconSrc={videoCallData.local.audio ? audioIcon : audioOffIcon}
          iconWidth="14.5px"
          backgroundColor={videoCallData.local.audio ? 'white' : '#e60808'}
          onClick={toggleAudioWrapper}
        />
        <CallButton
          buttonStyles={{ background: '#e60808' }}
          iconSrc={endCallIcon}
          onClick={disconnectWrapper}
        />
      </VideoCallControlsContainer>

      {/* loader */}
      {blockedLoading.enabled && (
        <LoaderSpinner
          type={LOADER_TYPE.STANDALONE}
          overlay={LOADER_OVERLAY.ONTOP}
          blur={GLOBALS.ADJUSTMENTS.BLUR.DEFAULT}
          title={blockedLoading.title}
          width="50%"
          spinnerEnabled={blockedLoading.spinnerEnabled}
          spinnerSize={blockedLoading.spinnerSize}
          spinnerType={blockedLoading.spinnerType}
          progressEnabled={blockedLoading.progressEnabled}
          progressPositioning={PROGRESS_POSITIONING.BOTTOM}
          progress={blockedLoading.progress}
          progressNotice={blockedLoading.progressNotice}
        />
      )}
    </Container>
  );
};

const Container = styled(SectionV2)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  background: ${(props) => props.theme.vcBGColor};
  border: ${(props) => {
    return `5px solid ${props.theme.vcBorderColor}`;
  }};
  border-radius: 24px;
  padding: 10px;
`;

const VideoCallControlsContainer = styled(ItemHV2)`
  width: fit-content;
  max-width: fit-content;
  margin: 2% auto 0 auto;
  padding: 0 0 1% 0;
  flex: 0;
`;

export default OutgoingOngoingCall;
