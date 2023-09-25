// React + Web3 Essentials
import React, { useContext, useEffect, useState } from 'react';

// External Packages
import ReactGA from 'react-ga';
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
import { useAccount, useDeviceWidthCheck } from 'hooks';
import styled, { useTheme } from 'styled-components';
import { ReactComponent as PushLogoDark } from './assets/pushDark.svg';
import { ReactComponent as PushLogoLight } from './assets/pushLight.svg';
import { ErrorContext } from './contexts/ErrorContext';

// Internal Configs
import GLOBALS, { device } from 'config/Globals';

const AppLogin = ({ toggleDarkMode }) => {
  // React GA Analytics
  ReactGA.pageview('/login');

  // Web3 React logic
  const { isActive, connect } = useAccount();
  const { authError, setAuthError } = useContext(ErrorContext);
  const [errorMessage, setErrorMessage] = React.useState(undefined);
  const [modalHeight, setModalHeight] = React.useState(0);


  const isMobile = useDeviceWidthCheck(600);

  // theme context
  const theme = useTheme();

  // SET LOADING
  const [loading, setLoading] = useState(true);

  // handle error functions
function handleErrorMessage(error: Error) {
    setErrorMessage(error);
}

useEffect(() => {
  if(!authError) return;
  
  handleErrorMessage(authError);
}, [authError]);

  useEffect(() => {
    let observer: ResizeObserver | undefined;
    try {
      setAuthError(undefined);
      setTimeout(() => {
        connect();
        setTimeout(() => {
          const onboardModal = document.getElementById("onboard-container");
          const observer = new ResizeObserver(() => {
            setModalHeight(onboardModal.offsetHeight);
          });
          observer.observe(onboardModal);
        }, 500)
      }, 500);
    }
    catch(error){
      setAuthError(error);
    }
    return () => {
      observer?.disconnect();
    }
  }, [isActive]);

  // RENDER
  return (
    <Container alignItems="center">
      <BlurBGClouds />
      <ItemHV2 flexWrap="nowrap" maxWidth="fit-content" alignSelf="flex-end" flex="initial">
        {!!errorMessage && (
          <SpanV2 padding="0.4rem 1rem" margin="0 1rem" borderRadius="20px" background="#CF1C84" color="#fff">
            {/* {getErrorMessage(error)} */}
            {/* {errorMessage} */}
          {errorMessage.name ?? 'Error'}
          {errorMessage.message ? `: ${errorMessage.message}` : null}
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

        {modalHeight !== 0 && <ItemVV2 margin={`${modalHeight + 20}px 0 0 0`} flex="initial" maxWidth="920px">
          {/* TOS and PRIVACY */}
          <SpanV2 fontSize="14px" padding="15px 15px" color={theme.default.color} lineHeight="140%">
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
          {/* Chainsafe Audit and Discord */}
          <SpanV2 fontSize="14px" padding="0px 20px 10px 20px" lineHeight="140%" color={theme.default.color}>
            Note: The Push Protocol has been under development for 2+ years now. It has successfully completed its security audits of {' '}
            <AInlineV2 href="https://github.com/ChainSafe/audits/blob/main/EPNS/epns-protocol-10-2021.pdf" target="_blank">
              version 1 
            </AInlineV2>{' '}
            and {' '}
            <AInlineV2 href="https://github.com/ChainSafe/audits/blob/main/EPNS/epns-protocol-11-2022.pdf" target="_blank">
              version 1.5
            </AInlineV2>{' '}
            smart contracts by Chainsafe. However, always DYOR and anticipate UI bugs or improvements. You can use our {' '}
            <AInlineV2 href="https://zv9atndluia.typeform.com/to/KW3gwclM" target="_blank">
              Bug Bounty Form 
            </AInlineV2>{' '}
            to report bugs or communicate with us on our {' '}
            <AInlineV2 href="https://discord.com/invite/pushprotocol" target="_blank">
              Discord
            </AInlineV2>
            .
          </SpanV2>
        </ItemVV2>}
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
