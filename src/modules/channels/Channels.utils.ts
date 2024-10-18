import { channelCategoriesMap, getCurrentEnv } from 'common';

import { Filters } from './hooks/useChannelsFilters';
import { ChannelDetails } from 'queries';

import { AllCategories, channelFilterList } from './Channels.constants';

export const showSuggestedChannels = (filters: Filters) => {
  return getCurrentEnv() === 'prod' && filters?.category && filters?.category != AllCategories;
};

export const getSuggestedChannels = (channels: ChannelDetails[], filter: Filters): Array<string> => {
  if (showSuggestedChannels(filter)) {
    const channelIds = channels.map((channel) => channel.channel);
    return Object.keys(channelCategoriesMap).filter(
      (channel) =>
        !channelIds.includes(channel) &&
        !channelFilterList.includes(channel) &&
        channelCategoriesMap[channel] === filter.category
    );
  }
  return [];
};
