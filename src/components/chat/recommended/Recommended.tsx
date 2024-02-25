// React + Web3 Essentials
import React, { useState } from "react";

// External Packages
import { ChatPreview } from '@pushprotocol/uiweb';
import styled, { css, useTheme } from 'styled-components';

// Internal Compoonents
import { ItemVV2 } from 'components/reusables/SharedStylingV2';

// Internal Configs
import recommendedChatsList from 'config/RecommendedChatsList';

// Interface

// Constants

// Create Module
const Recommended = ({ bg, onChatSelected }) => {
  // States
  const [chatId, setChatId] = useState('');

  const getChatParticipant = (chatParticipant) => {
    let chatParticipantAlias;

    for (let i = 0; i < recommendedChatsList.length; i++) {
      if (recommendedChatsList[i].payload.chatParticipant === chatParticipant) {
        chatParticipantAlias = recommendedChatsList[i].chatParticipantAlias;
      }
    }

    return chatParticipantAlias;
  }

  // RENDER
  return (
    <Container
      bg={bg}
    >
      {recommendedChatsList.map((item, index) => {
        return (
          <ChatPreview 
            key={index} 
            chatPreviewPayload={item.payload}
            selected={item.payload.chatId === chatId ? true : false}
            setSelected={(chatId, chatParticipant) => {const chatParticipantRemapped = getChatParticipant(chatParticipant); setChatId(chatId); onChatSelected(chatId, chatParticipantRemapped)}}
          />
        )
      })}
    </Container>
  );
}
export default Recommended;

// css styles
const Container = styled(ItemVV2)`
  flex: initial;
  flex-wrap: nowrap;
  background: ${props => props.bg || 'transparent'};
  border-radius: 24px;
  padding: 10px;

  &:before {
    content: "RECOMMENDED";
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 10px;
    letter-spacing: 0.05em;
    color: #657795;
    display: flex;
    align-self: flex-start;
    padding: 5px 10px 0px 10px;
  }
`