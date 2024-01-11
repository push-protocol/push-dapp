// React + Web3 Essentials
import { ethers } from 'ethers';
import React, { useContext, useEffect, useMemo, useState } from 'react';

// External Packages
import Joyride, { CallBackProps } from 'react-joyride';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import ReactGA from 'react-ga';
import * as dotenv from 'dotenv';
import { PushAPI } from '@pushprotocol/restapi';

// Internal Compoonents
import InitState from 'components/InitState';
import NavigationContextProvider from 'contexts/NavigationContext';
import AppContextProvider from 'contexts/AppContext';
import { EnvHelper } from 'helpers/UtilityHelper';
import { useAccount, useInactiveListener, useSDKSocket } from 'hooks';
import UserJourneySteps from 'segments/userJourneySteps';
import Header from 'structure/Header';
import MasterInterfacePage from 'structure/MasterInterfacePage';
import AppLogin from './AppLogin';
import { SectionV2 } from './components/reusables/SharedStylingV2';
import { A, B, C, H2, Image, Item, ItemH, P, Span } from './primaries/SharedStyling';
import { setIndex, setRun, setWelcomeNotifsEmpty } from './redux/slices/userJourneySlice';
import { resetSpamSlice } from 'redux/slices/spamSlice';
import { resetNotificationsSlice } from 'redux/slices/notificationSlice';
import { resetCanSendSlice } from 'redux/slices/sendNotificationSlice';
import { resetChannelCreationSlice } from 'redux/slices/channelCreationSlice';
import { resetAdminSlice } from 'redux/slices/adminSlice';
import Navigation from 'structure/Navigation';
import {  ErrorContext } from './contexts/ErrorContext'
import { resetUserSlice, setUserPushSDKInstance } from 'redux/slices/userSlice';

// Internal Configs
import { appConfig } from 'config';
import { themeDark, themeLight } from 'config/Themization';
import GLOBALS from 'config/Globals';
import { ChatUserContext } from 'contexts/ChatUserContext';

// space imports
import SpaceContextProvider, { SpaceContext } from 'contexts/SpaceContext';
import { SpacesUIProvider } from '@pushprotocol/uiweb';
import { darkTheme,lightTheme } from 'config/spaceTheme';
import { SpaceWidgetSection } from 'sections/space/SpaceWidgetSection';
import {
  ISpaceBannerProps,
  ISpaceCreateWidgetProps,
  ISpaceFeedProps,
  ISpaceInvitesProps,
  ISpaceWidgetProps,
  SpacesUI,
} from '@pushprotocol/uiweb';
import SpaceComponentContextProvider from 'contexts/SpaceComponentsContext';
import { useUpdateTheme } from '@web3-onboard/react';

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

export default function App() {
  const dispatch = useDispatch();

  const {isActive, account, chainId, provider} = useAccount();
  const [currentTime, setcurrentTime] = React.useState(0);
  const {authError, setAuthError } = useContext(ErrorContext);
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
    if(!account) return;
    dispatch(resetSpamSlice());
    dispatch(resetNotificationsSlice());
    dispatch(resetCanSendSlice());
    dispatch(resetChannelCreationSlice());
    dispatch(resetAdminSlice());
    dispatch(resetUserSlice());
  }, [account]);

  useEffect(() => {
    const librarySigner = provider?.getSigner(account);
    if(!account || !librarySigner || !appConfig?.appEnv || userPushSDKInstance) return;

    const initializePushSDK = async () => {
        try {
          const userInstance = await PushAPI.initialize(librarySigner, {
              env: appConfig.appEnv, // defaults to staging
              account: account
          });
          
          dispatch(setUserPushSDKInstance(userInstance));
        } catch (error) {
        // Handle initialization error
        }
    };
    
    initializePushSDK();
}, [account, provider]);

  // console.log(isActive, chainId, account);
  // handle logic to reconnect in response to certain events from the provider
  const { allowedChain } = useInactiveListener();

  // Initialize GA
  ReactGA.initialize(appConfig.googleAnalyticsId);
  ReactGA.pageview('/login');
  // Initialize GA

  // Initialize Theme
  const [darkMode, setDarkMode] = useState(false);

  // enable socket notifications
  useSDKSocket({ account, chainId, env: appConfig.appEnv});
  
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
  }, []);

  React.useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(darkMode));
  });

  React.useEffect(() => {
    document.body.style.backgroundColor = darkMode ? '#000' : '#fff';
  }, [darkMode]);

  React.useEffect(() => {
    window?.Olvy?.init({
      organisation: "epns",
      target: "#olvy-target",
      type: "sidebar",
      view: {
        showSearch: false,
        compact: false,
        showHeader: true, // only applies when widget type is embed. you cannot hide header for modal and sidebar widgets
        showUnreadIndicator: true,
        unreadIndicatorColor: "#cc1919",
        unreadIndicatorPosition: "top-right"
      }
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
  const { pgpPvtKey } = useContext<any>(ChatUserContext);


  const spaceUI = useMemo(() => new SpacesUI({
    account: account,
    signer: librarySigner,
    pgpPrivateKey: pgpPvtKey,
    env: appConfig?.appEnv,
  }), [account, librarySigner, pgpPvtKey, appConfig?.appEnv]);


  // const { spaceUI } = useSpaceComponents();

  const location = useLocation();
  const isSnapPage = location?.pathname.includes('/snap');

  return (
    <ThemeProvider theme={darkMode ? themeDark : themeLight}>
      {(!isActive || !allowedChain) && (
        <SectionV2 minHeight="100vh">
          <AppLogin toggleDarkMode={toggleDarkMode} />
        </SectionV2>
      )}

      {isActive && !authError && allowedChain && (
        <>
          <GlobalStyle />
          <InitState />
          <NavigationContextProvider>
            <SpaceContextProvider>
              <SpaceComponentContextProvider spaceUI={spaceUI}>
            <AppContextProvider>
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
                bg={darkMode ? themeDark.backgroundBG : !isActive ? themeLight.connectWalletBg : themeLight.backgroundBG}
                headerHeight={GLOBALS.CONSTANTS.HEADER_HEIGHT}
              >
                {!isSnapPage && <LeftBarContainer leftBarWidth={GLOBALS.CONSTANTS.LEFT_BAR_WIDTH}>
                  <Navigation />
                </LeftBarContainer>}

                <ContentContainer leftBarWidth={isSnapPage ? 0 : GLOBALS.CONSTANTS.LEFT_BAR_WIDTH}>
                   {/* Shared among all pages, load universal things here */}
                   <SpacesUIProvider spaceUI={spaceUI} theme={darkMode ? darkTheme : lightTheme}>
                      <MasterInterfacePage />
                      <SpaceWidgetSection />
                    </SpacesUIProvider>
                </ContentContainer>
              </ParentContainer>
            </AppContextProvider>
            </SpaceComponentContextProvider>
            </SpaceContextProvider>
          </NavigationContextProvider>
        </>
      )}
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
  z-index: 99999;
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
