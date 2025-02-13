import { ChannelListParams } from '../../types';

export const getChannelsList = ({
  userPushSDKInstance,
  page,
  pageSize,
  order,
  sort,
  chain,
  tag,
  subscribed,
}: ChannelListParams) =>
  userPushSDKInstance.channel.list({
    page,
    limit: pageSize,
    order,
    sort,
    ...(subscribed ? { user_subscribed: subscribed } : {}),
    ...(chain ? { filter: Number(chain) } : {}),
    ...(tag ? { tag } : {}),
  });
