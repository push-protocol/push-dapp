import { FC } from 'react';

//Components
import { Box, Link, Button, Text, Spinner, Skeleton } from 'blocks';
import { ChannelDetails, ChannelsListModelledResponse } from 'queries';
import { css } from 'styled-components';
import InfiniteScroll from 'react-infinite-scroller';
import LoaderSpinner from 'primaries/LoaderSpinner';
import { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { FetchNextPageOptions, InfiniteData, InfiniteQueryObserverResult } from '@tanstack/react-query';

export type ChannelListProps = {
  channels: Array<ChannelDetails>;
  hasMoreData: boolean;
  isLoading: boolean;
  setSelectedChannelId: React.Dispatch<React.SetStateAction<string>>;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<InfiniteQueryObserverResult<InfiniteData<ChannelsListModelledResponse, unknown>, Error>>;
};
const ChannelList: FC<ChannelListProps> = ({
  channels,
  fetchNextPage,
  setSelectedChannelId,
  isLoading,
  hasMoreData,
}) => {
  //do we need skeleton loading
  //error state
  return (
    <Box
      display={{ dp: 'flex', ml: 'none' }}
      width="fit-content"
      justifyContent="start"
      overflow="auto"
      customScrollbar={true}
      height="100%"
      padding="spacing-none spacing-sm spacing-none spacing-none"
      flexDirection="column"
    >
      <InfiniteScroll
        pageStart={0}
        loadMore={() => {
          fetchNextPage();
        }}
        hasMore={hasMoreData}
        loader={
          <Box
            margin="spacing-xs"
            key="loader-spinner"
          >
            <Spinner />
          </Box>
        }
        useWindow={false}
        threshold={150}
      >
        <Box
          display="flex"
          flexDirection="column"
          gap="spacing-md"
        >
          {channels?.map((channel) => (
            <Skeleton isLoading={isLoading}>
              <Box
                key={channel?.channel}
                width="46px"
                height="46px"
                overflow="hidden"
                borderRadius="radius-sm"
                cursor="pointer"
                onClick={() => setSelectedChannelId(channel?.channel)}
              >
                <img
                  width="100%"
                  height="100%"
                  src={channel?.iconV2}
                  alt={channel?.name}
                />
              </Box>
            </Skeleton>
          ))}
        </Box>
      </InfiniteScroll>
    </Box>
  );
};

export { ChannelList };
