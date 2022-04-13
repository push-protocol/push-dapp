import React from "react";
import { useSelector, useDispatch } from "react-redux";

import styled, { css, useTheme, ThemeProvider } from 'styled-components';

import {Section, Content, Item, ItemH, ItemBreak, A, B, H1, H2, H3, Image, P, Span, Anchor, Button, Showoff, FormSubmision, Input, TextField} from 'components/SharedStyling';
import {incrementStepIndex, decrementStepIndex, setRun} from "redux/slices/userJourneySlice";
import Inbox from "./InboxPage";

import { BsChevronExpand } from 'react-icons/bs';

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
    <Container>
      <Content className="contentBox" padding="20px 0px 0px 0px">
        <Item align="stretch" justify="flex-start" margin="0px 30px">

          <Item align="stretch" justify="flex-start" margin="0px 0px 0px 0px">
            <H2 textTransform="uppercase" spacing="0.1em" margin="10px 0px 20px 0px">
              <Span weight="200" color={themes.fontColor}>Live </Span><Span bg="#35c5f3" color="#fff" weight="600" padding="0px 8px">Walkthrough</Span>
            </H2>
            <H3 maxWidth="768px" color={themes.fontColorSecondary}>Let's walk you through the core functions of EPNS, the <B>native web3 communication protocol!</B></H3>
          </Item>

          <Item align="stretch" justify="flex-start" margin="0px 0px 20px 0px">
            <QnAItem>
              <Question
                onClick={() => {onStart()}}
                hover="#e20880"
              >
                <Span color={themes.color}>
                  Show me everything!
                </Span>
                <BsChevronExpand size={20} color={"#ddd"}/>
              </Question>
            </QnAItem>
          </Item>

        </Item>
      </Content>
    </Container>
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

const Question = styled(Button)`
  align-items: stretch;
  align-self: stretch;
`

const Answer = styled(Item)`
  align-items: stretch;
  align-self: stretch;

`

const QnAItem = styled(Item)`
  align-items: stretch;
  align-self: stretch;
  flex: auto;
  margin: 15px 0px;
  border: 1px solid ${props => props.theme.qnaBgBorder};
  border-radius: 10px;
  box-shadow: 0px 5px 20px -10px rgb(0 0 0 / 0.20);
  overflow: hidden;

  & ${Question} {
    background: ${props => props.theme.qnaBg};
    justify-content: flex-start;
    text-transform: uppercase;

    & ${Span} {
      font-weight: 400;
      letter-spacing: 0.2em;
      margin-left: 10px;
      flex: 1;
    }

    &:hover {
      & ${Span} {
        color: #fff;
      }
    }
  }

  & ${Answer} {
    border: 1px solid #e6e6e6;
    border-top: 1px solid #e6e6e6;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 10px 15px;
    align-items: flex-start;
    background: #fff;

    & ${Span} {
      line-height: 1.5em;
      margin: 10px;
      color: #000 ;
      font-size: 1.05em;
    }
  }
`

// Export Default
export default TutorialPage;