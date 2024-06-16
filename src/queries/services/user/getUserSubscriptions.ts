import { PushAPI } from '@pushprotocol/restapi';

import { getUserSubscriptionsModelCreator } from '../../models';

export const getUserSubscriptions = (userPushSDKInstance: PushAPI, address?: string) =>
  userPushSDKInstance.notification.subscriptions({ channel: address }).then(getUserSubscriptionsModelCreator);
