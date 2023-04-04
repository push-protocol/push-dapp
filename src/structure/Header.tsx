import React, { useContext, useRef } from 'react';

// React + Web3 Essentials
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from '@web3-react/injected-connector';
import { ethers } from 'ethers';

// External Packages
import { useLocation } from 'react-router-dom';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import styled, { css, useTheme } from 'styled-components';

// Internal Components
import { Button, Item, ItemH, Section, Span } from 'primaries/SharedStyling';
import { ReactComponent as EPNSLogoDark } from './assets/epnsDark.svg';
import { ReactComponent as EPNSLogoLight } from './assets/epnsLight.svg';
import MobileNavButton from 'components/MobileNavButton';
import NavigationButton from 'components/NavigationButton';
import Bell from 'primaries/Bell';
import Profile from 'primaries/Profile';
import { NavigationContext } from 'contexts/NavigationContext';

// Internal Configs
import { appConfig } from 'config';
import GLOBALS from 'config/Globals';
import { useClickAway } from 'react-use';
import MobileNavigation from './MobileNavigation';
import { useDeviceWidthCheck } from 'hooks';
import ChainIndicator from 'components/ChainIndicator';
import { handleChangeNetwork } from 'helpers/ChainHelper';

// Create Header
function Header({ isDarkMode, darkModeToggle }) {
  // Get theme
  const theme = useTheme();
  const navRef = useRef()

  // Get Web3 Context
  // const context = useWeb3React<Web3Provider>()

  const { navigationSetup } = useContext(NavigationContext);

  const { active, error,library, chainId } = useWeb3React();

  const [showLoginControls, setShowLoginControls] = React.useState(false);

  // Handle Nav Bar
  const [showNavBar, setShowNavBar] = React.useState(false);

  // Handle Header Tag
  const [headerTag, setHeaderTag] = React.useState(null);

  // Get Location
  const location = useLocation();

  React.useEffect(() => {
    // runs when navigation setup is updated, will run on init
    updateHeaderTag(location);
    // console.log(Object.keys(navigationSetup))
  }, [navigationSetup]);

  // Change text based on change of location
  React.useEffect(() => {
    // runs on location, i.e. route, change
    updateHeaderTag(location);
  }, [location]);

  // handle header tag update
  const updateHeaderTag = (location) => {
    if (navigationSetup) {
      Object.entries(navigationSetup.navigation).forEach(([key, value]) => {
        const item = navigationSetup.navigation[key];
        if (location.pathname === item.data.href) {
          setHeaderTag(item.data.headerTag);
        }
      });
    }
  };

  useClickAway(navRef, () => {
    setShowNavBar(!showNavBar);
  });

  // handle error functions
  function getErrorMessage(error: Error) {
    if (error instanceof NoEthereumProviderError) {
      return 'Web3 not enabled, install MetaMask on desktop or visit from a dApp browser on mobile';
    } else if (error instanceof UnsupportedChainIdError) {
      handleChangeNetwork(chainId,library.provider);
      if (appConfig.coreContractChain === 42)
        return 'Unsupported Network, please connect to the Ethereum Kovan network or Polygon Mumbai network';
      else if (appConfig.coreContractChain === 5)
        return 'Unsupported Network, please connect to the Ethereum Goerli, Polygon Mumbai, BNB testnet or Optimism Goerli';
      else return 'Unsupported Network, please connect to the Ethereum, Polygon, or BNB Mainnet';
    } else if (error instanceof UserRejectedRequestErrorInjected) {
      return 'Please authorize this website to access the dApp';
    } else {
      console.error(error);
      return 'An unknown error occurred. Check the console for more details';
    }
  }

  const bellPressed = () => {
    setShowLoginControls(!showLoginControls);
  };

  const isMobile = useDeviceWidthCheck(600);
  

  return (
    <Container direction="row" padding="0px 15px">
      <ItemH justify="flex-start" flex="0">
        <RightBarContainer justify="flex-start" flex="0">
          <RightBarDesktop justify="flex-start" flex="0">
            <Logo src={!isDarkMode ? 'push.svg' : 'pushDark.svg'} />
          </RightBarDesktop>

          <LogoMobile justify="flex-start" flex="0">
            <Logo src={!isDarkMode ? 'logo512.png' : 'logo512.png'} />
          </LogoMobile>
        </RightBarContainer>
        
        {/* mobile navbar */}
        {navigationSetup && showNavBar && active && !error && (
          <NavMenuContainer ref={navRef} tabletAlign="flex-start">
            <NavMenu>
              <ChainIndicator isDarkMode={isDarkMode}/>
              <Profile isDarkMode={isDarkMode} />

              <NavMenuInner tabletAlign="flex-start">
                <MobileNavigation showNavBar={showNavBar} setShowNavBar={setShowNavBar} />
              </NavMenuInner>
            </NavMenu>
          </NavMenuContainer>
        )}
      </ItemH>

      <ItemH justify="flex-end">
        {headerTag && active && !error && (
          <HeaderTag align="flex-start" overflow="hidden">
            <Span
              textTransform="capitalize"
              spacing="-0.02em"
              weight="normal"
              padding={isMobile ? "8px 7px" : "8px 20px" }
              className='text'
              color={!isDarkMode ? headerTag.light.fg : headerTag.dark.fg}>
              {headerTag.title}
            </Span>
          </HeaderTag>
        )}

        {active && !showLoginControls && !error && (
          <DarkModeSwitch
            style={{ margin: '0 1rem' }}
            checked={isDarkMode}
            onChange={darkModeToggle}
            size={28}
            sunColor="#494D5F"
            moonColor="#787E99"
          />
        )}

      {active && !error && (
            <RightBarMobile>
              <Button
                bg="transparent"
                padding="5px"
                radius="4px"
                onClick={() => {
                  setShowNavBar(!showNavBar);
                }}>
                <AiOutlineMenu size={30} color={theme.headerIconsBg} />
              </Button>
            </RightBarMobile>
          )}

        <ItemH justify="flex-end" flex="initial">
          {!!error && <PrimaryTheme>{getErrorMessage(error)}</PrimaryTheme>}
          {!active && !error && <ThirdTheme>Please connect to a Web3 Network</ThirdTheme>}
          {active && !showLoginControls && !error && (
            <RightBarDesktop justify="flex-end" flex="initial">
              <ChainIndicator isDarkMode={isDarkMode}/>
              <Profile isDarkMode={isDarkMode} />
            </RightBarDesktop>
          )}{' '}
        </ItemH>
      </ItemH>
    </Container>
  );
}

// CSS Styles
const Container = styled(Section)`
  background: ${(props) => props.theme.header.bg};
  height: ${GLOBALS.CONSTANTS.HEADER_HEIGHT}px;
  padding: 0 1.5rem;
  @media (max-width: 425px) {
    padding: 0 1rem;
  }
`;

const Logo = styled.img`
  height: 40px;
`;

const RightBarContainer = styled(ItemH)``;

const RightBarDesktop = styled(ItemH)`
  @media (max-width: 992px) {
    display: none;
  }
`;

const RightBarMobile = styled(ItemH)`
  max-width: 40px !important;
  margin: 5px 0px 5px -5px;

  @media (min-width: 993px) {
    display: none;
  }
`;

 const LogoMobile = styled(ItemH)`
    @media (min-width: 993px) {
      display: none;
    }
 `

const NavMenuContainer = styled(Item)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 1;

  background: ${(props) => props.theme.default.bg};
  backdrop-filter: blur(30px);
  z-index: 11;
  width: 250px;
  box-shadow: 0 0 0 10000px rgba(0,0,0,0.9);
  padding: 30px 30px;
  

  @media (min-width: 993px){
    display: none;
  }
`;

const NavMenu = styled.div`
  align-items: stretch;
  justify-content: flex-start;
  width: 100%;
`;

const NavMenuInner = styled(Item)`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  overflow-y: scroll;
  margin-top: 20px;
  padding-right: 20px;
  height: calc(100vh - 100px);
`;

const Notice = styled.span`
  border: 0;
  outline: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 15px;
  margin: 10px;
  color: #fff;
  border-radius: 20px;
  font-size: 14px;
`;

const PrimaryTheme = styled(Notice)`
  background: #e20880;
`;

const ThirdTheme = styled(Notice)`
  background: #674c9f;
`;

const HeaderTag = styled(Item)`
  flex: 1;
  margin: 0px 5px;
   @media (min-width: 993px) {
    margin: 5px 10px;
  }

  @media (max-width: 993px) {
    margin: 5px 0px;
  }
  .text{
    font-size: 24px;
    
    @media (max-width: 993px){
      font-size: 20px;
    }
  }
`;

const DarkMode = styled(Item)`
  @media (max-width: 768px) {
    display: none;
  }
`;

// Export Default
export default Header;
