import { useQuery } from '@tanstack/react-query';
import { allPaymentHistory } from 'queries/queryKeys';
import { getPaymentHistory } from 'queries/services';

export const useGetPaymentHistory = (payload: { channelId: string }) =>
  useQuery({
    queryKey: [allPaymentHistory, payload?.channelId],
    queryFn: () => getPaymentHistory(payload),
  });
