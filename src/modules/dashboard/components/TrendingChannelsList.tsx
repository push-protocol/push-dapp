// React and other libraries

//Hooks
// import { useGetTrendingChannels } from 'queries/hooks';

// //Constants
// import { firstEndDate, secondEndDate, startDate, trendingSource } from '../Dashboard.constants';
// import { appConfig } from 'config';

// //Utility functions
// import { getTrendingChannelsData } from '../Dashboard.utils';

// // Component
// import { EmptyChannelList } from './EmptyChannelList';
import { Box, Separator } from 'blocks';
import { ChannelListItem } from './ChannelListItem';

//Types
// import { EnvKeys } from '../Dashboard.types';

// NOTE: This is a temporary list until the trending api works.
const channelList = [
  '0xB88460Bb2696CAb9D66013A05dFF29a28330689D',

  '0x90A48D5CF7343B08dA12E067680B4C6dbfE551Be',

  '0xe56f1D3EDFFF1f25855aEF744caFE7991c224FFF',

  '0xf1A1542Ca902AE861B59bffE77D92E8CD76146f1',

  '0x76bA9825A5F707F133124E4608F1F2Dd1EF4006a',
];

// TODO: Uuncomment everything down below to make the treding api works here

const TrendingChannelsList = () => {
  // const {
  //   data: currentData,
  //   isLoading: isLoadingFirstList,
  //   isSuccess: isFirstListLoaded,
  //   refetch,
  // } = useGetTrendingChannels({
  //   startDate,
  //   endDate: firstEndDate,
  //   channel: 'All',
  //   source: trendingSource[appConfig.appEnv as EnvKeys],
  // });
  // const {
  //   data: weekData,
  //   isLoading: isLoadingSecondList,
  //   isSuccess: isSecondListLoaded,
  //   refetch: _refetch,
  // } = useGetTrendingChannels({
  //   startDate,
  //   endDate: secondEndDate,
  //   channel: 'All',
  //   source: trendingSource[appConfig.appEnv as EnvKeys],
  // });

  // const isLoadingTrendingChannels = isLoadingFirstList || isLoadingSecondList;

  // const isSuccess = isFirstListLoaded || isSecondListLoaded;

  // const trendingChannels = getTrendingChannelsData(weekData, currentData);

  // const handleRefetch = () => {
  //   refetch();
  //   _refetch();
  // };

  // If there are channels then render them else render 5 skeletons
  // const channelList = isLoadingTrendingChannels ? Array(5).fill(0) : trendingChannels;

  return (
    <>
      {/* {isSuccess && !isLoadingTrendingChannels && !trendingChannels?.length && (
        <EmptyChannelList
          heading="No Trending Channels"
          subHeading="Channels that are trending will show up here."
        />
      )} */}

      {channelList.map((channel, index) => (
        <Box key={`${index}`}>
          <ChannelListItem
            channelAddress={channel}
            // isLoading={isLoadingTrendingChannels}
            isLoading={false}
            // refetchChannels={handleRefetch}
            refetchChannels={() => {}}
          />
          {/* {index != trendingChannels.length - 1 && <Separator />} */}
          {index != channelList.length - 1 && <Separator />}
        </Box>
      ))}
    </>
  );
};

export { TrendingChannelsList };
