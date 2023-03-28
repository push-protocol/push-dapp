import { ItemVV2 } from "components/reusables/SharedStylingV2";
import { device } from "config/Globals";
import { ChatLocalContext } from "contexts/ChatLocalContextNew";
import React, { useContext } from "react";
import styled from "styled-components";
import { ChatConversationSectionNew } from "./ChatConversationSectionNew";
import { ChatWelcomeSectionNew } from "./ChatWelcomeSectionNew";

export const ChatBoxSectionNew = () => {

  const { selectedChat } = useContext(ChatLocalContext)

  return (
    <Box chatActive={selectedChat}>
      <Container>
        <ChatWelcomeSectionNew />
        <ChatConversationSectionNew />
      </Container>
    </Box>
  );
}

const Box = styled(ItemVV2)`
@media ${device.tablet} {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 96%;
  margin-left: ${(props) => (props.chatActive != null ? '2%' : '100%')};
  transition: margin-left 0.25s;
  max-width: initial;
  min-width: auto;
  z-index: 2;
}
`

const Container = styled(ItemVV2)`
  // background:blue;
  margin:10px;

  box-sizing: border-box;
  background: ${(props) => props.theme.chat.chatboxBg || 'transparent'};
  border-radius: 24px;
  height: 100%;
  display: flex;
  align-items: center;
  align-self: stretch;
  text-align: center;
  font-weight: 400;
  justify-content: center;
  position: relative;
  height:100%;

  @media ${device.tablet} {
    margin:10px 0px;
  }


`