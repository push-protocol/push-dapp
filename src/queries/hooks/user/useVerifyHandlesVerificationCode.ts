import { useMutation } from '@tanstack/react-query';
import { verifyVerificationCode } from 'queries/queryKeys';
import { verifyHandlesVerificationCode } from 'queries/services';

export const useVerifyHandlesVerificationCode = () =>
  useMutation({
    mutationKey: [verifyVerificationCode],
    mutationFn: verifyHandlesVerificationCode,
  });
