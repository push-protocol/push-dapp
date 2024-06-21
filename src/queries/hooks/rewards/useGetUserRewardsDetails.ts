import { useQuery } from '@tanstack/react-query';

import { UserRewardsDetailParams } from '../../types';
import { UserRewardsDetails } from '../../queryKeys';
import { getUserRewardsDetail } from '../../services';

export const useGetUserRewardsDetails = (options: UserRewardsDetailParams) =>
  useQuery({ queryKey: [UserRewardsDetails, options.walletAddress], queryFn: () => getUserRewardsDetail(options) });
