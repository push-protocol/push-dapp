// React and other libraries
import { useEffect, useState } from 'react';

//Hooks
import { useGetTrendingChannels } from 'queries/hooks';

//Utility functions
import { getTrendingChannelsData } from '../Dashboard.utils';

// Components
import { Box, Separator } from 'blocks';
import { ChannelItem } from './ChannelItem';
import { TrendingSource, TrendingStartTime } from '../Dashboard.constants';
import { appConfig } from 'config';
import { EnvKeys, SourceKeys } from '../Dashboard.types';

const TrendingChannelItemList = () => {
  const [trendingChannels, setTrendingChannels] = useState<Array<string>>([]);

  const startDate = new Date(TrendingStartTime[appConfig.appEnv as EnvKeys]);
  const firstEndDate = new Date(Date.now()).toISOString().split('T')[0];
  const secondEndDate = new Date(Date.now() - 7 * 86400000).toISOString().split('T')[0];
  const { data: currentData, isLoading } = useGetTrendingChannels({
    startDate,
    endDate: firstEndDate,
    channel: 'All',
    source: TrendingSource[appConfig.appEnv as EnvKeys],
  });
  const { data: weekData } = useGetTrendingChannels({
    startDate,
    endDate: secondEndDate,
    channel: 'All',
    source: TrendingSource[appConfig.appEnv as EnvKeys],
  });

  useEffect(() => {
    const channelsData = getTrendingChannelsData(weekData, currentData);
    setTrendingChannels(channelsData);
  }, [currentData, weekData]);
  return trendingChannels?.map((channel, index) => (
    <Box>
      <ChannelItem
        key={index}
        channelAddress={channel}
        isListLoading={isLoading && !trendingChannels.length}
      />
      {index != trendingChannels.length - 1 && <Separator />}
    </Box>
  ));
};

export { TrendingChannelItemList };
