import { FC, useCallback, useEffect, useState } from 'react';

import debounce from 'lodash/debounce';
import { Box, Search, Select, TextInput } from 'blocks';
import { getSelectChains } from 'common';
import { appConfig } from 'config';
import { Filters } from '../hooks/useChannelsFilters';

export type ChannelSearchAndChainSelectionProps = {
  filters: Filters;
  setFilter: (filter: Partial<Filters>) => void;
};

const ChannelSearchAndChainSelection: FC<ChannelSearchAndChainSelectionProps> = ({ filters, setFilter }) => {
  const [searchQuery, setSearchQuery] = useState(filters.search as string);

  const getSearchResults = useCallback(
    debounce((value) => {
      setFilter({ search: value });
    }, 800),
    [setFilter]
  );

  useEffect(() => {
    (filters.search || searchQuery) && getSearchResults(searchQuery);
  }, [searchQuery]);

  return (
    <Box
      display="flex"
      gap="spacing-xs"
      flexDirection="row"
      width="100%"
    >
      <Box width="100%">
        <TextInput
          icon={<Search />}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search Web3 domain or 0x123"
          value={searchQuery}
        />
      </Box>
      <Box width="100%">
        <Select
          options={getSelectChains(appConfig.allowedNetworks)}
          value={filters.chain}
          onSelect={(value) => setFilter({ chain: value })}
        />
      </Box>
    </Box>
  );
};

export { ChannelSearchAndChainSelection };
