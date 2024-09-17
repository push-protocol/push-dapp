import { FC, useState } from 'react';
import { Box, Pill, Search, Select, TextInput } from 'blocks';
import { appConfig } from 'config';
import { getSelectChains } from 'common';
import { css } from 'styled-components';

export type ChannelsProps = {};

const Channels: FC<ChannelsProps> = () => {
  const [category, setCategory] = useState(categories[0]);
  const [chain, setChain] = useState(getSelectChains(appConfig.allowedNetworks)[0].value);
  const [query, setQuery] = useState('');

  return (
    <Box
      backgroundColor="surface-primary"
      borderRadius="radius-lg"
      display="flex"
      height="calc(100vh - 120px);"
      padding="spacing-md"
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
        </Box>
      </Box>
    </Box>
  );
};

export { Channels };

// the search icon size is not correct

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
