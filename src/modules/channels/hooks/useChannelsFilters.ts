import { useEffect, useMemo } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

export type Filters = {
  chain?: string;
  category?: string;
  search?: string;
};

export type UseChannelsFiltersProps = {
  initialChain: string;
  initialCategory: string;
};

export const useChannelsFilters = ({ initialChain, initialCategory }: UseChannelsFiltersProps) => {
  const [, setSearchParams] = useSearchParams();

  const { search } = useLocation();

  const searchFilters = useMemo(() => Object.fromEntries(new URLSearchParams(search).entries()) as Filters, [search]);

  const setFilter = (filter: Partial<Filters>) => {
    // Remove the filter key if the value is falsy
    const updatedFilters = Object.entries({ ...searchFilters, ...filter } || {}).reduce(
      (acc, [key, value]) => (value ? { ...acc, [key]: value } : acc),
      {}
    );

    setSearchParams(updatedFilters);
  };

  useEffect(() => {
    const filters: Partial<Filters> = {};

    if (!searchFilters.chain || !searchFilters.category) {
      filters.chain = searchFilters.chain || initialChain;
      filters.category = searchFilters.category || initialCategory;
    }

    if ((searchFilters.chain !== initialChain || searchFilters.search) && searchFilters.category !== initialCategory) {
      filters.category = initialCategory;
    }

    const hasFilters = Object.keys(filters).length;

    hasFilters && setFilter(filters);
  }, []);

  return {
    filters: {
      chain: searchFilters?.chain || initialChain,
      category: searchFilters?.category || '',
      search: searchFilters?.search || '',
    },
    setFilter,
  };
};
