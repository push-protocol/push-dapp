import { useQuery } from '@tanstack/react-query';

import { UserRewardsDetailParams } from '../../types';
import { userRewardsDetails } from '../../queryKeys';
import { getUserRewardsDetail } from '../../services';

export const useGetUserRewardsDetails = (options: UserRewardsDetailParams) =>
  useQuery({
    queryKey: [userRewardsDetails, options.caip10WalletAddress],
    queryFn: () => getUserRewardsDetail(options),
    enabled: options.enabled,
  });
