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
import { ItemHV2, SectionV2 } from 'components/reusables/SharedStylingV2';
import VideoPlayer from 'components/video/VideoPlayer';
import UserInfo from 'components/video/UserInfo';
import CallButton from './CallButton';
import MediaToggleButton from './MediaToggleButton';
import videoIcon from '../../assets/icons/video-icon.svg';
import audioIcon from '../../assets/icons/audio-icon.svg';
import endCallIcon from '../../assets/icons/end-call-icon.svg';
import { BlockedLoadingI } from 'types/chat';

// Internal Configs
import GLOBALS from 'config/Globals';
import { useDeviceWidthCheck } from 'hooks';
import { VideoCallContext } from 'contexts/VideoCallContext';

type OutgoingOngoingCallType = {
  blockedLoading: BlockedLoadingI;
  onEndCall: () => void;
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

const OutgoingOngoingCall = ({ blockedLoading, onEndCall }: OutgoingOngoingCallType) => {
  const { callAccepted } = useContext(VideoCallContext);
  const isImmersive = useDeviceWidthCheck(425) && !callAccepted;
  
  const [togglevideo, setToggleVideo] = React.useState(true);

  return (
    <Container>
      {/* remote user info */}
      <UserInfo
        // TODO: make this dynamic with remote user's info
        pfp={'pfp'}
        username="temp"
        address={'0x1234123123123123'}
        status="Calling"
        containerStyles={isImmersive ? userInfoImmersiveStyles : {}}
        fontColor={isImmersive ? 'white' : null}
      />

      {/* display the local and incoming video */}
      <VideoPlayer
        videostatus={togglevideo}
        localVideoStyles={isImmersive ? playerImmersiveStyles : {}}
      />

      {/* display video call controls */}
      <VideoCallControlsContainer style={isImmersive ? callControlsImmersiveStyles : {}}>
        <MediaToggleButton
          iconSrc={videoIcon}
          iconWidth="23px"
          onClick={() => {
            // TODO
            setToggleVideo((togglevideo) => !togglevideo);
            console.log('video toggled');
          }}
        />
        <MediaToggleButton
          iconSrc={audioIcon}
          iconWidth="14.5px"
          onClick={() => {
            // TODO
            console.log('audio toggled');
          }}
        />
        <CallButton
          buttonStyles={{ background: '#e60808' }}
          iconSrc={endCallIcon}
          onClick={onEndCall}
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
`;

const VideoCallControlsContainer = styled(ItemHV2)`
  width: fit-content;
  max-width: fit-content;
  margin: 1% auto;
`;

export default OutgoingOngoingCall;
