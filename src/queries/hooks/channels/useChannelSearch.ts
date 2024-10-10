import { useInfiniteQuery } from '@tanstack/react-query';

import { channelSearchList } from '../../queryKeys';
import { ChannelSearchParams, ChannelsSearchListModelledResponse } from '../../types';
import { channelSearch } from 'queries/services/channels/channelSearch';

export type UseChannelSearchProps = {
  query: ChannelSearchParams['query'];
  pageSize: ChannelSearchParams['pageSize'];
  chain: ChannelSearchParams['chain'];
  tag: ChannelSearchParams['tag'];
};

// TODO make it a sdk call in future
export const useChannelSearch = ({ pageSize, query, chain, tag }: UseChannelSearchProps) => {
  const infiniteQuery = useInfiniteQuery<ChannelsSearchListModelledResponse>({
    queryKey: [channelSearchList, query, chain, tag],
    initialPageParam: 1,
    enabled: !!query,
    queryFn: ({ pageParam }) =>
      channelSearch({
        pageSize,
        page: pageParam as number,
        query,
        chain,
        tag,
      }),
    getNextPageParam: ({ itemCount }, allPages, lastPageParam) => {
      console.log(itemCount, lastPageParam, pageSize, pageSize * ((lastPageParam as number) + 1) >= itemCount);
      if (pageSize * ((lastPageParam as number) + 1) >= itemCount) {
        return null;
      }
      return (lastPageParam as number) + 1;
    },
  });
  return infiniteQuery;
};
