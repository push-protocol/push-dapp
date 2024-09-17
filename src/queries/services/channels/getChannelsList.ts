import { PushAPI } from '@pushprotocol/restapi';

import { getChannelsListModelCreator } from '../../models';
import { ChannelsListParams } from 'queries/types';

type GetChannelsListParams = {
  userPushSDKInstance: PushAPI;
} & ChannelsListParams;

export const getChannelsList = ({ userPushSDKInstance, pageNumber, pageSize }: GetChannelsListParams) =>
  userPushSDKInstance.channel.list({ limit: pageSize, page: pageNumber }).then(getChannelsListModelCreator);
