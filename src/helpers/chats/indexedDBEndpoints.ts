import { ConnectedUser, FeedsNew } from "types/chat";
import { decryptFeedsNew } from "./decrypt";
import { intitializeDb } from "./indexedDB";

export const getInboxFromIndexedDB = async (connectedUser:ConnectedUser):Promise<FeedsNew> => {
  //remove old indexDb structure
  const inboxesFromIndexedDB:any = await intitializeDb<string>('Read', 'Inbox', connectedUser.wallets, '', 'did');

  if (inboxesFromIndexedDB !== undefined) {
    let inboxes: FeedsNew = inboxesFromIndexedDB.body;
    //change decryptFeeds to a common function
    const decryptedInboxes: FeedsNew = await decryptFeedsNew({ feeds: inboxes, connectedUser });
    console.log(decryptedInboxes)
      return decryptedInboxes;
  }
};

export const getRequestsFromIndexedDB = async (connectedUser:ConnectedUser):Promise<FeedsNew> => {
  //remove old indexDb structure
  const requestsFromIndexedDB:any = await intitializeDb<string>('Read', 'Inbox', connectedUser.wallets, '', 'did');

  if (requestsFromIndexedDB !== undefined) {
    let requests: FeedsNew = requestsFromIndexedDB.body;
    //change decryptFeeds to a common function
    const decryptedRequests: FeedsNew = await decryptFeedsNew({ feeds: requests, connectedUser });
    console.log(decryptedRequests)
    return decryptedRequests;
  }
};