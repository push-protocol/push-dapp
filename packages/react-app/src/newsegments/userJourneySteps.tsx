import React from "react";

import styled from "styled-components";
import { themeLight, themeDark } from "config/Themization";
import { Item, ItemH, Span, H3, B, A, Button } from "components/SharedStyling";

import {incrementStepIndex, setRun, setIndex, setWelcomeNotifsEmpty , setTutorialContinous} from "../redux/slices/userJourneySlice";
import { useSelector, useDispatch } from "react-redux";

const UserJourneySteps = ({darkMode}) => {
  const dispatch = useDispatch();

  const {
      isCommunicateOpen,
      isDeveloperOpen,
    } = useSelector((state) => state['userJourney']);

  const steps = [
    {
      //0
      content: (
        <Item>
          <H3
            size="x-large"
            margin="5px 0px 15px 0px"
            color={darkMode ? themeDark.dynamicTutsFontColor : themeLight.dynamicTutsFontColor}
          >
            Let's begin our journey!
          </H3>
          
          <Item
            color={darkMode ? themeDark.dynamicTutsFontColor : themeLight.dynamicTutsFontColor}
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
                if (isCommunicateOpen) dispatch(incrementStepIndex());
                dispatch(incrementStepIndex());
              }}
            >
              Next
            </Button>
          </ItemH>
        </Item>
      ),
      locale: { next: <strong aria-label="next">NEXT</strong> },
      placement: 'center' as const,
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
          color={darkMode ? themeDark.dynamicTutsFontColor : themeLight.dynamicTutsFontColor}
          size="normal"
          align="stretch"
        >
          <Span color="inherit">
            Communicate tab holds all your communication including notifications! Click to expand it.
          </Span>
        </Item>
      ),
      placement: 'right-start' as const,
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
          color={darkMode ? themeDark.dynamicTutsFontColor : themeLight.dynamicTutsFontColor}
          size="normal"
          align="stretch"
        >
          <Span color="inherit">
            Channels are services that want to send notifications to your wallet address. Let's check them out!
          </Span>
        </Item>
      ),
      placement: "right-start" as const,
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
          color={darkMode ? themeDark.dynamicTutsFontColor : themeLight.dynamicTutsFontColor}
          size="normal"
          align="stretch"
        >
          <Span color="inherit">
            This is the Channels Page. Please wait while we load channels from EPNS protocol.
          </Span>
        </Item>
      ),
      placement: "center" as const,
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
      content: (<></>),
      target: "body",
    },
    {
      //5
      content: (
        <Item>
          <H3
            size="x-large"
            margin="5px 0px 15px 0px"
            color={darkMode ? themeDark.dynamicTutsFontColor : themeLight.dynamicTutsFontColor}
          >
            Let's opt-in!
          </H3>
          
          <Item
            color={darkMode ? themeDark.dynamicTutsFontColor : themeLight.dynamicTutsFontColor}
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
                // dispatch(setTutorialContinous(false));
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
      placement: "center" as const,
      target: "body",
      disableOverlayClose: false,
      // spotlightClicks: true,
      offsetTop: "-100px",
      defaultProps: false,
      hideFooter: true,
    },
    {
      //6
      content: (
        <Item
          color={darkMode ? themeDark.dynamicTutsFontColor : themeLight.dynamicTutsFontColor}
          size="normal"
          align="stretch"
        >
          <Span color="inherit">
            Click on inbox tab from sidebar to proceed forward!
          </Span>
        </Item>
      ),
      placement: "right-start" as const,
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
            color={darkMode ? themeDark.dynamicTutsFontColor : themeLight.dynamicTutsFontColor}
          >
            Inbox tab!
          </H3>
          
          <Item
            color={darkMode ? themeDark.dynamicTutsFontColor : themeLight.dynamicTutsFontColor}
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
      placement: "center" as const,
      target: "body",
      // disableOverlayClose: false,
      hideFooter: true,
    },
    {
      //8
      content: (
        <Item
          color={darkMode ? themeDark.dynamicTutsFontColor : themeLight.dynamicTutsFontColor}
          size="normal"
          align="stretch"
        >
          <Span color="inherit">
            Click on spam tab from sidebar to see how spam works!
          </Span>
        </Item>
      ),
      placement: "right-start" as const,
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
            color={darkMode ? themeDark.dynamicTutsFontColor : themeLight.dynamicTutsFontColor}
          >
            Spam tab!
          </H3>
          
          <Item
            color={darkMode ? themeDark.dynamicTutsFontColor : themeLight.dynamicTutsFontColor}
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
      placement: "center" as const,
      target: `body`,
      spotlightClicks: true,
      defaultProps: false,
      hideFooter: true
    },
    {
      //10
      content: (
        <Item
          color={darkMode ? themeDark.dynamicTutsFontColor : themeLight.dynamicTutsFontColor}
          size="normal"
          align="stretch"
        >
          <Span color="inherit">
            Receive Notifs tab contains all crypto frontends that have adopted EPNS protocol for communication! click on it to check the options out!
          </Span>
        </Item>
      ),
      placement: "right-start" as const,
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
            color={darkMode ? themeDark.dynamicTutsFontColor : themeLight.dynamicTutsFontColor}
          >
            Receive Notifs tab!
          </H3>
          
          <Item
            color={darkMode ? themeDark.dynamicTutsFontColor : themeLight.dynamicTutsFontColor}
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
      placement: "center" as const,
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
            color={darkMode ? themeDark.dynamicTutsFontColor : themeLight.dynamicTutsFontColor}
          >
            EPNS Browser Extension
          </H3>
          
          <Item
            color={darkMode ? themeDark.dynamicTutsFontColor : themeLight.dynamicTutsFontColor}
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
      placement: "bottom" as const,
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
            color={darkMode ? themeDark.dynamicTutsFontColor : themeLight.dynamicTutsFontColor}
          >
            EPNS iOS App
          </H3>
          
          <Item
            color={darkMode ? themeDark.dynamicTutsFontColor : themeLight.dynamicTutsFontColor}
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
      placement: "bottom" as const,
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
            color={darkMode ? themeDark.dynamicTutsFontColor : themeLight.dynamicTutsFontColor}
          >
            EPNS Android App
          </H3>
          
          <Item
            color={darkMode ? themeDark.dynamicTutsFontColor : themeLight.dynamicTutsFontColor}
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
      placement: "bottom" as const,
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
            color={darkMode ? themeDark.dynamicTutsFontColor : themeLight.dynamicTutsFontColor}
          >
            Tutorial Completed 🎉🎉
          </H3>
          
          <Item
            color={darkMode ? themeDark.dynamicTutsFontColor : themeLight.dynamicTutsFontColor}
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
      placement: "center" as const,
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
          color={darkMode ? themeDark.dynamicTutsFontColor : themeLight.dynamicTutsFontColor}
          size="normal"
          align="stretch"
        >
          <Span color="inherit">
            Hello Web3 Devs! All resources for developers are hidden inside this tab! let's expand it to continue!
          </Span>
        </Item>
      ),
      placement: "right-start" as const,
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
            color={darkMode ? themeDark.dynamicTutsFontColor : themeLight.dynamicTutsFontColor}
          >
            Developer Tab
          </H3>
          
          <Item
            color={darkMode ? themeDark.dynamicTutsFontColor : themeLight.dynamicTutsFontColor}
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
      placement: "center" as const,
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
            color={darkMode ? themeDark.dynamicTutsFontColor : themeLight.dynamicTutsFontColor}
          >
            Create Channel Tab
          </H3>
          
          <Item
            color={darkMode ? themeDark.dynamicTutsFontColor : themeLight.dynamicTutsFontColor}
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
      placement: "right-start" as const,
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
            color={darkMode ? themeDark.dynamicTutsFontColor : themeLight.dynamicTutsFontColor}
          >
            Developer Documentation
          </H3>
          
          <Item
            color={darkMode ? themeDark.dynamicTutsFontColor : themeLight.dynamicTutsFontColor}
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
                window.open("https://docs.epns.io/", "_blank");
                // dispatch(incrementStepIndex());
                dispatch(setRun(false))
                dispatch(setIndex(0))
                dispatch(setWelcomeNotifsEmpty());
              }}
            >
              Developer Docs
            </Button>
          </ItemH>
        </Item>
      ),
      placement: "top-start" as const,
      target: ".guide",
      spotlightClicks: true,
      disablefloating: true,
      defaultProps: false,
      hideFooter: true,
    },
  ];

  return steps;
}
  
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

export default UserJourneySteps;