import { Suspense, useContext, useEffect, useRef, useState } from 'react';

// React + Web3 Essentials

// External Packages
import { AiOutlineMenu } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import styled, { useTheme } from 'styled-components';

// Internal Components
import { Box, Link, Text, Star, Lozenge, RewardsBell } from 'blocks';
import { LOADER_SPINNER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import Spinner from 'components/reusables/spinners/SpinnerUnit';
import { ErrorContext } from 'contexts/ErrorContext';
import { NavigationContext } from 'contexts/NavigationContext';

import Profile from 'primaries/Profile';
import { Button, Item, ItemH, Section, Span } from 'primaries/SharedStyling';
import PushLogoDark from '../assets/pushDark.svg';
import PushLogoLight from '../assets/pushLight.svg';

// Internal Configs
import ChainIndicator from 'components/ChainIndicator';
import APP_PATHS from 'config/AppPaths';
import GLOBALS from 'config/Globals';
import { themeDark, themeLight } from 'config/Themization';
import { useAccount, useDeviceWidthCheck } from 'hooks';
import { useClickAway } from 'react-use';
import MobileNavigation from './MobileNavigation';
import { getPublicAssetPath } from 'helpers/RoutesHelper';
import { walletToCAIP10 } from 'helpers/w2w';

// hooks
import { useGetUserRewardsDetails } from 'queries';

// header tags for pages that are not there in navigationList (Sidebar)
const REWARDS_HEADER_TAG = {
  title: 'Reward Points',
  light: {
    bg: GLOBALS.COLORS.GRADIENT_PRIMARY,
    fg: themeLight.headerTagFg,
  },
  dark: {
    bg: themeDark.headerTagBg,
    fg: themeDark.headerTagFg,
  },
};
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
  },
  [APP_PATHS.Rewards]: REWARDS_HEADER_TAG,
  [APP_PATHS.RewardsActivities]: REWARDS_HEADER_TAG,
  [APP_PATHS.RewardsLeaderboard]: REWARDS_HEADER_TAG,
};

const RewardsHeaderLink = ({ caip10WalletAddress }: { caip10WalletAddress: string }) => {
  const { data: userDetails } = useGetUserRewardsDetails({
    caip10WalletAddress: caip10WalletAddress,
  });
  return (
    <Box
      display="flex"
      alignItems="center"
      gap={{ ml: 's1', dp: 's2' }}
    >
      <Link
        to="/points"
        isText={false}
      >
        <Box
          display="flex"
          gap="s2"
        >
          <RewardsBell
            width={24}
            height={28}
          />
          <Text
            variant="h4-bold"
            display={{ ml: 'none', dp: 'block' }}
            color={{ light: 'gray-1000', dark: 'gray-100' }}
          >
            {userDetails && userDetails?.totalPoints > 0 ? userDetails?.totalPoints : ''}
          </Text>
          <Text
            variant="h5-bold"
            display={{ ml: 'block', dp: 'none' }}
            color={{ light: 'gray-1000', dark: 'gray-100' }}
          >
            {userDetails && userDetails?.totalPoints > 0 ? userDetails?.totalPoints : ''}
          </Text>
          <Lozenge icon={<Star />}>NEW</Lozenge>
        </Box>
      </Link>
    </Box>
  );
};

// Create Header
function Header({ isDarkMode, darkModeToggle }) {
  // Get theme
  const theme = useTheme();
  const navRef = useRef();

  const { navigationSetup } = useContext(NavigationContext);

  const { isActive, wallet, account } = useAccount();
  const caip10WalletAddress = walletToCAIP10({ account });

  const { authError: error } = useContext(ErrorContext);

  const [showLoginControls, setShowLoginControls] = useState(false);

  // Handle Nav Bar
  const [showNavBar, setShowNavBar] = useState(false);

  // Handle Header Tag
  const [headerTag, setHeaderTag] = useState(null);

  // Get Location
  const location = useLocation();
  const isSnapPage = location?.pathname === '/snap';

  useEffect(() => {
    // runs when navigation setup is updated, will run on init
    updateHeaderTag(location);
    // console.log(Object.keys(navigationSetup))
  }, [navigationSetup]);

  // Change text based on change of location
  useEffect(() => {
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
          if (EXTRA_HEADER_TAGS[location.pathname]) setHeaderTag(EXTRA_HEADER_TAGS[location.pathname]);
        }
      });
    }
  };

  useClickAway(navRef, () => {
    setShowNavBar(!showNavBar);
  });

  const isMobile = useDeviceWidthCheck(600);

  return (
    <Container
      direction="row"
      padding="0px 15px"
    >
      <ItemH
        justify="flex-start"
        flex="0"
      >
        <RightBarContainer
          justify="flex-start"
          flex="0"
        >
          <RightBarDesktop
            justify="flex-start"
            flex="0"
          >
            <Link to="/channels">
              <Logo src={!isDarkMode ? PushLogoLight : PushLogoDark} />
            </Link>
          </RightBarDesktop>

          <LogoMobile
            justify="flex-start"
            flex="0"
          >
            <Logo src={!isDarkMode ? getPublicAssetPath('logo512.png') : getPublicAssetPath('logo512.png')} />
          </LogoMobile>
        </RightBarContainer>

        {/* mobile navbar */}
        {navigationSetup && showNavBar && isActive && !error && (
          <NavMenuContainer
            ref={navRef}
            tabletAlign="flex-start"
          >
            <NavMenu>
              {/* <Box display={{ ml: 'block', dp: 'none' }}>
                <RewardsHeaderLink />
              </Box> */}
              <ChainIndicator isDarkMode={isDarkMode} />
              <Profile isDarkMode={isDarkMode} />

              <NavMenuInner tabletAlign="flex-start">
                <MobileNavigation
                  showNavBar={showNavBar}
                  setShowNavBar={setShowNavBar}
                />
              </NavMenuInner>
            </NavMenu>
          </NavMenuContainer>
        )}
      </ItemH>
      <Box
        display="flex"
        width="100%"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flexDirection="column"
          gap="s0"
          alignItems={{ ml: 'flex-start', initial: 'center' }}
        >
          {headerTag && !error && !isSnapPage && (
            <HeaderTag
              align="flex-start"
              overflow="hidden"
            >
              <Span
                textTransform="capitalize"
                spacing="-0.02em"
                weight="normal"
                // padding={isMobile ? '8px 7px' : '8px 20px'}
                className="text"
                color={!isDarkMode ? headerTag.light.fg : headerTag.dark.fg}
              >
                {headerTag.title}
              </Span>
            </HeaderTag>
          )}

          <Suspense
            fallback={
              <Spinner
                size={24}
                color={GLOBALS.COLORS.PRIMARY_PINK}
                type={LOADER_SPINNER_TYPE.PROCESSING}
              />
            }
          >
            <Box display={{ ml: 'block', dp: 'none' }}>
              <RewardsHeaderLink caip10WalletAddress={caip10WalletAddress} />
            </Box>
          </Suspense>
        </Box>
        <Box
          display="flex"
          alignItems="center"
        >
          <Box display={{ ml: 'none', dp: 'block' }}>
            <RewardsHeaderLink caip10WalletAddress={caip10WalletAddress} />
          </Box>
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
                }}
              >
                <AiOutlineMenu
                  size={30}
                  color={theme.headerIconsBg}
                />
              </Button>
            </RightBarMobile>
          )}

          <ItemH
            justify="flex-end"
            flex="initial"
          >
            {/* {!!error && <PrimaryTheme>{getErrorMessage(error)}</PrimaryTheme>} */}
            {/* {!isActive && !error && <ThirdTheme>Please connect to a Web3 Network</ThirdTheme>} */}
            {/* {!!error && <ThirdTheme>Please connect to a Web3 Network</ThirdTheme>} */}
            {/* {isActive && !showLoginControls && !error && (
            <RightBarDesktop justify="flex-end" flex="initial">
              <ChainIndicator isDarkMode={isDarkMode} />
              <Profile isDarkMode={isDarkMode} />
            </RightBarDesktop>
          )}{' '} */}

            <RightBarDesktop
              justify="flex-end"
              flex="initial"
            >
              {/* //TODO: The chain Indicator should be removed in guest mode */}
              {wallet?.accounts?.length > 0 && <ChainIndicator isDarkMode={isDarkMode} />}
              <Profile isDarkMode={isDarkMode} />
            </RightBarDesktop>
          </ItemH>
        </Box>
      </Box>
    </Container>
  );
}

// CSS Styles
const Container = styled(Section)`
  background: ${(props) => props.theme.header.bg};
  height: ${GLOBALS.CONSTANTS.HEADER_HEIGHT}px;
  gap: 16px;
  padding: 0 1.5rem;
  @media (max-width: 425px) {
    padding: 0 1rem;
    gap: 12px;
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
`;

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
  box-shadow: 0 0 0 10000px rgba(0, 0, 0, 0.9);
  padding: 30px 30px;

  @media (min-width: 993px) {
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

const HeaderTag = styled(Item)`
  flex: 1;
  margin: 0px 5px;
  @media (min-width: 993px) {
    margin: 5px 10px;
  }

  @media (max-width: 993px) {
    margin: 5px 0px;
  }
  .text {
    font-size: 24px;

    @media (max-width: 993px) {
      font-size: 20px;
    }
  }
`;

// Export Default
export default Header;
