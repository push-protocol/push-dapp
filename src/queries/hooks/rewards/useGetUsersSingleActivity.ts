import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { usersSingleActivity } from '../../queryKeys';
import { getUsersSingleActivity } from '../../services/rewards';
import { UsersActivity } from '../../types';

export const useGetUsersSingleActivity = (
  { userId, activityId }: { userId: string; activityId: string },
  config?: Partial<UseQueryOptions<UsersActivity>>
) =>
  useQuery<UsersActivity>({
    queryKey: [usersSingleActivity, userId, activityId],
    queryFn: () => getUsersSingleActivity(userId, activityId),
    ...config,
  });
