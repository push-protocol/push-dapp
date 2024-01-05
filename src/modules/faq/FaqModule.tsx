// React + Web3 Essentials
import React from 'react';

// External Packages
import ReactGA from 'react-ga';
import { BsChevronExpand } from 'react-icons/bs';
import styled, { useTheme } from 'styled-components';

// Internal Components
import { ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { A, Button, H2, Item, Section, Span } from 'primaries/SharedStyling';

// Internal Configs
import GLOBALS, { device, globalsMargin } from 'config/Globals';

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
            <Span
              weight="400"
              size="32px"
              color={theme.color}
            >
              Frequently Asked{' '}
            </Span>
            <Span
              bg={theme.default.color}
              color={theme.default.bg}
              weight="600"
              padding="0px 8px"
            >
              Questions
            </Span>
          </H2>
        </ItemVV2>

        <ItemVV2
          margin="0px 0px 0px 0px"
          alignItems="flex-start"
        >
          <H2
            textTransform="uppercase"
            spacing="0.1em"
            margin="20px 0px 20px 0px"
            size="1.6rem"
          >
            <SpanV2
              weight="600"
              padding="8px 20px"
              background={theme.default.secondaryBg}
              color={theme.default.color}
              borderRadius={`${GLOBALS.ADJUSTMENTS.RADIUS.SMALL}`}
            >
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
                hover="#e20880"
              >
                <Span color={theme.color}>What are Channels?</Span>
                <BsChevronExpand
                  size={20}
                  color={'#ddd'}
                />
              </Question>

              {showAnswers[1] && (
                <Answer>
                  <Span>
                    If you're a protocol or company seeking to share updates with your users, you can use this service.
                    Users have the option to opt in to receive these updates.
                  </Span>
                </Answer>
              )}
            </QnAItem>

            <QnAItem>
              <Question
                onClick={() => {
                  toggleShowAnswer(2);
                }}
                hover="#e20880"
              >
                <Span color={theme.color}>Is Channel Creation a compulsory process?</Span>
                <BsChevronExpand
                  size={20}
                  color={'#ddd'}
                />
              </Question>

              {showAnswers[2] && (
                <Answer>
                  <Span>
                    Channel creation is not mandatory. It's primarily essential for protocols or services aiming to send
                    notifications to their users. As a user focused solely on staying updated with the Web3 world and
                    receiving notifications, creating a channel is unnecessary for you.
                  </Span>
                </Answer>
              )}
            </QnAItem>

            <QnAItem>
              <Question
                onClick={() => {
                  toggleShowAnswer(3);
                }}
                hover="#e20880"
              >
                <Span color={theme.color}>How do I opt into a Channel?</Span>
                <BsChevronExpand
                  size={20}
                  color={'#ddd'}
                />
              </Question>

              {showAnswers[3] && (
                <Answer>
                  <Span>
                    To join a Channel, head to the Channels section on the left. There, you'll find various protocols or
                    dapps listed. Simply click 'Opt-In' next to the one you're interested in, and by signing a
                    transaction, you'll start receiving the latest updates and notifications.
                  </Span>
                </Answer>
              )}
            </QnAItem>

            <QnAItem>
              <Question
                onClick={() => {
                  toggleShowAnswer(4);
                }}
                hover="#e20880"
              >
                <Span color={theme.color}>Does Opting-in to a Channel require gas fees?</Span>
                <BsChevronExpand
                  size={20}
                  color={'#ddd'}
                />
              </Question>

              {showAnswers[4] && (
                <Answer>
                  <Span>
                    Opting into a Channel doesn't involve gas fees. Subscribing to a channel is gasless—all you need to
                    do is sign a transaction to be opted in.
                  </Span>
                </Answer>
              )}
            </QnAItem>

            <QnAItem>
              <Question
                onClick={() => {
                  toggleShowAnswer(5);
                }}
                hover="#e20880"
              >
                <Span color={theme.color}>Do I need ETHER to interact with the DAPP?</Span>
                <BsChevronExpand
                  size={20}
                  color={'#ddd'}
                />
              </Question>

              {showAnswers[5] && (
                <Answer>
                  <Span>
                    You don't need Ether to engage with the DApp. Our gasless mechanisms enable most operations without
                    requiring Ether. For everyday users, there's no need for Ether to use our DApp.
                  </Span>

                  <Span>Ether or funds become necessary only when creating a Channel..</Span>
                </Answer>
              )}
            </QnAItem>

            <QnAItem>
              <Question
                onClick={() => {
                  toggleShowAnswer(6);
                }}
                hover="#e20880"
              >
                <Span color={theme.color}>How do I receive notifications?</Span>
                <BsChevronExpand
                  size={20}
                  color={'#ddd'}
                />
              </Question>

              {showAnswers[6] && (
                <Answer>
                  <Span>
                    In order to receive notifications seamlessly, Push (EPNS) provides 3 different crypto front-ends
                  </Span>
                  <Span2>
                    <AMod
                      href="https://app.push.org/"
                      target="_blank"
                    >
                      Push (EPNS) Dapp
                    </AMod>
                  </Span2>
                  <Span2 mtop="0.2rem">
                    <AMod
                      href="https://chrome.google.com/webstore/detail/epns-protocol-alpha/lbdcbpaldalgiieffakjhiccoeebchmg"
                      target="_blank"
                    >
                      Browser Extension
                    </AMod>
                  </Span2>
                  <Span2 mtop="0.2rem">
                    <AMod
                      href="https://play.google.com/store/apps/details?id=io.epns.epns"
                      target="_blank"
                    >
                      <span style={{ marginRight: '0.3rem' }}>Android</span>
                    </AMod>{' '}
                    <span style={{ marginRight: '0.3rem' }}>and</span>{' '}
                    <AMod
                      href="https://apps.apple.com/app/ethereum-push-service-epns/id1528614910"
                      target="_blank"
                    >
                      IOS Apps
                    </AMod>
                  </Span2>
                </Answer>
              )}
            </QnAItem>

            <QnAItem>
              <Question
                onClick={() => {
                  toggleShowAnswer(7);
                }}
                hover="#e20880"
              >
                <Span color={theme.color}>What are Spaces?</Span>
                <BsChevronExpand
                  size={20}
                  color={'#ddd'}
                />
              </Question>

              {showAnswers[7] && (
                <Answer>
                  <Span>
                    Spaces are live audio chat rooms on our Dapp, enabling real-time conversations among users.
                  </Span>
                </Answer>
              )}
            </QnAItem>

            <QnAItem>
              <Question
                onClick={() => {
                  toggleShowAnswer(8);
                }}
                hover="#e20880"
              >
                <Span color={theme.color}> How do I create a space? </Span>
                <BsChevronExpand
                  size={20}
                  color={'#ddd'}
                />
              </Question>

              {showAnswers[8] && (
                <Answer>
                  <Span>
                    To create a space, click on Spaces on the left side and select "Create Your Space." From there, you
                    can add the users you wish to invite to join the space.
                  </Span>
                </Answer>
              )}
            </QnAItem>

            <QnAItem>
              <Question
                onClick={() => {
                  toggleShowAnswer(9);
                }}
                hover="#e20880"
              >
                <Span color={theme.color}> Does creating a Space require gas fees? </Span>
                <BsChevronExpand
                  size={20}
                  color={'#ddd'}
                />
              </Question>

              {showAnswers[9] && (
                <Answer>
                  <Span>
                    Creating or joining a Space does not require any gas fees. Users can seamlessly create or join
                    Spaces without any gas fees.
                  </Span>
                </Answer>
              )}
            </QnAItem>
          </ItemVV2>
        </ItemVV2>

        <ItemVV2
          margin="0px 0px 0px 0px"
          alignItems="flex-start"
        >
          <H2
            textTransform="uppercase"
            spacing="0.1em"
            margin="30px 0px 20px 0px"
            size="1.6rem"
          >
            <SpanV2
              weight="600"
              padding="8px 20px"
              background={theme.default.secondaryBg}
              color={theme.default.color}
              borderRadius={`${GLOBALS.ADJUSTMENTS.RADIUS.SMALL}`}
            >
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
                  toggleShowAnswer(10);
                }}
                hover="#e20880"
              >
                <Span color={theme.color}>How do I create a Channel?</Span>
                <BsChevronExpand
                  size={20}
                  color={'#ddd'}
                />
              </Question>

              {showAnswers[10] && (
                <Answer>
                  <Span>
                    Easiest way to create a channel is from our{' '}
                    <AMod
                      target="_blank"
                      href="https://app.push.org/dashboard"
                    >
                      Push (EPNS) Dapp
                    </AMod>{' '}
                    itself. Find the entire channel creation process{' '}
                    <AMod
                      target="_blank"
                      href="https://push.org/docs/notifications/build/create-channel/"
                    >
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
                  toggleShowAnswer(11);
                }}
                hover="#e20880"
              >
                <Span color={theme.color}>What are the different types of Notifications?</Span>
                <BsChevronExpand
                  size={20}
                  color={'#ddd'}
                />
              </Question>

              {showAnswers[11] && (
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
                  toggleShowAnswer(12);
                }}
                hover="#e20880"
              >
                <Span color={theme.color}>How do I send notifications?</Span>
                <BsChevronExpand
                  size={20}
                  color={'#ddd'}
                />
              </Question>

              {showAnswers[12] && (
                <Answer>
                  <Span>You can send a notification through various methods: </Span>
                  <ul>
                    <li>Using the DAPP</li>
                    <li>Via the Back-end</li>
                    <li>Utilizing Smart Contracts</li>
                  </ul>
                </Answer>
              )}
            </QnAItem>

            <QnAItem>
              <Question
                onClick={() => {
                  toggleShowAnswer(13);
                }}
                hover="#e20880"
              >
                <Span color={theme.color}>How do I use Backend-Sdk and Showrunners?</Span>
                <BsChevronExpand
                  size={20}
                  color={'#ddd'}
                />
              </Question>

              {showAnswers[13] && (
                <Answer>
                  <Span>
                    Push (EPNS) Documentation hub contains in-depth details on how to use our{' '}
                    <AMod
                      target="_blank"
                      href="https://push.org/docs/hackers/push-sdk/"
                    >
                      Backend SDKs
                    </AMod>{' '}
                    and{' '}
                    <AMod
                      target="_blank"
                      href="https://push.org/docs/notifications/showrunners-scaffold/"
                    >
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
                  toggleShowAnswer(14);
                }}
                hover="#e20880"
              >
                <Span color={theme.color}>How do I use the Frontend-SDK?</Span>
                <BsChevronExpand
                  size={20}
                  color={'#ddd'}
                />
              </Question>

              {showAnswers[14] && (
                <Answer>
                  <Span>
                    Push (EPNS) Documentation hub contains in-depth details on how to use our{' '}
                    <AMod
                      target="_blank"
                      href="https://push.org/docs/hackers/push-sdk/"
                    >
                      Frontend SDK
                    </AMod>
                    .
                  </Span>
                </Answer>
              )}
            </QnAItem>

            <QnAItem>
              <Question
                onClick={() => {
                  toggleShowAnswer(15);
                }}
                hover="#e20880"
              >
                <Span color={theme.color}>Where can I find Developer Documentations?</Span>
                <BsChevronExpand
                  size={20}
                  color={'#ddd'}
                />
              </Question>

              {showAnswers[15] && (
                <Answer>
                  <Span>
                    All of our documentation can be found in our{' '}
                    <AMod
                      target="_blank"
                      href="https://push.org/docs/#techdocs"
                    >
                      Push (EPNS) Documentation HUB
                    </AMod>
                    .
                  </Span>
                </Answer>
              )}
            </QnAItem>

            <QnAItem>
              <Question
                onClick={() => {
                  toggleShowAnswer(16);
                }}
                hover="#e20880"
              >
                <Span color={theme.color}> How do I integrate Chat? </Span>
                <BsChevronExpand
                  size={20}
                  color={'#ddd'}
                />
              </Question>

              {showAnswers[16] && (
                <Answer>
                  <Span>
                    You can integrate chat functionality by following the instructions outlined in this documentation:{' '}
                    <AMod
                      target="_blank"
                      href="https://push.org/docs/chat"
                    >
                      Push (EPNS) Documentation for Chat
                    </AMod>
                    .
                  </Span>
                </Answer>
              )}
            </QnAItem>

            <QnAItem>
              <Question
                onClick={() => {
                  toggleShowAnswer(17);
                }}
                hover="#e20880"
              >
                <Span color={theme.color}> How do I integrate Video? </Span>
                <BsChevronExpand
                  size={20}
                  color={'#ddd'}
                />
              </Question>

              {showAnswers[17] && (
                <Answer>
                  <Span>
                    You can integrate chat functionality by following the instructions outlined in this documentation:{' '}
                    <AMod
                      target="_blank"
                      href="https://push.org/docs/video"
                    >
                      Push (EPNS) Documentation for Video
                    </AMod>
                    .
                  </Span>
                </Answer>
              )}
            </QnAItem>

            <QnAItem>
              <Question
                onClick={() => {
                  toggleShowAnswer(18);
                }}
                hover="#e20880"
              >
                <Span color={theme.color}> How do I integrate Spaces? </Span>
                <BsChevronExpand
                  size={20}
                  color={'#ddd'}
                />
              </Question>

              {showAnswers[18] && (
                <Answer>
                  <Span>
                    You can integrate chat functionality by following the instructions outlined in this documentation:{' '}
                    <AMod
                      target="_blank"
                      href="https://push.org/spaces"
                    >
                      Push (EPNS) Documentation for Spaces
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
