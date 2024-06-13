import { ChannelDetails, ChannelDetailsResponse } from 'queries/types';

export const getChannelDetailsModelCreator = (response: ChannelDetailsResponse): ChannelDetails => ({
  id: response.id,
  name: response.name,
  subscriberCount: response.subscriber_count,
  icon: response.icon,
  url: response.url,
  aliasBlockchainId: response.alias_blockchain_id,
  channelSettings: response.channel_settings,
});
