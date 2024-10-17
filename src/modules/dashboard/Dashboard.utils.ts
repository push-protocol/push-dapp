import { TrendingChannelsResponse } from 'queries/types';
import { TrendingChannelsType } from './Dashboard.types';

/**
 * @param weekData
 * @param currentData
 * @returns array of addresses of trending channels
 * This is a temporary function and should be removed once the trending api is ready
 */
export const getTrendingChannelsData = (
  weekData: TrendingChannelsResponse | undefined,
  currentData: TrendingChannelsResponse | undefined
): Array<string> => {
  let trendingChannelData: TrendingChannelsType[] = [];
  let currentSubscriberData: { [key: string]: number } = {};
  let weekBackSubscriberData: { [key: string]: number } = {};
  const weekChannelDataResponse = weekData?.subscriberAnalytics || [];
  const currentChannelDataResponse = currentData?.subscriberAnalytics || [];
  const channelDetails = weekData?.channelDetails || {};

  for (let i = 0; i < currentChannelDataResponse.length; i++) {
    for (let key in currentChannelDataResponse[i]) {
      if (key === 'date') {
        continue;
      } else {
        if (currentSubscriberData[key]) {
          currentSubscriberData[key] += currentChannelDataResponse[i][key]?.subscriber || 0;
        } else {
          currentSubscriberData[key] = currentChannelDataResponse[i][key]?.subscriber || 0;
        }
      }
    }
  }

  for (let i = 0; i < weekChannelDataResponse.length; i++) {
    for (let key in weekChannelDataResponse[i]) {
      if (key === 'date') {
        continue;
      } else {
        if (weekBackSubscriberData[key]) {
          weekBackSubscriberData[key] += weekChannelDataResponse[i][key]?.subscriber || 0;
        } else {
          weekBackSubscriberData[key] = weekChannelDataResponse[i][key]?.subscriber || 0;
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
      name: channelDetails[key]?.name || '',
      icon: channelDetails[key]?.icon || '',
      trend: trend,
    });
  }

  const filteredChannels = trendingChannelData.filter((channel) => channel.subscriber > 30);
  // Ensure trend is always parsed safely as a string
  const sortedChannels = filteredChannels.sort((a, b) => {
    const trendA = parseFloat(a.trend as string);
    const trendB = parseFloat(b.trend as string);
    return trendB - trendA;
  });

  return sortedChannels.slice(0, 5).map((item) => item.channel);
};
