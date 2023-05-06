// React + Web3 Essentials
import { useWeb3React } from '@web3-react/core';
import React, { useContext, useState } from 'react';

// Internal Components
import { LOADER_SPINNER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import IncomingCall from 'components/video/IncomingCall';
import OutgoingOngoingCall from 'components/video/OutgoingOngoingCall';
import { VideoCallContext } from 'contexts/VideoCallContext';
import { BlockedLoadingI, VideoCallInfoI } from 'types/chat';
import { ChatUserContext } from 'contexts/ChatUserContext';

// Internal Configs

// Interface
interface VideoCallSectionPropsI {
  videoCallInfo: VideoCallInfoI;
  setVideoCallInfo: Function;
  endVideoCallHook: Function;
}

// Create Video Call
const VideoCallSection = ({ videoCallInfo, setVideoCallInfo, endVideoCallHook }: VideoCallSectionPropsI) => {
  const { connectedUser, createUserIfNecessary } = useContext(ChatUserContext);

  const [isLoading, setLoading] = useState(true);
  const [blockedLoading, setBlockedLoading] = useState<BlockedLoadingI>({
    enabled: false,
    title: null,
  });

  // get account
  const { account } = useWeb3React();

  // get stream
  const { initializeLocalStream,createWrapper, requestWrapper,acceptRequestWrapper, endWrapper } = useContext(VideoCallContext);

  const answerCallHandler = () => {
    setVideoCallInfo({
      address: videoCallInfo.address,
      fromProfileUsername: videoCallInfo.toProfileUsername,
      fromProfilePic: videoCallInfo.toProfilePic,
      fromPublicKeyArmored: videoCallInfo.fromPublicKeyArmored,
      toPublicKeyArmored: videoCallInfo.toPublicKeyArmored,
      toProfileUsername: videoCallInfo.fromProfileUsername,
      toProfilePic: videoCallInfo.fromProfilePic,
      privateKeyArmored: videoCallInfo.privateKeyArmored,
      establishConnection: 3,
    });
    acceptRequestWrapper(videoCallInfo.address,account);
  };

  const endCallHandler = () => {
    if (videoCallInfo.establishConnection === 3) {
      endWrapper();
    }
    endVideoCallHook();
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
        await createWrapper();

        requestWrapper(account, videoCallInfo.address);

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
          spinnerType: LOADER_SPINNER_TYPE.ERROR,
          progressEnabled: false,
        });
      }
    };

    setupStream();
  });

  // Incoming call UI
  if (videoCallInfo.establishConnection === 2) {
    return (
      <IncomingCall
        videoCallInfo={videoCallInfo}
        onAnswerCall={answerCallHandler}
        onEndCall={endCallHandler}
      />
    );
  }

  // Outgoing & Ongoing call UI
  return (
    <OutgoingOngoingCall
      videoCallInfo={videoCallInfo}
      blockedLoading={blockedLoading}
      onEndCall={endCallHandler}
    />
  );
};

export default VideoCallSection;
