// React + Web3 Essentials
import React, { useEffect, useState } from 'react';

// External Packages
import ReactGA from 'react-ga';
import { useNavigate } from 'react-router-dom';

import styled, { useTheme } from 'styled-components';

// Internal Components
import { ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { Section, Span } from '../../primaries/SharedStyling';

// Internal Configs
import { ReactComponent as Close } from 'assets/chat/group-chat/close.svg';
import { device } from 'config/Globals';



const SnapKnowledgeModal = ({
    onClose
}) => {
    const theme = useTheme();
    const navigate = useNavigate();

    const handleKnowledgeModalClose = () => {
        onClose();
        navigate('/snap');
    }

    return (
        <SubContainer>
            <ItemVV2 alignItems='end'>
                <Close style={{ cursor: 'pointer' }} onClick={handleKnowledgeModalClose} />
            </ItemVV2>

            <ItemVV2 alignItems='baseline' margin='0 0 15px 0'>
                <SpanV2 fontSize='32px' textAlign='left' fontWeight='500'>Push Snap Documentation</SpanV2>
            </ItemVV2>


            <MainContainer fontSize='16px' gap='16px'>

                <ItemVV2 alignItems='baseline' gap='8px' padding='0 10px 16px 0'>
                    <SecondaryText>Push snap is a powerful tool that allows any wallet address to receive notifications directly in the Metamask wallet. With Push Snap, one can now seamlessly receive notifications powered by Push Protocol directly in their wallet, ensuring you never miss out on important updates from the channels that they subscribe to.</SecondaryText>
                    <SecondaryText>The goal of Push Snap is to enhance your Web3 experience by delivering notifications directly to your wallet address, eliminating the need to log in to any other front-end separately. This streamlined approach saves you time and effort, allowing you to stay connected and informed in Web3 with ease.</SecondaryText>
                </ItemVV2>

                <ItemVV2 gap='16px' padding='0 10px 16px 0'>
                    <ItemVV2 alignItems='baseline'>
                        <SpanV2 fontSize='22px' fontWeight='500'>Snap Features</SpanV2>
                    </ItemVV2>
                    <ItemVV2 alignItems='baseline' gap='16px' >
                        <SecondaryText>The main features of Push Snap include:</SecondaryText>
                        <ItemVV2 alignItems='baseline' gap='4px'>
                            <SpanV2 fontWeight='500'>Notifications</SpanV2>
                            <SpanV2 textAlign='left'>Notifying users of all imperative updates from the channels that they opt-in to.</SpanV2>
                        </ItemVV2>
                        <ItemVV2 alignItems='baseline' gap='4px'>
                            <SpanV2 fontWeight='500'>Address Selection</SpanV2>
                            <SpanV2 textAlign='left'>Addition or Removal of their desired address for Notification</SpanV2>
                        </ItemVV2>
                        <ItemVV2 alignItems='baseline' gap='4px'>
                            <SpanV2 fontWeight='500'>Customization of Pop-Ups</SpanV2>
                            <SpanV2 textAlign='left'>Snap allows users to toggle popup notifications at their convenience.</SpanV2>
                        </ItemVV2>
                        
                    </ItemVV2>
                </ItemVV2>


                <ItemVV2 gap='16px' padding='0 10px 16px 0'>
                    <ItemVV2 alignItems='baseline'>
                        <SpanV2 fontSize='22px' textAlign='left' fontWeight='500'>Brief glance at the snaps working mechanism</SpanV2>
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
            </MainContainer>
        </SubContainer>
    );
};

export default SnapKnowledgeModal;

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

const MainContainer = styled.div`
    height: 400px;
    overflow-y: scroll;
    overflow-x:hidden;
    &::-webkit-scrollbar {
    width: 5px;
    }

    &::-webkit-scrollbar-thumb {
    background: #cf1c84;
    border-radius: 10px;
    }
`
