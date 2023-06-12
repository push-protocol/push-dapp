// React + Web3 Essentials
import React, { useContext, useEffect, useState } from 'react';

// External Packages
// import { MdClear } from 'react-icons/md';
import { BsChevronDown } from 'react-icons/bs';
import styled from 'styled-components';
import * as PushAPI  from '@pushprotocol/restapi'

// Internal Components
import { ItemHV2, SectionV2 } from 'components/reusables/SharedStylingV2';
import { VideoCallContext } from 'contexts/VideoCallContext';
import { ChatUserContext } from 'contexts/ChatUserContext';
import { useDeviceWidthCheck } from 'hooks';
import endCallIcon from '../../assets/icons/end-call-icon.svg';
import pickCallIcon from '../../assets/icons/pick-call-icon.svg';
import CallButton from './CallButton';
import IncomingCallModalContent from './IncomingCallModalContent';
import UserInfo from './UserInfo';
import VideoPlayer from './VideoPlayer';
import { User } from 'types/chat';

// Internal Configs
import { device } from 'config/Globals';
import { VideoCallStatus } from '@pushprotocol/restapi';
import { appConfig } from 'config';

const IncomingCall = () => {
  const { connectedUser, createUserIfNecessary } = useContext(ChatUserContext);
  const { videoCallData, acceptRequestWrapper, disconnectWrapper } = useContext(VideoCallContext);
  const [incomingCallUserData,setIncomingCallUserData]=useState<User|null>(null);
  const [isIncomingCallMinimized, setIsIncomingCallMinimized] = useState(false);

  // for conditional css
  const isMobile = useDeviceWidthCheck(425);
  const isLaptopS = useDeviceWidthCheck(1025) && !isMobile;

  useEffect(()=>{
    (async()=>{
      const userData = await PushAPI.user.get({account:videoCallData.incoming[0].address,env:appConfig.appEnv});
      setIncomingCallUserData(userData);
    })()
  },[])

  const minimizeCallHandler = () => {
    setIsIncomingCallMinimized(true);
  };

  const answerCallHandler = async () => {
    let createdUser;
    if (!connectedUser.publicKey) {
      createdUser = await createUserIfNecessary();
    }

    acceptRequestWrapper({
      senderAddress: videoCallData.local.address,
      recipientAddress: videoCallData.incoming[0].address,
      chatId: videoCallData.meta.chatId,
      pgpPrivateKey: connectedUser.privateKey || createdUser?.privateKey,
    });
  };

  return (
    <Container>
      <IncomingCallModalContent isIncomingCallMinimized={isIncomingCallMinimized}>
        {!isIncomingCallMinimized && (
          <CrossIconContainer>
            <CrossIcon onClick={minimizeCallHandler} />
          </CrossIconContainer>
        )}

        {/* remote user info */}
        {videoCallData.incoming[0].status !== VideoCallStatus.CONNECTED && (
          <UserInfo
            // TODO: make this dynamic with remote user's info
            pfp={incomingCallUserData?.profilePicture}
            username={""}
            address={`${videoCallData.incoming[0].address}`}
            status="Incoming Video Call"
            containerStyles={{ margin: isMobile ? '2.5% 0 4% 2%' : '2.5% auto' }}
            source="minimized"
          />
        )}

        {!isIncomingCallMinimized && (
          <VideoPlayer
            incoming={true}
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
            onClick={answerCallHandler}
          />
          <CallButton
            buttonStyles={{
              background: '#e60808',
              width: isMobile ? '34px' : '46px',
              maxWidth: isMobile ? '34px' : '46px',
            }}
            iconSrc={endCallIcon}
            onClick={disconnectWrapper}
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

const CrossIcon = styled(BsChevronDown)`
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
