import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';

//Constants
import { channelDetails } from '../../queryKeys';

//Services
import { getChannelDetails } from '../../services';

//Types
import { UserStoreType } from 'types';

export const useGetChannelDetails = (address: string) => {
  const { userPushSDKInstance } = useSelector((state: UserStoreType) => {
    return state.user;
  });
  const query = useQuery({
    queryKey: [channelDetails, address],
    queryFn: () => getChannelDetails({ userPushSDKInstance, address }),
    staleTime: Infinity,
    refetchOnWindowFocus: false
  });
  return query;
};
