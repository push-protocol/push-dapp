import { useMutation } from '@tanstack/react-query';
import { creatingActivity } from 'queries/queryKeys';
import { createActivity } from 'queries/services/rewards';

export const useCreateActivity = (payload: { userId: string; activityTypeId: string }) =>
  useMutation({
    mutationKey: [creatingActivity, payload.userId, payload.activityTypeId],
    mutationFn: createActivity
  });
