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
  height: calc(100vh - ${GLOBALS.CONSTANTS.HEADER_HEIGHT}px - 72px);
`;

const Controls = styled.div`
  flex: 0;
  display: flex;
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ControlButton = styled.div`
  flex: 1 1 21%;
  height: 120px;
  min-width: 200px;
  background: #fff;

  box-shadow: 0px 15px 20px -5px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  border: 1px solid rgb(225, 225, 225);

  border-bottom: 10px solid rgb(180, 180, 180);
  margin: 20px;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  border-bottom: 10px solid
    ${(props) => (props.active ? props.border : "rgb(180,180,180)")};

  &:hover {
    opacity: 0.9;
    cursor: pointer;
    pointer: hand;
  }
  &:active {
    opacity: 0.75;
    cursor: pointer;
    pointer: hand;
  }
`;

const ControlImage = styled.img`
  height: 30%;
  margin-right: 15px;
  filter: ${(props) => (props.active ? "brightness(1)" : "brightness(0)")};
  opacity: ${(props) => (props.active ? "1" : "0.25")};

  transition: transform 0.2s ease-out;
  ${(props) =>
    props.active &&
    css`
      transform: scale(3.5) translate(-20px, 0px);
      opacity: 0.4;
    `};
`;

const ControlText = styled.label`
  font-size: 16px;
  font-weight: 200;
  opacity: ${(props) => (props.active ? "1" : "0.75")};

  transition: transform 0.2s ease-out;
  ${(props) =>
    props.active &&
    css`
      transform: scale(1.3) translate(-10px, 0px);
    `};
`;

const ControlChannelContainer = styled.div`
  margin: 0px 20px;
  flex-direction: column;
  align-items: center;
  display: flex;
`;

const ControlChannelImage = styled.img`
  width: 20%;
  margin-bottom: 10px;
  transition: transform 0.2s ease-out;
  ${(props) =>
    props.active &&
    css`
      transform: scale(3.5) translate(-40px, 5px);
      opacity: 0.2;
      z-index: 1;
    `};
`;

const ControlChannelText = styled.label`
  font-size: 16px;
  font-weight: 300;
  opacity: ${(props) => (props.active ? "1" : "0.75")};
  transition: transform 0.2s ease-out;
  background: -webkit-linear-gradient(#db268a, #34c6f3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  z-index: 2;
  ${(props) =>
    props.active &&
    css`
      transform: scale(1.1) translate(0px, -20px);
    `};
`;

const Interface = styled.div`
  flex: 1;
  display: flex;

  overflow: hidden;
`;

// Export Default
export default InboxPage;
