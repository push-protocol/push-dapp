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
import { ReactComponent as InfoLogo } from "./assets/inforWithoutBG.svg";

// Internal Configs
import GLOBALS, { device } from 'config/Globals';
import { H2 } from 'components/SharedStyling';
import { Button, Input, Span } from 'primaries/SharedStyling';
import { AppContext } from 'contexts/AppContext';
import { ethers } from 'ethers';
import { useResolveWeb3Name } from 'hooks/useResolveWeb3Name';
import { GlobalContext, ReadOnlyWalletMode } from 'contexts/GlobalContext';

const AppLogin = ({ toggleDarkMode }) => {
  // React GA Analytics
  ReactGA.pageview('/login');

  // Web3 React logic
  const { isActive, connect, wallet } = useAccount();
  const { web3NameList } = useContext(AppContext);
  const { setReadOnlyWallet, readOnlyWallet, setMode } = useContext(GlobalContext);
  const { authError, setAuthError } = useContext(ErrorContext);
  const [errorMessage, setErrorMessage] = React.useState(undefined);
  const [modalHeight, setModalHeight] = React.useState(0);
  const [modalWidth, setModalWidth] = React.useState(0);

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
    if (!authError) return;
    console.log("Asdasdasd112312312132")

    handleErrorMessage(authError);
  }, [authError]);

  useEffect(() => {
    let observer: ResizeObserver | undefined;
    try {
      setAuthError(undefined);
      setTimeout(() => {
        if (!readOnlyWallet) {
          connect();
          setModalHeight(undefined);
          setModalWidth(undefined);
        }
        setTimeout(() => {
          const onboardModal = document.getElementById("onboard-container");
          const observer = new ResizeObserver(() => {
            setModalHeight(onboardModal.offsetHeight);
            setModalWidth(onboardModal.offsetWidth);
          });

          if (!readOnlyWallet) {
            onboardModal.style.display = 'block';
            observer.observe(onboardModal);
          } else {
            onboardModal.style.display = 'none';
            observer.unobserve(onboardModal);
            observer.disconnect();
          }

        }, 500)
      }, 500);
    }
    catch (error) {
      console.log("Error !!!!! >>>>>>>", error);
      setAuthError(error);
    }
    return () => {
      observer?.disconnect();
    }
  }, [isActive]);

  const handleConnectWallet = () => {
    connect();
  }

  const [walletAddress, setWalletAddress] = useState();

  const handleReadOnlyWallet = (e: any) => {
    e.preventDefault();
    const walletAddress = e.target.value;
    setWalletAddress(walletAddress);
  }

  const initiateReadOnlyMode = () => {
    if (walletAddress) {
      const isWallet = ethers.utils.isAddress(walletAddress);
      if (isWallet) {
        setMode(ReadOnlyWalletMode.READ_ONLY_MODE)
        setReadOnlyWallet(walletAddress);
      }
    }
  }

  const initiateGuestModa = () => {
    const guestModeAddress = '0x0000000000000000000000000000000000000000';
    setMode(ReadOnlyWalletMode.GUEST_MODE);
    setReadOnlyWallet(guestModeAddress);
  }

  const RenderGuestMode = () => {
    return (
      <div style={{ maxWidth: '768px' }}>
        <GuestContainer padding='24px' gap='13px' background={theme.modalSearchBarBackground} borderRadius='24px'>
          <ItemHV2 justifyContent='flex-start' gap='2px'>
            <H2 margin='0px' size='20px' weight='500' color={theme.default.secondaryColor}>Read-Only Mode</H2>
            <InfoLogo width='20px' height='20px' />
          </ItemHV2>
          <InputContainer>

            <Input
              autoFocus
              required
              maxlength="40"
              flex="1"
              padding="13px 16px"
              maxllength="300px"
              size="16px"
              bg={theme.default.bg}
              height="auto"
              border={`1px solid ${theme.stakingBorder}`}
              color={theme.editChannelPrimaryText}
              focusBorder="1px solid #657795"
              radius="12px"
              placeholder='Enter wallet address'
              value={walletAddress}
              onChange={(e) => { handleReadOnlyWallet(e) }}
            />


            <ButtonsContainer>
              <FilledButton onClick={initiateReadOnlyMode}>Read Only Mode</FilledButton>
              <Span color={theme.default.color}>Or</Span>
              <EmptyButton onClick={initiateGuestModa}>Continue as Guest</EmptyButton>
            </ButtonsContainer>
          </InputContainer>
        </GuestContainer>
      </div>
    )
  }

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

        {/* {modalHeight !== 0 && */}
        <ItemVV2 margin={`${modalHeight + 20}px 0 0 0`} flex="initial" maxWidth="920px">

          <RenderGuestMode />

          {/* TOS and PRIVACY */}
          <SpanV2 fontSize="14px" padding="5px 5px" color={theme.default.color} lineHeight="140%">
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

          <ItemVV2 margin="10px 0 0 0" flex="initial" maxWidth="920px">
            <SpanV2 fontSize="14px" padding="0px 15px" lineHeight="140%" color={theme.default.color}>
              Note: The Push Protocol has been under development for 2+ years now. It has successfully completed its latest security audits of {' '}
              <AInlineV2 href="https://github.com/ChainSafe/audits/blob/main/EPNS/epns-protocol-05-2023.pdf" target="_blank">
                Push Core V2
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
          </ItemVV2>
        </ItemVV2>
        {/* } */}
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

const GuestContainer = styled(ItemVV2)`

`

const InputContainer = styled(ItemHV2)`
  gap:8px;
  @media ${device.mobileL} {
    flex-direction:column;
    gap:14px;
  }

  @media (max-width:600px) {
    flex-direction:column;
  }
`

const ButtonsContainer = styled.div`
  display:flex;
  flex-direction:row;
  gap:8px;
  align-items:center;

  @media ${device.mobileL} {
    flex-direction:column;
    width:100%;
  }

`

const FilledButton = styled(ButtonV2)`
    background: #D53A94;
    border-radius: 15px;
    padding: 13px 0px;
    font-size: 16px;
    line-height: 141%;
    letter-spacing: -0.03em;
    color: #FFFFFF;
    width:175px;
    cursor:pointer;
    & > div{
        display:block;
    }

    @media(max-width:600px){
        font-size: 14px;
    }
    @media ${device.mobileL} {
      width:100%;
    }
    
`;

const EmptyButton = styled(ButtonV2)`
    font-size: 16px;
    line-height: 19px;
    flex-direction:row;
    border: 1px solid  ${(props) => props.theme.stakingBorder};
    flex:1;
    padding: 13px 0px;
    background:${(props) => props.theme.modalSearchBarBackground};
    color:#657795;
    width:175px;
    border-radius: 15px;
    & > div{
        display:block;
    }
    &:after{
        background:transparent;
    }

    &:hover{
        opacity:1;
    }

    @media(max-width:600px){
        font-size: 14px;
    }
    @media ${device.mobileL} {
      width:100%;
    }
    
    
`
