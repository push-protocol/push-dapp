// React + Web3 Essentials
import { useWeb3React } from '@web3-react/core';
import React, { useContext, useState } from 'react';

// External Packages
import styled from 'styled-components';

// Internal Components
import LoaderSpinner, {
  LOADER_OVERLAY,
  LOADER_SPINNER_TYPE,
  LOADER_TYPE,
  PROGRESS_POSITIONING,
} from 'components/reusables/loaders/LoaderSpinner';
import { SectionV2 } from 'components/reusables/SharedStylingV2';
import VideoPlayer from 'components/video/VideoPlayer';
import { VideoCallContext } from 'contexts/VideoCallContext';
import { BlockedLoadingI } from 'types/chat';
import VideoCallControls from 'components/video/VideoCallControls';
import UserInfo from 'components/video/UserInfo';
import IncomingCallModalContent from 'components/video/IncomingCallModalContent';

// Internal Configs
import GLOBALS from 'config/Globals';

// Interface
export interface VideoCallInfoI {
  address: string;
  fromPublicKeyArmored: string;
  toPublicKeyArmored: string;
  privateKeyArmored: string;
  establishConnection: number;
}

interface VideoCallSectionPropsI {
  videoCallInfo: VideoCallInfoI;
  setVideoCallInfo: Function;
  endVideoCallHook: Function;
}

// Create Video Call
const VideoCallSection = ({ videoCallInfo, setVideoCallInfo, endVideoCallHook }: VideoCallSectionPropsI) => {
  const [isLoading, setLoading] = useState(true);
  const [blockedLoading, setBlockedLoading] = useState<BlockedLoadingI>({
    enabled: false,
    title: null,
  });

  // get account
  const { account } = useWeb3React();

  // get stream
  const { initializeLocalStream, localStream, callUser, answerCall } = useContext(VideoCallContext);

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

  React.useEffect(() => {
    const setupStream = async () => {
      setBlockedLoading({
        enabled: true,
        title: 'Setting up Video...',
        progressEnabled: false,
      });

      try {
        // initialize the local stream for the given account
        if (!localStream) {
          await initializeLocalStream(account);
        } else {
          // send notification with id
          if (videoCallInfo.establishConnection == 1) {
            console.log('CALLING A USER');
            console.log('fromAddress', account);
            console.log('toAddress', videoCallInfo.address);

            callUser(account, videoCallInfo.address);
          } else if (videoCallInfo.establishConnection == 2) {
            // do nothing video player should handle that
          }
        }

        setBlockedLoading({
          enabled: false,
          title: 'Setting up Video...',
          progressEnabled: false,
        });
        setLoading(false);
      } catch (err) {
        setBlockedLoading({
          enabled: true,
          title: `Error: ${err}`,
          spinnerType: LOADER_SPINNER_TYPE.PROCESSING,
          progressEnabled: false,
        });
      }
    };

    setupStream();
  }, [localStream]);

  // TEMP
  // Incoming call UI
  if (videoCallInfo.establishConnection === 2) {
    return (
      <Container color="none">
        <IncomingCallModalContent
          onAccept={answerCallHandler}
          onReject={() => {}}
        >
          <UserInfo
            // TODO: make this dynamic with remote user's info
            pfp={'pfp'}
            username="temp"
            address={'0x1234123123123123'}
            status="Incoming Video Call"
            containerStyles={{ margin: '5% auto 2% auto' }}
          />

          <VideoPlayer
            localVideoStyles={{
              height: '35vh',
              maxHeight: '35vh',
              borderRadius: '24px',
              width: '90%',
              margin: '2% auto',
            }}
          />

          {/* display video call controls */}
          <VideoCallControls
            videoCallInfo={videoCallInfo}
            endVideoCallHook={endVideoCallHook}
            setVideoCallInfo={setVideoCallInfo}
            containerStyles={{ margin: '5% auto 6% auto' }}
          />
        </IncomingCallModalContent>
      </Container>
    );
  }

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
      <VideoCallControls
        videoCallInfo={videoCallInfo}
        endVideoCallHook={endVideoCallHook}
        setVideoCallInfo={setVideoCallInfo}
        answerCall={answerCall}
        account={account}
      />

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
  background: ${(props) => props.color || props.theme.vcBGColor};
  border: ${(props) => {
    return `5px solid ${props.theme.vcBorderColor}`;
  }};
  border-radius: 24px;
`;

export default VideoCallSection;
