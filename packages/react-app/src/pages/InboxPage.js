import React from "react";
import ReactGA from "react-ga";

import styled, { css } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useWeb3React } from "@web3-react/core";

import NotificationToast from "components/NotificationToast";

import Feedbox from "segments/Feedbox";

import ChannelsDataStore from "singletons/ChannelsDataStore";
import UsersDataStore from "singletons/UsersDataStore";

import {
  setPushAdmin,
} from "redux/slices/contractSlice";

import GLOBALS from "config/Globals";

// Create Header
function InboxPage() {
  // React GA Analytics
  ReactGA.pageview("/inbox");

  const dispatch = useDispatch();
  const { account } = useWeb3React();
  const {
    epnsReadProvider,
    epnsCommReadProvider,
  } = useSelector((state) => state.contracts);

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

  /**
   * When we instantiate the contract instances, fetch basic information about the user
   * Corresponding channel owned.
   */
  React.useEffect(() => {
    if (!epnsReadProvider || !epnsCommReadProvider) return;
    
    // save push admin to global state
    epnsReadProvider.pushChannelAdmin()
    .then((response) => {
      dispatch(setPushAdmin(response));
    })
    .catch(err =>{
      console.log({err})
    });

    // EPNS Read Provider Set
    if (epnsReadProvider != null && epnsCommReadProvider != null) {
      // Instantiate Data Stores
      UsersDataStore.instance.init(
        account,
        epnsReadProvider,
        epnsCommReadProvider
      );
      ChannelsDataStore.instance.init(
        account,
        epnsReadProvider,
        epnsCommReadProvider
      );
    }
  }, [epnsReadProvider, epnsCommReadProvider]);

  // Render
  return (
    <Container>
      <Feedbox />
      {toast && (
        <NotificationToast notification={toast} clearToast={clearToast} />
      )}
    </Container>
  );
}

// css style
const Container = styled.div`
  flex-direction: column;
  background: ${props => props.theme.mainBg};
  height: calc(100vh - ${GLOBALS.CONSTANTS.HEADER_HEIGHT}px - 52px - ${props => props.theme.interfaceTopPadding});
  align-items: stretch;
  align-self: stretch;
`;

// Export Default
export default InboxPage;
