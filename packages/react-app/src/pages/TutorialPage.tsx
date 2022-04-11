import React from "react";
import { useSelector, useDispatch } from "react-redux";

import styled, { css, useTheme, ThemeProvider } from 'styled-components';

import {Section, Content, Item, ItemH, ItemBreak, A, B, H1, H2, H3, Image, P, Span, Anchor, Button, Showoff, FormSubmision, Input, TextField} from 'components/SharedStyling';
import {incrementStepIndex, decrementStepIndex, setRun} from "redux/slices/userJourneySlice";
import Inbox from "./InboxPage";

import GLOBALS from "config/Globals";

function TutorialPage(props) {
  const dispatch = useDispatch();
  const themes = useTheme();

  const {
    run,
    stepIndex
  } = useSelector((state: any) => state.userJourney);

  const onStart = () => {
    if (run === false) {
      dispatch(setRun(true));
      // dispatch(incrementStepIndex());
    }
  }

  // Render
  return (
    <ThemeProvider theme={themes}>
      <Container>
        <Content className="contentBox" padding="20px 0px 0px 0px">
          <Item align="stretch" justify="flex-start" margin="0px 20px">

            <Item align="stretch" justify="flex-start" margin="0px 0px 0px 0px">
              <H2 textTransform="uppercase" spacing="0.1em" margin="10px 0px 20px 0px">
                <Span weight="200" color={themes.fontColor}>Live </Span><Span bg="#35c5f3" color="#fff" weight="600" padding="0px 8px">Walkthrough</Span>
              </H2>
              <H3 maxWidth="768px" color={themes.fontColorSecondary}>Let's walk you through the core functions of EPNS, the <B>native web3 communication protocol!</B></H3>
            </Item>

            <Item align="stretch" justify="flex-start" margin="0px 0px 20px 0px">
            <Span>
            Welcome to EPNS. Ethereum Push Notification Service is a protocol for blockchain-based notifications that are chain agnostic, platform-independent, and incentivized!

  Here, we will be taking you on a quick walkthrough of the whole application. You only have to follow the steps that are shown. Click on the start button to start the tutorial.
            </Span>
            <Button onClick={onStart}>Start</Button>
            </Item>

          </Item>
        </Content>
      </Container>
    </ThemeProvider>
  );
}

// css style
const Container = styled(Section)`
  flex: 1;
  flex-direction: column;
  height: calc(100vh - ${GLOBALS.CONSTANTS.HEADER_HEIGHT}px - 52px - ${props => props.theme.interfaceTopPadding});
  background: ${props => props.theme.mainBg};
  align-self: stretch;
`;


// Export Default
export default TutorialPage;