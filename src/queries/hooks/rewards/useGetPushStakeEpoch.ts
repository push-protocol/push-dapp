import { useQuery } from '@tanstack/react-query';
import { pushStakeEpoch } from 'queries/queryKeys';
import { getPushStakeEpoch } from 'queries/services';

export const useGetPushStakeEpoch = () =>
  useQuery({
    queryKey: [pushStakeEpoch],
    queryFn: getPushStakeEpoch,
  });
