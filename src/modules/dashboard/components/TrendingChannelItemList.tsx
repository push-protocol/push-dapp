// Components
import { Separator } from 'blocks';
import { ChannelItem } from './ChannelItem';
import { useGetTrendingChannels } from 'queries/hooks';
import { TrendingChannelsType } from '../Dashboard.types';
import { TrendingChannelsResponse } from 'queries/types';
import { useEffect, useState } from 'react';
import { getTrendingChannelsData } from '../Dashboard.utils';

const TrendingChannelItemList = () => {
  const [trendingChannelsData, setTrendingChannelsData] = useState<TrendingChannelsType[]>([]);

  const startDate = new Date('2022-01-01');
  const firstEndDate = new Date(Date.now()).toISOString().split('T')[0];
  const secondEndDate = new Date(Date.now() - 7 * 86400000).toISOString().split('T')[0];
  const { data: currentData } = useGetTrendingChannels({
    startDate,
    endDate: firstEndDate,
    channel: 'All',
    source: 'ETH_MAINNET',
  });
  const { data: weekData } = useGetTrendingChannels({
    startDate,
    endDate: secondEndDate,
    channel: 'All',
    source: 'ETH_MAINNET',
  });

  useEffect(() => {
    const channelsData = getTrendingChannelsData(weekData, currentData);
    setTrendingChannelsData(channelsData);
  }, [currentData, weekData]);

  console.debug(trendingChannelsData, 'trending');
  return trendingChannelsData.map((channel, index) => (
    <>
      <ChannelItem
        key={index}
        channelDetails={channel}
      />
      {index != trendingChannelsData.length - 1 && <Separator />}
    </>
  ));
};

export { TrendingChannelItemList };
