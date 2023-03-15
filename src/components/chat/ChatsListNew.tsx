import React from "react";
import { ChatInboxNew } from "./ChatInboxNew";
import { ChatRequestsNew } from "./ChatRequestsNew";

export const ChatsListNew = () => {
  return (
    <>
      <ChatInboxNew />
      <ChatRequestsNew />
    </>
  );
}