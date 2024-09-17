import { useInfiniteQuery } from '@tanstack/react-query';

import { rewardsLeaderboard } from '../../queryKeys';
import { getChannelsList } from '../../services';
import { ChannelsListModelledResponse, ChannelsListParams } from '../../types';

export const useGetChannelslist = ({ order, pageSize, sort }: ChannelsListParams) =>
  useInfiniteQuery<ChannelsListModelledResponse>({
    queryKey: [rewardsLeaderboard],
    initialPageParam: 1,
    queryFn: ({ pageParam }) =>
      getChannelsList({
        order,
        sort,
        pageSize,
        pageNumber: pageParam as number,
      }),
    getNextPageParam: ({ page, total, pageSize }) => {
      if (pageSize * page >= total) {
        return null;
      }
      return page + 1;
    },
  });
