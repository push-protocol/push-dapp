import { decryptFeedsNew, intitializeDb } from "helpers";
import { getChatId, walletToCAIP10 } from "helpers/w2w";
import { ConnectedUser, FeedsNew } from "types/chat";
import { getInbox } from "./getInbox";

type feedFuncPropType = {
  connectedUser:ConnectedUser,
  setResult: (feed: FeedsNew,id: string) => void,
}

export const getDecryptedInbox = async ({ connectedUser, setResult }:feedFuncPropType):Promise<FeedsNew | []> => {
  try {
    const inboxes = await getInbox(connectedUser.wallets);
    if(inboxes.length)
    {
      const mappedInboxes:FeedsNew = Object.assign({}, ...inboxes.map(s => ({[getChatId(s)]: s})));
      intitializeDb<FeedsNew>('Insert', 'Inbox', walletToCAIP10({ account: connectedUser.wallets! }), mappedInboxes, 'did');
      const decryptedInboxes:FeedsNew = await decryptFeedsNew({ feeds: mappedInboxes, connectedUser });
      setResult(decryptedInboxes,connectedUser.wallets.split(':')[1]);
      return decryptedInboxes;
    }
    return [];
  } catch (err) {
    throw new Error(err.message);
  }
}
