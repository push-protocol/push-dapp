import { ChannelSearchParams } from '../../types';

export const channelSearch = ({
  userPushSDKInstance,
  page,
  pageSize,
  query,
  chain,
  tag,
  subscribed,
}: ChannelSearchParams) =>
  userPushSDKInstance.channel.search(query, {
    limit: pageSize,
    page: page,
    ...(subscribed ? { user_subscribed: subscribed } : {}),
    ...(chain ? { filter: Number(chain) } : {}),
    ...(tag ? { tag } : {}),
  });
