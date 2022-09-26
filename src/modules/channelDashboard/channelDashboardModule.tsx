// React + Web3 Essentials
import React from 'react';
import ReactGA from 'react-ga';

// External Packages
import styled from 'styled-components';

// Internal Compoonents
import ChannelLoading from 'components/ChannelLoading';
import NotificationToast from 'primaries/NotificationToast';
import { Section } from 'primaries/SharedStyling';
import ChannelOwnerDashboard from 'segments/ChannelOwnerDashboard';

// Internal Configs
import { appConfig } from 'config';
import GLOBALS, { device, globalsMargin } from 'config/Globals';

export const ALLOWED_CORE_NETWORK = appConfig.coreContractChain; //chainId of network which we have deployed the core contract on

// Create Header
function ChannelDashboardModule() {
  ReactGA.pageview('/channel_dashboard');

  const [adminStatusLoaded, setAdminStatusLoaded] = React.useState(true);

  // toast related section
  const [toast, showToast] = React.useState(null);
  const clearToast = () => showToast(null);

  //clear toast variable after it is shown
  React.useEffect(() => {
    if (toast) {
      clearToast();
    }
  }, [toast]);
  
  // Render
  return (
    <Container>
      {adminStatusLoaded ? <ChannelOwnerDashboard /> : <ChannelLoading />}
      {toast && <NotificationToast notification={toast} clearToast={clearToast} />}
    </Container>
  );
}

// css style
const Container = styled(Section)`
  align-items: center;
  align-self: center;
  background: ${(props) => props.theme.default.bg};
  border-radius: ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE};
  box-shadow: ${GLOBALS.ADJUSTMENTS.MODULE_BOX_SHADOW};
  display: flex;
  flex-direction: column;
  flex: initial;
  justify-content: center;
  max-width: 1200px;
  width: calc(
    100% - ${globalsMargin.MINI_MODULES.DESKTOP.RIGHT} - ${globalsMargin.MINI_MODULES.DESKTOP.LEFT} -
      ${GLOBALS.ADJUSTMENTS.PADDING.HUGE} - ${GLOBALS.ADJUSTMENTS.PADDING.HUGE}
  );
  padding: ${GLOBALS.ADJUSTMENTS.PADDING.HUGE};
  position: relative;
  margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};

  @media ${device.laptop} {
    margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
    padding: ${GLOBALS.ADJUSTMENTS.PADDING.BIG};
    width: calc(
      100% - ${globalsMargin.MINI_MODULES.TABLET.RIGHT} - ${globalsMargin.MINI_MODULES.TABLET.LEFT} -
        ${GLOBALS.ADJUSTMENTS.PADDING.BIG} - ${GLOBALS.ADJUSTMENTS.PADDING.BIG}
    );
  }

  @media ${device.mobileM} {
    margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.MOBILE};
    padding: ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT};
    width: calc(
      100% - ${globalsMargin.MINI_MODULES.MOBILE.RIGHT} - ${globalsMargin.MINI_MODULES.MOBILE.LEFT} -
        ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT} - ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT}
    );
  }
`;

const Interface = styled.div`
  flex: 1;
  display: flex;

  margin-bottom: 15px;
  overflow: hidden;
`;

// Export Default
export default ChannelDashboardModule;
