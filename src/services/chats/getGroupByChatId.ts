import  {PushAPI} from "@pushprotocol/restapi";
import { appConfig } from "config";
import { IGroup } from "types/chat";

export const getGroupbyChatId = async (chatId:string , pushUser:PushAPI): Promise<IGroup> => {
  try{
  const getGroupResponse = await pushUser.chat.group.info(chatId);
  console.log("myyy chattt", getGroupResponse)
  return getGroupResponse;
  }
  catch(e){
    console.log(e)
    throw new Error(e.message);
  }

};