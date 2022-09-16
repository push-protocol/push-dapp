import { useWeb3React } from "@web3-react/core";
import { getReq } from "api";
import AliasVerificationodal from "components/AliasVerificationModal";
import { abis, addresses, appConfig } from "config";
import GLOBALS, { device, globalsMargin } from "config/Globals";
import { ethers } from "ethers";
import { convertAddressToAddrCaip } from "helpers/CaipHelper";
import EPNSCoreHelper from "helpers/EPNSCoreHelper";
import hex2ascii from "hex2ascii";
import NotificationToast from "primaries/NotificationToast";
import React from "react";
import ReactGA from "react-ga";
import { useDispatch, useSelector } from "react-redux";
import {
  setCanVerify,
  setDelegatees, setUserChannelDetails
} from "redux/slices/adminSlice";
import {
  setCommunicatorReadProvider,
  setCommunicatorWriteProvider, setCoreReadProvider,
  setCoreWriteProvider, setPushAdmin
} from "redux/slices/contractSlice";
import { addNewNotification } from "redux/slices/notificationSlice";
import ChannelOwnerDashboard from "segments/ChannelOwnerDashboard";
import Feedbox from "segments/Feedbox";
import Info from "segments/Info";
import ViewChannels from "segments/ViewChannels";
import ChannelsDataStore from "singletons/ChannelsDataStore";
import UsersDataStore from "singletons/UsersDataStore";
import styled from "styled-components";

export const ALLOWED_CORE_NETWORK = appConfig.coreContractChain; //chainId of network which we have deployed the core contract on
const CHANNEL_TAB = 1; //Default to 1 which is the channel tab

// Create Channels Module
const ChannelsModule = ({ loadTeaser, playTeaser }) => {
  ReactGA.pageview("/channels");

  const dispatch = useDispatch();
  const { account, library, chainId } = useWeb3React();
  const {
    epnsReadProvider,
    epnsWriteProvider,
    epnsCommReadProvider,
  } = useSelector((state) => state.contracts);

  const onCoreNetwork = ALLOWED_CORE_NETWORK === chainId;
  const INITIAL_OPEN_TAB = CHANNEL_TAB; //if they are not on a core network.redirect then to the notifications page

  const [controlAt, setControlAt] = React.useState(1);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [adminStatusLoaded, setAdminStatusLoaded] = React.useState(false);
  const [aliasVerified, setAliasVerified] = React.useState(null); // null means error, false means unverified and true means verified

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
      <Interface>
        {controlAt == 0 && <Feedbox />}
        {controlAt == 1 && <ViewChannels loadTeaser={loadTeaser} playTeaser={playTeaser} />}
        {controlAt == 2 && adminStatusLoaded && <ChannelOwnerDashboard />}
        {controlAt == 3 && <Info />}
        {toast && (
          <NotificationToast notification={toast} clearToast={clearToast} />
        )}
        {modalOpen && (
          <AliasVerificationodal
            onClose={() => setModalOpen(false)}
            onSuccess={() => setAliasVerified(true)}
            verificationStatus={aliasVerified}
          />
        )}
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