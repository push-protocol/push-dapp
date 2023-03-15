import { ChatHeaderNew } from "components/chat/ChatHeaderNew";
import { ChatInfoNew } from "components/chat/ChatInfoNew";
import { ChatsContentNew } from "components/chat/ChatsContentNew";
import { ChatTypebarNew } from "components/chat/ChatTypebarNew";
import React from "react";

export const ChatConversationSectionNew = () => {
  return (
    <>
      <ChatHeaderNew />
      <ChatInfoNew />
      <ChatsContentNew />
      <ChatTypebarNew />  
    </>
  );
}