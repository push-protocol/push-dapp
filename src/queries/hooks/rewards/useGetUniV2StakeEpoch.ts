import { useQuery } from '@tanstack/react-query';
import { uniV2StakeEpoch } from 'queries/queryKeys';
import { getUniV2StakeEpoch } from 'queries/services';

export const useGetUniV2StakeEpoch = () =>
  useQuery({
    queryKey: [uniV2StakeEpoch],
    queryFn: getUniV2StakeEpoch,
  });
