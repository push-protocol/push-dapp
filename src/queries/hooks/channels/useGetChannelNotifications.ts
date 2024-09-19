import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';

//Constants
import { channelNotifications } from '../../queryKeys';

//Services
import { getChannelNotifications } from '../../services';

//Types
import { UserStoreType } from 'types';
import { GuestWalletAddress } from 'common';

export const useGetChannelNotifications = (address: string, page: number, limit: number) => {
  const { userPushSDKInstance } = useSelector((state: UserStoreType) => {
    return state.user;
  });
  const query = useQuery({
    queryKey: [channelNotifications, address],
    queryFn: () => getChannelNotifications({ userPushSDKInstance, address, page, limit }),
    enabled: address !== GuestWalletAddress, // This is required to avoid extra func calls
  });
  return query;
};
