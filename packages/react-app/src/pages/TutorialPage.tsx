import React from "react";
import { useSelector, useDispatch } from "react-redux";

import styled, { css, useTheme } from 'styled-components';
import { ThemeProvider } from "styled-components";
import {Section, Content, Item, ItemH, ItemBreak, A, B, H1, H2, H3, Image, P, Span, Anchor, Button, Showoff, FormSubmision, Input, TextField} from 'components/SharedStyling';
import {incrementStepIndex, decrementStepIndex, setRun} from "redux/slices/userJourneySlice";
import Inbox from "./InboxPage";

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
      <Section margin="20px">
        <Content padding="0px 20px 0px">
          <Item align="flex-start">
            <H2 textTransform="uppercase" spacing="0.1em">
              <Span bg="#35c5f3" color="#fff" weight="600" padding="0px 8px">Walkthrough</Span>
            </H2>
          </Item>
          <Item align="flex-start">
            <H2>
            Welcome to EPNS. Ethereum Push Notification Service is a protocol for blockchain-based notifications that are chain agnostic, platform-independent, and incentivized!

Here, we will be taking you on a quick walkthrough of the whole application. You only have to follow the steps that are shown. Click on the start button to start the tutorial.
            </H2>
          </Item>
          <Button onClick={onStart}>Start</Button>
        </Content>
      </Section>
      </ThemeProvider>
  );
}

// Export Default
export default TutorialPage;