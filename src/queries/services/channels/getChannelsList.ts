import { PushAPI } from '@pushprotocol/restapi';

import { getChannelsListModelCreator } from '../../models';
import { ChannelListParams } from 'queries/types';

type GetChannelsListParams = {
  userPushSDKInstance: PushAPI;
} & ChannelListParams;

export const getChannelsList = ({ userPushSDKInstance, pageNumber, pageSize, order, sort }: GetChannelsListParams) =>
  userPushSDKInstance.channel
    .list({ limit: pageSize, page: pageNumber, order, sort })
    .then(getChannelsListModelCreator);
