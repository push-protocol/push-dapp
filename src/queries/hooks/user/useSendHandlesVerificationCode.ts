import { useMutation } from '@tanstack/react-query';
import { sendVerificationCode } from 'queries/queryKeys';
import { sendHandlesVerificationCode } from 'queries/services';

export const useSendHandlesVerificationCode = () =>
  useMutation({
    mutationKey: [sendVerificationCode],
    mutationFn: sendHandlesVerificationCode,
  });
