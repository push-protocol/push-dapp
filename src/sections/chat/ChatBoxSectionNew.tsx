import React from "react";
import { ChatConversationSectionNew } from "./ChatConversationSectionNew";
import { ChatWelcomeSectionNew } from "./ChatWelcomeSectionNew";

export const ChatBoxSectionNew = () => {
  return (
    <>
      <ChatWelcomeSectionNew />
      <ChatConversationSectionNew />  
    </>
  );
}