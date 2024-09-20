import { PushAPI } from '@pushprotocol/restapi';

import { getChannelsListModelCreator } from '../../models';
import { ChannelListParams } from '../../types';

type GetChannelsListParams = {
  userPushSDKInstance: PushAPI;
} & ChannelListParams;

export const getChannelsList = ({ userPushSDKInstance, page, pageSize, order, sort }: GetChannelsListParams) =>
  userPushSDKInstance.channel.list({ limit: pageSize, page, order, sort }).then(getChannelsListModelCreator);
