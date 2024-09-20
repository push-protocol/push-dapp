import { FC } from 'react';
import { ChannelListOrderType, ChannelListSortType } from '@pushprotocol/restapi';

import { Box } from 'blocks';
import { appConfig } from 'config';
import { getSelectChains } from 'common';
import { css } from 'styled-components';
import { useChannelSearch, useGetChannelslist } from 'queries';
import { useChannelsFilters } from './hooks/useChannelsFilters';
import { ChannelSearchAndChainSelection } from './components/ChannelSearchAndChainSelection';
import { ChannelCategories } from './components/ChannelCategories';
import { AllChannelList } from './components/AllChannelsList';

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
      display="flex"
      width="-webkit-fill-available"
      overflow="scroll"
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
          <AllChannelList
            channels={channels}
            hasMoreData={hasMoreData}
            isLoading={loadingChannels || searchingChannels}
            isLoadingNextPage={isFetchingNextPageForChannels || isSearchingNextPageForChannels}
            loadMore={filters.search ? searchChannelsForNextPage : fetchChannelsForNextPage}
          />
        </Box>
      </Box>
    </Box>
  );
};

export { Channels };

// Implement Search API => done
// Implemente category APIS
// Make the cat api working with listing and search
// Make the chain filter working with listing and search
// Refactor thr codebase. => done
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
