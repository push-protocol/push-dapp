import { PushAPI } from '@pushprotocol/restapi';
import { getGroupInfoModelCreator } from '../../models';

export const getGroupInfo = (userPushSDKInstance: PushAPI, chatId: string) =>
  userPushSDKInstance.chat.group.info(chatId).then(getGroupInfoModelCreator);
