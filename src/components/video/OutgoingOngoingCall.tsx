// React + Web3 Essentials
import React from 'react';

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

type OutgoingOngoingCallType = {
  blockedLoading: BlockedLoadingI;
  onEndCall: () => void;
};

const OutgoingOngoingCall = ({ blockedLoading, onEndCall }: OutgoingOngoingCallType) => {
  return (
    <Container>
      {/* remote user info */}
      <UserInfo
        // TODO: make this dynamic with remote user's info
        pfp={'pfp'}
        username="temp"
        address={'0x1234123123123123'}
        status="Calling"
      />

      {/* display the local and incoming video */}
      <VideoPlayer />

      {/* display video call controls */}
      <VideoCallControlsContainer>
        <MediaToggleButton
          iconSrc={videoIcon}
          iconWidth="23px"
          onClick={() => {
            // TODO
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
  margin: 2.5% auto;
`;

export default OutgoingOngoingCall;
