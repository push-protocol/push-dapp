import { ChannelSearchParams } from '../../types';

export const channelSearch = ({ userPushSDKInstance, page, pageSize, query, chain, tag }: ChannelSearchParams) =>
  userPushSDKInstance.channel.search(query, {
    limit: pageSize,
    page: page,
    ...(chain ? { filter: Number(chain) } : {}),
    ...(tag ? { tag } : {}),
  });
