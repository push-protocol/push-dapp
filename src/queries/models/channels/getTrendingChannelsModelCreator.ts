import { TrendingChannelsResponse } from '../../types';

export const getTrendingChannelsModelCreator = (response: TrendingChannelsResponse): TrendingChannelsResponse => ({
  channelDetails: response.channelDetails,
  subscriberAnalytics: response.subscriberAnalytics,
});
