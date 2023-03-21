import { MessageIPFSWithCID } from "types/chat";
import * as PushAPI from "@pushprotocol/restapi";
import { appConfig } from "config";

// Types
type GetChatsPropsType = {
  account: string;
  pgpPrivateKey: string;
  chatId: string;
  limit: number;
  threadHash?: string;
};

type GetChatsResponseType = {
  chatsResponse: MessageIPFSWithCID[];
  lastThreadHash: string | null;
  lastListPresent: boolean;
};

export const getChats = async (
  options: GetChatsPropsType
): Promise<GetChatsResponseType> => {
  const {
    account,
    pgpPrivateKey,
    chatId,
    threadHash = null,
    limit = 15,
  } = options || {};
  let threadhash: any = threadHash;
  if (!threadhash) {
    threadhash = await PushAPI.chat.conversationHash({
      account: account,
      conversationId: chatId,
      env: appConfig.appEnv,
    });
    threadhash = threadhash.threadHash;
  }

  if (threadhash) {
    const chats = await PushAPI.chat.history({
      account: account,
      pgpPrivateKey: pgpPrivateKey,
      threadhash: threadhash,
      toDecrypt:false,
      limit: limit,
      env: appConfig.appEnv,
    });

    const lastThreadHash = chats[chats.length - 1]?.link;
    const lastListPresent = chats.length > 0 ? true : false;
    return { chatsResponse: chats, lastThreadHash, lastListPresent };
  }
  return { chatsResponse: [], lastThreadHash: null, lastListPresent: false };
};