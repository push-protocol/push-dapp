import { ItemVV2 } from "components/reusables/SharedStylingV2";
import { device } from "config/Globals";
import { ChatLocalContext } from "contexts/ChatLocalContextNew";
import React, { useContext } from "react";
import styled from "styled-components";
import { ChatConversationSectionNew } from "./ChatConversationSectionNew";
import { ChatWelcomeSectionNew } from "./ChatWelcomeSectionNew";

export const ChatBoxSectionNew = () => {

  const {selectedChat} = useContext(ChatLocalContext)

  return (
    <Container chatActive={selectedChat}>
      hello chatbox section
      <ChatWelcomeSectionNew />
      <ChatConversationSectionNew />  
    </Container>
  );
}


const Container = styled(ItemVV2)`
  background:blue;
  padding:10px;

  @media ${device.tablet} {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 95%;
    margin-left: ${(props) => (props.chatActive==null ? '0%' : '100%')};
    transition: margin-left 0.25s;
    max-width: initial;
    min-width: auto;
    z-index: 2;
  }


`