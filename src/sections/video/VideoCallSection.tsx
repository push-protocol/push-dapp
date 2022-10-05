// React + Web3 Essentials
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';
import React, { useContext, useState } from "react";

// External Packages
import styled, { useTheme } from 'styled-components';

// Internal Compoonents
import LoaderSpinner, {
  LOADER_OVERLAY, LOADER_SPINNER_TYPE, LOADER_TYPE,
  PROGRESS_POSITIONING
} from 'components/reusables/loaders/LoaderSpinner';
import { ItemVV2, SectionV2 } from 'components/reusables/SharedStylingV2';
import VideoPlayer from 'components/video/VideoPlayer';
import { VideoCallContext } from 'contexts/VideoCallContext';
import { BlockedLoadingI } from 'sections/chat/ChatMainSection';

// Internal Configs
import GLOBALS, { device } from 'config/Globals';

// Interface
export interface VideoCallInfoI {
  address: string;
  fromPublicKeyArmored: string;
  toPublicKeyArmored: string;
  privateKeyArmored: string;
  establishConnection: boolean;
}

interface VideoCallSectionPropsI {
  videoCallInfo: VideoCallInfoI;
  endVideoCallHook: Function;
}

// Create Video Call
const videoCallSection = ({ videoCallInfo, endVideoCallHook }: VideoCallSectionPropsI) => {
  const [isLoading, setLoading] = useState(true);
  const [blockedLoading, setBlockedLoading] = useState<BlockedLoadingI>({
    enabled: false,
    title: null,
  });

  // get stream
  const { initializeStream, me } = useContext(VideoCallContext);
  
  React.useEffect(() => {
    
    const setupStream = async () => {
      setBlockedLoading({
        enabled: true,
        title: 'Setting up Video...',
        progressEnabled: false,
      });
      await new Promise(r => setTimeout(r, 200));
      try {
        await initializeStream();

        setBlockedLoading({
          enabled: false,
          title: 'Setting up Video...',
          progressEnabled: false,
        });
        setLoading(false);
      } 
      catch (err) {
        setBlockedLoading({
          enabled: true,
          title: `Error: ${err}`,
          spinnerType: LOADER_SPINNER_TYPE.PROCESSING,
          progressEnabled: false,
        });
      }
    }

    setupStream();
  }, []);

  // RENDER
  return (
    <Container>
      <VideoPlayer />

      {/* This always needs to be last */}
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
}
export default videoCallSection;

// css styles
const Container = styled(SectionV2)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  background: ${(props) => props.theme.default.bg};
`