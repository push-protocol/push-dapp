import { useInfiniteQuery } from '@tanstack/react-query';

import { allChannelsList } from '../../queryKeys';
import { getChannelsList } from '../../services';

import { ChannelsListModelledResponse, ChannelListParams } from '../../types';

// TODO make it a sdk call in future
export const useGetChannelslist = ({ order, pageSize, sort, chain }: ChannelListParams) => {
  const reactQuery = useInfiniteQuery<ChannelsListModelledResponse>({
    queryKey: [allChannelsList, chain],
    initialPageParam: 1,
    queryFn: ({ pageParam }) =>
      getChannelsList({
        order,
        sort,
        pageSize,
        page: pageParam as number,
        chain,
      }),
    getNextPageParam: ({ itemcount }, allPages, lastPageParam) => {
      if (pageSize * ((lastPageParam as number) + 1) >= itemcount) {
        return null;
      }
      return (lastPageParam as number) + 1;
    },
  });
  return reactQuery;
};
