import { useWeb3React } from "@web3-react/core";
import { ChatGlobalContextNew } from "contexts/ChatGlobalContextNew";
import ChatLocalContextProviderNew from "contexts/ChatLocalContextNew";
import React, { useContext, useEffect } from "react";
import { ChatBoxSectionNew } from "sections/chat/ChatBoxSectionNew";
import { ChatSidebarSectionNew } from "sections/chat/ChatSidebarSectionNew";
import { getConnectedUser } from "services/users/getConnectedUser";

export const ChatModuleNew = () => {
  const { account, library } = useWeb3React();
  const { connectedUser, setConnectedUser } = useContext(ChatGlobalContextNew);

  useEffect(() => {
    if(connectedUser || !account || !library) return;
    (async function () {
      try {
        const signer = await library.getSigner();
        const connectedUserResponse = await getConnectedUser(account, signer);
        setConnectedUser(connectedUserResponse);
      } catch (err) {
        console.log(err);
      }
    })()
  }, [account, library]);

  return (
    <>
      <ChatLocalContextProviderNew>
        <ChatSidebarSectionNew />  
        <ChatBoxSectionNew />
      </ChatLocalContextProviderNew>
    </>
  );
}