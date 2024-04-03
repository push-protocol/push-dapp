// React + Web3 Essentials
import React, { useEffect, useState } from "react";
import ReactGA from "react-ga";

// External Packages
import styled from "styled-components";

// Internal Components
import ChannelProfile from "segments/ChannelProfile";
import ViewChannels from "segments/ViewChannels";

// Internal Configs
import APP_PATHS from "config/AppPaths";
import GLOBALS, { device, globalsMargin } from "config/Globals";

export enum ChannelTYPE {
  CHANNEL = 'Channel',
  CHANNEL_PROFILE = 'Profile',
}

// Create Channels Module
const ChannelsModule = ({ channelID, loadTeaser, playTeaser }) => {
  ReactGA.pageview(APP_PATHS.Channels);

  // Render
  return (
    <Container>
      <Interface>
        <ViewChannels
          loadTeaser={loadTeaser}
          playTeaser={playTeaser}
          minimal={channelID ? true : false}
        />
        {channelID &&
          <ChannelProfile
            channelID={channelID}
            loadTeaser={loadTeaser}
            playTeaser={playTeaser}
            minimal={false}
            profileType={ChannelTYPE.CHANNEL_PROFILE}
          />
        }
      </Interface>
    </Container>
  );
}
export default ChannelsModule;

// css style 
const Container = styled.div`
	align-items: stretch;
	align-self: stretch;
  flex: 1;
	background: ${(props) => props.theme.default.bg};
	border-top-left-radius: ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE};
	box-shadow: ${GLOBALS.ADJUSTMENTS.MODULE_BOX_SHADOW};
	display: flex;
	flex-direction: column;
	flex: initial;
	justify-content: center;
	position: relative;
  overflow: hidden;
  box-sizing: border-box;

  margin: ${GLOBALS.ADJUSTMENTS.MARGIN.BIG_MODULES.DESKTOP};
  height: calc(100vh - ${GLOBALS.CONSTANTS.HEADER_HEIGHT}px - ${globalsMargin.BIG_MODULES.DESKTOP.TOP} - ${globalsMargin.BIG_MODULES.DESKTOP.BOTTOM});
  
  @media ${device.laptop} {
    margin: ${GLOBALS.ADJUSTMENTS.MARGIN.BIG_MODULES.TABLET};
    height: calc(100vh - ${GLOBALS.CONSTANTS.HEADER_HEIGHT}px - ${globalsMargin.BIG_MODULES.TABLET.TOP} - ${globalsMargin.BIG_MODULES.TABLET.BOTTOM});
    border-radius: ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE}  ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE}  ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE}  ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE};

  }

  @media ${device.mobileL} {
    margin: ${GLOBALS.ADJUSTMENTS.MARGIN.BIG_MODULES.MOBILE};
    height: calc(100vh - ${GLOBALS.CONSTANTS.HEADER_HEIGHT}px - ${globalsMargin.BIG_MODULES.MOBILE.TOP} - ${globalsMargin.BIG_MODULES.MOBILE.BOTTOM});
    border: ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE};
    border-radius: ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE} ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE}  0 0;

  }
`;

const Interface = styled.div`
  flex: 1;
  display: flex;

  overflow: hidden;
`;