import React, { useState } from "react";
import ReactGA from "react-ga";

import { envConfig } from "@project/contracts";
import { AbstractConnector } from "@web3-react/abstract-connector";
import { useWeb3React } from "@web3-react/core";
import { injected, ledger, portis, walletconnect } from "connectors";
import { Web3Provider } from "ethers/providers";
import { useBrowserNotification, useEagerConnect, useInactiveListener } from "hooks";
import Joyride, { CallBackProps } from "react-joyride";
import { useLocation } from "react-router-dom";
import { DarkModeSwitch } from 'react-toggle-dark-mode';

import { ReactComponent as EPNSLogoDark } from './assets/epnsDark.svg';
import { ReactComponent as EPNSLogoLight } from './assets/epnsLight.svg';
import LedgerLogoDark from './assets/login/ledgerDark.svg';
import LedgerLogoLight from './assets/login/ledgerLight.svg';
import MMLogoDark from './assets/login/metamaskDark.svg';
import MMLogoLight from './assets/login/metamaskLight.svg';
import PortisLogoDark from './assets/login/portisDark.svg';
import PortisLogoLight from './assets/login/portisLight.svg';
import WCLogoDark from './assets/login/wcDark.svg';
import WCLogoLight from './assets/login/wcLight.svg';

import { ItemHV2, ItemVV2, SectionV2 } from "components/reusables/SharedStylingV2";
import Header from "sections/Header";
import Navigation from "sections/Navigation";
import styled from "styled-components";
import { A, B, C, H2, Image, Item, ItemH, P, Section, Span } from "./primaries/SharedStyling";

import NavigationContextProvider from "contexts/NavigationContext";
import MasterInterfacePage from "pages/MasterInterfacePage";

import { themeDark, themeLight } from "config/Themization";
import { ThemeProvider } from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import UserJourneySteps from "segments/userJourneySteps";
import { setIndex, setRun, setWelcomeNotifsEmpty } from "./redux/slices/userJourneySlice";

import InitState from "components/InitState";
import BlurBG from "components/reusables/blurs/BlurBG";

import GLOBALS, { device } from "config/Globals";

// define the different type of connectors which we use
const web3Connectors = {
  Injected: {
    obj: injected,
    logolight: MMLogoLight,
    logodark: MMLogoDark,
    title: "Metamask",
  },
  WalletConnect: {
    obj: walletconnect,
    logolight: WCLogoLight,
    logodark: WCLogoDark,
    title: "Wallet Connect",
  },
  // Trezor: {obj: trezor, logo: './svg/login/trezor.svg', title: 'Trezor'},
  Ledger: { obj: ledger, logolight: LedgerLogoLight, logodark: LedgerLogoDark, title: "Ledger" },
  Portis: { obj: portis, logolight: PortisLogoLight, logodark: PortisLogoDark, title: "Portis" },
};

const AppLogin = () => {
  // React GA Analytics
  ReactGA.pageview("/chat");

  // SET LOADING
  const [loading, setLoading] = useState(true);

  // RENDER
  return (
    <Container
      alignItems='center'
    >
      <BlurBG />
      <ItemHV2>
        Login Me
      </ItemHV2>
    </Container>
  );
}
export default AppLogin;

// This defines the page settings, toggle align-self to center if not covering entire stuff
const Container = styled(SectionV2)`
  padding: ${GLOBALS.ADJUSTMENTS.PADDING.MINI_MODULES.DESKTOP};

  @media ${device.laptop} { 
    padding-top: ${GLOBALS.ADJUSTMENTS.PADDING.MINI_MODULES.TABLET};
  }

  @media ${device.mobileM} {
    padding-top: ${GLOBALS.ADJUSTMENTS.PADDING.MINI_MODULES.MOBILE};
  }
`;


