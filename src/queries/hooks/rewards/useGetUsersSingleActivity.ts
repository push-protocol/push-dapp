import { useQuery } from '@tanstack/react-query';
import { usersSingleActivity } from 'queries/queryKeys';
import { getUsersSingleActivity } from 'queries/services/rewards';

export const useGetUsersSingleActivity = (userId: string, activityId: string) =>
  useQuery({
    queryKey: [usersSingleActivity, userId, activityId],
    queryFn: () => getUsersSingleActivity(userId, activityId)
  });
