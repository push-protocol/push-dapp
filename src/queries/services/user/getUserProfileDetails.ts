import { PushAPI } from '@pushprotocol/restapi';
import { getUserProfileDetailsModelCreator } from 'queries/models';

export const getUserProfileDetails = (userPushSDKInstance: PushAPI, address: string) =>
  userPushSDKInstance.profile.info({ overrideAccount: address }).then(getUserProfileDetailsModelCreator);
