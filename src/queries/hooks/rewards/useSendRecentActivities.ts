import { useMutation } from '@tanstack/react-query';
import { sendUserRecentActivities } from 'queries/queryKeys';
import { sendRecentActivities } from 'queries/services';

export const useSendRecentActivities = (payload: { userId: string }) =>
  useMutation({
    mutationKey: [sendUserRecentActivities, payload?.userId],
    mutationFn: sendRecentActivities,
  });
