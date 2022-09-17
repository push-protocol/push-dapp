import React, { useState } from 'react';
import ReactGA from 'react-ga';

import { AbstractConnector } from '@web3-react/abstract-connector';
import { useWeb3React } from '@web3-react/core';
import { appConfig } from 'config';
import { injected, ledger, walletconnect } from 'connectors';
import { ethers } from 'ethers';
import { useEagerConnect, useInactiveListener, useSDKSocket } from 'hooks';
import Joyride, { CallBackProps } from 'react-joyride';
import { useLocation } from 'react-router-dom';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import Header from 'sections/Header';
import Navigation from 'sections/Navigation';
import styled from 'styled-components';
import AppLogin from './AppLogin';

import { SectionV2 } from './components/reusables/SharedStylingV2';
import { A, B, C, H2, Image, Item, ItemH, P, Span } from './primaries/SharedStyling';

import NavigationContextProvider from 'contexts/NavigationContext';
import MasterInterfacePage from 'pages/MasterInterfacePage';

import { ThemeProvider } from 'styled-components';

import GLOBALS from 'config/Globals';
import { themeDark, themeLight } from 'config/Themization';

import { useDispatch, useSelector } from 'react-redux';
import UserJourneySteps from 'segments/userJourneySteps';
import { setIndex, setRun, setWelcomeNotifsEmpty } from './redux/slices/userJourneySlice';

import InitState from 'components/InitState';
import * as dotenv from 'dotenv';
import { EnvHelper } from 'helpers/UtilityHelper';

dotenv.config();

export default function App() {
  const dispatch = useDispatch();

  const { connector, activate, active, error, account, chainId } = useWeb3React<ethers.providers.Web3Provider>();
  const [activatingConnector, setActivatingConnector] = React.useState<AbstractConnector>();
  const [currentTime, setcurrentTime] = React.useState(0);

  const { run, stepIndex, tutorialContinous } = useSelector((state: any) => state.userJourney);
  const location = useLocation();
  const [title, setTitle] = useState(EnvHelper.dappTitle());

  React.useEffect(() => {
    // This will run when the page first loads and whenever the title changes
    document.title = title;
  }, [title]);

  React.useEffect(() => {
    const now = Date.now() / 1000;
    setcurrentTime(now);
  }, []);
  React.useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect();

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager || !!activatingConnector);

  // Initialize GA
  ReactGA.initialize(appConfig.googleAnalyticsId);
  ReactGA.pageview('/login');
  // Initialize GA

  // Initialize Theme
  const [darkMode, setDarkMode] = useState(false);

  // enable socket notifications
  useSDKSocket({ account, chainId, env: 'dev' });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  React.useEffect(() => {
    const data = localStorage.getItem('theme');
    if (data) {
      setDarkMode(JSON.parse(data));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(darkMode));
  });

  React.useEffect(() => {
    document.body.style.backgroundColor = darkMode ? '#000' : '#fff';
  }, [darkMode]);

  React.useEffect(() => {
    // window?.Olvy?.init({
    //   organisation: "epns",
    //   target: "#olvy-target",
    //   type: "sidebar",
    //   view: {
    //     showSearch: false,
    //     compact: false,
    //     showHeader: true, // only applies when widget type is embed. you cannot hide header for modal and sidebar widgets
    //     showUnreadIndicator: true,
    //     unreadIndicatorColor: "#cc1919",
    //     unreadIndicatorPosition: "top-right"
    //   }
    // });
    // return function cleanup() {
    //   window?.Olvy?.teardown();
    // };
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

  return (
    <ThemeProvider theme={darkMode ? themeDark : themeLight}>
      {!active && (
        <SectionV2 minHeight="100vh">
          <AppLogin toggleDarkMode={toggleDarkMode} />
        </SectionV2>
      )}

      {active && !error && (
        <>
          <InitState />
          <NavigationContextProvider>
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
              <Header isDarkMode={darkMode} darkModeToggle={toggleDarkMode} />
            </HeaderContainer>

            <ParentContainer
              bg={darkMode ? themeDark.backgroundBG : !active ? themeLight.connectWalletBg : themeLight.backgroundBG}
              headerHeight={GLOBALS.CONSTANTS.HEADER_HEIGHT}>
              <LeftBarContainer leftBarWidth={GLOBALS.CONSTANTS.LEFT_BAR_WIDTH}>
                <Navigation />
              </LeftBarContainer>

              <ContentContainer leftBarWidth={GLOBALS.CONSTANTS.LEFT_BAR_WIDTH}>
                {/* Shared among all pages, load universal things here */}
                <MasterInterfacePage />
              </ContentContainer>
            </ParentContainer>
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
