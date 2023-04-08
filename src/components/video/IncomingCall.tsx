// React + Web3 Essentials
import React, { useContext, useState } from 'react';

// External Packages
import { MdClear } from 'react-icons/md';
import styled from 'styled-components';

// Internal Components
import { ItemHV2, SectionV2 } from 'components/reusables/SharedStylingV2';
import { VideoCallContext } from 'contexts/VideoCallContext';
import { useDeviceWidthCheck } from 'hooks';
import { BlockedLoadingI, VideoCallInfoI } from 'types/chat';
import endCallIcon from '../../assets/icons/end-call-icon.svg';
import pickCallIcon from '../../assets/icons/pick-call-icon.svg';
import CallButton from './CallButton';
import IncomingCallModalContent from './IncomingCallModalContent';
import UserInfo from './UserInfo';
import VideoPlayer from './VideoPlayer';

// Internal Configs
import { device } from 'config/Globals';

type IncomingCallType = {
  videoCallInfo: VideoCallInfoI;
  onAnswerCall: () => void;
  onEndCall: () => void;
};

const IncomingCall = ({ videoCallInfo, onAnswerCall, onEndCall }: IncomingCallType) => {
  // for conditional css
  const isMobile = useDeviceWidthCheck(425);
  const isLaptopS = useDeviceWidthCheck(1025) && !isMobile;

  const [isIncomingCallMinimized, setIsIncomingCallMinimized] = useState(false);

  const minimizeCallHandler = () => {
    setIsIncomingCallMinimized(true);
  };

  const { endLocalStream } = useContext(VideoCallContext);

  function handleClick() {
    endLocalStream();
    onEndCall();
  }

  return (
    <Container>
      <IncomingCallModalContent isIncomingCallMinimized={isIncomingCallMinimized}>
        {!isIncomingCallMinimized &&
          <CrossIconContainer>
            <CrossIcon onClick={minimizeCallHandler} />
          </CrossIconContainer>
        }

        {/* remote user info */}
        {videoCallInfo.establishConnection != 3 && 
          <UserInfo
            // TODO: make this dynamic with remote user's info
            pfp={videoCallInfo.fromProfilePic}
            username={videoCallInfo.fromProfileUsername}
            address={`${videoCallInfo.address}`}
            status="Incoming Video Call"
            containerStyles={{ margin: isMobile ? '2.5% 0 4% 2%' : '2.5% auto' }}
          />
        }

        {!isIncomingCallMinimized && (
          <VideoPlayer
            videoCallInfo={videoCallInfo}
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
        <VideoCallControlsContainer style={{ margin: `5% ${isIncomingCallMinimized && !isLaptopS ? '2%' : 'auto'}` }}>
          <CallButton
            buttonStyles={{ background: '#08e673' }}
            iconSrc={pickCallIcon}
            onClick={onAnswerCall}
          />
          <CallButton
            buttonStyles={{
              background: '#e60808',
              width: isMobile ? '34px' : '46px',
              maxWidth: isMobile ? '34px' : '46px',
            }}
            iconSrc={endCallIcon}
            onClick={handleClick}
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
