import React from "react";
import ReactGA from "react-ga";
import { ethers } from "ethers";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import hex2ascii from "hex2ascii";
import { addresses, abis , envConfig } from "@project/contracts";
import { useWeb3React } from "@web3-react/core";
import EPNSCoreHelper from "helpers/EPNSCoreHelper";
import NotificationToast from "../primaries/NotificationToast";
import AliasVerificationodal from "components/AliasVerificationModal";
import Info from "segments/Info";
import Feedbox from "segments/Feedbox";
import ViewChannels from "segments/ViewChannels";
import ChannelOwnerDashboard from "segments/ChannelOwnerDashboard";
import ChannelsDataStore from "singletons/ChannelsDataStore";
import UsersDataStore from "singletons/UsersDataStore";
import { getReq } from "api";
import {
  setCoreReadProvider,
  setCoreWriteProvider,
  setCommunicatorReadProvider,
  setCommunicatorWriteProvider,
  setPushAdmin,
} from "redux/slices/contractSlice";
import {
  setUserChannelDetails,
  setCanVerify,
  setDelegatees,
} from "redux/slices/adminSlice";
import { addNewNotification } from "redux/slices/notificationSlice";

import GLOBALS from "config/Globals";
import { convertAddressToAddrCaip } from "helpers/CaipHelper";

export const ALLOWED_CORE_NETWORK = envConfig.coreContractChain; //chainId of network which we have deployed the core contract on
const CHANNEL_TAB = 1; //Default to 1 which is the channel tab

// Create Header
function InboxPage({ loadTeaser, playTeaser }) {
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
    <>
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
    </>
  );
}

// css style 
const Container = styled.div`
  display: flex;
  background: ${props => props.theme.mainBg};
  height: calc(100vh - ${GLOBALS.CONSTANTS.HEADER_HEIGHT}px - 52px - ${props => props.theme.interfaceTopPadding});
  align-self: stretch;
`;

const Interface = styled.div`
  flex: 1;
  display: flex;

  overflow: hidden;
`;

// Export Default
export default InboxPage;
