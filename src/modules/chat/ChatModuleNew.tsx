import { useWeb3React } from "@web3-react/core";
import { ChatGlobalContextNew } from "contexts/ChatGlobalContextNew";
import React, { useContext, useEffect } from "react";
import { ChatBoxSectionNew } from "sections/chat/ChatBoxSectionNew";
import { ChatSidebarSectionNew } from "sections/chat/ChatSidebarSectionNew";
import { getConnectedUser } from "services/users/getConnectedUser";
import { getInboxFromIndexDb, getRequestsFromIndexDb } from "helpers/w2w/indexedDbCalls";
import { fetchInbox, fetchRequests } from "helpers/w2w/feeds";

export const ChatModuleNew = () => {
  const { account, library } = useWeb3React();
  const { connectedUser, setConnectedUser,setInbox,setRequests,userFeeds } = useContext(ChatGlobalContextNew);

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

 useEffect(() => {
  if(!connectedUser) return;
    (async function () {
      try {
        if(!userFeeds[account]?.inbox){
        const inboxes = await getInboxFromIndexDb(connectedUser);
        console.log(inboxes)
        fetchInbox({connectedUser,setResult:setInbox});
        setInbox(inboxes,account);
        }
        if(!userFeeds[account]?.requests){
        const requests = await getRequestsFromIndexDb(connectedUser);
        fetchRequests({connectedUser,setResult:setRequests});
        setRequests(requests,account);
        }
      } catch (err) {
        console.log(err);
      }
    })()
  },[connectedUser]);


 
  return (
    <>
      <ChatSidebarSectionNew />  
      <ChatBoxSectionNew />
    </>
  );
}

