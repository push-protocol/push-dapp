// React + Web3 Essentials
import React from "react";
import ReactGA from "react-ga";;

// External Packages
import styled from "styled-components";

// Internal Components
import ViewChannels from "segments/ViewChannels";
    
// Internal Configs
import GLOBALS, { device, globalsMargin } from "config/Globals";

// Create Channels Module
const ChannelsModule = ({ loadTeaser, playTeaser }) => {
  ReactGA.pageview("/channels");

  // Render
  return (
    <Container>
      <Interface>
        <ViewChannels loadTeaser={loadTeaser} playTeaser={playTeaser} />
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
    border-radius: ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE};
  }

  @media ${device.mobileM} {
    margin: ${GLOBALS.ADJUSTMENTS.MARGIN.BIG_MODULES.MOBILE};
    height: calc(100vh - ${GLOBALS.CONSTANTS.HEADER_HEIGHT}px - ${globalsMargin.BIG_MODULES.MOBILE.TOP} - ${globalsMargin.BIG_MODULES.MOBILE.BOTTOM});
    border: ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE};
    border-radius: ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE};
  }
`;

const Interface = styled.div`
  flex: 1;
  display: flex;

  overflow: hidden;
`;