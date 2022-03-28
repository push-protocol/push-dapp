import React, {useState} from "react";
import ReactGA from "react-ga";

import { Web3Provider } from "ethers/providers";
import { useWeb3React } from "@web3-react/core";
import { AbstractConnector } from "@web3-react/abstract-connector";
import { useEagerConnect, useInactiveListener } from "hooks";
import { injected, walletconnect, portis, ledger } from "connectors";
import Joyride, { ACTIONS, CallBackProps, EVENTS, STATUS, Step } from "react-joyride";

import styled, {useTheme} from "styled-components";
import { Item, ItemH, Span, H2, B, A } from "components/SharedStyling";

import Header from "sections/Header";
import Navigation from "sections/Navigation";

import NavigationContextProvider from "contexts/NavigationContext";
import MasterInterfacePage from "pages/MasterInterfacePage";

import {ThemeProvider} from "styled-components";

import { themeLight, themeDark } from "config/Themization";
import GLOBALS from "config/Globals";

import {incrementStepIndex, decrementStepIndex, setRun, setIndex, setWelcomeNotifsEmpty} from "./redux/slices/userJourneySlice";
import { useSelector, useDispatch } from "react-redux";

import * as dotenv from "dotenv";
dotenv.config();

// define the different type of connectors which we use
const web3Connectors = {
  Injected: {
    obj: injected,
    logo: "./svg/login/metamask.svg",
    title: "MetaMask",
  },
  WalletConnect: {
    obj: walletconnect,
    logo: "./svg/login/walletconnect.svg",
    title: "Wallet Connect",
  },
  // Trezor: {obj: trezor, logo: './svg/login/trezor.svg', title: 'Trezor'},
  Ledger: { obj: ledger, logo: "./svg/login/ledger.svg", title: "Ledger" },
  Portis: { obj: portis, logo: "./svg/login/portis.svg", title: "Portis" },
};

export default function App() {

  const dispatch = useDispatch();

  const { connector, activate, active, error } = useWeb3React<Web3Provider>();
  const [activatingConnector, setActivatingConnector] = React.useState<
    AbstractConnector
  >();
  const [currentTime,setcurrentTime]=React.useState(0);

    const themes = useTheme();

    const {
      run,
      stepIndex,
      isCommunicateOpen,
      tutorialContinous
    } = useSelector((state: any) => state.userJourney);

  React.useEffect(()=>{
    const now = Date.now()/ 1000;
    setcurrentTime(now)
  },[])
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
  ReactGA.initialize("UA-165415629-5");
  ReactGA.pageview("/login");
  // Initialize GA

  // Initialize Theme
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }


  React.useEffect(() => {
    const data = localStorage.getItem('theme')
    if(data){
      setDarkMode(JSON.parse(data))
    }
  },[])

  React.useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(darkMode))
  })

  React.useEffect(()=>{
    document.body.style.backgroundColor = darkMode ? "#000" : "#fff";
  },[darkMode])


  React.useEffect(()=>{
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
  });

  const steps = [
    {
      //0
      content: (
        <div>
          <h2>Let's begin our journey!</h2>
          <p>
            Welcome to the <B>ETHERIUM</B> <B>PUSH</B>{" "}
            <B>NOTIFICATION SERVICE</B>{" "}
          </p>
          <button onClick={() => {
              if( isCommunicateOpen)
              dispatch(incrementStepIndex());
            dispatch(incrementStepIndex());}}>Next</button>
        </div>
      ),
      locale: { next: <strong aria-label="next">NEXT</strong> },
      placement: "center",
      target: "body",
      defaultProps: false,
      // spotlightClicks: true,
      // disableOverlayClose: false,
    },
    {
      //1
      content: (
        <div>
          <h2>Click on Communicate!</h2>
          <button onClick={
            () => dispatch(incrementStepIndex())
          }>Next</button>
        </div>
      ),
      placement: "right-start",
      target: ".communicate",
      styles: {
        options: {
          arrowColor: "#a9a9a9",
          backgroundColor: "#e6e6e6",
          beaconSize: "30px",
          beaconColor: "#fff",
          beaconBorderColor: "#fff",
          textColor: "#e675ce",
          width: "100%",
          zIndex: 9999,
        },
        tooltip: {
          backgroundColor: "#2596be",
          color: "#fff",
          maxWidth: "350px",
          zIndex: 9999,
        },
      },
      spotlightClicks: true,
      disableAnimation: false,
      disablefloating: false,
      defaultProps: false,
    },
    {
      //2
      content: (
        <div>
          <h2>Click on channels!</h2>
          {/* <button onClick={
            () => dispatch(incrementStepIndex())
          }>Next</button> */}
        </div>
      ),
      placement: "right-start",
      target: ".channels",
      styles: {
        options: {
          arrowColor: "#a9a9a9",
          backgroundColor: "#e6e6e6",
          beaconSize: "30px",
          beaconColor: "#fff",
          beaconBorderColor: "#fff",
          textColor: "#e675ce",
          width: "100%",
          zIndex: 9999,
        },
        tooltip: {
          backgroundColor: "#2596be",
          color: "#fff",
          maxWidth: "350px",
          zIndex: 9999,
        },
      },
      spotlightClicks: true,
      disableAnimation: false,
      disablefloating: false,
      defaultProps: false,
    },
    {
      //3
      content: <div> This is the place where you see all your channels</div>,
      placement: "center",
      target: "body",
    },
    {
      //4
    },
    {
      //5
      content: (
        <div>
          <h2>Click on Opt-in!</h2>
          <p> You can click into any number of elements as you want</p>
          <button onClick={
            () => dispatch(incrementStepIndex())
          }>Next</button>
        </div>
      ),
      // placement: "top-center",
      // position: "top-center",
      // target: `#addr-0x0000000000000000000000000000000000000000`, //production
      // target: `#addr-0x2177cFc66474bBEce7Cbf114d780A5cfE78485De`, //development
      placement: "center",
      target: "body",
      disableOverlayClose: false,
      // spotlightClicks: true,
      offsetTop: "-100px",
      defaultProps: false,
    },
    // {},//6
    {
      //6
      content: (
        <div>
          <h2>Click on Inbox!</h2>
          {/* <button onClick={
          () => dispatch(incrementStepIndex())
        }>Next</button> */}
        </div>
      ),
      placement: "right-start",
      target: ".inbox",
      spotlightClicks: true,
      disablefloating: true,
      defaultProps: false,
    },
    {
      //7
      content: (
        <div>
          <h2>You will get all your inbox messages here.</h2>
          <button onClick={() => dispatch(incrementStepIndex())}>Next</button>
        </div>
      ),
      // placement: "top",
      // position: "top-center",
      // target: `.hdvjVo`,
      placement: "center",
      target: "body",
      // disableOverlayClose: false,
    },
    {
      //8
      content: (
        <div>
          <h2>You will get all your spam messages here.</h2>
          {/* <button onClick={
      () => dispatch(incrementStepIndex())
    }>Next</button> */}
        </div>
      ),
      placement: "right-start",
      target: `.spam`,
      spotlightClicks: true,
      defaultProps: false,
    },
    {
      //9
      content: (
        <div>
          <h2>You will get all your spam messages here.</h2>
          {/* <button onClick={
      () => dispatch(incrementStepIndex())
    }>Next</button> */}
        </div>
      ),
      placement: "center",
      target: `body`,
      spotlightClicks: true,
      defaultProps: false,
    },
    {
      //10
      content: (
        <div>
          <h2>You Can Recieve all your notifications here</h2>
          <button onClick={() => dispatch(incrementStepIndex())}>Next</button>
        </div>
      ),
      placement: "right-start",
      target: `.receive`,
      // target: `.sc-AxheI`,
      spotlightClicks: true,
      defaultProps: false,
    },
    {
      //11
      content: (
        <div>
          <h2>You can Recieve all your Browser notifications through our extension as well</h2>
          <button onClick={() => dispatch(incrementStepIndex())}>Next</button>
        </div>
      ),
      placement: "right-start",
      target: `#epns-browser`,
      // target: `.sc-AxheI`,
      spotlightClicks: true,
      defaultProps: false,
    },
    {
      //12
      content: (
        <div>
          <h2>Our IOS App here</h2>
          <button onClick={() => dispatch(incrementStepIndex())}>Next</button>
        </div>
      ),
      placement: "right-start",
      target: `#epns-app-ios`,
      // target: `.sc-AxheI`,
      spotlightClicks: true,
      defaultProps: false,
    },
    {
      //13
      content: (
        <div>
          <h2>Our Android App Here</h2>
          <button onClick={() => dispatch(incrementStepIndex())}>Next</button>
        </div>
      ),
      placement: "right-start",
      target: `#epns-app`,
      // target: `.sc-AxheI`,
      spotlightClicks: true,
      defaultProps: false,
    },
    {
      //14
      content: (
        <div>
          <h2>Tutorial Complete</h2>
          <p>
            <B>THANK YOU</B>{" "}
          </p>
          <button onClick={() => {dispatch(setRun(false))
      dispatch(setIndex(0))
      dispatch(setWelcomeNotifsEmpty());}}>Next</button>
        </div>
      ),
      locale: { next: <strong aria-label="next">NEXT</strong> },
      placement: "center",
      target: "body",
      defaultProps: false,
      // spotlightClicks: true,
      // disableOverlayClose: false,
    },
  ]

  const handleJoyrideCallback = (data: CallBackProps) => {
    console.log(data)
    // console.log(STATUS);
    const { action, lifecycle, status, index } = data
    if (lifecycle === "ready") {
      setTimeout(() => {
        document.querySelector("div > section > div").scrollTop = 0
      }, 100)
    }
    
    
    if ( action === "skip" || index == 15 ) { //action === "close" ||
      dispatch(setRun(false))
      dispatch(setIndex(0))
      dispatch(setWelcomeNotifsEmpty());
    }
    // else if (action === 'next' && status === 'running') {
    //   dispatch(incrementStepIndex());
    // }
  }

  return (
    <ThemeProvider theme={darkMode ? themeDark : themeLight }>
      <NavigationContextProvider>
      <Joyride
          run={run}
          steps={steps}
          continuous={tutorialContinous}
          stepIndex={stepIndex}
          primaryProps={false}
          hideBackButton={true}
          hideBackButton={false}
          disableScrolling={true}
          disableScrollParentFix={true}
          disableFlip={true}
          showSkipButton={true}
          callback={handleJoyrideCallback}
        />
        <HeaderContainer>
          <Header
            isDarkMode={darkMode}
            darkModeToggle={toggleDarkMode}
          />  
        </HeaderContainer>

        <ParentContainer
          headerHeight={GLOBALS.CONSTANTS.HEADER_HEIGHT}
        >

          {(active) && !error && (
            <>
              <LeftBarContainer
                leftBarWidth={GLOBALS.CONSTANTS.LEFT_BAR_WIDTH}
              >
                <Navigation />
              </LeftBarContainer>

              <ContentContainer
                leftBarWidth={GLOBALS.CONSTANTS.LEFT_BAR_WIDTH}
              >
                {/* Shared among all pages, load universal things here */}
                <MasterInterfacePage />
              </ContentContainer>
            </>
          )}

          {(!active) && (
            <Item
              justify="flex-start"
            >
              <ProviderLogo
                src="./epnshomelogo.png"
                srcSet={"./epnshomelogo@2x.png 2x, ./epnshomelogo@2x.png 3x"}
              />
              
              <Item
                bg={darkMode ? themeDark : themeLight}
                border="1px solid #ddd"
                padding="15px"
                radius="12px"
                flex="initial"
              >
                <H2 textTransform="uppercase" spacing="0.1em">
                  <Span bg="#e20880" color="#fff" weight="600" padding="0px 8px">
                    Connect
                  </Span>
                  <Span weight="200" color={darkMode ? themeDark : themeLight}> Your Wallet</Span>
                </H2>

                <ItemH maxWidth="700px" align="stretch">
                  {Object.keys(web3Connectors).map((name) => {
                    const currentConnector = web3Connectors[name].obj;
                    const connected = currentConnector === connector;
                    const disabled =
                      !triedEager ||
                      !!activatingConnector ||
                      connected ||
                      !!error;
                    const image = web3Connectors[name].logo;
                    const title = web3Connectors[name].title;

                    return (
                      <ProviderButton
                        disabled={disabled}
                        key={name}
                        onClick={() => {
                          setActivatingConnector(currentConnector);
                          activate(currentConnector);
                        }}
                        border="#35c5f3"
                      >
                        <ProviderImage src={image} />

                        <Span
                          spacing="0.1em"
                          textTransform="uppercase"
                          size="12px"
                          weight="600"
                          padding="20px"
                          background={darkMode ? themeDark : themeLight}
                          color={darkMode ? themeDark : themeLight}

                        >
                          {title}
                        </Span>
                      </ProviderButton>
                    );
                  })}
                </ItemH>
              </Item>

              <Span margin="10px" size="14px" color={darkMode ? themeDark.fontColor : themeLight.fontColor }>
                By unlocking your wallet, <B>You agree</B> to our{" "}
                <A href="https://epns.io/tos" target="_blank">
                  Terms of Service
                </A>{" "}
                and our{" "}
                <A href="https://epns.io/privacy" target="_blank">
                  Privacy Policy
                </A>
                .
              </Span>
            </Item>
          )}
        </ParentContainer>
      </NavigationContextProvider>
    </ThemeProvider>
  );
}

// CSS STYLES
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
  background: ${props => props.theme.backgroundBG};
  margin: ${props => props.headerHeight}px 0px 0px 0px;
  min-height: calc(100vh - ${GLOBALS.CONSTANTS.HEADER_HEIGHT}px);
`;

const LeftBarContainer = styled.div`
  left: 0;
  top: 0;
  bottom: 0;
  width: ${props => props.leftBarWidth}px;
  position: fixed;

  @media (max-width: 992px) {
    display: none;
  }
`

const ContentContainer = styled.div`
  display: flex;
  flex: 1;
  align-self: center;
  width: 100%;



  margin: 0px 0px 0px ${props => props.leftBarWidth}px;

  @media (max-width: 992px) {
    margin: 0px;
  }
`;

const ProviderLogo = styled.img`
  width: 15vw;
  align-self: center;
  display: flex;
  margin: 10px 20px 20px 20px;
  min-width: 200px;
`;

const ProviderButton = styled.button`
  flex: 1 1 0;
  min-width: 280px;
  background: ${props => props.theme.mainBg};
  outline: 0;ProviderButton

  box-shadow: 0px 15px 20px -5px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  border: 1px solid rgb(225, 225, 225);

  margin: 20px;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  display: flex;
  flex-direction: row;
  padding: 10px;

  &:hover {
    opacity: 0.9;
    cursor: pointer;
    border: 1px solid ${(props) => props.border};
  }
  &:active {
    opacity: 0.75;
    cursor: pointer;
    border: 1px solid ${(props) => props.border};
  }
`;

const ProviderImage = styled.img`
  width: 32px;
  max-height: 32px;
  padding: 10px;
`;