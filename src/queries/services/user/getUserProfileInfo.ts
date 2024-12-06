import { PushAPI } from '@pushprotocol/restapi';
import { getUserProfileInfoModelCreator } from 'queries/models';

export const getUserProfileInfo = (userPushSDKInstance: PushAPI) =>
  userPushSDKInstance.profile.info().then(getUserProfileInfoModelCreator);
