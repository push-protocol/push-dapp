import React, { useContext, useState } from 'react';
import ReactGA from 'react-ga';

import { envConfig } from '@project/contracts';
import { AbstractConnector } from '@web3-react/abstract-connector';
import { useWeb3React } from '@web3-react/core';
import { injected, ledger, portis, walletconnect } from 'connectors';
import { Web3Provider } from 'ethers/providers';
import { useBrowserNotification, useEagerConnect, useInactiveListener } from 'hooks';
import Joyride, { CallBackProps } from 'react-joyride';
import { useLocation } from 'react-router-dom';
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

import { H2V2, ItemHV2, ItemVV2, SectionV2 } from 'components/reusables/SharedStylingV2';
import Header from 'sections/Header';
import Navigation from 'sections/Navigation';
import styled, { useTheme } from 'styled-components';
import { A, B, C, H2, Image, Item, ItemH, P, Section, Span } from './primaries/SharedStyling';

import NavigationContextProvider from 'contexts/NavigationContext';
import MasterInterfacePage from 'pages/MasterInterfacePage';

import { themeDark, themeLight } from 'config/Themization';

import { useDispatch, useSelector } from 'react-redux';
import UserJourneySteps from 'segments/userJourneySteps';
import { setIndex, setRun, setWelcomeNotifsEmpty } from './redux/slices/userJourneySlice';

import InitState from 'components/InitState';
import BlurBG from 'components/reusables/blurs/BlurBG';

import GLOBALS, { device } from 'config/Globals';

// define the different type of connectors which we use
const web3Connectors = {
  Injected: {
    obj: injected,
    logolight: MMLogoLight,
    logodark: MMLogoDark,
    title: 'Metamask'
  },
  WalletConnect: {
    obj: walletconnect,
    logolight: WCLogoLight,
    logodark: WCLogoDark,
    title: 'Wallet Connect'
  },
  // Trezor: {obj: trezor, logo: './svg/login/trezor.svg', title: 'Trezor'},
  Ledger: { obj: ledger, logolight: LedgerLogoLight, logodark: LedgerLogoDark, title: 'Ledger' },
  Portis: { obj: portis, logolight: PortisLogoLight, logodark: PortisLogoDark, title: 'Portis' }
};

const AppLogin = ({ toggleDarkMode }) => {
  // React GA Analytics
  ReactGA.pageview('/login');

  // theme context
  const theme = useTheme();

  // SET LOADING
  const [loading, setLoading] = useState(true);

  // RENDER
  return (
    <Container alignItems="center">
      <BlurBG />

      <Item
        padding="16px 0"
        position="absolute"
        top="30px"
        right="30px"
        width="fit-content"
        radius="99px"
        bg="rgba(179, 178, 236, 0.5)"
        zIndex="99"
      >
        <DarkModeSwitch
          style={{ margin: '0 1rem' }}
          checked={theme.scheme == 'light' ? false : true}
          onChange={toggleDarkMode}
          size={24}
          sunColor="#fff"
        />
      </Item>

      {/* Login Module */}
      <ItemHV2 padding="30px">
        <ItemHV2 width="200px" padding={GLOBALS.ADJUSTMENTS.PADDING.DEFAULT} alignSelf="center" flex="initial">
          {theme.scheme == 'light' && <EPNSLogoLight />}
          {theme.scheme == 'dark' && <EPNSLogoDark />}
        </ItemHV2>
        <ItemHV2
          background={theme.default.bg}
          padding={GLOBALS.ADJUSTMENTS.PADDING.DEFAULT}
          borderRadius={GLOBALS.ADJUSTMENTS.RADIUS.DEFAULT}
          flex="initial"
          shadow="0px 0px 9px rgba(18, 8, 46, 0.04)"
        >
          <H2V2
            textTransform="none"
            color={theme.default.color}
            fontSize="32px"
            margin="0px"
          >
            Connect a Wallet
          </H2V2>

          {/* <ItemH maxWidth="430px" align="stretch">
            {Object.keys(web3Connectors).map((name) => {
              const currentConnector = web3Connectors[name].obj;
              const connected = currentConnector === connector;
              const disabled =
                !triedEager ||
                !!activatingConnector ||
                connected ||
                !!error;
              const image = darkMode ? web3Connectors[name].logodark : web3Connectors[name].logolight;
              const title = web3Connectors[name].title;

              return (
                <ProviderButton
                  disabled={disabled}
                  key={name}
                  onClick={() => {
                    setActivatingConnector(currentConnector);
                    activate(currentConnector);
                  }}
                >
                  <ProviderImage src={image} />

                  <Span
                    spacing="0.1em"
                    textTransform="Capitalize"
                    size="20px"
                    weight="500"
                    background={
                      darkMode
                        ? themeDark.backgroundBG
                        : themeLight.backgroundBG
                    }
                    color={
                      darkMode
                        ? themeDark.fontColor
                        : themeLight.fontColor
                    }
                  >
                    {title}
                  </Span>
                </ProviderButton>
              );
            })}
          </ItemH> */}
        </ItemHV2>
      </ItemHV2>
    </Container>
  );
};
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

const PushLogo = styled.div`
  width: 200px;
  padding-bottom: 20px;
`;
