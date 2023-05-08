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

// Create Video Call
const VideoCallSection = () => {
  const { account } = useWeb3React();
  const { videoCallInfo, localStream, createWrapper, requestWrapper, acceptRequestWrapper, endWrapper } =
    useContext(VideoCallContext);
  const { connectedUser, createUserIfNecessary } = useContext(ChatUserContext);

  const [isLoading, setLoading] = useState(true);
  const [blockedLoading, setBlockedLoading] = useState<BlockedLoadingI>({
    enabled: false,
    title: null,
  });

  const answerCallHandler = async () => {
    let createdUser;
    if (!connectedUser.publicKey) {
      createdUser = await createUserIfNecessary();
    }

    console.log("SENDER", account);
    console.log("RECEIVER", videoCallInfo.receiverAddress);

    acceptRequestWrapper({
      senderAddress: account,
      recipientAddress: videoCallInfo.receiverAddress,
      chatId: videoCallInfo.chatId,
      pgpPrivateKey: connectedUser.privateKey || createdUser?.privateKey,
    });
  };

  const endCallHandler = () => {
    endWrapper();
  };

  React.useEffect(() => {
    const setupStream = async () => {
      setBlockedLoading({
        enabled: true,
        title: 'Setting up Video...',
        progressEnabled: false,
      });

      try {
        if (!localStream) {
          await createWrapper();
        } else if (videoCallInfo.callStatus === 1) {
          let createdUser;
          if (!connectedUser.publicKey) {
            createdUser = await createUserIfNecessary();
          }

          requestWrapper({
            senderAddress: account,
            recipientAddress: videoCallInfo.receiverAddress,
            chatId: videoCallInfo.chatId,
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
  }, [localStream]);

  // Incoming call UI
  if (videoCallInfo.callStatus === 2) {
    return (
      <IncomingCall
        onAnswerCall={answerCallHandler}
        onEndCall={endCallHandler}
      />
    );
  }

  // Outgoing & Ongoing call UI
  return (
    <OutgoingOngoingCall
      blockedLoading={blockedLoading}
      onEndCall={endCallHandler}
    />
  );
};

export default VideoCallSection;
