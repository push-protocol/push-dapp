// React + Web3 Essentials
import React, { useState } from 'react';

// External Packages
import styled from 'styled-components';
import { MdClear } from 'react-icons/md';

// Internal Components
import { ItemHV2, SectionV2 } from 'components/reusables/SharedStylingV2';
import IncomingCallModalContent from './IncomingCallModalContent';
import UserInfo from './UserInfo';
import VideoPlayer from './VideoPlayer';
import CallButton from './CallButton';
import endCallIcon from '../../assets/icons/end-call-icon.svg';
import pickCallIcon from '../../assets/icons/pick-call-icon.svg';
import { useDeviceWidthCheck } from 'hooks';

// Internal Configs
import { device } from 'config/Globals';

type IncomingCallType = {
  onAnswerCall: () => void;
  onEndCall: () => void;
};

// container styles for minimized incoming call
const minimizedContainerStyles = {
  bottom: '16%',
  right: '2%',
};

// content container styles for minimized incoming call
const minimizedContentContainerStyles = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '32vw',
};

const IncomingCall = ({ onAnswerCall, onEndCall }: IncomingCallType) => {
  const isMobile = useDeviceWidthCheck(425);
  const [isIncomingCallMinimized, setIsIncomingCallMinimized] = useState(false);

  const minimizeCallHandler = () => {
    setIsIncomingCallMinimized(true);
  };

  return (
    <Container>
      <IncomingCallModalContent
        containerStyles={isIncomingCallMinimized ? minimizedContainerStyles : {}}
        contentContainerStyles={isIncomingCallMinimized ? minimizedContentContainerStyles : {}}
      >
        {!isIncomingCallMinimized && (
          <CrossIconContainer>
            <CrossIcon onClick={minimizeCallHandler} />
          </CrossIconContainer>
        )}

        {/* remote user info */}
        <UserInfo
          // TODO: make this dynamic with remote user's info
          pfp={'pfp'}
          username="temp"
          address={'0x1234123123123123'}
          status="Incoming Video Call"
          containerStyles={{ margin: isMobile ? '2.5% 0 4% 3%' : '2.5% auto' }}
        />

        {!isIncomingCallMinimized && (
          <VideoPlayer
            localVideoStyles={{
              height: '35vh',
              maxHeight: '35vh',
              borderRadius: '24px',
              width: '90%',
              margin: '2% auto',
            }}
          />
        )}

        {/* display video call controls */}
        <VideoCallControlsContainer style={{ margin: `5% ${isIncomingCallMinimized ? '2%' : 'auto'}` }}>
          <CallButton
            buttonStyles={{ background: '#08e673' }}
            iconSrc={pickCallIcon}
            onClick={onAnswerCall}
          />
          <CallButton
            buttonStyles={{
              background: '#e60808',
              width: '46px',
              maxWidth: '46px',
            }}
            iconSrc={endCallIcon}
            onClick={onEndCall}
          />
        </VideoCallControlsContainer>
      </IncomingCallModalContent>
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
  background: 'none';
  border: ${(props) => {
    return `5px solid ${props.theme.vcBorderColor}`;
  }};
  border-radius: 24px;
`;

const CrossIconContainer = styled(ItemHV2)`
  justify-content: flex-end;
  padding: 1rem 1rem 0 1rem;
`;

const CrossIcon = styled(MdClear)`
  width: 25px;
  height: 25px;
  cursor: pointer;
  color: ${(props) => props.theme.vcCrossIconColor};
  @media ${device.mobileL} {
    width: 20px;
    height: 20px;
  }
`;

const VideoCallControlsContainer = styled(ItemHV2)`
  width: fit-content;
  max-width: fit-content;
`;

export default IncomingCall;
