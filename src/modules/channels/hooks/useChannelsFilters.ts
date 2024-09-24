import { useGetChannelCategories } from 'queries';
import { useEffect, useMemo } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

export type Filters = {
  chain?: string;
  category?: string;
  search?: string;
};

export type UseChannelsFiltersProps = {
  initialChain: string;
};

export const useChannelsFilters = ({ initialChain }: UseChannelsFiltersProps) => {
  const [, setSearchParams] = useSearchParams();

  const { data: categories, status } = useGetChannelCategories();

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
    if (!searchFilters.chain) {
      filters['chain'] = initialChain;
      setFilter(filters);
    }
  }, []);

  useEffect(() => {
    if (status === 'success' && !searchFilters.category && categories?.tags?.length) {
      setFilter({ search: categories.tags[0] });
    }
  }, [status]);

  return {
    filters: {
      chain: searchFilters?.chain || initialChain,
      category: searchFilters?.category || '',
      search: searchFilters?.search || '',
    },
    setFilter,
  };
};
