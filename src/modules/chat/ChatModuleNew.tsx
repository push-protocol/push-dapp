import React from "react";
import { ChatBoxSectionNew } from "sections/chat/ChatBoxSectionNew";
import { ChatSidebarSectionNew } from "sections/chat/ChatSidebarSectionNew";

export const ChatModuleNew = () => {
  return (
    <>
      <ChatSidebarSectionNew />  
      <ChatBoxSectionNew />
    </>
  );
}