import { useQuery } from '@tanstack/react-query';

import { UserRewardsDetailParams } from '../../types';
import { userRewardsDetails } from '../../queryKeys';
import { getUserRewardsDetail } from '../../services';

export const useGetUserRewardsDetails = (options: UserRewardsDetailParams, config?: any) =>
  useQuery({
    queryKey: [userRewardsDetails, options.walletAddress],
    queryFn: () => getUserRewardsDetail(options)
  });
