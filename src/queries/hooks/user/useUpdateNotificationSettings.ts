import { useMutation } from '@tanstack/react-query';
import { updatingNotificationSetting } from 'queries/queryKeys';
import { updateNotificationSettings } from 'queries/services';

export const useUpdateNotificationSettings = () => {
  return useMutation({
    mutationKey: [updatingNotificationSetting],
    mutationFn: updateNotificationSettings
  });
};
