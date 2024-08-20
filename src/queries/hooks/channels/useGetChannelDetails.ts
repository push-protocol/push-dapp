import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';

//Constants
import { channelDetails } from '../../queryKeys';

//Services
import { getChannelDetails } from '../../services';

//Types
import { UserStoreType } from 'types';
import { GuestWalletAddress } from 'common';

export const useGetChannelDetails = (address: string, refetchInterval?: number) => {
  const { userPushSDKInstance } = useSelector((state: UserStoreType) => {
    return state.user;
  });
  const query = useQuery({
    refetchInterval: refetchInterval,
    queryKey: [channelDetails, address],
    queryFn: () => getChannelDetails({ userPushSDKInstance, address }),
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    enabled: address !== GuestWalletAddress, // This is required to avoid extra func calls
  });
  return query;
};
