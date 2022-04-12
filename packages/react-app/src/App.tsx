import React, {useState} from "react";
import ReactGA from "react-ga";

import { Web3Provider } from "ethers/providers";
import { useWeb3React } from "@web3-react/core";
import { AbstractConnector } from "@web3-react/abstract-connector";
import { useEagerConnect, useInactiveListener } from "hooks";
import { injected, walletconnect, portis, ledger } from "connectors";
import Joyride, { ACTIONS, CallBackProps, EVENTS, STATUS, Step } from "react-joyride";

import styled, {useTheme} from "styled-components";
import { Item, ItemH, Span, H2, H3, B, A, C, Button  } from "components/SharedStyling";

import Header from "sections/Header";
import Navigation from "sections/Navigation";

import NavigationContextProvider from "contexts/NavigationContext";
import MasterInterfacePage from "pages/MasterInterfacePage";

import {ThemeProvider} from "styled-components";

import { themeLight, themeDark } from "config/Themization";
import GLOBALS from "config/Globals";

import {incrementStepIndex, decrementStepIndex, setRun, setIndex, setWelcomeNotifsEmpty , setTutorialContinous} from "./redux/slices/userJourneySlice";
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
      tutorialContinous,
      isDeveloperOpen,
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
        <Item>
          <H3 
            size="x-large" 
            margin="5px 0px 15px 0px" 
            color={darkMode ? themeDark.dynamicTutsFontColor: themeLight.dynamicTutsFontColor}
          >
            Let's begin our journey!
          </H3>
          
          <Item
            color={darkMode ? themeDark.dynamicTutsFontColor: themeLight.dynamicTutsFontColor}
            size="normal"
            align="stretch"
          >
            <Span color="inherit">
              <B>EPNS</B>, the native web3 communication layer enables open communication tied to wallet address from any supported dApps, protocol or web3 projects.
            </Span>

            <Span color="inherit" margin="20px 0px 0px 0px">
              To get started, follow the icon <BeaconExample><BeaconExamplePulse /></BeaconExample>, click next to continue!
            </Span>
          </Item>
          

          <ItemH
            self="stretch"
            items="stretch"
            margin="10px -10px -10px -10px" 
          >
            <Button 
              flex="1"
              margin="10px 10px"
              bg={darkMode ? themeDark.dynamicTutsButtonBg : themeLight.dynamicTutsButtonBg}
              color={darkMode ? themeDark.dynamicTutsButtonColor : themeLight.dynamicTutsButtonColor}
              onClick={() => {
                if( isCommunicateOpen) dispatch(incrementStepIndex());
                dispatch(incrementStepIndex());
              }}
            >
              Next
            </Button>
          </ItemH>
        </Item>
      ),
      locale: { next: <strong aria-label="next">NEXT</strong> },
      placement: "center",
      target: "body",
      hideFooter: true,
      // defaultProps: false,
      
      // spotlightClicks: true,
      // disableOverlayClose: false,
    },
    {
      //1
      content: (
        <Item
          color={darkMode ? themeDark.dynamicTutsFontColor: themeLight.dynamicTutsFontColor}
          size="normal"
          align="stretch"
        >
          <Span color="inherit">
            Communicate tab holds all your communication including notifications! Click to expand it.
          </Span>
        </Item>
      ),
      placement: "right-start",
      target: ".communicate",
      spotlightClicks: true,
      disableAnimation: false,
      disablefloating: false,
      defaultProps: false,
      hideFooter: true,
      styles: {
        buttonNext: {
          display: 'none',
        },
        buttonSkip: {
          display: 'none',
        },
        buttonClose: {
          display: 'none',
        }
      }
    },
    {
      //2
      content: (
        <Item
          color={darkMode ? themeDark.dynamicTutsFontColor: themeLight.dynamicTutsFontColor}
          size="normal"
          align="stretch"
        >
          <Span color="inherit">
            Channels are services that want to send notifications to your wallet address. Let's check them out!
          </Span>
        </Item>
      ),
      placement: "right-start",
      target: ".channels",
      spotlightClicks: true,
      disableAnimation: false,
      disablefloating: false,
      defaultProps: false,
      hideFooter: true,
      styles: {
        buttonNext: {
          display: 'none',
        },
        buttonSkip: {
          display: 'none',
        },
        buttonClose: {
          display: 'none',
        }
      },
    },
    {
      //3
      content: (
        <Item
          color={darkMode ? themeDark.dynamicTutsFontColor: themeLight.dynamicTutsFontColor}
          size="normal"
          align="stretch"
        >
          <Span color="inherit">
            This is the Channels Page. Please wait while we load channels from EPNS protocol.
          </Span>
        </Item>
      ),
      placement: "center",
      target: "body",
      hideFooter: true,
      styles: {
        buttonNext: {
          display: 'none',
        },
        buttonSkip: {
          display: 'none',
        },
        buttonClose: {
          display: 'none',
        }
      },
    },
    {
      //4
    },
    {
      //5
      content: (
        <Item>
          <H3 
            size="x-large" 
            margin="5px 0px 15px 0px" 
            color={darkMode ? themeDark.dynamicTutsFontColor: themeLight.dynamicTutsFontColor}
          >
            Let's opt-in!
          </H3>
          
          <Item
            color={darkMode ? themeDark.dynamicTutsFontColor: themeLight.dynamicTutsFontColor}
            size="normal"
            align="stretch"
          >
            <Span color="inherit">
              <B>EPNS</B> is a user centric protocol which means that you need to gaslessly (for free) opt-in to a channel to enable them to send notifs to your wallet!
            </Span>

            <Span color="inherit" margin="20px 0px 0px 0px">
              You can opt-in in any number of channels as you want. Opt-in in at least one of the channels to proceed to the next step.
            </Span>

            <Span color="inherit" margin="20px 0px 0px 0px">
              Opt-in will open Metamask popup, in which you have to sign the transaction (which is free), and voila, you've all set to receive notifs!
            </Span>
          </Item>
          

          <ItemH
            self="stretch"
            items="stretch"
            margin="10px -10px -10px -10px" 
          >
            <Button 
              flex="1"
              margin="10px 10px"
              bg={darkMode ? themeDark.dynamicTutsButtonBg : themeLight.dynamicTutsButtonBg}
              color={darkMode ? themeDark.dynamicTutsButtonColor : themeLight.dynamicTutsButtonColor}
              onClick={() => {
                dispatch(incrementStepIndex());
              }}
            >
              Next
            </Button>
          </ItemH>
        </Item>
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
      hideFooter: true,
    },
    // {},//6
    {
      //6
      content: (
        <Item
          color={darkMode ? themeDark.dynamicTutsFontColor: themeLight.dynamicTutsFontColor}
          size="normal"
          align="stretch"
        >
          <Span color="inherit">
            Click on inbox tab from sidebar to proceed forward!
          </Span>
        </Item>
      ),
      placement: "right-start",
      target: ".inbox",
      spotlightClicks: true,
      disablefloating: true,
      defaultProps: false,
      hideFooter: true,
      styles: {
        buttonNext: {
          display: 'none',
        },
        buttonSkip: {
          display: 'none',
        },
        buttonClose: {
          display: 'none',
        }
      },
    },
    {
      //7
      content: (
        <Item>
          <H3 
            size="x-large" 
            margin="5px 0px 15px 0px" 
            color={darkMode ? themeDark.dynamicTutsFontColor: themeLight.dynamicTutsFontColor}
          >
            Inbox tab!
          </H3>
          
          <Item
            color={darkMode ? themeDark.dynamicTutsFontColor: themeLight.dynamicTutsFontColor}
            size="normal"
            align="stretch"
          >
            <Span color="inherit">
              All notifications coming from an opted in channel lands in your inbox. It might be empty right now but if you have opted in to a channel, it will blossom soon!
            </Span>

            <Span color="inherit" margin="20px 0px 0px 0px">
              But wait, that's not all, notifications are tied to your user wallet which means any crypto frontend or wallet can display it! More on this later!!
            </Span>
          </Item>

          <ItemH
            self="stretch"
            items="stretch"
            margin="10px -10px -10px -10px" 
          >
            <Button 
              flex="1"
              margin="10px 10px"
              bg={darkMode ? themeDark.dynamicTutsButtonBg : themeLight.dynamicTutsButtonBg}
              color={darkMode ? themeDark.dynamicTutsButtonColor : themeLight.dynamicTutsButtonColor}
              onClick={() => {
                dispatch(incrementStepIndex());
              }}
            >
              Next
            </Button>
          </ItemH>
        </Item>
      ),
      // placement: "top",
      // position: "top-center",
      // target: `.hdvjVo`,
      placement: "center",
      target: "body",
      // disableOverlayClose: false,
      hideFooter: true,
    },
    {
      //8
      content: (
        <Item
          color={darkMode ? themeDark.dynamicTutsFontColor: themeLight.dynamicTutsFontColor}
          size="normal"
          align="stretch"
        >
          <Span color="inherit">
            Click on spam tab from sidebar to see how spam works!
          </Span>
        </Item>
      ),
      placement: "right-start",
      target: `.spam`,
      spotlightClicks: true,
      defaultProps: false,
      hideFooter: true,
      styles: {
        buttonNext: {
          display: 'none',
        },
        buttonSkip: {
          display: 'none',
        },
        buttonClose: {
          display: 'none',
        }
      },
    },
    { //9
      content: (
        <Item>
          <H3 
            size="x-large" 
            margin="5px 0px 15px 0px" 
            color={darkMode ? themeDark.dynamicTutsFontColor: themeLight.dynamicTutsFontColor}
          >
            Spam tab!
          </H3>
          
          <Item
            color={darkMode ? themeDark.dynamicTutsFontColor: themeLight.dynamicTutsFontColor}
            size="normal"
            align="stretch"
          >
            <Span color="inherit">
              Spam notifications are notifs sent from a channel to your wallet address which you haven't opted in for yet, they might be spammy or a channel might have something important to communicate!
            </Span>
          </Item>

          <ItemH
            self="stretch"
            items="stretch"
            margin="10px -10px -10px -10px" 
          >
            <Button 
              flex="1"
              margin="10px 10px"
              bg={darkMode ? themeDark.dynamicTutsButtonBg : themeLight.dynamicTutsButtonBg}
              color={darkMode ? themeDark.dynamicTutsButtonColor : themeLight.dynamicTutsButtonColor}
              onClick={() => {
                dispatch(incrementStepIndex());
              }}
            >
              Next
            </Button>
          </ItemH>
        </Item>
      ),
      placement: "center",
      target: `body`,
      spotlightClicks: true,
      defaultProps: false,
      hideFooter: true
    },
    {
      //10
      content: (
        <Item
          color={darkMode ? themeDark.dynamicTutsFontColor: themeLight.dynamicTutsFontColor}
          size="normal"
          align="stretch"
        >
          <Span color="inherit">
            Receive Notifs tab contains all crypto frontends that have adopted EPNS protocol for communication! click on it to check the options out!
          </Span>
        </Item>
      ),
      placement: "right-start",
      target: `.receive`,
      // target: `.sc-AxheI`,
      spotlightClicks: true,
      defaultProps: false,
      hideFooter: true,
      styles: {
        buttonNext: {
          display: 'none',
        },
        buttonSkip: {
          display: 'none',
        },
        buttonClose: {
          display: 'none',
        }
      },
    },
    {
      //11
      content: (
        <Item>
          <H3 
            size="x-large" 
            margin="5px 0px 15px 0px" 
            color={darkMode ? themeDark.dynamicTutsFontColor: themeLight.dynamicTutsFontColor}
          >
            Receive Notifs tab!
          </H3>
          
          <Item
            color={darkMode ? themeDark.dynamicTutsFontColor: themeLight.dynamicTutsFontColor}
            size="normal"
            align="stretch"
          >
            <Span color="inherit">
              EPNS is an open communication network which means any crypto wallet can push notifs to your wallet address! 
            </Span>

            <Span color="inherit" margin="20px 0px 0px 0px">
              Let's check out few options that are available currently! Keep an eye out for here for your favorite wallet to debut here soon!
            </Span>
          </Item>

          <ItemH
            self="stretch"
            items="stretch"
            margin="10px -10px -10px -10px" 
          >
            <Button 
              flex="1"
              margin="10px 10px"
              bg={darkMode ? themeDark.dynamicTutsButtonBg : themeLight.dynamicTutsButtonBg}
              color={darkMode ? themeDark.dynamicTutsButtonColor : themeLight.dynamicTutsButtonColor}
              onClick={() => {
                dispatch(incrementStepIndex());
                dispatch(setTutorialContinous(true));
              }}
            >
              Next
            </Button>
          </ItemH>
        </Item>
      ),
      placement: "center",
      target: `body`,
      // target: `.sc-AxheI`,
      spotlightClicks: true,
      defaultProps: false,
      hideFooter: true,
    },
    {
      //12
      content: (
        <Item>
          <H3 
            size="x-large" 
            margin="5px 0px 15px 0px" 
            color={darkMode ? themeDark.dynamicTutsFontColor: themeLight.dynamicTutsFontColor}
          >
            EPNS Browser Extension
          </H3>
          
          <Item
            color={darkMode ? themeDark.dynamicTutsFontColor: themeLight.dynamicTutsFontColor}
            size="normal"
            align="stretch"
          >
            <Span color="inherit">
              Install the EPNS chrome extension to enable your browser to send notifications about your web3 activities!
            </Span>
          </Item>

          <ItemH
            self="stretch"
            items="stretch"
            margin="10px -10px -10px -10px" 
          >
            <Button 
              flex="1"
              margin="10px 10px"
              bg={darkMode ? themeDark.dynamicTutsButtonBg : themeLight.dynamicTutsButtonBg}
              color={darkMode ? themeDark.dynamicTutsButtonColor : themeLight.dynamicTutsButtonColor}
              onClick={() => {
                window.open(`${process.env.REACT_APP_BROWSER_EXTENSION_URL}`, '_blank');
              }}
            >
              Download
            </Button>

            <Button 
              flex="1"
              margin="10px 10px"
              bg={darkMode ? themeDark.dynamicTutsButtonBg : themeLight.dynamicTutsButtonBg}
              color={darkMode ? themeDark.dynamicTutsButtonColor : themeLight.dynamicTutsButtonColor}
              onClick={() => {
                dispatch(incrementStepIndex());
              }}
            >
              Next
            </Button>
          </ItemH>
        </Item>
      ),
      placement: "bottom",
      target: `#epns-browser`,
      // target: `.sc-AxheI`,
      spotlightClicks: true,
      defaultProps: false,
      hideFooter: true,
    },
    {
      //13
      content: (
        <Item>
          <H3 
            size="x-large" 
            margin="5px 0px 15px 0px" 
            color={darkMode ? themeDark.dynamicTutsFontColor: themeLight.dynamicTutsFontColor}
          >
            EPNS Android App
          </H3>
          
          <Item
            color={darkMode ? themeDark.dynamicTutsFontColor: themeLight.dynamicTutsFontColor}
            size="normal"
            align="stretch"
          >
            <Span color="inherit">
              Install the EPNS Android app to enable push notifications directly to your android devices!
            </Span>
          </Item>

          <ItemH
            self="stretch"
            items="stretch"
            margin="10px -10px -10px -10px" 
          >
            <Button 
              flex="1"
              margin="10px 10px"
              bg={darkMode ? themeDark.dynamicTutsButtonBg : themeLight.dynamicTutsButtonBg}
              color={darkMode ? themeDark.dynamicTutsButtonColor : themeLight.dynamicTutsButtonColor}
              onClick={() => {
                window.open(`${process.env.REACT_APP_ANDROID_STAGING_DAPP_URL}`, '_blank');
              }}
            >
              Android App
            </Button>

            <Button 
              flex="1"
              margin="10px 10px"
              bg={darkMode ? themeDark.dynamicTutsButtonBg : themeLight.dynamicTutsButtonBg}
              color={darkMode ? themeDark.dynamicTutsButtonColor : themeLight.dynamicTutsButtonColor}
              onClick={() => {
                dispatch(incrementStepIndex());
              }}
            >
              Next
            </Button>
          </ItemH>
        </Item>
      ),
      placement: "bottom",
      target: `#epns-app-ios`,
      // target: `.sc-AxheI`,
      spotlightClicks: true,
      defaultProps: false,
      hideFooter: true,
    },
    {
      //14
      content: (
        <Item>
          <H3 
            size="x-large" 
            margin="5px 0px 15px 0px" 
            color={darkMode ? themeDark.dynamicTutsFontColor: themeLight.dynamicTutsFontColor}
          >
            EPNS iOS App
          </H3>
          
          <Item
            color={darkMode ? themeDark.dynamicTutsFontColor: themeLight.dynamicTutsFontColor}
            size="normal"
            align="stretch"
          >
            <Span color="inherit">
              Install the EPNS iOS app to enable push notifications directly to your iOS (Apple) devices!
            </Span>
          </Item>

          <ItemH
            self="stretch"
            items="stretch"
            margin="10px -10px -10px -10px" 
          >
            <Button 
              flex="1"
              margin="10px 10px"
              bg={darkMode ? themeDark.dynamicTutsButtonBg : themeLight.dynamicTutsButtonBg}
              color={darkMode ? themeDark.dynamicTutsButtonColor : themeLight.dynamicTutsButtonColor}
              onClick={() => {
                window.open(`${process.env.REACT_APP_IOS_STAGING_DAPP_URL}`, '_blank');
              }}
            >
              iOS App
            </Button>

            <Button 
              flex="1"
              margin="10px 10px"
              bg={darkMode ? themeDark.dynamicTutsButtonBg : themeLight.dynamicTutsButtonBg}
              color={darkMode ? themeDark.dynamicTutsButtonColor : themeLight.dynamicTutsButtonColor}
              onClick={() => {
                dispatch(incrementStepIndex());
              }}
            >
              Next
            </Button>
          </ItemH>
        </Item>
      ),
      placement: "bottom",
      target: `#epns-app`,
      // target: `.sc-AxheI`,
      spotlightClicks: true,
      defaultProps: false,
      hideFooter: true,
    },
    {
      //15
      content: (
        <Item>
          <H3 
            size="x-large" 
            margin="5px 0px 15px 0px" 
            color={darkMode ? themeDark.dynamicTutsFontColor: themeLight.dynamicTutsFontColor}
          >
            Tutorial Completed 🎉🎉
          </H3>
          
          <Item
            color={darkMode ? themeDark.dynamicTutsFontColor: themeLight.dynamicTutsFontColor}
            size="normal"
            align="stretch"
          >
            <Span color="inherit">
              Hurray! You finished the tutorial!
            </Span>

            <Span color="inherit" margin="20px 0px 0px 0px">
              Congratulations, Now that you are a pro! Go ahead and spread the web3 gospel and notifs saga out to the world!
            </Span>
          </Item>

          <ItemH
            self="stretch"
            items="stretch"
            margin="10px -10px -10px -10px" 
          >
            <Button 
              flex="1"
              margin="10px 10px"
              bg={darkMode ? themeDark.dynamicTutsButtonBg : themeLight.dynamicTutsButtonBg}
              color={darkMode ? themeDark.dynamicTutsButtonColor : themeLight.dynamicTutsButtonColor}
              onClick={() => {

                dispatch(setTutorialContinous(false));

                if (isDeveloperOpen) dispatch(incrementStepIndex());
                dispatch(incrementStepIndex()); 
              }}
            >
              Next (For Devs)
            </Button>

            <Button 
              flex="1"
              margin="10px 10px"
              bg={darkMode ? themeDark.dynamicTutsButtonBg : themeLight.dynamicTutsButtonBg}
              color={darkMode ? themeDark.dynamicTutsButtonColor : themeLight.dynamicTutsButtonColor}
              onClick={() => {
                dispatch(setTutorialContinous(false));
                dispatch(setIndex(0));
                dispatch(setWelcomeNotifsEmpty());
                dispatch(setRun(false));
              }}
            >
              Finish
            </Button>
          </ItemH>
        </Item>
      ),
      locale: { next: <strong aria-label="next">NEXT</strong> },
      placement: "center",
      target: "body",
      defaultProps: false,
      // spotlightClicks: true,
      // disableOverlayClose: false,
      hideFooter: true,
    },
    {
      //16
      content: (
        <Item
          color={darkMode ? themeDark.dynamicTutsFontColor: themeLight.dynamicTutsFontColor}
          size="normal"
          align="stretch"
        >
          <Span color="inherit">
            Hello Web3 Devs! All resources for developers are hidden inside this tab! let's expand it to continue!
          </Span>
        </Item>
      ),
      placement: "right-start",
      target: ".developer",
      spotlightClicks: true,
      disableAnimation: false,
      disablefloating: false,
      defaultProps: false,
      hideFooter: true,
      styles: {
        buttonNext: {
          display: 'none',
        },
        buttonSkip: {
          display: 'none',
        },
        buttonClose: {
          display: 'none',
        }
      }
    },
    {
      //17
      content: (
        <Item>
          <H3 
            size="x-large" 
            margin="5px 0px 15px 0px" 
            color={darkMode ? themeDark.dynamicTutsFontColor: themeLight.dynamicTutsFontColor}
          >
            Developer Tab
          </H3>
          
          <Item
            color={darkMode ? themeDark.dynamicTutsFontColor: themeLight.dynamicTutsFontColor}
            size="normal"
            align="stretch"
          >
            <Span color="inherit">
              Hello Web3 Devs! This tab contains everything you need to get started with creating your own channel!
            </Span>
          </Item>

          <ItemH
            self="stretch"
            items="stretch"
            margin="10px -10px -10px -10px" 
          >
            <Button 
              flex="1"
              margin="10px 10px"
              bg={darkMode ? themeDark.dynamicTutsButtonBg : themeLight.dynamicTutsButtonBg}
              color={darkMode ? themeDark.dynamicTutsButtonColor : themeLight.dynamicTutsButtonColor}
              onClick={() => {
                dispatch(incrementStepIndex());
              }}
            >
              Next
            </Button>
          </ItemH>
        </Item>
      ),
      locale: { next: <strong aria-label="next">NEXT</strong> },
      placement: "center",
      target: ".developer",
      spotlightClicks: true,
      disableAnimation: false,
      disablefloating: false,
      defaultProps: false,
      hideFooter: true,
    },
    {
      //18
      content: (
        <Item>
          <H3 
            size="x-large" 
            margin="5px 0px 15px 0px" 
            color={darkMode ? themeDark.dynamicTutsFontColor: themeLight.dynamicTutsFontColor}
          >
            Create Channel Tab
          </H3>
          
          <Item
            color={darkMode ? themeDark.dynamicTutsFontColor: themeLight.dynamicTutsFontColor}
            size="normal"
            align="stretch"
          >
            <Span color="inherit">
              Creating the channel is the first step to sending notifications via your dApp, smart contract or backend! Just fill in the required details to get started.
            </Span>

            <Span color="inherit" margin="20px 0px 0px 0px">
              Creating a channel on mainnet does have it's activation fee (one time fee) though it is recommended to start on testnet first to get the hang of it.
            </Span>
          </Item>

          <ItemH
            self="stretch"
            items="stretch"
            margin="10px -10px -10px -10px" 
          >
            <Button 
              flex="1"
              margin="10px 10px"
              bg={darkMode ? themeDark.dynamicTutsButtonBg : themeLight.dynamicTutsButtonBg}
              color={darkMode ? themeDark.dynamicTutsButtonColor : themeLight.dynamicTutsButtonColor}
              onClick={() => {
                dispatch(incrementStepIndex());
              }}
            >
              Next
            </Button>
          </ItemH>
        </Item>
      ),
      placement: "right-start",
      target: ".create",
      spotlightClicks: true,
      disablefloating: true,
      defaultProps: false,
      hideFooter: true,
    },
    {
      //19
      content: (
        <Item>
          <H3 
            size="x-large" 
            margin="5px 0px 15px 0px" 
            color={darkMode ? themeDark.dynamicTutsFontColor: themeLight.dynamicTutsFontColor}
          >
            Developer Documentation
          </H3>
          
          <Item
            color={darkMode ? themeDark.dynamicTutsFontColor: themeLight.dynamicTutsFontColor}
            size="normal"
            align="stretch"
          >
            <Span color="inherit">
              Of course, even before creating the channel, maybe the best place to start developing on EPNS protocol is to follow the developer docs.
            </Span>

            <Span color="inherit" margin="20px 0px 0px 0px">
              Please find the link to developer docs below (or you can just click the Developer's guide tab). As always, feel free to reach out to us either on <A href="https://discord.gg/YVPB99F9W5" target="_blank">discord</A> or a channel of your choice!
            </Span>
          </Item>

          <ItemH
            self="stretch"
            items="stretch"
            margin="10px -10px -10px -10px" 
          >
            <Button 
              flex="1"
              margin="10px 10px"
              bg={darkMode ? themeDark.dynamicTutsButtonBg : themeLight.dynamicTutsButtonBg}
              color={darkMode ? themeDark.dynamicTutsButtonColor : themeLight.dynamicTutsButtonColor}
              onClick={() => {
                window.open("https://docs.epns.io/", "_blank")
              }}
            >
              Developer Docs
            </Button>
          </ItemH>
        </Item>
      ),
      placement: "right-start",
      target: ".guide",
      spotlightClicks: true,
      disablefloating: true,
      defaultProps: false,
      hideFooter: true,
    },
  ]

  const handleJoyrideCallback = (data: CallBackProps) => {
    // console.log(data)
    // console.log(STATUS);
    const { action, lifecycle, status, index } = data
    if (lifecycle === "ready") {
      setTimeout(() => {
        document.querySelector("div > section > div").scrollTop = 0
      }, 100)
    }
    
    
    if ( action === "close" || index === 20 ) { //action === "close" ||
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
          hideFooter={true}
          primaryProps={false}
          hideBackButton={true}
          hideCloseButton={false}
          disableScrolling={true}
          disableScrollParentFix={true}
          disableFlip={true}
          showNextButton={false}
          showSkipButton={false}
          disableOverlayClose={true}
          callback={handleJoyrideCallback}
          styles={{
            options: {
              arrowColor: darkMode ? themeDark.dynamicTutsBg : themeLight.dynamicTutsBg,
              backgroundColor: darkMode ? themeDark.dynamicTutsBg : themeLight.dynamicTutsBg,
              overlayColor:  darkMode ? themeDark.dynamicTutsBgOverlay : themeLight.dynamicTutsBgOverlay,
              primaryColor: darkMode ? themeDark.dynamicTutsPrimaryColor : themeLight.dynamicTutsPrimaryColor,
              textColor: darkMode ? themeDark.dynamicTutsFontColor : themeLight.dynamicTutsFontColor,
              minWidth: 280,
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
              padding="15px"
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
                          background={darkMode ? themeDark.backgroundBG : themeLight.backgroundBG}
                          color={darkMode ? themeDark.fontColor : themeLight.fontColor}

                        >
                          {title}
                        </Span>
                      </ProviderButton>
                    );
                  })}
                </ItemH>
              </Item>

              <Span margin="30px 0px 0px 0px" size="14px" color={darkMode ? themeDark.fontColor : themeLight.fontColor }>
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

              <Item
                flex="initial"
                padding="30px 15px"
                radius="12px"
              >
                <StyledItem>
                  <span> Note: </span> The EPNS protocol has been under development for 1+ year,  and completed a <C href="https://epns.io/EPNS-Protocol-Audit2021.pdf" target="_blank"> ChainSafe audit </C> in October 2021. However, the mainnet is still a new product milestone.  Always DYOR, and anticipate bugs and UI improvements.  Learn how to report any bugs in our  <C href="https://discord.com/invite/YVPB99F9W5" target="_blank">Discord.</C>
                </StyledItem>
              </Item>

            </Item>
          )}
        </ParentContainer>
      </NavigationContextProvider>
    </ThemeProvider>
  );
}

// CSS STYLES
const StyledItem = styled(Item)`
  font-size: 14px;
  letter-spacing: 0.4px;
  display: block;
  background: ${props => props.theme.backgroundBG};
  color: ${props => props.theme.color};
  border:1px solid #ddd;
  padding:30px 15px;
  border-radius:12px;
  line-height: 18px;
  align-items: center;
  width:44rem;

  span{
    color: #e20880;
  }

  @media(max-width:400px){
    width: auto;
  }
`;


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

const BeaconExample = styled.span`
  height: 10px;
  width: 10px;
  background: ${props => props.theme.dynamicTutsPrimaryColor};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  position: relative;
  margin: 0px 10px;
`;

const BeaconExamplePulse = styled.span`
  animation: 1.2s ease-in-out 0s infinite normal none running joyride-beacon-outer;
  background-color: transparent;
  border: 2px solid ${props => props.theme.dynamicTutsPrimaryColor};
  border-radius: 50%;
  box-sizing: border-box;
  display: block;
  height: 26px;
  width: 26px;
  left: -8px;
  top: -8px;
  opacity: 0.9;
  position: absolute;
  transform-origin: center center;
`;