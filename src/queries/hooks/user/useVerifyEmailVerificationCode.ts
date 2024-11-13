import { useMutation } from '@tanstack/react-query';
import { verifyVerificationCode } from 'queries/queryKeys';
import { verifyEmailVerificationCode } from 'queries/services';

export const useVerifyEmailVerificationCode = () =>
  useMutation({
    mutationKey: [verifyVerificationCode],
    mutationFn: verifyEmailVerificationCode,
  });
