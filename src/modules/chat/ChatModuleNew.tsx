import { useWeb3React } from "@web3-react/core";
import { intitializeDb } from "components/chat/w2wChat/w2wIndexdedbNew";
import { ChatGlobalContextNew } from "contexts/ChatGlobalContextNew";
import { decryptFeeds, decryptFeedsNew, getChatId, walletToCAIP10 } from "helpers/w2w";
import React, { useContext, useEffect } from "react";
import { ChatBoxSectionNew } from "sections/chat/ChatBoxSectionNew";
import { ChatSidebarSectionNew } from "sections/chat/ChatSidebarSectionNew";
import { getConnectedUser } from "services/users/getConnectedUser";
import { Feeds, FeedsNew } from "types/chat";
import { getRequests, getInbox } from 'services';

export const ChatModuleNew = () => {
  const { account, library } = useWeb3React();
  const { connectedUser, setConnectedUser,setInbox,setRequests } = useContext(ChatGlobalContextNew);

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
        const inboxes = await getInboxFromIndexDb();
        fetchInbox();
        const requests = await getRequestsFromIndexDb();
        fetchRequests();
        setInbox(inboxes,account);
        setRequests(requests,account);
      } catch (err) {
        console.log(err);
      }
    })()
  }, [connectedUser]);

  const getInboxFromIndexDb = async ():Promise<FeedsNew> => {
    //remove old indexDb structure
      const inboxesFromIndexDb:any = await intitializeDb<string>('Read', 'Inbox', walletToCAIP10({ account }), '', 'did');

      if (inboxesFromIndexDb !== undefined) {
        let inboxes: FeedsNew = inboxesFromIndexDb.body;
        //change decryptFeeds to a common function
        const decryptedInboxes: FeedsNew = await decryptFeedsNew({ feeds: inboxes, connectedUser });
        console.log(decryptedInboxes)
         return decryptedInboxes;
      }
  };

  const fetchInbox = async ():Promise<void> => {
    const inboxes = await getInbox(account);
    if(inboxes.length)
    {
      const mappedInboxes:FeedsNew = Object.assign({}, ...inboxes.map(s => ({[getChatId(s)]: s})));
      intitializeDb<FeedsNew>('Insert', 'Inbox', walletToCAIP10({ account: connectedUser.wallets! }), mappedInboxes, 'did');
      const decryptedInboxes:FeedsNew = await decryptFeedsNew({ feeds: mappedInboxes, connectedUser });
      console.log(decryptedInboxes)
      setInbox(decryptedInboxes,account);
    }
  }

  const getRequestsFromIndexDb = async ():Promise<FeedsNew> => {
    //remove old indexDb structure
      const requestsFromIndexDb:any = await intitializeDb<string>('Read', 'Inbox', walletToCAIP10({ account }), '', 'did');

      if (requestsFromIndexDb !== undefined) {
        let requests: FeedsNew = requestsFromIndexDb.body;
        //change decryptFeeds to a common function
        const decryptedRequests: FeedsNew = await decryptFeedsNew({ feeds: requests, connectedUser });
        console.log(decryptedRequests)
        return decryptedRequests;
      }
  };

  const fetchRequests = async ():Promise<void> => {
    const requests = await getRequests(account);
    if(requests.length)
    {
      const mappedRequests:FeedsNew = Object.assign({}, ...requests.map(s => ({[getChatId(s)]: s})));
      intitializeDb<FeedsNew>('Insert', 'Inbox', walletToCAIP10({ account: connectedUser.wallets! }), mappedRequests, 'did');
      const decryptedRequests:FeedsNew = await decryptFeedsNew({ feeds: mappedRequests, connectedUser });
      console.log(decryptedRequests)
      setRequests(decryptedRequests,account);
    }
  }
  return (
    <>
      <ChatSidebarSectionNew />  
      <ChatBoxSectionNew />
    </>
  );
}
