import React from 'react';
import ReactGA from 'react-ga';

import { ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import GLOBALS, { device, globalsMargin } from 'config/Globals';
import { A, Button, Content, H2, Item, Section, Span } from 'primaries/SharedStyling';
import { BsChevronExpand } from 'react-icons/bs';
import styled, { useTheme } from 'styled-components';

function FaqModule() {
  ReactGA.pageview('/faq');

  const theme = useTheme();

  const [showAnswers, setShowAnswers] = React.useState([]);

  const toggleShowAnswer = (id) => {
    let newShowAnswers = [...showAnswers];
    newShowAnswers[id] = !newShowAnswers[id];

    setShowAnswers(newShowAnswers);
  };

  // Render
  return (
    <Container>
      <ItemVV2 alignItems="stretch">
        <ItemVV2 margin="0px 0px 0px 0px">
          <H2>
            <Span weight="400" size="32px" color={theme.color}>
              Frequently Asked{' '}
            </Span>
            <Span bg={theme.default.color} color={theme.default.bg} weight="600" padding="0px 8px">
              Questions
            </Span>
          </H2>
        </ItemVV2>

        <ItemVV2 margin="0px 0px 0px 0px" alignItems="flex-start">
          <H2 textTransform="uppercase" spacing="0.1em" margin="20px 0px 20px 0px" size="1.6rem">
            <SpanV2
              weight="600"
              padding="8px 20px"
              background={theme.default.secondaryBg}
              color={theme.default.color}
              borderRadius={`${GLOBALS.ADJUSTMENTS.RADIUS.SMALL}`}>
              For Users
            </SpanV2>
          </H2>
        </ItemVV2>

        <ItemVV2>
          {/* Question */}
          <ItemVV2 margin="0px 0px 20px 0px">
            <QnAItem>
              <Question
                onClick={() => {
                  toggleShowAnswer(1);
                }}
                hover="#e20880">
                <Span color={theme.color}>What are Channels?</Span>
                <BsChevronExpand size={20} color={'#ddd'} />
              </Question>

              {showAnswers[1] && (
                <Answer>
                  <Span>
                    Any user or protocol that activates itself as a service to send notifications is a Channel.
                  </Span>
                </Answer>
              )}
            </QnAItem>

            <QnAItem>
              <Question
                onClick={() => {
                  toggleShowAnswer(2);
                }}
                hover="#e20880">
                <Span color={theme.color}>Is Channel Creation a compulsory process?</Span>
                <BsChevronExpand size={20} color={'#ddd'} />
              </Question>

              {showAnswers[2] && (
                <Answer>
                  <Span>Not at all</Span>
                  <Span>
                    Channel creation is only important for any protocol or service that wants to trigger notifications
                    for its users. If you are a user who is only interested in receiving notifications and being up to
                    the minute with the Web3 world, channel creation is not at all required for you.
                  </Span>

                  {/* <Span>
                      Channel creation is only important for any protocol or service that wants to trigger notifications for its users. If you are a user who is only interested in receiving notifications and being up to the minute with the Web3 world, channel creation is not at all required for you.
                    </Span> */}
                </Answer>
              )}
            </QnAItem>

            <QnAItem>
              <Question
                onClick={() => {
                  toggleShowAnswer(3);
                }}
                hover="#e20880">
                <Span color={theme.color}>How do I opt into a Channel?</Span>
                <BsChevronExpand size={20} color={'#ddd'} />
              </Question>

              {showAnswers[3] && (
                <Answer>
                  <Span>
                    Every Channel in the View Channels section comes with an opt-in button. Once you click on it and
                    sign the transaction, you will be subscribed to that channel & receive its notifications.
                  </Span>
                </Answer>
              )}
            </QnAItem>

            <QnAItem>
              <Question
                onClick={() => {
                  toggleShowAnswer(4);
                }}
                hover="#e20880">
                <Span color={theme.color}>Does Opting-in to a Channel require gas fees?</Span>
                <BsChevronExpand size={20} color={'#ddd'} />
              </Question>

              {showAnswers[4] && (
                <Answer>
                  <Span>
                    NOPE. Subscribing to a channel is a Gasless action. All you need to do is sign the transaction and
                    that’s it.
                  </Span>
                </Answer>
              )}
            </QnAItem>

            <QnAItem>
              <Question
                onClick={() => {
                  toggleShowAnswer(5);
                }}
                hover="#e20880">
                <Span color={theme.color}>Do I need ETHER to interact with the DAPP?</Span>
                <BsChevronExpand size={20} color={'#ddd'} />
              </Question>

              {showAnswers[5] && (
                <Answer>
                  <Span>
                    Nope. We have gasless mechanisms for most of the things in the Dapp. Therefore, an average joe
                    doesn’t need any ether to use our dapp.
                  </Span>

                  <Span>ETH or Funds are only required when a Channel is to be created.</Span>
                </Answer>
              )}
            </QnAItem>

            <QnAItem>
              <Question
                onClick={() => {
                  toggleShowAnswer(6);
                }}
                hover="#e20880">
                <Span color={theme.color}>How do I receive notifications?</Span>
                <BsChevronExpand size={20} color={'#ddd'} />
              </Question>

              {showAnswers[6] && (
                <Answer>
                  <Span>
                    In order to receive notifications seamlessly, Push (EPNS) provides 3 different crypto front-ends
                  </Span>
                  <Span2>
                    <AMod href="https://app.push.org/" target="_blank">
                      Push (EPNS) Dapp
                    </AMod>
                  </Span2>
                  <Span2 mtop="0.2rem">
                    <AMod
                      href="https://chrome.google.com/webstore/detail/epns-protocol-alpha/lbdcbpaldalgiieffakjhiccoeebchmg"
                      target="_blank">
                      Browser Extension
                    </AMod>
                  </Span2>
                  <Span2 mtop="0.2rem">
                    <AMod href="https://play.google.com/store/apps/details?id=io.epns.epns" target="_blank">
                      <span style={{ marginRight: '0.3rem' }}>Android</span>
                    </AMod>{' '}
                    <span style={{ marginRight: '0.3rem' }}>and</span>{' '}
                    <AMod href="https://apps.apple.com/app/ethereum-push-service-epns/id1528614910" target="_blank">
                      IOS Apps
                    </AMod>
                  </Span2>
                </Answer>
              )}
            </QnAItem>
          </ItemVV2>
        </ItemVV2>

        <ItemVV2 margin="0px 0px 0px 0px" alignItems="flex-start">
          <H2 textTransform="uppercase" spacing="0.1em" margin="30px 0px 20px 0px" size="1.6rem">
            <SpanV2
              weight="600"
              padding="8px 20px"
              background={theme.default.secondaryBg}
              color={theme.default.color}
              borderRadius={`${GLOBALS.ADJUSTMENTS.RADIUS.SMALL}`}>
              For Developers
            </SpanV2>
          </H2>
        </ItemVV2>

        <ItemVV2>
          {/* Question */}
          <ItemVV2 margin="0px 0px 20px 0px">
            <QnAItem>
              <Question
                onClick={() => {
                  toggleShowAnswer(7);
                }}
                hover="#e20880">
                <Span color={theme.color}>How do I create a Channel?</Span>
                <BsChevronExpand size={20} color={'#ddd'} />
              </Question>

              {showAnswers[7] && (
                <Answer>
                  <Span>
                    Easiest way to create a channel is from our{' '}
                    <AMod target="_blank" href="https://app.push.org/#/dashboard">
                      Push (EPNS) Dapp
                    </AMod>{' '}
                    itself. Find the entire channel creation process{' '}
                    <AMod
                      target="_blank"
                      href="https://docs.epns.io/developer-zone/developer-guides/create-your-first-channel">
                      here
                    </AMod>
                    .
                  </Span>
                </Answer>
              )}
            </QnAItem>

            <QnAItem>
              <Question
                onClick={() => {
                  toggleShowAnswer(8);
                }}
                hover="#e20880">
                <Span color={theme.color}>What are the different types of Notifications?</Span>
                <BsChevronExpand size={20} color={'#ddd'} />
              </Question>

              {showAnswers[8] && (
                <Answer>
                  <Span>The 3 main types of notifications right now:</Span>
                  <Span>
                    <b>Broadcast Notification</b>: <i>Sent out to all Subscribers of a Channel</i>
                  </Span>
                  <Span>
                    <b>Subset Notification</b>: <i>Sent out to a group of all the subscribers</i>
                  </Span>
                  <Span>
                    <b>Targeted Notification</b>: <i>Sent out to a specific subscriber of your channel</i>
                  </Span>
                </Answer>
              )}
            </QnAItem>

            <QnAItem>
              <Question
                onClick={() => {
                  toggleShowAnswer(9);
                }}
                hover="#e20880">
                <Span color={theme.color}>How do I send notifications?</Span>
                <BsChevronExpand size={20} color={'#ddd'} />
              </Question>

              {showAnswers[9] && (
                <Answer>
                  <Span>Sending a notification is possible from the DAPP, Back-end as well as Smart Contracts.</Span>
                </Answer>
              )}
            </QnAItem>

            <QnAItem>
              <Question
                onClick={() => {
                  toggleShowAnswer(10);
                }}
                hover="#e20880">
                <Span color={theme.color}>How do I use Backend-Sdk and Showrunners?</Span>
                <BsChevronExpand size={20} color={'#ddd'} />
              </Question>

              {showAnswers[10] && (
                <Answer>
                  <Span>
                    Push (EPNS) Documentation hub contains in-depth details on how to use our{' '}
                    <AMod
                      target="_blank"
                      href="https://docs.epns.io/developer-zone/developer-guides/sending-notifications/server-workflow/backend-sdk-quick-set-up">
                      Backend SDKs
                    </AMod>{' '}
                    and{' '}
                    <AMod
                      target="_blank"
                      href="https://docs.epns.io/developer-zone/developer-guides/working-with-showrunners">
                      Showrunners
                    </AMod>
                    . Check them out.
                  </Span>
                </Answer>
              )}
            </QnAItem>

            <QnAItem>
              <Question
                onClick={() => {
                  toggleShowAnswer(11);
                }}
                hover="#e20880">
                <Span color={theme.color}>DHow do I use the Front-SDK?</Span>
                <BsChevronExpand size={20} color={'#ddd'} />
              </Question>

              {showAnswers[11] && (
                <Answer>
                  <Span>
                    Push (EPNS) Documentation hub contains in-depth details on how to use our{' '}
                    <AMod
                      target="_blank"
                      href="https://docs.epns.io/developer-zone/developer-guides/integrating-with-front-end-sdk">
                      Front-end SDK
                    </AMod>
                    .
                  </Span>
                </Answer>
              )}
            </QnAItem>

            <QnAItem>
              <Question
                onClick={() => {
                  toggleShowAnswer(12);
                }}
                hover="#e20880">
                <Span color={theme.color}>Where can I find Developer Documentations?</Span>
                <BsChevronExpand size={20} color={'#ddd'} />
              </Question>

              {showAnswers[12] && (
                <Answer>
                  <Span>
                    All of our documentation can be found in our{' '}
                    <AMod target="_blank" href="https://docs.push.org/">
                      Push (EPNS) Documentation HUB
                    </AMod>
                    .
                  </Span>
                </Answer>
              )}
            </QnAItem>
          </ItemVV2>
        </ItemVV2>
      </ItemVV2>
    </Container>
  );
}

const Container = styled(Section)`
  align-items: center;
  align-self: center;
  background: ${(props) => props.theme.default.bg};
  border-radius: ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE};
  box-shadow: ${GLOBALS.ADJUSTMENTS.MODULE_BOX_SHADOW};
  display: flex;
  flex-direction: column;
  flex: initial;
  justify-content: center;
  max-width: 1200px;
  width: calc(
    100% - ${globalsMargin.MINI_MODULES.DESKTOP.RIGHT} - ${globalsMargin.MINI_MODULES.DESKTOP.LEFT} -
      ${GLOBALS.ADJUSTMENTS.PADDING.BIG} - ${GLOBALS.ADJUSTMENTS.PADDING.BIG}
  );
  padding: ${GLOBALS.ADJUSTMENTS.PADDING.BIG};
  position: relative;
  margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};

  @media ${device.laptop} {
    margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
    padding: ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT};
    width: calc(
      100% - ${globalsMargin.MINI_MODULES.TABLET.RIGHT} - ${globalsMargin.MINI_MODULES.TABLET.LEFT} -
        ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT} - ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT}
    );
  }

  @media ${device.mobileM} {
    margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.MOBILE};
    padding: ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT};
    width: calc(
      100% - ${globalsMargin.MINI_MODULES.MOBILE.RIGHT} - ${globalsMargin.MINI_MODULES.MOBILE.LEFT} -
        ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT} - ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT}
    );
  }
`;

const Span2 = styled.span`
  display: flex;
  flex-direction: row;
  margin-left: 2rem;
  color: black;
  font-weight: 300;
  margin-top: ${(props) => props.mtop || '0px'};
`;

const Heading = styled.h2`
  color: ${(props) => (props.theme.scheme === 'dark' ? props.theme.color : props.color || '#000')};
  text-shadow: 2px 0 ${(props) => (props.theme.scheme === 'dark' ? props.theme.color : props.color || '#000')};
  font-weight: ${(props) => props.weight || 600};
  font-size: ${(props) => props.size || '2rem'};
  text-transform: ${(props) => props.textTransform || 'inherit'};
  margin: ${(props) => props.margin || '20px 0px'};
  padding: ${(props) => props.padding || '0px'};
  letter-spacing: ${(props) => props.spacing || 'inherit'};
  font-family: ${(props) => props.family || "'Strawford', 'Source Sans Pro', Helvetica, sans-serif"};
  text-align: ${(props) => props.textAlign || 'inherit'};
  margin-left: 20px;
  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

const Question = styled(Button)`
  align-items: stretch;
  align-self: stretch;
`;

const Answer = styled(Item)`
  align-items: stretch;
  align-self: stretch;
`;

const QnAItem = styled(Item)`
  align-items: stretch;
  align-self: stretch;
  flex: auto;
  margin: 15px 0px;
  border: 1px solid ${(props) => props.theme.default.border};
  border-radius: 10px;
  box-shadow: 0px 5px 20px -10px rgb(0 0 0 / 0.2);
  overflow: hidden;
  & ${Question} {
    background: ${(props) => props.theme.qnaBg};
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
    border: 1px solid ${(props) => props.theme.default.border};
    border-top: 1px solid ${(props) => props.theme.default.border};
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 10px 15px;
    margin: -1px;
    margin-top: 0px;
    align-items: flex-start;
    background: ${(props) => props.theme.qnaBg};
    & ${Span} {
      line-height: 1.5em;
      margin: 10px;
      color: ${(props) => props.theme.default.color};
      font-size: 1.05em;
    }
  }
`;

const AMod = styled(A)`
  color: #e20880;
  font-weight: 500;
`;

// Export Default
export default FaqModule;
