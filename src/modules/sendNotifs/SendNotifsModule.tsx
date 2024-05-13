// React + Web3 Essentials
import React from 'react';

// External Packages
import ReactGA from 'react-ga';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Navigate } from 'react-router-dom';

// Internal Components
import SendNotifications from 'components/SendNotifications';
import { Section } from 'primaries/SharedStyling';
import { useAccount } from 'hooks';

// Internal Configs
import { appConfig } from 'config/index.js';
import GLOBALS, { device, globalsMargin } from 'config/Globals';

// Constants
export const ALLOWED_CORE_NETWORK = appConfig.coreContractChain; //chainId of network which we have deployed the core contract on
const CHANNEL_TAB = 2; //Default to 1 which is the channel tab

// Create Header
function ChannelDashboardPage() {
  ReactGA.pageview('/send_notificaiton');

  const dispatch = useDispatch();
  const { account, chainId } = useAccount();
  const { epnsReadProvider, epnsWriteProvider, epnsCommReadProvider } = useSelector((state: any) => state.contracts);
  const { channelDetails } = useSelector((state: any) => state.admin);

  const CORE_CHAIN_ID = appConfig.coreContractChain;
  const onCoreNetwork = CORE_CHAIN_ID === chainId;
  const INITIAL_OPEN_TAB = CHANNEL_TAB; //if they are not on a core network.redirect then to the notifications page

  const [controlAt, setControlAt] = React.useState(2);
  const [adminStatusLoaded, setAdminStatusLoaded] = React.useState(true);
  const [aliasEthAccount, setAliasEthAccount] = React.useState(null);
  const [aliasVerified, setAliasVerified] = React.useState(null); // null means error, false means unverified and true means verified
  const [channelAdmin, setChannelAdmin] = React.useState(true);
  const [channelJson, setChannelJson] = React.useState([]);

  // toast related section
  const [toast, showToast] = React.useState(null);
  const clearToast = () => showToast(null);

  //clear toast variable after it is shown
  React.useEffect(() => {
    if (toast) {
      clearToast();
    }
  }, [toast]);
  // toast related section

  // Render
  return (
    <Container>
      {controlAt === 2 && adminStatusLoaded ? (
        <>
          {/* redirect if not admin */}
          {!channelAdmin && (
            <Navigate
              replace
              to="/dashboard"
            />
          )}
          {channelAdmin && <SendNotifications />}
        </>
      ) : (
        <ChannelLoadingMessage>Channel details are being loaded, please wait…</ChannelLoadingMessage>
      )}
    </Container>
  );
}

// Define how the module is fitted, define it align-self to strect to fill entire bounds
// Define height: inherit to cover entire height
const Container = styled(Section)`
  align-items: center;
  align-self: center;
  background: ${(props) => props.theme.default.bg};
  border-radius: ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE} ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE}
    ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE} ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE};
  box-shadow: ${GLOBALS.ADJUSTMENTS.MODULE_BOX_SHADOW};
  display: flex;
  flex-direction: column;
  flex: initial;
  justify-content: center;
  max-width: 1200px;
  width: calc(100% - ${globalsMargin.MINI_MODULES.DESKTOP.RIGHT} - ${globalsMargin.MINI_MODULES.DESKTOP.LEFT});
  position: relative;
  margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};

  @media ${device.laptop} {
    margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
  }

  @media ${device.mobileL} {
    margin: ${GLOBALS.ADJUSTMENTS.MARGIN.BIG_MODULES.MOBILE};
    padding: ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT};
    width: calc(
      100% - ${globalsMargin.MINI_MODULES.MOBILE.RIGHT} - ${globalsMargin.MINI_MODULES.MOBILE.LEFT} -
        ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT} - ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT}
    );
    min-height: calc(100vh - ${GLOBALS.CONSTANTS.HEADER_HEIGHT}px - ${globalsMargin.BIG_MODULES.MOBILE.TOP});
    overflow-y: scroll;
    border-radius: ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE} ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE} 0 0;
  }
`;

// css style
const ChannelLoadingMessage = styled.div`
  width: 100%;
  padding: 40px;
  font-size: 1.5em;
  font-weight: 300;
  text-align: center;
  color: ${(props) => props.theme.color};
`;

// Export Default
export default ChannelDashboardPage;
