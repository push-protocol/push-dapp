import { FC } from 'react';

import { FetchNextPageOptions, InfiniteData, InfiniteQueryObserverResult } from '@tanstack/react-query';
import InfiniteScroll from 'react-infinite-scroller';

import { Box, Spinner, Skeleton } from 'blocks';

import { ChannelDetails, ChannelsListModelledResponse } from 'queries';
import { useNavigate } from 'react-router-dom';
import APP_PATHS from 'config/AppPaths';
import { css } from 'styled-components';

export type ChannelListProps = {
  channels: Array<ChannelDetails>;
  hasMoreData: boolean;
  isFetchingNextPage: boolean;
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
  isFetchingNextPage,
}) => {
  const navigate = useNavigate();

  const handleChannelChange = (channel: ChannelDetails) => {
    setSelectedChannelId(channel?.channel);
    navigate(APP_PATHS.ChannelDetails(channel?.channel));
  };
  return (
    <Box
      display={{ initial: 'flex', ml: 'none' }}
      width="fit-content"
      justifyContent="flex-start"
      overflow="scroll"
      customScrollbar={true}
      height="100%"
      maxHeight="100%"
      padding="spacing-none spacing-sm spacing-none spacing-none"
      flexDirection="column"
    >
      <InfiniteScroll
        pageStart={1}
        loadMore={() => {
          fetchNextPage();
        }}
        hasMore={hasMoreData}
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
                onClick={() => handleChannelChange(channel)}
                css={css`
                  flex-shrink: 0;
                `}
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
      {isFetchingNextPage && (
        <Box
          justifyContent="center"
          display="flex"
          padding="spacing-sm"
        >
          <Spinner
            size="small"
            variant="primary"
          />
        </Box>
      )}
    </Box>
  );
};

export { ChannelList };
