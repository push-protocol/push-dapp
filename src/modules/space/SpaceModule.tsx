// React + Web3 Essentials
import React from 'react';

// External Packages
import styled, { useTheme } from 'styled-components';

// Internal Components
import { SpaceBoxSection, SpaceSidebarSection } from 'sections/space';
import { ItemVV2 } from 'components/reusables/SharedStylingV2';

// Internal Configs
import GLOBALS, { device, globalsMargin } from 'config/Globals';

export const SpaceModule = () => {
  const theme = useTheme();

  // add activeTab state in useState and pass it with SpaceLocalContext
  
  // RENDER
  // wrap with SpaceLocalContext
  return (
    <Container>
      <SpaceSidebarContainer
        flex="1"
        maxWidth="310px"
        minWidth="280px"
        padding="10px 10px 10px 20px"
        boxSizing="border-box"
        background={theme.default.bg}
      >
        <SpaceSidebarSection />
      </SpaceSidebarContainer>
      <SpaceBoxContainer
        padding="10px"
      >
        <SpaceBoxSection />
      </SpaceBoxContainer>
    </Container>
  );
}

// This defines the page settings, toggle align-self to center if not covering entire stuff, align-items to place them at center
// justify content flex start to start from top, height is defined by module as well as amount of margin, padding
// css styles
const Container = styled.div`
	align-items: stretch;
	align-self: stretch;
  flex: 1;
	background: ${(props) => props.theme.default.bg};
	border-radius: ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE};
	box-shadow: ${GLOBALS.ADJUSTMENTS.MODULE_BOX_SHADOW};
	display: flex;
	flex-direction: row;
	flex: initial;
	justify-content: center;
	position: relative;
  overflow: hidden;
  box-sizing: border-box;

  margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};
  height: calc(100vh - ${GLOBALS.CONSTANTS.HEADER_HEIGHT}px - ${globalsMargin.MINI_MODULES.DESKTOP.TOP} - ${
  globalsMargin.MINI_MODULES.DESKTOP.BOTTOM
});
  
  @media ${device.laptop} {
    margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
    height: calc(100vh - ${GLOBALS.CONSTANTS.HEADER_HEIGHT}px - ${globalsMargin.MINI_MODULES.TABLET.TOP} - ${
  globalsMargin.MINI_MODULES.TABLET.BOTTOM
});
  }

  @media ${device.mobileL} {
    margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.MOBILE};
    height: calc(100vh - ${GLOBALS.CONSTANTS.HEADER_HEIGHT}px - ${globalsMargin.MINI_MODULES.MOBILE.TOP} - ${
  globalsMargin.MINI_MODULES.MOBILE.BOTTOM
});
    border: ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE};
`;

const SpaceSidebarContainer = styled(ItemVV2)`
  @media ${device.tablet} {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 95%;
    margin-right: 0%;
    opacity: 1;
    transition: margin-right 0.25s;
    max-width: initial;
    min-width: auto;
    z-index: 1;
  }
`;

const SpaceBoxContainer = styled(ItemVV2)`
  @media ${device.tablet} {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 95%;
    margin-left: 100%;
    transition: margin-left 0.25s;
    max-width: initial;
    min-width: auto;
    z-index: 2;
  }
`;