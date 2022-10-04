// React + Web3 Essentials
import { Web3Provider } from '@ethersproject/providers';
import { AbstractConnector } from '@web3-react/abstract-connector';
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected
} from '@web3-react/injected-connector';
import { ethers } from "ethers";
import React, { useContext, useState } from 'react';

// External Packages
import ReactGA from 'react-ga';
import Joyride, { CallBackProps } from 'react-joyride';
import { useLocation } from 'react-router-dom';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

// Internal Compoonents
import BlurBGClouds from 'components/reusables/blurs/BlurBGClouds';
import {
  AInlineV2,
  ButtonV2,
  H2V2,
  ImageV2,
  ItemHV2,
  ItemVV2,
  SectionV2,
  SpanV2
} from 'components/reusables/SharedStylingV2';
import { injected, ledger, walletconnect } from 'connectors';
import { useEagerConnect, useInactiveListener } from 'hooks';
import styled, { useTheme } from 'styled-components';
import LedgerLogoDark from './assets/login/ledgerDark.svg';
import LedgerLogoLight from './assets/login/ledgerLight.svg';
import MMLogoDark from './assets/login/metamaskDark.svg';
import MMLogoLight from './assets/login/metamaskLight.svg';
import WCLogoDark from './assets/login/wcDark.svg';
import WCLogoLight from './assets/login/wcLight.svg';
import { ReactComponent as PushLogoDark } from './assets/pushDark.svg';
import { ReactComponent as PushLogoLight } from './assets/pushLight.svg';

// Internal Configs
import { appConfig } from 'config';
import GLOBALS, { device } from 'config/Globals';

// define the different type of connectors which we use
const web3Connectors = {
  Injected: {
    obj: injected,
    logolight: MMLogoLight,
    logodark: MMLogoDark,
    title: 'Metamask',
  },
  WalletConnect: {
    obj: walletconnect,
    logolight: WCLogoLight,
    logodark: WCLogoDark,
    title: 'Wallet Connect',
  },
  // Trezor: {obj: trezor, logo: './svg/login/trezor.svg', title: 'Trezor'},
  Ledger: { obj: ledger, logolight: LedgerLogoLight, logodark: LedgerLogoDark, title: 'Ledger' },
};

async function handleChangeNetwork() {
  const chainIds = appConfig.allowedNetworks;
  if (!chainIds.includes(window.ethereum.networkVersion)) {
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: ethers.utils.hexValue(appConfig.coreContractChain) }],
      });
    } catch (err) {
      console.error(err);
    }
  }
}

// handle error functions
function getErrorMessage(error: Error) {
  if (error instanceof NoEthereumProviderError) {
    return 'Web3 not enabled, install MetaMask on desktop or visit from a dApp browser on mobile';
  } else if (error instanceof UnsupportedChainIdError) {
    handleChangeNetwork();
    if (appConfig.coreContractChain === 42)
      return 'Unsupported Network, please connect to the Ethereum Kovan network or Polygon Mumbai network';
    else if (appConfig.coreContractChain === 5)
      return 'Unsupported Network, please connect to the Ethereum Goerli network or Polygon Mumbai network';
    else return 'Unsupported Network, please connect to the Ethereum Mainnet network or Polygon Mainnet network';
  } else if (error instanceof UserRejectedRequestErrorInjected) {
    return 'Please authorize this website to access the dApp';
  } else {
    console.error(error);
    return 'An unknown error occurred. Check the console for more details';
  }
}

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
      <BlurBGClouds />
      <ItemHV2 flexWrap="nowrap" maxWidth="fit-content" alignSelf="flex-end" flex="initial">
        {!!error && (
          <SpanV2 padding="0.4rem 1rem" margin="0 1rem" borderRadius="20px" background="#CF1C84" color="#fff">
            {getErrorMessage(error)}
          </SpanV2>
        )}
        <ItemHV2
          padding="16px 0"
          width="fit-content"
          height="fit-content"
          borderRadius="100%"
          alignSelf="center"
          background="rgba(179, 178, 236, 0.5)"
          zIndex="99">
          <DarkModeSwitch
            style={{ margin: '0 1rem' }}
            checked={theme.scheme == 'light' ? false : true}
            onChange={toggleDarkMode}
            size={24}
            sunColor="#fff"
          />
        </ItemHV2>
      </ItemHV2>
      {/* Login Module */}
      <ItemVV2 alignSelf="center" justifyContent="flex-start" flex="auto">
        {/* Logo */}
        <ItemVV2
          width="200px"
          margin={`${GLOBALS.ADJUSTMENTS.MARGIN.VERTICAL} ${GLOBALS.ADJUSTMENTS.MARGIN.HORIZONTAL}`}
          alignSelf="center"
          flex="initial">
          {theme.scheme == 'light' && <PushLogoLight />}
          {theme.scheme == 'dark' && <PushLogoDark />}
        </ItemVV2>

        {/* Login Component */}
        <ItemVV2
          background={theme.default.bg}
          maxWidth="440px"
          padding={GLOBALS.ADJUSTMENTS.PADDING.DEFAULT}
          borderRadius={GLOBALS.ADJUSTMENTS.RADIUS.LARGE}
          alignSelf="center"
          flex="initial"
          shadow="0px 0px 9px rgba(18, 8, 46, 0.04)">
          <H2V2
            textTransform="none"
            color={theme.default.color}
            fontSize="32px"
            fontWeight="500"
            margin={`${GLOBALS.ADJUSTMENTS.MARGIN.VERTICAL} 0`}>
            Connect a Wallet
          </H2V2>

          <ItemVV2 alignSelf="stretch" alignItems="flex-start" margin={`0 0 ${GLOBALS.ADJUSTMENTS.MARGIN.VERTICAL} 0`}>
            {Object.keys(web3Connectors).map((name) => {
              const currentConnector = web3Connectors[name].obj;
              const disabled = currentConnector === connector;
              const image = theme.scheme == 'light' ? web3Connectors[name].logolight : web3Connectors[name].logodark;
              const title = web3Connectors[name].title;

              return (
                <LoginButton
                  disabled={disabled}
                  margin="10px"
                  padding="10px"
                  hover={theme.default.hover}
                  background={theme.default.bg}
                  borderRadius={GLOBALS.ADJUSTMENTS.RADIUS.MID}
                  minWidth="140px"
                  alignSelf="stretch"
                  key={name}
                  onClick={() => {
                    setActivatingConnector(currentConnector);
                    activate(currentConnector);
                  }}>
                  <ImageV2 src={image} height="40px" width="50px" padding="5px" />

                  <SpanV2
                    padding="5px"
                    textTransform="Capitalize"
                    fontSize="18px"
                    fontWeight="500"
                    color={theme.default.color}>
                    {title}
                  </SpanV2>
                </LoginButton>
              );
            })}
          </ItemVV2>

          {/* TOS and PRIVACY */}
          <SpanV2 fontSize="14px" padding="0px 20px 10px 20px" color={theme.default.color} lineHeight="140%">
            By connecting your wallet, <b>You agree</b> to our{' '}
            <AInlineV2 href="https://epns.io/tos" target="_blank">
              Terms of Service
            </AInlineV2>{' '}
            and our{' '}
            <AInlineV2 href="https://epns.io/privacy" target="_blank">
              Privacy Policy
            </AInlineV2>
            .
          </SpanV2>
        </ItemVV2>

        {/* Chainsafe Audit and Discord */}
        <ItemVV2 margin="30px 0 0 0" flex="initial" maxWidth="920px">
          <SpanV2 fontSize="14px" padding="25px 15px" lineHeight="140%" color={theme.default.color}>
            Note: The Push (EPNS) protocol has been under development for 1+ year, and completed a{' '}
            <AInlineV2 href="https://epns.io/EPNS-Protocol-Audit2021.pdf" target="_blank">
              {' '}
              ChainSafe audit
            </AInlineV2>{' '}
            in October 2021. However, the mainnet is still a new product milestone. Always DYOR, and anticipate bugs and
            UI improvements. Learn how to report any bugs in our{' '}
            <AInlineV2 href="https://discord.com/invite/YVPB99F9W5" target="_blank">
              Discord
            </AInlineV2>
            .
          </SpanV2>
        </ItemVV2>
      </ItemVV2>
    </Container>
  );
};
export default AppLogin;

// This defines the page settings, toggle align-self to center if not covering entire stuff
const Container = styled(SectionV2)`
  padding: ${GLOBALS.ADJUSTMENTS.MARGIN.LOGIN_MODULES.DESKTOP};

  @media ${device.laptop} {
    padding: ${GLOBALS.ADJUSTMENTS.MARGIN.LOGIN_MODULES.TABLET};
  }

  @media ${device.mobileM} {
    padding: ${GLOBALS.ADJUSTMENTS.MARGIN.LOGIN_MODULES.MOBILE};
  }
`;

const LoginButton = styled(ButtonV2)`
  flex-direction: row;
  justify-content: flex-start;
`
