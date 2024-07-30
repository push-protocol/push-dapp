import { useMutation } from '@tanstack/react-query';

import { sendNotification } from '../../queryKeys';

import { sendNotification as sendNotificationService } from '../../services';

export const useSendNotification = () =>
  useMutation({
    mutationKey: [sendNotification],
    mutationFn: sendNotificationService,
  });
