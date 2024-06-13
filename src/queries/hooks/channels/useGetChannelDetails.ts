import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';

import { channelDetails } from 'queries/queryKeys';
import { getChannelDetails } from 'queries/services';

export const useGetChannelDetails = (address: string) => {
  const { userPushSDKInstance } = useSelector((state: any) => {
    return state.user;
  });
  const query = useQuery({
    queryKey: [channelDetails, address],
    queryFn: () => getChannelDetails({ userPushSDKInstance, address }),
  });
  return query;
};
