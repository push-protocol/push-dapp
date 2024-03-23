import React, { Suspense, useContext, useEffect, useRef } from 'react';

// React + Web3 Essentials
import { ethers } from 'ethers';
import { Link } from 'react-router-dom';

// External Packages
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import styled, { css, useTheme } from 'styled-components';

// Internal Components
import { ReactComponent as OpenLink } from 'assets/PushSnaps/GoToImage.svg';
import { ReactComponent as MetamaskLogo } from 'assets/PushSnaps/metamasksnap.svg';
import MobileNavButton from 'components/MobileNavButton';
import NavigationButton from 'components/NavigationButton';
import { LOADER_SPINNER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import Spinner from 'components/reusables/spinners/SpinnerUnit';
import { AppContext } from 'contexts/AppContext';
import { ErrorContext } from 'contexts/ErrorContext';
import { GlobalContext, ReadOnlyWalletMode } from 'contexts/GlobalContext';
import { NavigationContext } from 'contexts/NavigationContext';
import Bell from 'primaries/Bell';
import Profile from 'primaries/Profile';
import { Button, Item, ItemH, Section, Span } from 'primaries/SharedStyling';
import { ReactComponent as EPNSLogoDark } from './assets/epnsDark.svg';
import { ReactComponent as EPNSLogoLight } from './assets/epnsLight.svg';

// Internal Configs
import ChainIndicator from 'components/ChainIndicator';
import { ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { appConfig } from 'config';
import APP_PATHS from 'config/AppPaths';
import GLOBALS from 'config/Globals';
import { themeDark, themeLight } from 'config/Themization';
import { UnsupportedChainIdError } from 'connectors/error';
import { useAccount, useDeviceWidthCheck } from 'hooks';
import { useClickAway } from 'react-use';
import MobileNavigation from './MobileNavigation';

// header tags for pages that are not there in navigationList (Sidebar)
const EXTRA_HEADER_TAGS = {
  [APP_PATHS.UserSettings]: {
    title: 'Settings',
    light: {
      bg: GLOBALS.COLORS.GRADIENT_PRIMARY,
      fg: themeLight.headerTagFg,
    },
    dark: {
      bg: themeDark.headerTagBg,
      fg: themeDark.headerTagFg,
    },
  },
  [APP_PATHS.ChannelSettings]: {
    title: 'Notification Settings',
    light: {
      bg: GLOBALS.COLORS.GRADIENT_PRIMARY,
      fg: themeLight.headerTagFg,
    },
    dark: {
      bg: themeDark.headerTagBg,
      fg: themeDark.headerTagFg,
    },
  }
}

// Create Header
function Header({ isDarkMode, darkModeToggle }) {
  // Get theme
  const theme = useTheme();
  const navRef = useRef()

  const { navigationSetup } = useContext(NavigationContext);
  const { setSnapInstalled, snapInstalled } = React.useContext(AppContext);
  const { mode } = React.useContext(GlobalContext);
  const { isActive, switchChain, connect, wallet } = useAccount();
  const { authError: error } = useContext(ErrorContext);

  const [showLoginControls, setShowLoginControls] = React.useState(false);

  // Handle Nav Bar
  const [showNavBar, setShowNavBar] = React.useState(false);

  // Handle Header Tag
  const [headerTag, setHeaderTag] = React.useState(null);

  // Get Location
  const location = useLocation();

  // const [snapInstalled, setSnapInstalled] = React.useState(false);


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
        } else {
          if (EXTRA_HEADER_TAGS[location.pathname])
            setHeaderTag(EXTRA_HEADER_TAGS[location.pathname]);
        }
      });
    }
  };

  useClickAway(navRef, () => {
    setShowNavBar(!showNavBar);
  });

  // handle error functions
  function getErrorMessage(error: Error) {
    if (error instanceof UnsupportedChainIdError) {
      switchChain(appConfig.coreContractChain);
      if (appConfig.coreContractChain === 42)
        return 'Unsupported Network, please connect to the Ethereum Kovan network or Polygon Mumbai network';
      else if (appConfig.coreContractChain === 11155111)
        return 'Unsupported Network, please connect to the Ethereum Sepolia, Polygon Mumbai, BNB testnet, Optimism Goerli, Arbitrum testnet or Polygon zkEVM testnet';
      else return 'Unsupported Network, please connect to the Ethereum, Polygon, BNB, Optimism, Arbitrum or Polygon zkEVM Mainnet';
    } else {
      console.error(error);
      return 'An unknown error occurred. Check the console for more details';
    }
  }

  const bellPressed = () => {
    setShowLoginControls(!showLoginControls);
  };

  const isMobile = useDeviceWidthCheck(600);
  const showSnapMobile = useDeviceWidthCheck(600);
  const isSnapPage = location?.pathname === '/snap';

  const isSnapInstalled = async () => {
    const installedSnaps = await window.ethereum.request({
      method: 'wallet_getSnaps',
    });
    Object.keys(installedSnaps).forEach((snap) => {
      if (snap == 'npm:@pushprotocol/snap') {
        setSnapInstalled(true);
      }
    });
  }

  useEffect(() => {
    isSnapInstalled();
  }, [])

  const SnapHeader = () => {
    return (
      <SnapSection>
        <MetamaskLogo width={24} height={22} />
        <InstallText>
          <SpanV2 fontSize='12px' fontWeight='400'>Get Notifications directly in MetaMask</SpanV2>
          <StyledLink to='/snap'>
            Install Push Snap <OpenLink />
          </StyledLink>
        </InstallText>
      </SnapSection>
    )
  }

  return (
    <Container direction="row" padding="0px 15px">
      <ItemH justify="flex-start" flex="0">
        <RightBarContainer justify="flex-start" flex="0">
          <RightBarDesktop justify="flex-start" flex="0">
            <a href='/channels'>
              <Logo src={!isDarkMode ? 'push.svg' : 'pushDark.svg'} />
            </a>
          </RightBarDesktop>

          <LogoMobile justify="flex-start" flex="0">
            <Logo src={!isDarkMode ? 'logo512.png' : 'logo512.png'} />
          </LogoMobile>
        </RightBarContainer>

        {/* mobile navbar */}
        {navigationSetup && showNavBar && isActive && !error && (
          <NavMenuContainer ref={navRef} tabletAlign="flex-start">
            <NavMenu>
              {showSnapMobile && <SnapHeader />}
              <ChainIndicator isDarkMode={isDarkMode} />
              <Profile isDarkMode={isDarkMode} />

              <NavMenuInner tabletAlign="flex-start">

                <MobileNavigation showNavBar={showNavBar} setShowNavBar={setShowNavBar} />
              </NavMenuInner>
            </NavMenu>
          </NavMenuContainer>
        )}
      </ItemH>

      <ItemH justify="flex-end">
        {headerTag && !error && !isSnapPage && (
          <HeaderTag align="flex-start" overflow="hidden">
            <Span
              textTransform="capitalize"
              spacing="-0.02em"
              weight="normal"
              padding={isMobile ? "8px 7px" : "8px 20px"}
              className='text'
              color={!isDarkMode ? headerTag.light.fg : headerTag.dark.fg}>
              {headerTag.title}
            </Span>
          </HeaderTag>
        )}

        <Suspense fallback={<Spinner size={24} color={GLOBALS.COLORS.PRIMARY_PINK} type={LOADER_SPINNER_TYPE.PROCESSING} />}>
          {!showSnapMobile && !snapInstalled && <SnapHeader />}
        </Suspense>


        {isActive && !showLoginControls && !error && (
          <DarkModeSwitch
            style={{ margin: '0 1rem' }}
            checked={isDarkMode}
            onChange={darkModeToggle}
            size={28}
            sunColor="#494D5F"
            moonColor="#787E99"
          />
        )}

        {isActive && !error && (
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
          {/* {!!error && <PrimaryTheme>{getErrorMessage(error)}</PrimaryTheme>} */}
          {/* {!isActive && !error && <ThirdTheme>Please connect to a Web3 Network</ThirdTheme>} */}
          {/* {!!error && <ThirdTheme>Please connect to a Web3 Network</ThirdTheme>} */}
          {/* {isActive && !showLoginControls && !error && (
            <RightBarDesktop justify="flex-end" flex="initial">
              <ChainIndicator isDarkMode={isDarkMode} />
              <Profile isDarkMode={isDarkMode} />
            </RightBarDesktop>
          )}{' '} */}

          <RightBarDesktop justify="flex-end" flex="initial">
            {/* //TODO: The chain Indicator should be removed in guest mode */}
            {wallet?.accounts?.length > 0 && <ChainIndicator isDarkMode={isDarkMode} />}
            <Profile isDarkMode={isDarkMode} />
          </RightBarDesktop>
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

const SnapSection = styled.div`
  width:251px;
  height:28px;
  display:flex;
  flex-direction:row;
  border-radius: 12px;
  border: 1px solid #D4DCEA;
  border: 1px solid ${(props) => props.theme.default.border};
  background:${(props) => props.theme.default.bg};
  padding: 12px 16px;
  align-items: center;
  gap: 9px;
  @media (max-width:600px){
    width:auto;
    padding: 12px 14px;
  }
`;

const InstallText = styled.div`
  display:flex;
  flex-direction:column;

  @media (max-width:600px){
    display:block;
    width:auto;
  }
  
`


const StyledLink = styled(Link)`
  cursor:pointer;
  font-size:12px;
  font-weight:400;
  color:#D53A94;
  text-align: start;
  text-decoration:none;
  
  @media (max-width:600px){
    margin-left:5px;
  }

   &:hover{
    text-decoration:underline;
    text-underline-position: under;
  }
`

// Export Default
export default Header;
