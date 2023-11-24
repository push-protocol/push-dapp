import { MessageIPFSWithCID } from "types/chat";
import {PushAPI} from "@pushprotocol/restapi";
import { appConfig } from "config";

// Types
type GetChatsPropsType = {
  account?: string;
  pgpPrivateKey?: string;
  pushUser: PushAPI;
  chatId: string;
  limit: number;
  threadHash?: string;
};

type GetChatsResponseType = {
  chatsResponse: MessageIPFSWithCID[];
  lastThreadHash?: string | null;
  lastListPresent: boolean;
};

export const getChats = async (
  options: GetChatsPropsType
): Promise<GetChatsResponseType> => {
  const {
    account,
    pgpPrivateKey,
    chatId,
    pushUser,
    threadHash = null,
    limit = 15,
  } = options || {};
  

  const chats = await pushUser.chat.history(chatId,{ 
    limit: limit,
  });

  console.log("from the here", chats);

    const lastThreadHash = chats[chats.length - 1]?.link;
    const lastListPresent = chats.length > 0 ? true : false;
    return { chatsResponse: chats, lastThreadHash, lastListPresent };
  
};