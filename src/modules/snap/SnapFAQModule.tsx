// React + Web3 Essentials
import React, { useEffect, useState } from 'react';

// External Packages
import ReactGA from 'react-ga';
import { useNavigate } from 'react-router-dom';
import { BsChevronExpand } from 'react-icons/bs';
import { MdOutlineArrowUpward } from "react-icons/md";
import { MdOutlineArrowDownward } from "react-icons/md";

import styled, { useTheme } from 'styled-components';

// Internal Components
import { ButtonV2, H2V2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { H2, Image, Item, Section, Span } from '../../primaries/SharedStyling';
import { Button } from 'components/SharedStyling';


// Internal Configs
import { ReactComponent as Close } from 'assets/chat/group-chat/close.svg';
import GLOBALS, { device, globalsMargin } from 'config/Globals';



const SnapFAQModule = () => {
    const theme = useTheme();
    const renderAnswerWithColor = (answer) => {
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        const parts = answer.split(urlRegex);

        return parts.map((part, index) => {
            if (part.match(urlRegex)) {
                return (
                    <>
                        <Link key={index} href={part} target='_blank'>
                            <SpanV2 color='#D53A94' cursor='pointer'>{part}</SpanV2>
                        </Link>
                    </>);
            } else {
                return <SpanV2 key={index}>
                    {part}
                </SpanV2>;
            }
        });
    };

    const [openIndex, setOpenIndex] = useState(null);

    const toggleItem = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const FAQs = [
        {
            id: 1,
            question: "How can I install Push Snap?",
            answer: "To install Push Protocol Snap, you need to go to our Dapp, https://app.push.org/snap and click on Receive Notifications section, from there install the snap by giving it the required permissions, after adding addresses, you’re all set to start receiving notifications."
        },
        {
            id: 2,
            question: "Can I add an address that I do not own?",
            answer: ""
        },
        {
            id: 3,
            question: "Can I opt for only in-app MetaMask Notifications",
            answer: ""
        },
        {
            id: 4,
            question: "Can I subscribe protocols (channels) using this Snap?",
            answer: ""
        },
        {
            id: 5,
            question: "Can Push Snap sign and send transactions?",
            answer: ""
        },
        {
            id: 6,
            question: "Is there a way to minimize frequent notification pop-ups?",
            answer: ""
        },
        {
            id: 7,
            question: "What permissions do I need to provide to use Push Snap",
            answer: ""
        },
        {
            id: 8,
            question: "Can I add more than one wallet to receive notifications?",
            answer: ""
        },
        {
            id: 9,
            question: "If I add more than one wallet to Push Snap, will I receive notifications for all of them?",
            answer: ""
        },
        {
            id: 10,
            question: "Do I need to unlock MetaMask to receive notification?",
            answer: ""
        },


    ]

    return (
        <Container>
            <SubContainer>
                <ItemVV2 alignItems='end'>
                    <Close style={{ cursor: 'pointer' }} />
                </ItemVV2>

                <ItemVV2 gap='15px'>
                    <ItemVV2 alignItems='baseline'>
                        <SpanV2 fontSize='32px' fontWeight='500'>Push Snap FAQ</SpanV2>
                    </ItemVV2>

                    <ItemVV2 gap='16px'>
                        {FAQs.map((FAQ) => (
                            <QnAItem key={FAQ.id}>
                                <Question
                                    // style={{
                                    //     cursor: 'pointer',
                                    //     backgroundColor: FAQ.id === openIndex ? '#e0e0e0' : '#fff',
                                    // }}
                                    onClick={() => toggleItem(FAQ.id)}
                                    hover="#e20880"
                                >
                                    <Span color={theme.color}>{FAQ.question}</Span>
                                    {FAQ.id === openIndex ? (
                                        <MdOutlineArrowUpward color='#ADB0BE' size={24} />
                                    ) : (
                                        <MdOutlineArrowDownward color='#ADB0BE' size={24} />
                                    )}
                                </Question>

                                {FAQ.id === openIndex && (
                                    <Answer>
                                        <SpanV2 fontSize='16px' fontWeight='400' color='#62626A' textAlign='left'>
                                            {renderAnswerWithColor(FAQ.answer)}
                                        </SpanV2>
                                    </Answer>
                                )}
                            </QnAItem>
                        ))}
                    </ItemVV2>
                </ItemVV2>

            </SubContainer>
        </Container>
    );
};

export default SnapFAQModule;

const Container = styled(Section)`
  align-items: center;
  align-self: center;
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
    width: calc(100% - ${globalsMargin.MINI_MODULES.TABLET.RIGHT} - ${globalsMargin.MINI_MODULES.TABLET.LEFT} - ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT} - ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT});
  }
    
  @media ${device.mobileL} {
    margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.MOBILE};
    padding: ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT};
    width: calc(100% - ${globalsMargin.MINI_MODULES.MOBILE.RIGHT} - ${globalsMargin.MINI_MODULES.MOBILE.LEFT} - ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT} - ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT});
  }
`;

const SubContainer = styled(Section)`
  width: 634px;
  padding: 32px 24px;
  border-radius: 32px;
  background: #fff;
  background: ${(props) => props.theme.default.bg};
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
  margin: 24px auto;
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
    padding:0 0 16px 0;
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
