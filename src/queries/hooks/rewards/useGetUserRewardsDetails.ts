import { useQuery } from '@tanstack/react-query';

import { UserRewardsDetailParams } from '../../types';
import { userRewardsDetails } from '../../queryKeys';
import { getUserRewardsDetail } from '../../services';

const GuestMode = 'eip155:0x0000000000000000000000000000000000000001';

export const useGetUserRewardsDetails = (options: UserRewardsDetailParams) =>
  useQuery({
    queryKey: [userRewardsDetails, options.caip10WalletAddress],
    queryFn: () => getUserRewardsDetail(options),
    retry: false,
    enabled: !(options.caip10WalletAddress === GuestMode || !options.caip10WalletAddress),
  });
