import React, { useContext, useState } from 'react';
import ReactGA from 'react-ga';

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

import { AInlineV2, ButtonV2, H2V2, ImageV2, ItemHV2, ItemVV2, SectionV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import styled, { useTheme } from 'styled-components';

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

  // Web3 React logic
  const { connector, activate, active, error, account } = useWeb3React<Web3Provider>();
  const [activatingConnector, setActivatingConnector] = React.useState<AbstractConnector>();

  React.useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  // theme context
  const theme = useTheme();

  // SET LOADING
  const [loading, setLoading] = useState(true);

  // RENDER
  return (
    <Container alignItems="center">
      <BlurBG />

      <ItemHV2
        padding="16px 0"
        position="absolute"
        top="30px"
        right="30px"
        width="fit-content"
        borderRadius="100%"
        background="rgba(179, 178, 236, 0.5)"
        zIndex="99"
      >
        <DarkModeSwitch
          style={{ margin: '0 1rem' }}
          checked={theme.scheme == 'light' ? false : true}
          onChange={toggleDarkMode}
          size={24}
          sunColor="#fff"
        />
      </ItemHV2>

      {/* Login Module */}
      <ItemHV2 alignSelf="center" justifyContent="flex-start" flex="auto">
        {/* Logo */}
        <ItemHV2
          width="200px"
          margin={`${GLOBALS.ADJUSTMENTS.MARGIN.VERTICAL} ${GLOBALS.ADJUSTMENTS.MARGIN.HORIZONTAL}`}
          alignSelf="center"
          flex="initial"
        >
          {theme.scheme == 'light' && <EPNSLogoLight />}
          {theme.scheme == 'dark' && <EPNSLogoDark />}
        </ItemHV2>
        
        {/* Login Component */}
        <ItemHV2
          background={theme.default.bg}
          maxWidth="480px"
          padding={GLOBALS.ADJUSTMENTS.PADDING.DEFAULT}
          borderRadius={GLOBALS.ADJUSTMENTS.RADIUS.LARGE}
          alignSelf="center"
          flex="initial"
          shadow="0px 0px 9px rgba(18, 8, 46, 0.04)"
        >
          <H2V2
            textTransform="none"
            color={theme.default.color}
            fontSize="32px"
            margin={`${GLOBALS.ADJUSTMENTS.MARGIN.VERTICAL} 0 0 0`}
          >
            Connect a Wallet
          </H2V2>

          <ItemVV2 alignSelf="center" margin={`0 0 ${GLOBALS.ADJUSTMENTS.MARGIN.VERTICAL} 0`}>
            {Object.keys(web3Connectors).map((name) => {
              const currentConnector = web3Connectors[name].obj;
              const disabled = currentConnector === connector;
              const image = theme.scheme == 'light' ? web3Connectors[name].logolight : web3Connectors[name].logodark;
              const title = web3Connectors[name].title;

              return (
                <ButtonV2
                  disabled={disabled}
                  margin="20px"
                  padding="30px"
                  hover={theme.default.hover}
                  background={theme.default.bg}
                  borderRadius={GLOBALS.ADJUSTMENTS.RADIUS.MID}
                  minWidth="140px"
                  alignSelf="stretch"
                  key={name}
                  onClick={() => {
                    setActivatingConnector(currentConnector);
                    activate(currentConnector);
                  }}
                >
                  <ImageV2 src={image} height="68px" width="74px" padding="0px 0px 18px 0px"/>

                  <SpanV2
                    spacing="0.1em"
                    textTransform="Capitalize"
                    fontSize="18px"
                    fontWeight="500"
                    color={theme.default.color}
                  >
                    {title}
                  </SpanV2>
                </ButtonV2>
              );
            })}
          </ItemVV2>

          {/* TOS and PRIVACY */}
          <SpanV2
            fontSize="14px"
            padding="0px 20px 10px 20px"
            color={theme.default.color}
            lineHeight="140%"
          >
            By connecting your wallet, <b>You agree</b> to our <AInlineV2 href="https://epns.io/tos" target="_blank">Terms of Service</AInlineV2> and our <AInlineV2 href="https://epns.io/privacy" target="_blank">Privacy Policy</AInlineV2>.
          </SpanV2>
        </ItemHV2>

        {/* Chainsafe Audit and Discord */}
        <ItemHV2 margin="30px 0 0 0" flex="initial" maxWidth="920px">
          <SpanV2
            fontSize="14px"
            padding="25px 15px"
            lineHeight="140%"
            color={theme.default.color}
          >
            Note: The EPNS protocol has been under development for 1+ year, and completed a <AInlineV2 href="https://epns.io/EPNS-Protocol-Audit2021.pdf" target="_blank"> ChainSafe audit</AInlineV2> in October 2021. However, the mainnet is still a new product milestone. Always DYOR, and anticipate bugs and UI improvements. Learn how to report any bugs in our <AInlineV2 href="https://discord.com/invite/YVPB99F9W5" target="_blank">Discord</AInlineV2>.
          </SpanV2>
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
    padding: ${GLOBALS.ADJUSTMENTS.PADDING.MINI_MODULES.TABLET};
  }

  @media ${device.mobileM} {
    padding: ${GLOBALS.ADJUSTMENTS.PADDING.MINI_MODULES.MOBILE};
  }
`;

const PushLogo = styled.div`
  width: 200px;
  padding-bottom: 20px;
`;

const ProviderImage = styled.img`
  width: 73px;
  height: 69px;
  max-height: 69px;
  padding-bottom: 18px;
`;
