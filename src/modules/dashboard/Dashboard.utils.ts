import { TrendingChannelsResponse } from 'queries/types';
import { TrendingChannelsType } from './Dashboard.types';

export const getTrendingChannelsData = (
  weekData: TrendingChannelsResponse | undefined,
  currentData: TrendingChannelsResponse | undefined
) => {
  let trendingChannelData: TrendingChannelsType[] = [];
  let currentSubscriberData = {};
  let weekBackSubscriberData = {};
  const weekChannelDataResponse = weekData?.subscriberAnalytics || [];
  const currentChannelDataResponse = currentData?.subscriberAnalytics || [];
  const channelDetails = weekData?.channelDetails;

  for (let i = 0; i < currentChannelDataResponse?.length; i++) {
    for (let key in currentChannelDataResponse[i]) {
      if (key === 'date') {
        continue;
      } else {
        if (currentSubscriberData[key]) {
          currentSubscriberData[key] += currentChannelDataResponse[i][key]?.subscriber;
        } else {
          currentSubscriberData[key] = 0;
          currentSubscriberData[key] += currentChannelDataResponse[i][key]?.subscriber;
        }
      }
    }
  }
  for (let i = 0; i < weekChannelDataResponse?.length; i++) {
    for (let key in weekChannelDataResponse[i]) {
      if (key === 'date') {
        continue;
      } else {
        if (weekBackSubscriberData[key]) {
          weekBackSubscriberData[key] += weekChannelDataResponse[i][key]?.subscriber;
        } else {
          weekBackSubscriberData[key] = 0;
          weekBackSubscriberData[key] += weekChannelDataResponse[i][key]?.subscriber;
        }
      }
    }
  }

  for (let key in weekBackSubscriberData) {
    let finalValue = currentSubscriberData[key] || 0;
    const trend = (((finalValue - weekBackSubscriberData[key]) / weekBackSubscriberData[key]) * 100).toFixed(2);
    trendingChannelData.push({
      channel: key,
      subscriber: currentSubscriberData[key],
      name: channelDetails[key]?.name,
      icon: channelDetails[key]?.icon,
      trend: trend,
    });
  }

  const filteredChannels = trendingChannelData.filter((channel) => channel.subscriber > 30);

  const sortedChannels = filteredChannels?.sort((a, b) => parseFloat(b?.trend) - parseFloat(a?.trend));
  return sortedChannels.slice(0, 5);
};
