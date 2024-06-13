import { PushAPI } from '@pushprotocol/restapi';

import { getUserSubscriptionsModelCreator } from 'queries/models';

export const getUserSubscriptions = (userPushSDKInstance: PushAPI) =>
  userPushSDKInstance.notification.subscriptions().then((response) => getUserSubscriptionsModelCreator(response));
