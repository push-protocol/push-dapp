import { ConnectedUser } from "types/chat";

import { intitializeDb } from "helpers/IndexedDbHelper";
import { Spaces } from "types";

export const getSpacesFromIndexedDB = async (connectedUser:ConnectedUser):Promise<Spaces> => {
  //remove old indexDb structure
//   const inboxesFromIndexedDB:any = await intitializeDb<string>('Read', 'Inbox', connectedUser.wallets, '', 'did');

//   if (inboxesFromIndexedDB !== undefined) {
    // let inboxes: Spaces = inboxesFromIndexedDB.body;
    //change decryptFeeds to a common function
    // const decryptedInboxes: Spaces = await decryptFeedsNew({ feeds: inboxes, connectedUser });
    // console.log(decryptedInboxes)
      return {};
//   }
};

export const getSpaceRequestsFromIndexedDB = async (connectedUser:ConnectedUser):Promise<Spaces> => {
  //remove old indexDb structure
//   const requestsFromIndexedDB:any = await intitializeDb<string>('Read', 'Inbox', connectedUser.wallets, '', 'did');

//   if (requestsFromIndexedDB !== undefined) {
//     let requests: Spaces = requestsFromIndexedDB.body;
    //change decryptFeeds to a common function
    // const decryptedRequests: Spaces = await decryptFeedsNew({ feeds: requests, connectedUser });
    // console.log(decryptedRequests)
    return {};
//   }
};