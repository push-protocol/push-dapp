import { useInfiniteQuery } from '@tanstack/react-query';

import { rewardsLeaderboard } from '../../queryKeys';
import { getRewardsLeaderboard } from '../../services';
import { GetRewardsLeaderboardParams, LeaderboardResponse } from '../../types';

type Page = {
  data: LeaderboardResponse;
  nextCursor?: number;
};
export const useGetRewardsLeaderboard = ({ pageSize = 10 }: Omit<GetRewardsLeaderboardParams, 'pageParam'>) =>
  useInfiniteQuery<Page, Error>({
    queryKey: [rewardsLeaderboard],
    queryFn: () => getRewardsLeaderboard({ pageSize }),
    getNextPageParam: (lastPage: Page) => lastPage.nextCursor,
  });
