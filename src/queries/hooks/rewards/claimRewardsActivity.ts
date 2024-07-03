import { useMutation } from '@tanstack/react-query';
import { claimRewards } from 'queries/queryKeys';
import { claimRewardsActivity } from 'queries/services';

export const useClaimRewardsActivity = (payload: { userId: string; activityTypeId: string }) =>
  useMutation({
    mutationKey: [claimRewards, payload.userId, payload.activityTypeId],
    mutationFn: claimRewardsActivity
  });
