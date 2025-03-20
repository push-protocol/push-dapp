import { useQuery } from '@tanstack/react-query';
import { pricingStatus } from 'queries/queryKeys';
import { getPricingPlanStatus } from 'queries/services';

export const useGetPricingPlanStatus = (payload: { channelId: string }) =>
  useQuery({
    queryKey: [pricingStatus, payload?.channelId],
    queryFn: () => getPricingPlanStatus(payload),
  });
