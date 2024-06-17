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
  const {
    data: currentData,
    isLoading: isLoadingFirstList,
    isSuccess: isFirstListLoaded,
    refetch,
  } = useGetTrendingChannels({
    startDate,
    endDate: firstEndDate,
    channel: 'All',
    source: trendingSource[appConfig.appEnv as EnvKeys],
  });
  const {
    data: weekData,
    isLoading: isLoadingSecondList,
    isSuccess: isSecondListLoaded,
    refetch: _refetch,
  } = useGetTrendingChannels({
    startDate,
    endDate: secondEndDate,
    channel: 'All',
    source: trendingSource[appConfig.appEnv as EnvKeys],
  });

  const isLoadingTrendingChannels = isLoadingFirstList || isLoadingSecondList;

  const isSuccess = isFirstListLoaded || isSecondListLoaded;

  const trendingChannels = getTrendingChannelsData(weekData, currentData);

  const handleRefetch = () => {
    refetch();
    _refetch();
  };

  // If there are channels then render them else render 5 skeletons
  const channelList = isLoadingTrendingChannels ? Array(5).fill(0) : trendingChannels;

  return (
    <>
      {isSuccess && !isLoadingTrendingChannels && !trendingChannels?.length && (
        <EmptyChannelList
          heading="No Trending Channels"
          subHeading="Channels that are trending will show up here."
        />
      )}

      {channelList.map((channel, index) => (
        <Box key={`${index}`}>
          <ChannelListItem
            channelAddress={channel}
            isLoading={isLoadingTrendingChannels}
            refetchChannels={handleRefetch}
          />
          {index != trendingChannels.length - 1 && <Separator />}
        </Box>
      ))}
    </>
  );
};

export { TrendingChannelsList };
