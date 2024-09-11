import { useMutation } from '@tanstack/react-query';
import { createNotificationSettings } from 'queries/queryKeys';
import { addNotificationSettings } from 'queries/services';

export const useCreateNotificationSettings = () =>
  useMutation({
    mutationKey: [createNotificationSettings],
    mutationFn: addNotificationSettings,
  });
