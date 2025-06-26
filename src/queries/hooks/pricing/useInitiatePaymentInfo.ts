import { useMutation } from '@tanstack/react-query';
import { initiatePayment } from 'queries/queryKeys';
import { handleInitiatePayment } from 'queries/services';

export const useInitiatePaymentInfo = () =>
  useMutation({
    mutationKey: [initiatePayment],
    mutationFn: handleInitiatePayment,
  });
