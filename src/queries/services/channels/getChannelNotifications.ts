import { PushAPI } from '@pushprotocol/restapi';

import { getChannelNotificationsModelCreator } from '../../models';

type GetChannelNotificationsParams = {
  userPushSDKInstance: PushAPI;
  address: string;
  limit: number;
  page: number;
};

export const getChannelNotifications = ({ userPushSDKInstance, address, limit, page }: GetChannelNotificationsParams) =>
  userPushSDKInstance.channel
    .notifications(address, {
      page: page,
      limit: limit,
    })
    .then(getChannelNotificationsModelCreator);
