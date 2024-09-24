import { useInfiniteQuery } from '@tanstack/react-query';

import { channelSearchList } from '../../queryKeys';
import { ChannelSearchParams, ChannelsListModelledResponse } from '../../types';
import { channelSearch } from 'queries/services/channels/channelSearch';

export type UseChannelSearchProps = {
  query: ChannelSearchParams['query'];
  pageSize: ChannelSearchParams['pageSize'];
  chain: ChannelSearchParams['chain'];
};

// TODO make it a sdk call in future
export const useChannelSearch = ({ pageSize, query, chain }: UseChannelSearchProps) => {
  const infiniteQuery = useInfiniteQuery<ChannelsListModelledResponse>({
    queryKey: [channelSearchList, query, chain],
    initialPageParam: 1,
    enabled: !!query,
    queryFn: ({ pageParam }) =>
      channelSearch({
        pageSize,
        page: pageParam as number,
        query,
        chain,
      }),
    getNextPageParam: ({ itemcount }, allPages, lastPageParam) => {
      if (pageSize * ((lastPageParam as number) + 1) >= itemcount) {
        return null;
      }
      return (lastPageParam as number) + 1;
    },
  });
  return infiniteQuery;
};
