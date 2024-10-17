import { channelCategoriesMap, envUtil } from 'common';
import { ChannelDetails } from 'queries';
import { Filters } from './hooks/useChannelsFilters';
import { AllCategories, channelFilterList } from './Channels.constants';

export const showFrontendChannels = (filters: Filters) => {
  return envUtil.isProd && filters?.category && filters?.category != AllCategories;
};

export const filterFrontendChannels = (channels: ChannelDetails[], filter: Filters): Array<string> => {
  if (showFrontendChannels(filter)) {
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
