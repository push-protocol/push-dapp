import { useInfiniteQuery } from '@tanstack/react-query';

import { channelSearchList } from '../../queryKeys';
import { ChannelSearchParams, ChannelsListModelledResponse } from '../../types';
import { channelSearch } from 'queries/services/channels/channelSearch';

export type UseChannelSearchProps = {
  query: ChannelSearchParams['query'];
  pageSize: ChannelSearchParams['pageSize'];
};

export const useChannelSearch = ({ pageSize, query }: UseChannelSearchProps) => {
  const infiniteQuery = useInfiniteQuery<ChannelsListModelledResponse>({
    queryKey: [channelSearchList, query],
    initialPageParam: 1,
    enabled: !!query,
    queryFn: ({ pageParam }) =>
      channelSearch({
        pageSize,
        page: pageParam as number,
        query,
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
