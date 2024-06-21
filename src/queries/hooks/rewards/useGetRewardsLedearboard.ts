import { useInfiniteQuery } from '@tanstack/react-query';

import { rewardsLeaderboard } from '../../queryKeys';
import { getRewardsLeaderboard } from '../../services';
import { LeaderboardModelledResponse, LeaderboardParams } from '../../types';

export const useGetRewardsLeaderboard = ({ order, pageSize }: LeaderboardParams) =>
  useInfiniteQuery<LeaderboardModelledResponse>({
    queryKey: [rewardsLeaderboard],
    initialPageParam: 1,
    queryFn: ({ pageParam }) =>
      getRewardsLeaderboard({
        order,
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
