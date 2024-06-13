import { ChannelDetails, ChannelDetailsResponse } from 'queries/types';

export const getChannelDetailsModelCreator = (response: ChannelDetailsResponse): ChannelDetails => ({
  id: response.id,
  name: response.name,
  subscriberCount: response.subscriber_count,
  icon: response.icon,
  url: response.url,
  aliasAddress: response.alias_address,
  channelSettings: response.channel_settings,
  info: response.info
});
