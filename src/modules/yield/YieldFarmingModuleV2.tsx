// React + Web3 Essentials
import React from 'react';

// External Packages
import ReactGA from 'react-ga';
import styled from 'styled-components';

// Internal Compoonents
import { ItemVV2, SectionV2 } from 'components/reusables/SharedStylingV2';
import YieldAnnouncementSection from 'sections/yield/YieldAnnouncementSection';
import YieldPushPriceSection from 'sections/yield/YieldPushPriceSection';
import YieldSnapshotSection from 'sections/yield/YieldSnapshotSection';
import YieldStatsSection from 'sections/yield/YieldStatsSection';

// Internal Configs
import { appConfig } from 'config';
import GLOBALS, { device, globalsMargin } from 'config/Globals';

// Constants
export const ALLOWED_CORE_NETWORK = appConfig.coreContractChain;

// Create Inbox Module
const YieldFarmingModuleV2 = () => {
  // React GA Analytics
  ReactGA.pageview('/yield');

  // Render
  return (
    <Container>
      <YieldAnnouncementSection />
      <YieldStatsSection />
      <YieldPushPriceSection />
      <YieldSnapshotSection />
    </Container>
  );
};
export default YieldFarmingModuleV2;

// css styles
const Container = styled(SectionV2)`
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
  width: calc(
    100% - ${globalsMargin.MINI_MODULES.DESKTOP.RIGHT} - ${globalsMargin.MINI_MODULES.DESKTOP.LEFT} -
      ${GLOBALS.ADJUSTMENTS.PADDING.BIG} - ${GLOBALS.ADJUSTMENTS.PADDING.BIG}
  );
  padding: ${GLOBALS.ADJUSTMENTS.PADDING.BIG};

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
