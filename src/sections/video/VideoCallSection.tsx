// React + Web3 Essentials
import { useWeb3React } from '@web3-react/core';
import React, { useContext, useState } from 'react';

// Internal Components
import { LOADER_SPINNER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import IncomingCall from 'components/video/IncomingCall';
import OutgoingOngoingCall from 'components/video/OutgoingOngoingCall';
import { VideoCallContext } from 'contexts/VideoCallContext';
import { BlockedLoadingI } from 'types/chat';
import { ChatUserContext } from 'contexts/ChatUserContext';
import { VideoCallStatus } from '@pushprotocol/restapi';

// Create Video Call
const VideoCallSection = () => {
  const { videoCallData, createWrapper, requestWrapper, acceptRequestWrapper, disconnectWrapper } = useContext(VideoCallContext);
  const { connectedUser, createUserIfNecessary } = useContext(ChatUserContext);

  const [isLoading, setLoading] = useState(true);
  const [blockedLoading, setBlockedLoading] = useState<BlockedLoadingI>({
    enabled: false,
    title: null,
  });

  React.useEffect(() => {
    const setupStream = async () => {
      setBlockedLoading({
        enabled: true,
        title: 'Setting up Video...',
        progressEnabled: false,
      });

      console.log("VIDEO CALL SECTION USE EFFECT", "LOCAL STREAM", videoCallData.local.stream);
      
      try {
        if (videoCallData.local.stream === null) {
          await createWrapper();
        } else if (videoCallData.incoming[0].status === VideoCallStatus.INITIALIZED) {
          let createdUser;
          if (!connectedUser.publicKey) {
            createdUser = await createUserIfNecessary();
          }

          requestWrapper({
            senderAddress: videoCallData.local.address,
            recipientAddress: videoCallData.incoming[0].address,
            chatId: videoCallData.meta.chatId,
            pgpPrivateKey: connectedUser.privateKey || createdUser?.privateKey,
          });
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
          spinnerType: LOADER_SPINNER_TYPE.ERROR,
          progressEnabled: false,
        });
      }
    };

    setupStream();
  }, [videoCallData.local.stream]);

  // Incoming call UI
  if (videoCallData.incoming[0].status === VideoCallStatus.RECEIVED) {
    return (
      <IncomingCall />
    );
  }

  // Outgoing & Ongoing call UI
  return (
    <OutgoingOngoingCall
      blockedLoading={blockedLoading}
    />
  );
};

export default VideoCallSection;
