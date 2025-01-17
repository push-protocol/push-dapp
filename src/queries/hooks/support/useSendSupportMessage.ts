import { useMutation } from '@tanstack/react-query';
import { sendSupportMessageKey } from 'queries/queryKeys';
import { sendSupportMessage } from 'queries/services';

export const useSendSupportMessage = () =>
  useMutation({
    mutationKey: [sendSupportMessageKey],
    mutationFn: sendSupportMessage,
  });
