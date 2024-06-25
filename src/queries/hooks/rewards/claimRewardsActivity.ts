import { useMutation } from '@tanstack/react-query';
import { creatingActivity } from 'queries/queryKeys';
import { claimRewardsActivity } from 'queries/services';

export const useClaimRewardsActivity = (payload: { userId: string; activityTypeId: string }) =>
  useMutation({
    mutationKey: [creatingActivity, payload.userId, payload.activityTypeId],
    mutationFn: claimRewardsActivity
  });
