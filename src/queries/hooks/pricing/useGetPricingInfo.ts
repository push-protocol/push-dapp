import { useQuery } from '@tanstack/react-query';
import { pricingInfo } from 'queries/queryKeys';
import { getPricingInfo } from 'queries/services';

export const useGetPricingInfo = () =>
  useQuery({
    queryKey: [pricingInfo],
    queryFn: getPricingInfo,
  });
