import * as PushAPI from "@pushprotocol/restapi";
import { appConfig } from "config";
import { IGroup } from "types/chat";

export const getGroupbyChatId = async (chatId:string): Promise<IGroup> => {
  try{
  const getGroupResponse = await PushAPI.chat.getGroup({ chatId: chatId, env: appConfig.appEnv });
  return getGroupResponse;
  }
  catch(e){
    console.log(e)
    throw new Error(e.message);
  }

};