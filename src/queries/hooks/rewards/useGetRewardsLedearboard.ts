import { useQuery } from '@tanstack/react-query';

import { rewardsLeaderboard } from '../../queryKeys';
import { getRewardsLeaderboard } from '../../services';

export const useGetRewardsLeaderboard = () =>
  useQuery({ queryKey: [rewardsLeaderboard], queryFn: getRewardsLeaderboard });
