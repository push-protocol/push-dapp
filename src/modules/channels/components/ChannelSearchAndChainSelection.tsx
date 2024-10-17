import { FC, useCallback, useEffect, useState } from 'react';

import debounce from 'lodash/debounce';
import { Box, Search, Select, TextInput } from 'blocks';
import { getSelectChains } from 'common';
import { appConfig } from 'config';
import { Filters } from '../hooks/useChannelsFilters';
import { AllCategories } from '../Channels.constants';

export type ChannelSearchAndChainSelectionProps = {
  filters: Filters;
  setFilter: (filter: Partial<Filters>) => void;
};

const ChannelSearchAndChainSelection: FC<ChannelSearchAndChainSelectionProps> = ({ filters, setFilter }) => {
  const [searchQuery, setSearchQuery] = useState(filters.search as string);

  const [initialLoad, setInitialLoad] = useState(true);

  const getSearchResults = useCallback(
    debounce((value) => {
      if (value !== '') setFilter({ search: value, category: AllCategories });
    }, 800),
    [setFilter]
  );

  useEffect(() => {
    if (!filters.search) setSearchQuery('');
  }, [filters.search]);

  useEffect(() => {
    !initialLoad && getSearchResults(searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    setInitialLoad(false);
  }, []);

  return (
    <Box
      display="flex"
      gap="spacing-xs"
      flexDirection={{ initial: 'row', ml: 'column' }}
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
      <Box width={{ initial: '300px', ml: '100%' }}>
        <Select
          options={getSelectChains(appConfig.allowedNetworks)}
          value={filters.chain}
          onSelect={(value) => setFilter({ chain: value, category: AllCategories })}
        />
      </Box>
    </Box>
  );
};

export { ChannelSearchAndChainSelection };
