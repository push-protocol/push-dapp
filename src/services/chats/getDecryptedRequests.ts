import { decryptFeedsNew, intitializeDb } from "helpers";
import { getChatId, walletToCAIP10 } from "helpers/w2w";
import { ConnectedUser, FeedsNew } from "types/chat";
import { getRequests } from "./getRequests";

type feedFuncPropType = {
  connectedUser:ConnectedUser,
  setResult: (feed:FeedsNew,id:string) => void,
}

export const getDecryptedRequests = async ({ connectedUser, setResult }:feedFuncPropType):Promise<FeedsNew | []> => {
  try {
    const requests = await getRequests(connectedUser.wallets);
    if(requests.length)
    {
      const mappedRequests:FeedsNew = Object.assign({}, ...requests.map(s => ({[getChatId(s)]: s})));
      intitializeDb<FeedsNew>('Insert', 'Inbox', walletToCAIP10({ account: connectedUser.wallets! }), mappedRequests, 'did');
      const decryptedRequests:FeedsNew = await decryptFeedsNew({ feeds: mappedRequests, connectedUser });
      setResult(decryptedRequests,connectedUser.wallets.split(':')[1]);
      return decryptedRequests;
    }
    return [];
  } catch (err) {
    throw new Error(err.message);
  }
}
