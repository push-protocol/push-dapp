// React + Web3 Essentials
import React, { useContext, useEffect, useMemo, useState } from 'react';

// External Packages
import * as dotenv from 'dotenv';
import ReactGA from 'react-ga';
import Joyride, { CallBackProps } from 'react-joyride';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import { createGlobalStyle } from 'styled-components';

// Internal Compoonents
import InitState from 'components/InitState';
import AppContextProvider, { AppContext } from 'contexts/AppContext';
import NavigationContextProvider from 'contexts/NavigationContext';
import { useAccount, useInactiveListener, useSDKSocket } from 'hooks';
import { resetAdminSlice } from 'redux/slices/adminSlice';
import { resetChannelCreationSlice } from 'redux/slices/channelCreationSlice';
import { resetNotificationsSlice } from 'redux/slices/notificationSlice';
import { resetCanSendSlice } from 'redux/slices/sendNotificationSlice';
import { resetSpamSlice } from 'redux/slices/spamSlice';
import { resetUserSlice } from 'redux/slices/userSlice';
import UserJourneySteps from 'segments/userJourneySteps';
import Header from 'structure/Header';
import MasterInterfacePage from 'structure/MasterInterfacePage';
import Navigation from 'structure/Navigation';
import AppLogin from './AppLogin';
import { SectionV2 } from './components/reusables/SharedStylingV2';
import { ErrorContext } from './contexts/ErrorContext';
import { setIndex, setRun, setWelcomeNotifsEmpty } from './redux/slices/userJourneySlice';

// Internal Configs
import { appConfig } from 'config';
import GLOBALS from 'config/Globals';
import { themeDark, themeLight } from 'config/Themization';
import { GlobalContext } from 'contexts/GlobalContext';

// space imports
import {
  ISpaceBannerProps,
  ISpaceCreateWidgetProps,
  ISpaceFeedProps,
  ISpaceInvitesProps,
  ISpaceWidgetProps,
  SpacesUI,
  SpacesUIProvider,
} from '@pushprotocol/uiweb';
import { useUpdateTheme } from '@web3-onboard/react';
import { darkTheme, lightTheme } from 'config/spaceTheme';
import SpaceComponentContextProvider from 'contexts/SpaceComponentsContext';
import SpaceContextProvider from 'contexts/SpaceContext';
import { SpaceWidgetSection } from 'sections/space/SpaceWidgetSection';

dotenv.config();

const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) => props.theme.header.bg} !important;
    padding-right: 0 !important;
  }
`;

export interface IUseSpaceReturnValues {
  spaceUI: SpacesUI;
  SpaceInvitesComponent: React.FC<ISpaceInvitesProps>;
  SpaceWidgetComponent: React.FC<ISpaceWidgetProps>;
  SpaceFeedComponent: React.FC<ISpaceFeedProps>;
  SpaceBannerComponent: React.FC<ISpaceBannerProps>;
  CreateSpaceComponent: React.FC<ISpaceCreateWidgetProps>;
}

// Extend the console
const extendConsole = () => {
  'use strict';
  try {
    var disabledConsoles = {};
    console.enable = function (level, enabled) {
      if (window.console === 'undefined' || !window.console || window.console === null) {
        window.console = {};
      }
      if (window.console[level] === 'undefined' || !window.console[level] || window.console[level] === null) {
        window.console[level] = function () {};
      }
      if (enabled) {
        if (disabledConsoles[level]) {
          window.console[level] = disabledConsoles[level];
        }
      } else {
        disabledConsoles[level] = window.console[level];
        window.console[level] = function () {};
      }
    };
  } catch (e) {
    console.error('Extended console() threw an error!');
    console.debug(e);
  }
};

// extend console
extendConsole();

// Disable console but not on localhost
if (location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') {
  if (appConfig?.appEnv === 'prod') {
    console.enable('debug', false);
    console.enable('log', false);
    console.enable('info', false);

    // disable console.warn in prod
    if (appConfig?.appEnv === 'prod') {
      console.enable('warn', false);
    }
  }
}

// Provess App
export default function App() {
  const dispatch = useDispatch();

  const { isActive, account, chainId, provider } = useAccount();
  const [currentTime, setcurrentTime] = React.useState(0);
  const { authError, setAuthError } = useContext(ErrorContext);
  const { pgpPvtKey } = useContext<any>(AppContext);
  const { sidebarCollapsed, setSidebarCollapsed } = React.useContext(GlobalContext);

  const updateOnboardTheme = useUpdateTheme();
  const { userPushSDKInstance } = useSelector((state: any) => {
    return state.user;
  });

  const { run, stepIndex, tutorialContinous } = useSelector((state: any) => state.userJourney);
  // const location = useLocation();
  // Build takes care of this now
  // const [title, setTitle] = useState(EnvHelper.dappTitle());

  // React.useEffect(() => {
  //   // This will run when the page first loads and whenever the title changes
  //   document.title = title;
  // }, [title]);

  React.useEffect(() => {
    const now = Date.now() / 1000;
    setcurrentTime(now);
  }, []);

  useEffect(() => {
    if (!account) return;
    dispatch(resetSpamSlice());
    dispatch(resetNotificationsSlice());
    dispatch(resetCanSendSlice());
    dispatch(resetChannelCreationSlice());
    dispatch(resetAdminSlice());
    dispatch(resetUserSlice());
  }, [account]);

  // console.log(isActive, chainId, account);
  // handle logic to reconnect in response to certain events from the provider
  const { allowedChain } = useInactiveListener();

  // Initialize GA
  ReactGA.initialize(appConfig.googleAnalyticsId);
  ReactGA.pageview('/login');
  // Initialize GA

  // Initialize Theme
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    const newTheme = !darkMode ? 'dark' : 'light';
    updateOnboardTheme(newTheme);
    document.documentElement.setAttribute('theme', newTheme);
    setDarkMode(!darkMode);
  };

  React.useEffect(() => {
    const data = localStorage.getItem('theme');
    if (data) {
      const isDarkMode = JSON.parse(data);
      const theme = isDarkMode ? 'dark' : 'light';
      setDarkMode(isDarkMode);
      updateOnboardTheme(theme);
      document.documentElement.setAttribute('theme', theme);
    }

    const SidebarCollapsable = localStorage.getItem('SidebarCollapsed');
    if (SidebarCollapsable) {
      const isSidebarCollapsed = JSON.parse(SidebarCollapsable);
      setSidebarCollapsed(isSidebarCollapsed);
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(darkMode));
    localStorage.setItem('SidebarCollapsed', JSON.stringify(sidebarCollapsed));
  });

  React.useEffect(() => {
    document.body.style.backgroundColor = darkMode ? '#000' : '#fff';
  }, [darkMode]);

  React.useEffect(() => {
    window?.Olvy?.init({
      organisation: 'epns',
      target: '#olvy-target',
      type: 'sidebar',
      view: {
        showSearch: false,
        compact: false,
        showHeader: true, // only applies when widget type is embed. you cannot hide header for modal and sidebar widgets
        showUnreadIndicator: true,
        unreadIndicatorColor: '#cc1919',
        unreadIndicatorPosition: 'top-right',
      },
    });
    return function cleanup() {
      window?.Olvy?.teardown();
    };
  }, []);

  const steps = UserJourneySteps({ darkMode });

  const handleJoyrideCallback = (data: CallBackProps) => {
    // console.log(data)
    // console.log(STATUS);
    const { action, lifecycle, status, index } = data;
    if (lifecycle === 'ready') {
      setTimeout(() => {
        document.querySelector('div > section > div').scrollTop = 0;
      }, 100);
    }

    if (action === 'close' || index === 20) {
      //action === "close" ||
      dispatch(setRun(false));
      dispatch(setIndex(0));
      dispatch(setWelcomeNotifsEmpty());
    }
    // else if (action === 'next' && status === 'running') {
    //   dispatch(incrementStepIndex());
    // }
  };

  const librarySigner = provider?.getSigner(account);

  const spaceUI = useMemo(
    () =>
      new SpacesUI({
        account: account,
        signer: librarySigner,
        pgpPrivateKey: pgpPvtKey,
        env: appConfig?.appEnv,
      }),
    [account, librarySigner, pgpPvtKey, appConfig?.appEnv]
  );

  // const { spaceUI } = useSpaceComponents();

  const location = useLocation();
  const isSnapPage = location?.pathname.includes('/snap');

  return (
    <ThemeProvider theme={darkMode ? themeDark : themeLight}>
      {/* {(!isActive || !allowedChain) && (
        <SectionV2 minHeight="100vh">
          <AppLogin toggleDarkMode={toggleDarkMode} />
        </SectionV2>
      )} */}

      <>
        <GlobalStyle />
        <InitState />
        <NavigationContextProvider>
          <SpaceContextProvider>
            <SpaceComponentContextProvider spaceUI={spaceUI}>
              <Joyride
                run={run}
                steps={steps}
                continuous={tutorialContinous}
                stepIndex={stepIndex}
                // hideFooter={true}
                // primaryProps={false}
                hideBackButton={true}
                hideCloseButton={false}
                disableScrolling={true}
                disableScrollParentFix={true}
                // disableFlip={true}
                // showNextButton={false}
                showSkipButton={false}
                disableOverlayClose={true}
                callback={handleJoyrideCallback}
                styles={{
                  options: {
                    arrowColor: darkMode ? themeDark.dynamicTutsBg : themeLight.dynamicTutsBg,
                    backgroundColor: darkMode ? themeDark.dynamicTutsBg : themeLight.dynamicTutsBg,
                    overlayColor: darkMode ? themeDark.dynamicTutsBgOverlay : themeLight.dynamicTutsBgOverlay,
                    primaryColor: darkMode ? themeDark.dynamicTutsPrimaryColor : themeLight.dynamicTutsPrimaryColor,
                    textColor: darkMode ? themeDark.dynamicTutsFontColor : themeLight.dynamicTutsFontColor,
                    zIndex: 1000,
                  },
                }}
              />

              <HeaderContainer>
                <Header
                  isDarkMode={darkMode}
                  darkModeToggle={toggleDarkMode}
                />
              </HeaderContainer>

              <ParentContainer
                bg={
                  darkMode ? themeDark.backgroundBG : !isActive ? themeLight.connectWalletBg : themeLight.backgroundBG
                }
                headerHeight={GLOBALS.CONSTANTS.HEADER_HEIGHT}
              >
                {!isSnapPage && (
                  <LeftBarContainer
                    leftBarWidth={
                      sidebarCollapsed ? GLOBALS.CONSTANTS.COLLAPSABLE_LEFT_BAR_WIDTH : GLOBALS.CONSTANTS.LEFT_BAR_WIDTH
                    }
                  >
                    <Navigation />
                  </LeftBarContainer>
                )}

                <ContentContainer
                  leftBarWidth={
                    sidebarCollapsed ? GLOBALS.CONSTANTS.COLLAPSABLE_RIGHT_BAR_WIDTH : GLOBALS.CONSTANTS.LEFT_BAR_WIDTH
                  }
                >
                  {/* Shared among all pages, load universal things here */}
                  <SpacesUIProvider
                    spaceUI={spaceUI}
                    theme={darkMode ? darkTheme : lightTheme}
                  >
                    <MasterInterfacePage />
                    <SpaceWidgetSection />
                  </SpacesUIProvider>
                </ContentContainer>
              </ParentContainer>
            </SpaceComponentContextProvider>
          </SpaceContextProvider>
        </NavigationContextProvider>
      </>
    </ThemeProvider>
  );
}

// CSS STYLE

const HeaderContainer = styled.header`
  left: 0;
  right: 0;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 999;
`;

const ParentContainer = styled.div`
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex: 1;
  background: ${(props) => props.bg};
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  // background: ${(props) => props.bg};
  margin: ${(props) => props.headerHeight}px 0px 0px 0px;
  min-height: calc(100vh - ${(props) => props.headerHeight}px);
`;

const LeftBarContainer = styled.div`
  left: 0;
  top: 0;
  bottom: 0;
  width: ${(props) => props.leftBarWidth}px;
  position: fixed;
  // position: absolute;

  @media (max-width: 992px) {
    display: none;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex: 1;
  align-self: center;
  width: calc(100% - ${(props) => props.leftBarWidth}px);
  margin: 0px 0px 0px ${(props) => props.leftBarWidth}px;

  @media (max-width: 992px) {
    margin: 0px;
  }
`;

const PushLogo = styled.div`
  width: 200px;
  padding-bottom: 20px;
`;

const ProviderButton = styled.button`
  flex: none;
  min-width: 179px;
  background: ${(props) => props.theme.default.bg};
  margin: 20px 15px;
  overflow: hidden;
  padding: 20px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  display: flex;
  flex-direction: column;

  &:hover {
    cursor: pointer;
    background: rgba(207, 206, 255, 0.24);
  }
  &:active {
    cursor: pointer;
    background: rgba(207, 206, 255, 0.24);
  }
`;

const ProviderImage = styled.img`
  width: 73px;
  height: 69px;
  max-height: 69px;
  padding-bottom: 18px;
`;
