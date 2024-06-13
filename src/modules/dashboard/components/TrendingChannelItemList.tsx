// Components
import { Box, Separator } from 'blocks';
import { ChannelItem } from './ChannelItem';
import { useGetTrendingChannels } from 'queries/hooks';
import { TrendingChannelsType } from '../Dashboard.types';
import { TrendingChannelsResponse } from 'queries/types';
import { SetStateAction, useEffect, useState } from 'react';
import { getTrendingChannelsData } from '../Dashboard.utils';

const TrendingChannelItemList = () => {
  const [trendingChannels, setTrendingChannels] = useState<Array<string>>([]);

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
    setTrendingChannels(channelsData);
  }, [currentData, weekData]);
  return trendingChannels.map((channel, index) => (
    <Box>
      <ChannelItem
        key={index}
        channelAddress={channel}
      />
      {index != trendingChannels.length - 1 && <Separator />}
    </Box>
  ));
};

export { TrendingChannelItemList };
