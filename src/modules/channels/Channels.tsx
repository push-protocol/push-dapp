import { FC } from 'react';
import { ChannelListOrderType, ChannelListSortType } from '@pushprotocol/restapi';

import { useChannelsFilters } from './hooks/useChannelsFilters';
import { useChannelSearch, useGetChannelslist } from 'queries';

import { Box, Search, Text } from 'blocks';
import { ChannelSearchAndChainSelection } from './components/ChannelSearchAndChainSelection';
import { ChannelCategories } from './components/ChannelCategories';
import { AllChannelList } from './components/AllChannelsList';

import { getSelectChains } from 'common';
import { AllCategories, channelFilterList } from './Channels.constants';
import { getSuggestedChannels } from './Channels.utils';
import { appConfig } from 'config';

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
      : (filters.search ? searchList : channelList)?.pages
          .flatMap((page) => page.channels)
          .filter((channel) => !channelFilterList.includes(channel.channel)) || [];

  const suggestedChannels = getSuggestedChannels(channels, filters);

  const hasMoreData = filters.search
    ? !isSearchingNextPageForChannels && hasNextPageForSearch
    : !isFetchingNextPageForChannels && hasNextPageForChannels;

  const isLoading = loadingChannels || searchingChannels;

  return (
    <Box
      display="flex"
      width="-webkit-fill-available"
      overflow="scroll"
      height="100%"
    >
      <Box
        display="flex"
        flexDirection="column"
        width="100%"
        gap={{ initial: 'spacing-md', ml: 'spacing-lg' }}
      >
        <Box
          display="flex"
          flexDirection="column"
          gap="spacing-sm"
          padding={{
            initial: 'spacing-md spacing-md spacing-none spacing-md',
            ml: 'spacing-sm spacing-sm spacing-none spacing-sm',
          }}
        >
          <ChannelSearchAndChainSelection
            filters={filters}
            setFilter={setFilter}
          />
          <ChannelCategories
            filters={filters}
            setFilter={setFilter}
          />
        </Box>
        {!channels.length && !suggestedChannels.length && !isLoading ? (
          <Box
            display="flex"
            gap="spacing-xs"
            alignItems="center"
            flexDirection="column"
            justifyContent="center"
            height="100%"
          >
            <Search
              size={48}
              color="icon-tertiary"
            />
            <Text variant="h5-bold">No channels to display</Text>
          </Box>
        ) : (
          <AllChannelList
            channels={channels}
            hasMoreData={hasMoreData}
            suggestedChannels={suggestedChannels}
            isLoading={isLoading}
            isLoadingNextPage={isFetchingNextPageForChannels || isSearchingNextPageForChannels}
            loadMore={filters.search ? searchChannelsForNextPage : fetchChannelsForNextPage}
          />
        )}
      </Box>
    </Box>
  );
};

export { Channels };
