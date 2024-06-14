// React and other libraries
import { useEffect, useState } from 'react';

//Hooks
import { useGetTrendingChannels } from 'queries/hooks';

//Constants
import { TrendingSource, TrendingStartTime } from '../Dashboard.constants';
import { appConfig } from 'config';

//Utility functions
import { getTrendingChannelsData } from '../Dashboard.utils';

// Components
import { Box, Separator } from 'blocks';
import { ChannelListItem } from './ChannelListItem';

//Types
import { EnvKeys } from '../Dashboard.types';

const TrendingChannelsList = () => {
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
      <ChannelListItem
        key={index}
        channelAddress={channel}
        isListLoading={isLoading && !trendingChannels.length}
      />
      {index != trendingChannels.length - 1 && <Separator />}
    </Box>
  ));
};

export { TrendingChannelsList };
