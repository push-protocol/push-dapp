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



const SnapKnowledgeModule = () => {
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

                <ItemVV2 alignItems='baseline' margin='0 0 15px 0'>
                    <SpanV2 fontSize='32px' fontWeight='500'>Push Snap Documentation</SpanV2>
                </ItemVV2>


                <ItemVV2 fontSize='16px' gap='16px'>

                    <ItemVV2 alignItems='baseline' gap='8px' padding='0 0 16px 0'>
                        <SecondaryText>Push snap is a powerful tool that allows any wallet address to receive notifications directly in the Metamask wallet. With Push Snap, one can now seamlessly receive notifications powered by Push Protocol directly in their wallet, ensuring you never miss out on important updates from the channels that they subscribe to.</SecondaryText>
                        <SecondaryText>The goal of Push Snap is to enhance your Web3 experience by delivering notifications directly to your wallet address, eliminating the need to log in to any other front-end separately. This streamlined approach saves you time and effort, allowing you to stay connected and informed in Web3 with ease.</SecondaryText>
                    </ItemVV2>

                    <ItemVV2 gap='16px' padding='0 0 16px 0'>
                        <ItemVV2 alignItems='baseline'>
                            <SpanV2 fontSize='22px' fontWeight='500'>Snap Features</SpanV2>
                        </ItemVV2>
                        <ItemVV2 alignItems='baseline' gap='16px' >
                            <SecondaryText>The main features of Push Snap include:</SecondaryText>
                            {/* <ItemVV2 gap='16px'> */}
                                <ItemVV2 alignItems='baseline' gap='4px'>
                                    <SpanV2 fontWeight='500'>Notifications</SpanV2>
                                    <SpanV2>Notifying users of all imperative updates from the channels that they opt-in to.</SpanV2>
                                </ItemVV2>
                                <ItemVV2 alignItems='baseline' gap='4px'>
                                    <SpanV2 fontWeight='500'>Address Selection</SpanV2>
                                    <SpanV2>Addition or Removal of their desired address for Notification</SpanV2>
                                </ItemVV2>
                                <ItemVV2 alignItems='baseline' gap='4px'>
                                    <SpanV2 fontWeight='500'>Customization of Pop-Ups</SpanV2>
                                    <SpanV2>Snap allows users to toggle popup notifications at their convenience.</SpanV2>
                                </ItemVV2>
                            {/* </ItemVV2> */}
                        </ItemVV2>
                    </ItemVV2>


                    <ItemVV2 gap='16px'>
                        <ItemVV2 alignItems='baseline'>
                            <SpanV2 fontSize='22px' fontWeight='500'>Brief glance at the snaps working mechanism</SpanV2>
                        </ItemVV2>
                        <ItemVV2>
                            <UL>
                                <LI>
                                    The snap requests permission to run periodically every minute.
                                </LI>
                                <LI>
                                    While at it, it scouts for all new notifications/alerts received by your wallet during the very last minute.
                                </LI>
                                <LI>
                                    It then bundles them together and shows all of them in the form of a pop-up as well as in-app notifications.
                                </LI>
                                <LI>
                                    
                                    It allows users to update their address for which they prefer to receive notifications.
                                    
                                </LI>
                                <LI>
                                    It also includes features to toggle the Pop-Up of notifications as per the user’s choice.
                                </LI>
                            </UL>
                        </ItemVV2>
                        <ItemVV2>
                            <SpanV2 color='#62626A' textAlign='left' fontSize='13px' fontFamily='400'>Note: Currently, the snap checks if more than 25 notifications are received per minute. If that’s indeed the case, then it automatically notifies the user and snoozes the popups, which can be again turned on from the dapp.</SpanV2>
                        </ItemVV2>
                    </ItemVV2>
                </ItemVV2>






            </SubContainer>
        </Container>
    );
};

export default SnapKnowledgeModule;

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

const SecondaryText = styled(SpanV2)`
font-size:16px;
font-weight:400;
text-align:left;
line-height: 24px;
`

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

const UL = styled.ul`
  margin:0px;
  padding-left: 20px;
`

const LI = styled.li`
  margin:5px 0px;
  font-weight: 400;
  color: #000;
  font-family: Strawford;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; 
`
