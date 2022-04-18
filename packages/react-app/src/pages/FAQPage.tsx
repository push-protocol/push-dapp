import React from "react";

import styled, {css, useTheme } from 'styled-components';
import {Section, Content, Item, ItemH, ItemBreak, A, B, H1, H2, H3, Para, Image, P, Span, Anchor, Button, Showoff, FormSubmision, Input, TextField} from 'components/SharedStyling';

import { ThemeProvider } from "styled-components";
import { BsChevronExpand } from 'react-icons/bs';

function ComingSoonPage(props) {
  const themes = useTheme();
  const [loading, setLoading] = React.useState(true);

  const [showAnswers, setShowAnswers] = React.useState([]);

  const toggleShowAnswer = (id) => {
    let newShowAnswers = [...showAnswers];
    newShowAnswers[id] = !newShowAnswers[id];

    setShowAnswers(newShowAnswers);
  }

  // Render
  return (
    <ThemeProvider theme={themes}>
      <Container>
        <Content className="contentBox" padding="20px 0px 0px 0px">
          <Item align="stretch" justify="flex-start" margin="0px 30px">

            <Item align="stretch" justify="flex-start" margin="0px 0px 0px 0px">
              <H2 textTransform="uppercase" spacing="0.1em" margin="10px 0px 20px 0px">
                <Span weight="200" color={themes.fontColor}>Frequently Asked </Span><Span bg={themes.fontColor} color={themes.mainBg} weight="600" padding="0px 8px">Questions</Span>
              </H2>
            </Item>

            <Item align="stretch" justify="flex-start">
              {/* Question */}
              <Item align="stretch" margin="0px 0px 20px 0px">
                <QnAItem>
                  <Question
                    onClick={() => {toggleShowAnswer(1)}}
                    hover="#e20880"
                  >
                    <Span color={themes.color}>
                      What are Channels?
                    </Span>
                    <BsChevronExpand size={20} color={"#ddd"}/>
                  </Question>

                  {showAnswers[1] &&
                    <Answer>
                      <Span>
                        Any user or protocol that activates itself as a service to send notifications is a Channel.
                        </Span>
                    </Answer>
                  }
                </QnAItem>


                <QnAItem>
                  <Question
                    onClick={() => {toggleShowAnswer(2)}}
                    hover="#e20880"
                  >
                    <Span color={themes.color}>
                    Is Channel Creation a compulsory process?
                    </Span>
                    <BsChevronExpand size={20} color={"#ddd"}/>
                  </Question>

                  {showAnswers[2] &&
                    <Answer>
                      <Span>
                        Not at all
                      </Span>
                      <Span>
                        Channel creation is only important for any protocol or service that wants to trigger notifications for its users. If you are a user who is only interested in receiving notifications and being up to the minute with the Web3 world, channel creation is not at all required for you.  
                      </Span>

                      {/* <Span>
                        Channel creation is only important for any protocol or service that wants to trigger notifications for its users. If you are a user who is only interested in receiving notifications and being up to the minute with the Web3 world, channel creation is not at all required for you.
                      </Span> */}
                    </Answer>
                  }
                </QnAItem>

                <QnAItem>
                  <Question
                    onClick={() => {toggleShowAnswer(3)}}
                    hover="#e20880"
                  >
                    <Span color={themes.color}>
                    How do I opt into a Channel?
                    </Span>
                    <BsChevronExpand size={20} color={"#ddd"}/>
                  </Question>

                  {showAnswers[3] &&
                    <Answer>
                      <Span>
                      Every Channel in the View Channels section comes with an opt-in button. Once you click on it and sign the transaction, you will be subscribed to that channel & receive its notifications.
                      </Span>
                    </Answer>
                  }
                </QnAItem>

                <QnAItem>
                  <Question
                    onClick={() => {toggleShowAnswer(4)}}
                    hover="#e20880"
                  >
                    <Span color={themes.color}>
                    Does Opting-in to a Channel require gas fees?
                    </Span>
                    <BsChevronExpand size={20} color={"#ddd"}/>
                  </Question>

                  {showAnswers[4] &&
                    <Answer>
                      <Span>
                      NOPE. Subscribing to a channel is a Gasless action. All you need to do is sign the transaction and that’s it. 
                      </Span>
                    </Answer>
                  }
                </QnAItem>


                <QnAItem>
                  <Question
                    onClick={() => {toggleShowAnswer(5)}}
                    hover="#e20880"
                  >
                    <Span color={themes.color}>
                    Do I need ETHER to interact with the DAPP?
                    </Span>
                    <BsChevronExpand size={20} color={"#ddd"}/>
                  </Question>

                  {showAnswers[5] &&
                    <Answer>
                      <Span>
                      Nope. We have gasless mechanisms for most of the things in the Dapp. Therefore, an average joe doesn’t need any ether to use our dapp.
                      </Span>

                      <Span>
                      ETH or Funds are only required when a Channel is to be created.
                      </Span>
                    </Answer>
                  }
                </QnAItem>


                <QnAItem>
                  <Question
                    onClick={() => {toggleShowAnswer(6)}}
                    hover="#e20880"
                  >
                    <Span color={themes.color}>
                    How do I receive notifications?
                    </Span>
                    <BsChevronExpand size={20} color={"#ddd"}/>
                  </Question>

                  {showAnswers[6] &&
                    <Answer>
                      <Span>
                      In order to receive notifications seamlessly, EPNS provides 3 different crypto front-ends
                      </Span>
                      <Span2>
                        <AMod href="https://app.epns.io/" target="_blank">EPNS Dapp</AMod>
                      </Span2>
                      <Span2 mtop="0.2rem">
                        <AMod href="https://chrome.google.com/webstore/detail/epns-protocol-alpha/lbdcbpaldalgiieffakjhiccoeebchmg" target="_blank">Browser Extension</AMod>
                      </Span2>
                      <Span2 mtop="0.2rem">
                        <AMod href="https://play.google.com/store/apps/details?id=io.epns.epns" target="_blank"><span style={{marginRight:"0.3rem"}}>Android</span></AMod> <span style={{marginRight:"0.3rem"}}>and</span> <AMod href="https://apps.apple.com/app/ethereum-push-service-epns/id1528614910" target="_blank">IOS Apps</AMod>
                      </Span2>
                      

                      
                    </Answer>
                  }
                </QnAItem>
              </Item>
            </Item>

          </Item>
        </Content>
      </Container>
      </ThemeProvider>
  );
}

const Container = styled(Section)`
  flex: 1;
  flex-direction: column;
  background: ${props => props.theme.mainBg};
  align-self: stretch;
`;
const Span2 = styled.span`
  display: flex;
  flex-direction: row;
  margin-left: 2rem;
  color:black;
  font-weight:300;
  margin-top:${props => props.mtop || "0px" }
`

const Heading = styled.h2`
  color: ${props => props.theme.scheme === "dark" ? props.theme.color : props.color || "#000"};
  text-shadow: 2px 0 ${props => props.theme.scheme === "dark" ? props.theme.color : props.color || "#000"};
  font-weight: ${props => props.weight || 600};
  font-size: ${props => props.size || "2rem"};
  text-transform: ${props => props.textTransform || "inherit"};
  margin: ${props => props.margin || "20px 0px"};
  padding: ${props => props.padding || "0px"};
  letter-spacing: ${props => props.spacing || "inherit"};
  font-family: ${props => props.family || "'Source Sans Pro', Helvetica, sans-serif"};
  text-align: ${props => props.textAlign || "inherit"};
  margin-left:20px;

  @media (max-width: 768px) {
		font-size: 2.8rem;
	}
`

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

const AMod = styled(A)`
  color: #e20880;
  font-weight: 500;
`


// Export Default
export default ComingSoonPage;