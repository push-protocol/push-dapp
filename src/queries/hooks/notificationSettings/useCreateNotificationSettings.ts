import { useMutation } from '@tanstack/react-query';
import { addSettings } from 'queries/queryKeys';
import { addNotificationSettings } from 'queries/services';

export const useCreateNotificationSettings = () =>
  useMutation({
    mutationKey: [addSettings],
    mutationFn: addNotificationSettings,
  });
