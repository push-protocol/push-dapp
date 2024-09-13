import { FC, useState } from 'react';
import { Box, Search, Select, TextInput } from 'blocks';
import { appConfig } from 'config';
import { getSelectChains } from 'common';
import { css } from 'styled-components';

export type ChannelsProps = {};

const Channels: FC<ChannelsProps> = () => {
  const [query, setQuery] = useState('');
  const [chain, setChain] = useState(getSelectChains(appConfig.allowedNetworks)[0].value);
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
        <Box width="76px">
          <Select
            options={getSelectChains(appConfig.allowedNetworks)}
            value={chain}
            onSelect={(value) => setChain(value)}
          />
        </Box>
      </Box>
    </Box>
  );
};

export { Channels };

// the search icon size is not correct
