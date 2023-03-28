import { getInbox, getRequests } from "services";
import { ConnectedUser, FeedsNew } from "types/chat";
import { decryptFeedsNew, getChatId, walletToCAIP10 } from ".";
import { intitializeDb } from "./w2wIndexdedbNew";

type feedFuncPropType = {
    connectedUser:ConnectedUser,
    setResult: (feed:FeedsNew,id:string) => void,
}
export const fetchInbox = async ({connectedUser,setResult}:feedFuncPropType):Promise<void> => {
    const inboxes = await getInbox(connectedUser.wallets);
    if(inboxes.length)
    {
      const mappedInboxes:FeedsNew = Object.assign({}, ...inboxes.map(s => ({[getChatId(s)]: s})));
      intitializeDb<FeedsNew>('Insert', 'Inbox', walletToCAIP10({ account: connectedUser.wallets! }), mappedInboxes, 'did');
      const decryptedInboxes:FeedsNew = await decryptFeedsNew({ feeds: mappedInboxes, connectedUser });
      console.log(decryptedInboxes)
      setResult(decryptedInboxes,connectedUser.wallets.split(':')[1]);
    }
  }

 

export const fetchRequests = async ({connectedUser,setResult}:feedFuncPropType):Promise<void> => {
    const requests = await getRequests(connectedUser.wallets);
    if(requests.length)
    {
      const mappedRequests:FeedsNew = Object.assign({}, ...requests.map(s => ({[getChatId(s)]: s})));
      intitializeDb<FeedsNew>('Insert', 'Inbox', walletToCAIP10({ account: connectedUser.wallets! }), mappedRequests, 'did');
      const decryptedRequests:FeedsNew = await decryptFeedsNew({ feeds: mappedRequests, connectedUser });
      console.log(decryptedRequests)
      setResult(decryptedRequests,connectedUser.wallets.split(':')[1]);
    }
  }