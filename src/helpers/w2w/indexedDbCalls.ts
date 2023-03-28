import { ConnectedUser, FeedsNew } from "types/chat";
import { decryptFeedsNew, walletToCAIP10 } from ".";
import { intitializeDb } from "./w2wIndexdedbNew";

export const getInboxFromIndexDb = async (connectedUser:ConnectedUser):Promise<FeedsNew> => {
    //remove old indexDb structure
      const inboxesFromIndexDb:any = await intitializeDb<string>('Read', 'Inbox', connectedUser.wallets, '', 'did');

      if (inboxesFromIndexDb !== undefined) {
        let inboxes: FeedsNew = inboxesFromIndexDb.body;
        //change decryptFeeds to a common function
        const decryptedInboxes: FeedsNew = await decryptFeedsNew({ feeds: inboxes, connectedUser });
        console.log(decryptedInboxes)
         return decryptedInboxes;
      }
  };

export const getRequestsFromIndexDb = async (connectedUser:ConnectedUser):Promise<FeedsNew> => {
    //remove old indexDb structure
      const requestsFromIndexDb:any = await intitializeDb<string>('Read', 'Inbox', connectedUser.wallets, '', 'did');

      if (requestsFromIndexDb !== undefined) {
        let requests: FeedsNew = requestsFromIndexDb.body;
        //change decryptFeeds to a common function
        const decryptedRequests: FeedsNew = await decryptFeedsNew({ feeds: requests, connectedUser });
        console.log(decryptedRequests)
        return decryptedRequests;
      }
  };