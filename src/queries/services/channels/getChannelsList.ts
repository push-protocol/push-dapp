import { ChannelListParams } from '../../types';

export const getChannelsList = ({ userPushSDKInstance, page, pageSize, order, sort, chain, tag }: ChannelListParams) =>
  userPushSDKInstance.channel.list({
    page,
    limit: pageSize,
    order,
    sort,
    ...(chain ? { filter: Number(chain) } : {}),
    ...(tag ? { tag } : {}),
  });
