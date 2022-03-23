import React from "react";
import { useSelector, useDispatch } from "react-redux";

import styled, { css, useTheme } from 'styled-components';
import { ThemeProvider } from "styled-components";
import { Section, Content, Item, H2, Span, Button } from 'components/SharedStyling';
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
          <Button onClick={onStart}>Start</Button>
        </Content>
      </Section>
      </ThemeProvider>
  );
}

// Export Default
export default TutorialPage;