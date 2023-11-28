// React + Web3 Essentials
import React from 'react';

// External Packages
import styled from 'styled-components';

// Internal Compoonents
import UserSettings from 'components/userSettings/UserSettings';


// Internal Configs
import GLOBALS, { device, globalsMargin } from 'config/Globals';

// Create Header
const UserSettingsModule = () => {
  return (
    <Container>
      <UserSettings />
    </Container>
  );
}

// css styles
const Container = styled.div`
	align-items: stretch;
	align-self: stretch;
  flex: 1;
	background: ${(props) => props.theme.default.bg};
	border-radius: ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE};
	box-shadow: ${GLOBALS.ADJUSTMENTS.MODULE_BOX_SHADOW};
	display: flex;
	flex-direction: column;
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
    height: calc(100vh - ${GLOBALS.CONSTANTS.HEADER_HEIGHT}px - ${globalsMargin.MINI_MODULES.MOBILE.TOP});
    border: ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE};
    border-radius: ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE} ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE} 0 0;
`;

// Export Default
export default UserSettingsModule;
