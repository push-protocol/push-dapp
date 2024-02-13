// React + Web3 Essentials
import React, { useContext, useState } from 'react';

// Internal Components
import { LOADER_SPINNER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import IncomingCall from 'components/video/IncomingCall';
import OutgoingOngoingCall from 'components/video/OutgoingOngoingCall';
import { VideoCallContext } from 'contexts/VideoCallContext';
import { VideoCallStatus } from '@pushprotocol/restapi';
import { AppContext } from 'contexts/AppContext';
import { BlockedLoadingI } from 'types/context';

// Create Video Call
const VideoCallSection = () => {
  const { videoCallData, createWrapper, requestWrapper, acceptRequestWrapper, disconnectWrapper, isCallAccepted } =
    useContext(VideoCallContext);
  const { connectedUser, createUserIfNecessary } = useContext(AppContext);

  const [isLoading, setLoading] = useState(true);
  const [blockedLoading, setBlockedLoading] = useState<BlockedLoadingI>({
    enabled: false,
    title: null,
  });

  // handling a frontend error with resize-observer package
  React.useEffect(() => {
    window.addEventListener('error', function (err) {
      if (err.message === 'ResizeObserver loop limit exceeded') {
        const resizeObserverErrDiv = document.getElementById('webpack-dev-server-client-overlay-div');
        const resizeObserverErr = document.getElementById('webpack-dev-server-client-overlay');
        if (resizeObserverErr) {
          resizeObserverErr.setAttribute('style', 'display: none');
        }
        if (resizeObserverErrDiv) {
          resizeObserverErrDiv.setAttribute('style', 'display: none');
        }
      }
    });
  }, []);

  React.useEffect(() => {
    const setupStream = async () => {
      setBlockedLoading({
        enabled: true,
        title: 'Setting up Video...',
        progressEnabled: false,
      });

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
    return isCallAccepted ? <OutgoingOngoingCall blockedLoading={blockedLoading}/> : <IncomingCall />;
  }

  // Outgoing & Ongoing call UI
  return <OutgoingOngoingCall blockedLoading={blockedLoading} />;
};

export default VideoCallSection;
