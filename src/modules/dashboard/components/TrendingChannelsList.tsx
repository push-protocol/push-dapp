// React and other libraries

//Hooks
import { useGetTrendingChannels } from 'queries/hooks';

//Constants
import { firstEndDate, secondEndDate, startDate, trendingSource } from '../Dashboard.constants';
import { appConfig } from 'config';

//Utility functions
import { getTrendingChannelsData } from '../Dashboard.utils';

// Component
import { EmptyChannelList } from './EmptyChannelList';
import { Box, Separator } from 'blocks';
import { ChannelListItem } from './ChannelListItem';

//Types
import { EnvKeys } from '../Dashboard.types';

const TrendingChannelsList = () => {
  const { data: currentData, isLoading } = useGetTrendingChannels({
    startDate,
    endDate: firstEndDate,
    channel: 'All',
    source: trendingSource[appConfig.appEnv as EnvKeys],
  });
  const { data: weekData } = useGetTrendingChannels({
    startDate,
    endDate: secondEndDate,
    channel: 'All',
    source: trendingSource[appConfig.appEnv as EnvKeys],
  });

  const trendingChannels = getTrendingChannelsData(weekData, currentData);

  return (
    <>
      {!isLoading && !trendingChannels?.length && (
        <EmptyChannelList
          heading="No Channels Trending"
          subHeading="Channels that are trending will show up here."
        />
      )}

      {trendingChannels.map((channel, index) => (
        <Box>
          <ChannelListItem
            key={index}
            channelAddress={channel}
            isLoading={isLoading && !trendingChannels.length}
          />
          {index != trendingChannels.length - 1 && <Separator />}
        </Box>
      ))}
    </>
  );
};

export { TrendingChannelsList };
