import { ChatSidebarContentNew } from "components/chat/ChatSidebarContentNew";
import { ChatSidebarFooterNew } from "components/chat/ChatSidebarFooterNew";
import { ItemVV2 } from "components/reusables/SharedStylingV2";
import { device } from "config/Globals";
import { ChatLocalContext } from "contexts/ChatLocalContextNew";
import React, { useContext } from "react";
import styled, { useTheme } from "styled-components";

export const ChatSidebarSectionNew = () => {

  const {selectedChat} = useContext(ChatLocalContext);

  const theme = useTheme();

  return (
    <Container chatActive={selectedChat}>
      <ChatSidebarContentNew />
      <ChatSidebarFooterNew />  
    </Container>
  );
}

const Container = styled(ItemVV2)`
  background:red;
  max-width:310px;
  min-width:280px;
  padding:10px 10px 10px 20px;
  box-sizing:border-box;
  background:${(props)=>props.theme.default.bg};

  @media ${device.tablet} {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 95%;
    margin-right: ${(props) => (props.chatActive!=null ? '20%' : '0%')};
    opacity: ${(props) => (props.chatActive!=null ? '0' : '1')};
    transition: margin-right 0.25s;
    max-width: initial;
    min-width: auto;
    z-index: 1;
  }

`