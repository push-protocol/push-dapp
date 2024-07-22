// React + Web3 Essentials
import React from 'react';
import ReactGA from 'react-ga';

// External Packages
import styled from 'styled-components';

// Internal Compoonents
import ChannelLoading from 'components/ChannelLoading';
import NotificationToast from 'primaries/NotificationToast';
import { Section } from 'primaries/SharedStyling';
import ChannelOwnerDashboard from './ChannelOwnerDashboard';

// Internal Configs
import { appConfig } from 'config/index.js';
import GLOBALS, { device, globalsMargin } from 'config/Globals';

// Constants
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
    <>
      {adminStatusLoaded ? <ChannelOwnerDashboard /> : <ChannelLoading />}
      {toast && (
        <NotificationToast
          notification={toast}
          clearToast={clearToast}
        />
      )}
    </>
  );
}

// css style
const Interface = styled.div`
  flex: 1;
  display: flex;

  margin-bottom: 15px;
  overflow: hidden;
`;

// Export Default
export default ChannelDashboardModule;
