// React + Web3 Essentials
import React, { useEffect, useState } from 'react';

// External Packages
import ReactGA from 'react-ga';
import { useNavigate } from 'react-router-dom';

import styled, { useTheme } from 'styled-components';

// Internal Components
import { ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { Item, Section, Span } from '../../primaries/SharedStyling';
import { ReactComponent as UpArrow } from "assets/PushSnaps/UpArrow.svg";
import { ReactComponent as DownArrow } from "assets/PushSnaps/DownArrow.svg";


// Internal Configs
import { ReactComponent as Close } from 'assets/chat/group-chat/close.svg';
import { device } from 'config/Globals';



const SnapFAQModal = ({
    onClose
}) => {
    const theme = useTheme();
    const navigate = useNavigate();

    const [openIndex, setOpenIndex] = useState(null);

    const toggleItem = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const handleFAQModalClose = () => {
        onClose();
        navigate('/snap')

    }

    return (
        <SubContainer>
            <ItemVV2 alignItems='end'>
                <Close style={{ cursor: 'pointer' }} onClick={handleFAQModalClose} />
            </ItemVV2>

            <ItemVV2 gap='15px'>
                <ItemVV2 alignItems='baseline'>
                    <SpanV2 fontSize='32px' fontWeight='500'>Push Snap FAQ</SpanV2>
                </ItemVV2>

                <FAQContainer>
                    <QnAItem>
                        <Question
                            onClick={() => toggleItem(1)}
                            hover="#e20880"
                        >
                            <Span color={theme.color}>How can I install Push Snap?</Span>
                            {openIndex === 1 ? (
                                <UpArrow color='#ADB0BE' size={24} />
                            ) : (
                                <DownArrow color='#ADB0BE' size={24} />
                            )}
                        </Question>

                        {openIndex == 1 && (
                            <Answer>
                                <SpanV2 fontSize='16px' fontWeight='400' color='#62626A' textAlign='left'>
                                    To install Push Protocol Snap, you need to go to our Dapp, {" "}
                                    <Link href='https://app.push.org/snap' target='_blank'>
                                        <SpanV2 color='#D53A94' cursor='pointer'>https://app.push.org/snap</SpanV2>
                                    </Link> {" "}
                                    and click on Receive Notifications section, from there install the snap by giving it the required permissions, after adding addresses, you’re all set to start receiving notifications.
                                </SpanV2>
                            </Answer>
                        )}
                    </QnAItem>

                    <QnAItem>
                        <Question
                            onClick={() => toggleItem(2)}
                            hover="#e20880"
                        >
                            <Span color={theme.color}>Can I add an address that I do not own?</Span>
                            {openIndex === 1 ? (
                                <UpArrow color='#ADB0BE' size={24} />
                            ) : (
                                <DownArrow color='#ADB0BE' size={24} />
                            )}
                        </Question>

                        {openIndex == 2 && (
                            <Answer>
                                <SpanV2 fontSize='16px' fontWeight='400' color='#62626A' textAlign='left'>
                                    The addresses to receive notifications can be added only after signing a message, which proves the ownership of that address, hence un-owned addresses cannot be added.
                                </SpanV2>
                            </Answer>
                        )}
                    </QnAItem>

                    <QnAItem>
                        <Question
                            onClick={() => toggleItem(3)}
                            hover="#e20880"
                        >
                            <Span color={theme.color}>Can I opt for only in-app MetaMask Notifications</Span>
                            {openIndex === 3 ? (
                                <UpArrow color='#ADB0BE' size={24} />
                            ) : (
                                <DownArrow color='#ADB0BE' size={24} />
                            )}
                        </Question>

                        {openIndex == 3 && (
                            <Answer>
                                <SpanV2 fontSize='16px' fontWeight='400' color='#62626A' textAlign='left'>
                                    Yes, the snap can run only on in-app notifications, to avail that, you need to go through the push snap settings in push dapp and turn off pop-up notifications.
                                </SpanV2>
                            </Answer>
                        )}
                    </QnAItem>

                    <QnAItem>
                        <Question
                            onClick={() => toggleItem(4)}
                            hover="#e20880"
                        >
                            <Span color={theme.color}>Can I subscribe protocols (channels) using this Snap?</Span>
                            {openIndex === 4 ? (
                                <UpArrow color='#ADB0BE' size={24} />
                            ) : (
                                <DownArrow color='#ADB0BE' size={24} />
                            )}
                        </Question>

                        {openIndex == 4 && (
                            <Answer>
                                <SpanV2 fontSize='16px' fontWeight='400' color='#62626A' textAlign='left'>
                                    The channel opt-in can only be done using the Push Protocol Dapp {" "}
                                    <Link  href='https://app.push.org/channels' target='_blank'>
                                        <SpanV2 color='#D53A94' cursor='pointer'>(https://app.push.org/channels)</SpanV2>
                                    </Link>  {" "}
                                    , and notification of those channels can be received by the snap
                                </SpanV2>
                            </Answer>
                        )}
                    </QnAItem>

                    <QnAItem>
                        <Question
                            onClick={() => toggleItem(5)}
                            hover="#e20880"
                        >
                            <Span color={theme.color}>Can Push Snap sign and send transactions?</Span>
                            {openIndex === 5 ? (
                                <UpArrow color='#ADB0BE' size={24} />
                            ) : (
                                <DownArrow color='#ADB0BE' size={24} />
                            )}
                        </Question>

                        {openIndex == 5 && (
                            <Answer>
                                <SpanV2 fontSize='16px' fontWeight='400' color='#62626A' textAlign='left'>
                                    No, the snap does not have access to the Ethereum provider nor the signer hence the snap cannot initiate any kind of transaction that may or may not involve asset transfers.
                                </SpanV2>
                            </Answer>
                        )}
                    </QnAItem>

                    <QnAItem>
                        <Question
                            onClick={() => toggleItem(6)}
                            hover="#e20880"
                        >
                            <Span color={theme.color}>Is there a way to minimize frequent notification pop-ups?</Span>
                            {openIndex === 6 ? (
                                <UpArrow color='#ADB0BE' size={24} />
                            ) : (
                                <DownArrow color='#ADB0BE' size={24} />
                            )}
                        </Question>

                        {openIndex == 6 && (
                            <Answer>
                                <SpanV2 fontSize='16px' fontWeight='400' color='#62626A' textAlign='left'>
                                    Snap has an in-built feature to snooze frequent pop-up notifications, if you receive more than 25 notifications within 5 minutes, it automatically goes into snooze mode and notification would only come in the MetaMask. This settings can be reset from the Dapp {" "}
                                    <Link  href='https://app.push.org/snap' target='_blank'>
                                        <SpanV2 color='#D53A94' cursor='pointer'>(https://app.push.org/snap)</SpanV2>
                                    </Link> {" "} .
                                </SpanV2>
                            </Answer>
                        )}
                    </QnAItem>


                    <QnAItem>
                        <Question
                            onClick={() => toggleItem(7)}
                            hover="#e20880"
                        >
                            <Span color={theme.color}>What permissions do I need to provide to use Push Snap</Span>
                            {openIndex === 7 ? (
                                <UpArrow color='#ADB0BE' size={24} />
                            ) : (
                                <DownArrow color='#ADB0BE' size={24} />
                            )}
                        </Question>

                        {openIndex == 7 && (
                            <Answer>
                                <SpanV2 fontSize='16px' fontWeight='400' color='#62626A' textAlign='left'>
                                    The only permissions required are:
                                </SpanV2>
                                <UL>
                                    <LI>Local storage access to snap to store details of notifications received and allowed addresses</LI>
                                    <LI>Internet access to gather notifications from Push Protocol</LI>
                                    <LI>Periodic running of services while the browser is active to check for latest notifications</LI>
                                    <LI>Dialog box access to allow pop-up notifications</LI>
                                </UL>
                            </Answer>
                        )}
                    </QnAItem>

                    <QnAItem>
                        <Question
                            onClick={() => toggleItem(8)}
                            hover="#e20880"
                        >
                            <Span color={theme.color}>Can I add more than one wallet to receive notifications?</Span>
                            {openIndex === 8 ? (
                                <UpArrow color='#ADB0BE' size={24} />
                            ) : (
                                <DownArrow color='#ADB0BE' size={24} />
                            )}
                        </Question>

                        {openIndex == 8 && (
                            <Answer>
                                <SpanV2 fontSize='16px' fontWeight='400' color='#62626A' textAlign='left'>
                                    Yes, more than one wallet can be added to receive notifications:
                                </SpanV2>

                                <UL>
                                    <LI>Go to snap settings on Push Dapp {" "}
                                        <Link href='https://app.push.org/snap' target='_blank'>
                                            <SpanV2 color='#D53A94' cursor='pointer'>(https://app.push.org/snap)</SpanV2>
                                        </Link> {" "}
                                    </LI>
                                    <LI>Connect the wallet you want to add</LI>
                                    <LI>Click on Add Address button and sign a message</LI>
                                    <LI>The address will be added to the snap to receive notifications</LI>
                                </UL>
                            </Answer>
                        )}
                    </QnAItem>

                    <QnAItem>
                        <Question
                            onClick={() => toggleItem(9)}
                            hover="#e20880"
                        >
                            <Span color={theme.color}>If I add more than one wallet to Push Snap, will I receive notifications for all of them?</Span>
                            {openIndex === 9 ? (
                                <UpArrow color='#ADB0BE' size={24} />
                            ) : (
                                <DownArrow color='#ADB0BE' size={24} />
                            )}
                        </Question>

                        {openIndex == 9 && (
                            <Answer>
                                <SpanV2 fontSize='16px' fontWeight='400' color='#62626A' textAlign='left'>
                                    Yes, after adding the new wallet adequately, you should be able to receive notifications for them.
                                </SpanV2>
                            </Answer>
                        )}
                    </QnAItem>

                    <QnAItem>
                        <Question
                            onClick={() => toggleItem(10)}
                            hover="#e20880"
                        >
                            <Span color={theme.color}>Do I need to unlock MetaMask to receive notification?</Span>
                            {openIndex === 10 ? (
                                <UpArrow color='#ADB0BE' size={24} />
                            ) : (
                                <DownArrow color='#ADB0BE' size={24} />
                            )}
                        </Question>

                        {openIndex == 10 && (
                            <Answer>
                                <SpanV2 fontSize='16px' fontWeight='400' color='#62626A' textAlign='left'>
                                    Yes, the browser window needs to be active and MetaMask must be unlocked to receive notifications.
                                </SpanV2>
                            </Answer>
                        )}
                    </QnAItem>

                </FAQContainer>
            </ItemVV2>

        </SubContainer>
    );
};

export default SnapFAQModal;

const SubContainer = styled(Section)`
  width: 634px;
  padding: 32px 24px;
  border-radius: 32px;
  background: #fff;

  @media ${device.tablet} {
    width: 500px;
    padding:24px 18px;
  }

  @media ${device.mobileL} {
    width: 330px;
  }
`;

const Question = styled.button`
  display:flex;
  cursor:pointer;
  align-items: stretch;
  align-self: stretch;
  background: transparent;
`;

const Answer = styled(Item)`
  align-items: stretch;
  align-self: stretch;
`;

const QnAItem = styled(ItemVV2)`
  align-items: stretch;
  align-self: stretch;
  flex: auto;
  border: 1px solid ${(props) => props.theme.default.border};
  border-left-width: 0px;
  border-right-width: 0px;
  border-top-width: 0px;
  overflow: hidden;
  & ${Question} {
    // background: ${(props) => props.theme.qnaBg};
    justify-content: flex-start;
    padding:16px 16px 16px 0;
    & ${Span} {
        cursor:pointer;
        font-size:19px;
        font-weight: 500;
        line-height: 135%;
        margin-left: 10px;
        flex: 1;
    }
  }
  & ${Answer} {
    // border: 1px solid ${(props) => props.theme.default.border};
    // border-top: 1px solid ${(props) => props.theme.default.border};
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

const Link = styled.a`
  cursor:pointer;
  font-size:16px;
  font-weight:500;
  color:#D53A94;
  text-align: start;
  text-decoration:none;
  
  @media (max-width:600px){
    margin-left:5px;
  }

   &:hover{
    text-decoration:underline;
    text-underline-position: under;
  }
`

const FAQContainer = styled.div`
    height: 400px;
    overflow-y: scroll;
    overflow-x:hidden;
    &::-webkit-scrollbar {
    background-color: ${(props) => props.theme.scrollBg};
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.scrollBg};
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #cf1c84;
    border-radius: 10px;
  }
`

const UL = styled.ul`
  margin:0px;
  padding-left: 20px;
`

const LI = styled.li`
  margin:5px 0px;
  font-weight: 400;
  color: #62626A;
  font-family: Strawford;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; 
`
