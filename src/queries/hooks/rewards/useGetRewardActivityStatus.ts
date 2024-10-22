import { useQuery } from '@tanstack/react-query';
import { rewardActivityStatus } from 'queries';
import { getRewardActivityStatus } from 'queries/services';

export const useGetRewardActivityStatus = (payload: { userId: string; activities: string[] }, enabled: boolean) =>
  useQuery({
    queryKey: [rewardActivityStatus, payload?.userId, payload?.activities],
    queryFn: () => getRewardActivityStatus(payload),
    enabled,
  });
