import { useMutation } from '@tanstack/react-query';
import { rewardActivityStatus } from 'queries';
import { getRewardActivityStatus } from 'queries/services';

export const useGetRewardActivityStatus = (payload: { userId: string }) =>
  useMutation({
    mutationKey: [rewardActivityStatus, payload?.userId],
    mutationFn: getRewardActivityStatus,
  });
