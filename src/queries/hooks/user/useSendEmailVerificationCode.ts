import { useMutation } from '@tanstack/react-query';
import { sendVerificationCode } from 'queries/queryKeys';
import { sendEmailVerificationCode } from 'queries/services';

export const useSendEmailVerificationCode = () =>
  useMutation({
    mutationKey: [sendVerificationCode],
    mutationFn: sendEmailVerificationCode,
  });
