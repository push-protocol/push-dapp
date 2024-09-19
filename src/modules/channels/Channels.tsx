import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { ChannelListOrderType, ChannelListSortType } from '@pushprotocol/restapi';
import InfiniteScroll from 'react-infinite-scroller';

import { Box, Button, CaretLeft, CaretRight, Pill, Search, Select, Spinner, TextInput } from 'blocks';
import { appConfig } from 'config';
import { getSelectChains } from 'common';
import { css } from 'styled-components';
import { ChannelDetails, useChannelSearch, useGetChannelslist } from 'queries';
import { AllChannelsListItem } from './components/AllChannelsListItem';
import { useChannelsFilters } from './hooks/useChannelsFilters';
import { ChannelSearchAndChainSelection } from './components/ChannelSearchAndChainSelection';
import { ChannelCategories } from './components/ChannelCategories';

export type ChannelsProps = {};

const Channels: FC<ChannelsProps> = () => {
  const chainOptions = getSelectChains(appConfig.allowedNetworks);

  const { filters, setFilter } = useChannelsFilters({
    initialChain: chainOptions[0].value,
    initialCategory: categories[0],
  });

  const {
    data: channelList,
    isLoading: loadingChannels,
    fetchNextPage: fetchChannelsForNextPage,
    isFetchingNextPage: isFetchingNextPageForChannels,
    hasNextPage: hasNextPageForChannels,
  } = useGetChannelslist({
    pageSize: 21,
    order: ChannelListOrderType.DESCENDING,
    sort: ChannelListSortType.SUBSCRIBER,
  });

  const {
    data: searchList,
    isLoading: searchingChannels,
    fetchNextPage: searchChannelsForNextPage,
    isFetchingNextPage: isSearchingNextPageForChannels,
    hasNextPage: hasNextPageForSearch,
  } = useChannelSearch({ pageSize: 21, query: filters.search });

  const channels =
    loadingChannels || searchingChannels
      ? Array(9).fill(0)
      : (filters.search ? searchList : channelList)?.pages.flatMap((page) => page.channels) || [];

  const hasMoreData = filters.search
    ? !isSearchingNextPageForChannels && hasNextPageForSearch
    : !isFetchingNextPageForChannels && hasNextPageForChannels;

  return (
    <Box
      backgroundColor="surface-primary"
      borderRadius="radius-lg"
      display="flex"
      height="calc(100vh - 96px);"
      padding="spacing-md spacing-md spacing-none spacing-md"
      width="-webkit-fill-available"
      css={css`
        border-bottom-right-radius: var(--radius-none);
        border-bottom-left-radius: var(--radius-none);
      `}
    >
      <Box
        display="flex"
        flexDirection="column"
        width="100%"
        gap="spacing-md"
      >
        <Box
          display="flex"
          flexDirection="column"
          gap="spacing-sm"
          height="100%"
        >
          <ChannelSearchAndChainSelection
            filters={filters}
            setFilter={setFilter}
          />
          <ChannelCategories
            filters={filters}
            setFilter={setFilter}
          />
          <Box
            height="100%"
            overflow="auto"
            customScrollbar={true}
            css={css`
              .channel-scroll {
                display: grid;
                gap: var(--spacing-md);
                grid-template-columns: repeat(3, minmax(0px, 1fr));
              }
            `}
          >
            <InfiniteScroll
              pageStart={1}
              loadMore={() => (filters.search ? searchChannelsForNextPage() : fetchChannelsForNextPage())}
              hasMore={hasMoreData}
              useWindow={false}
              threshold={150}
              className="channel-scroll"
            >
              {channels.map((channel: ChannelDetails, index: number) => (
                <AllChannelsListItem
                  key={`${index}`}
                  channelDetails={channel}
                  isLoading={loadingChannels || searchingChannels}
                />
              ))}
            </InfiniteScroll>
            {(isFetchingNextPageForChannels || isSearchingNextPageForChannels) && (
              <Box
                justifyContent="center"
                display="flex"
                padding="spacing-sm"
              >
                <Spinner
                  size="medium"
                  variant="primary"
                />
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { Channels };

// Implement Search API
// Implemente category APIS
// Make the cat api working with listing and search
// Make the chain filter working with listing and search
// Refactor thr codebase.
// Fix the container

const categories = [
  'All',
  'Subscribed',
  'DEFI',
  'DAO',
  'NFT',
  'Metaverse',
  'Tooling',
  'Infrastrucuture',
  'Gaming',
  'Social',
  'Serivce',
  'DEFI',
  'DAO',
  'NFT',
];
