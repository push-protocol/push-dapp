import { FC, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { Box, Pill, Search, Select, Spinner, TextInput } from 'blocks';
import { appConfig } from 'config';
import { getSelectChains } from 'common';
import { css } from 'styled-components';
import { ChannelDetails, useGetChannelslist } from 'queries';
import { AllChannelsListItem } from './components/AllChannelsListItem';

export type ChannelsProps = {};

const Channels: FC<ChannelsProps> = () => {
  const [category, setCategory] = useState(categories[0]);
  const [chain, setChain] = useState(getSelectChains(appConfig.allowedNetworks)[0].value);
  const [query, setQuery] = useState('');

  const { data, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage } = useGetChannelslist({
    pageSize: 21,
    order: 'desc',
  });

  const channels = isLoading ? Array(9).fill(0) : data?.pages.flatMap((page) => page.channels) || [];

  const hasMoreData = !isFetchingNextPage && hasNextPage;

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
          <Box
            display="flex"
            gap="spacing-xs"
            flexDirection="row"
            width="100%"
          >
            <Box width="100%">
              <TextInput
                icon={<Search />}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search Web3 domain or 0x123"
                value={query}
              />
            </Box>
            <Box width={{ initial: '300px', ml: '200px' }}>
              <Select
                options={getSelectChains(appConfig.allowedNetworks)}
                value={chain}
                onSelect={(value) => setChain(value)}
              />
            </Box>
          </Box>
          <Box
            display="flex"
            overflow="scroll"
            gap="spacing-xs"
          >
            {categories.map((cat) => (
              <Pill
                isActive={cat === category}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </Pill>
            ))}
          </Box>
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
              pageStart={0}
              loadMore={() => fetchNextPage()}
              hasMore={hasMoreData}
              loader={
                <Box
                  margin="spacing-xs"
                  key="loader-spinner"
                >
                  <Spinner size="medium" />
                </Box>
              }
              useWindow={false}
              threshold={150}
              className="channel-scroll"
            >
              {channels.map((channel: ChannelDetails, index: number) => (
                <AllChannelsListItem
                  key={`${index}`}
                  channelDetails={channel}
                  isLoading={isLoading}
                />
              ))}
            </InfiniteScroll>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { Channels };

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
