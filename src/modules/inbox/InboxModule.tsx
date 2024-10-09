// React + Web3 Essentials
import { ethers } from 'ethers';
import React from 'react';

// External Packages
import ReactGA from 'react-ga';
import { useDispatch, useSelector } from 'react-redux';
import { toast as toaster } from 'react-toastify';
import styled, { useTheme } from 'styled-components';

// Internal Compoonents
import InboxComponent from 'components/InboxComponent';
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { useAccount } from 'hooks';
import NotificationToast from 'primaries/NotificationToast';
import { Section } from 'primaries/SharedStyling';
import { setCommunicatorReadProvider, setCoreReadProvider, setPushAdmin } from 'redux/slices/contractSlice';
import ChannelsDataStore from 'singletons/ChannelsDataStore';
import UsersDataStore from 'singletons/UsersDataStore';

// Internal Configs
import APP_PATHS from 'config/AppPaths';
import GLOBALS, { device, globalsMargin } from 'config/Globals';
import { CHAIN_DETAILS, abis, addresses, appConfig } from 'config/index.js';

// Constants
export const ALLOWED_CORE_NETWORK = appConfig.coreContractChain;

// Create Inbox Module
const InboxModule = ({ isSpam }) => {
  // React GA Analytics
  ReactGA.pageview(APP_PATHS.Inbox);

  const dispatch = useDispatch();
  const { account, chainId, provider } = useAccount();
  const { epnsReadProvider, epnsCommReadProvider } = useSelector((state) => state.contracts);

  // toast related section
  const [toast, showToast] = React.useState(null);
  const clearToast = () => showToast(null);

  // whether secret notif are enabled

  const themes = useTheme();
  const onCoreNetwork = ALLOWED_CORE_NETWORK === chainId;

  //clear toast variable after it is shown
  React.useEffect(() => {
    if (toast) {
      clearToast();
    }
  }, [toast]);
  // toast related section

  React.useEffect(() => {
    if (!chainId) return;
    (async function init() {
      const coreProvider = onCoreNetwork ? provider : new ethers.providers.JsonRpcProvider(appConfig.coreRPC);

      // inititalise the read contract for the core network
      const coreContractInstance = new ethers.Contract(addresses.epnscore, abis.epnscore, coreProvider);
      // initialise the read contract for the communicator function
      const commAddress = CHAIN_DETAILS[chainId].commAddress;
      const commContractInstance = new ethers.Contract(commAddress, abis.epnsComm, provider);
      dispatch(setCommunicatorReadProvider(commContractInstance));
      dispatch(setCoreReadProvider(coreContractInstance));
    })();
  }, [account, chainId]);

  // toast customize
  const LoaderToast = ({ msg, color }) => (
    <Toaster>
      <LoaderSpinner
        type={LOADER_TYPE.SEAMLESS}
        spinnerSize={30}
        spinnerColor={color}
      />
      <ToasterMsg>{msg}</ToasterMsg>
    </Toaster>
  );

  const NormalToast = ({ msg }) => (
    <Toaster>
      <ToasterMsg>{msg}</ToasterMsg>
    </Toaster>
  );

  // notification toast
  let notificationToast = () =>
    toaster.dark(
      <LoaderToast
        msg="Preparing Notification"
        color="#fff"
      />,
      {
        position: 'bottom-right',
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );

  /**
   * When we instantiate the contract instances, fetch basic information about the user
   * Corresponding channel owned.
   */
  // TODO This is causing multiple errors constantly on timeout
  React.useEffect(() => {
    if (!epnsReadProvider || !epnsCommReadProvider) return;

    // save push admin to global state
    epnsReadProvider
      .pushChannelAdmin()
      .then((response) => {
        dispatch(setPushAdmin(response));
      })
      .catch((err) => {
        console.error({ err });
      });

    // Push (EPNS) Read Provider Set
    if (epnsReadProvider != null && epnsCommReadProvider != null) {
      // Instantiate Data Stores
      // UsersDataStore.getInstance().init(account, epnsReadProvider, epnsCommReadProvider);
      // ChannelsDataStore.getInstance().init(account, epnsReadProvider, epnsCommReadProvider, chainId);
    }
  }, [epnsReadProvider, epnsCommReadProvider]);

  // Render
  return (
    <Container>
      <Interface>
        <div className="joyride"></div>
        <InboxComponent isSpam={isSpam} />
        {/* <Feedbox /> */}
        {toast && (
          <NotificationToast
            notification={toast}
            clearToast={clearToast}
          />
        )}
      </Interface>
    </Container>
  );
};
export default InboxModule;

// css style
const Container = styled(Section)`
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
  height: calc(
    100vh - ${GLOBALS.CONSTANTS.HEADER_HEIGHT}px - ${globalsMargin.BIG_MODULES.DESKTOP.TOP} -
      ${globalsMargin.BIG_MODULES.DESKTOP.BOTTOM}
  );

  @media ${device.laptop} {
    margin: ${GLOBALS.ADJUSTMENTS.MARGIN.BIG_MODULES.TABLET};
    height: calc(
      100vh - ${GLOBALS.CONSTANTS.HEADER_HEIGHT}px - ${globalsMargin.BIG_MODULES.TABLET.TOP} -
        ${globalsMargin.BIG_MODULES.TABLET.BOTTOM}
    );
    border-radius: ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE} ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE}
      ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE} ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE};
  }

  @media ${device.mobileL} {
    margin: ${GLOBALS.ADJUSTMENTS.MARGIN.BIG_MODULES.MOBILE};
    height: calc(
      100vh - ${GLOBALS.CONSTANTS.HEADER_HEIGHT}px - ${globalsMargin.BIG_MODULES.MOBILE.TOP} -
        ${globalsMargin.BIG_MODULES.MOBILE.BOTTOM}
    );
    border: ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE};
    border-radius: ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE} ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE} 0 0;
  }
`;

const Interface = styled.div`
  flex: 1;
  display: flex;
  overflow: hidden;
`;

const Toaster = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 10px;
`;

const ToasterMsg = styled.div`
  margin: 0px 10px;
`;
