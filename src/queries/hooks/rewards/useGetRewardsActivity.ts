import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { rewardsActivity } from '../../queryKeys';
import { getRewardsActivity } from '../../services/rewards';
import { UsersActivity } from '../../types';

export const useGetRewardsActivity = (
  { userId, activityId }: { userId: string; activityId: string },
  config?: Partial<UseQueryOptions<UsersActivity>>
) =>
  useQuery<UsersActivity>({
    queryKey: [rewardsActivity, userId, activityId],
    queryFn: () => getRewardsActivity(userId, activityId),
    ...config
  });
