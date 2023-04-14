import * as PushAPI from "@pushprotocol/restapi";
import { appConfig } from "config";
import { IGroup } from "types/chat";

export const getGroupByName = async (groupName:string): Promise<IGroup> => {
  try{
  const getGroupResponse = await PushAPI.chat.getGroupByName({ groupName: groupName, env: appConfig.appEnv });
  return getGroupResponse;
  }
  catch(e){
    throw new Error(e.message);
  }

};