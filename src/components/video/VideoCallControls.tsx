// React + Web3 Essentials
import { useContext } from 'react';

// External Packages
import styled from 'styled-components';
import { useWeb3React } from '@web3-react/core';

// Internal Components
import { ItemHV2 } from 'components/reusables/SharedStylingV2';
import { VideoCallInfoI } from 'sections/video/VideoCallSection';
import MediaToggleButton from './MediaToggleButton';
import CallButton from './CallButton';
import { VideoCallContext } from 'contexts/VideoCallContext';
import videoIcon from '../../assets/icons/video-icon.svg';
import audioIcon from '../../assets/icons/audio-icon.svg';
import endCallIcon from '../../assets/icons/end-call-icon.svg';
import pickCallIcon from '../../assets/icons/pick-call-icon.svg';

type VideoCallControlsProps = {
  videoCallInfo: VideoCallInfoI;
  endVideoCallHook: Function;
  setVideoCallInfo: Function;
  containerStyles?: {};
};

const VideoCallControls = ({ videoCallInfo, endVideoCallHook, setVideoCallInfo, containerStyles }: VideoCallControlsProps) => {
  const { account } = useWeb3React();
  const { answerCall, leaveCall } = useContext(VideoCallContext);

  const answerCallHandler = () => {
    setVideoCallInfo({
      address: videoCallInfo.address,
      fromPublicKeyArmored: videoCallInfo.fromPublicKeyArmored,
      toPublicKeyArmored: videoCallInfo.toPublicKeyArmored,
      privateKeyArmored: videoCallInfo.privateKeyArmored,
      establishConnection: 3,
    });
    answerCall(videoCallInfo.address, account);
  };

  return (
    <Container style={containerStyles}>
      {/* Outgoing and Ongoing Call */}
      {(videoCallInfo.establishConnection == 1 || videoCallInfo.establishConnection == 3) && (
        <>
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
            buttonStyles={{background: "#e60808"}}
            iconSrc={endCallIcon}
            onClick={() => {
              if (videoCallInfo.establishConnection == 3) {
                leaveCall();
              }
              endVideoCallHook();
            }}
          />
        </>
      )}

      {/* Incoming Call */}
      {videoCallInfo.establishConnection == 2 && (
        <>
          <CallButton
            buttonStyles={{background: "#08e673"}}
            iconSrc={pickCallIcon}
            onClick={() => {
              answerCallHandler();
            }}
          />
          <CallButton
            buttonStyles={{background: "#e60808", width: "46px", maxWidth: "46px"}}
            iconSrc={endCallIcon}
            onClick={() => {
              leaveCall();
              endVideoCallHook();
            }}
          />
        </>
      )}
    </Container>
  );
};

const Container = styled(ItemHV2)`
  margin: 2.5% 0;
`;

export default VideoCallControls;
