import { FC } from 'react';
import { ChannelListOrderType, ChannelListSortType } from '@pushprotocol/restapi';

import { Box, Search, Text } from 'blocks';
import { appConfig } from 'config';
import { getSelectChains } from 'common';
import { useChannelSearch, useGetChannelslist } from 'queries';
import { useChannelsFilters } from './hooks/useChannelsFilters';
import { ChannelSearchAndChainSelection } from './components/ChannelSearchAndChainSelection';
import { ChannelCategories } from './components/ChannelCategories';
import { AllChannelList } from './components/AllChannelsList';
import { AllCategories } from './Channels.constants';

export type ChannelsProps = {};

const Channels: FC<ChannelsProps> = () => {
  const chainOptions = getSelectChains(appConfig.allowedNetworks);

  const { filters, setFilter } = useChannelsFilters({
    initialChain: chainOptions[0].value,
    initialCategory: AllCategories,
  });

  const isEthereumChain = chainOptions.find((chain) => chain.value === filters.chain)?.label.includes('Ethereum');

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
    chain: isEthereumChain ? '' : filters.chain,
    tag: filters.category === AllCategories ? '' : filters.category,
  });

  const {
    data: searchList,
    isLoading: searchingChannels,
    fetchNextPage: searchChannelsForNextPage,
    isFetchingNextPage: isSearchingNextPageForChannels,
    hasNextPage: hasNextPageForSearch,
  } = useChannelSearch({
    pageSize: 21,
    query: filters.search,
    chain: isEthereumChain ? '' : filters.chain,
    tag: filters.category === AllCategories ? '' : filters.category,
  });

  const channels =
    loadingChannels || searchingChannels
      ? Array(9).fill(0)
      : (filters.search ? searchList : channelList)?.pages.flatMap((page) => page.channels) || [];

  const hasMoreData = filters.search
    ? !isSearchingNextPageForChannels && hasNextPageForSearch
    : !isFetchingNextPageForChannels && hasNextPageForChannels;

  const isLoading = loadingChannels || searchingChannels;

  return (
    <Box
      display="flex"
      width="-webkit-fill-available"
      overflow="scroll"
      padding="spacing-md spacing-md spacing-none spacing-md"
      height="100%"
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
          {!channels.length && !isLoading ? (
            <Box
              display="flex"
              gap="spacing-xs"
              alignItems="center"
              flexDirection="column"
              justifyContent="center"
              height="100%"
            >
              <Search size={48} />
              <Text variant="h5-bold">No channels to display</Text>
            </Box>
          ) : (
            <AllChannelList
              channels={channels}
              hasMoreData={hasMoreData}
              isLoading={isLoading}
              isLoadingNextPage={isFetchingNextPageForChannels || isSearchingNextPageForChannels}
              loadMore={filters.search ? searchChannelsForNextPage : fetchChannelsForNextPage}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export { Channels };
