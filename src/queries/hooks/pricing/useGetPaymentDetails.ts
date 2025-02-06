import { useQuery } from '@tanstack/react-query';
import { paymentDetails } from 'queries/queryKeys';
import { getPaymentDetails } from 'queries/services';

export const useGetPaymentDetails = (payload: { paymentId: string }) =>
  useQuery({
    queryKey: [paymentDetails, payload?.paymentId],
    queryFn: () => getPaymentDetails(payload),
  });
