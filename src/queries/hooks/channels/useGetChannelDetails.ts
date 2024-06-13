import { useQuery } from '@tanstack/react-query';
import { channelDetails } from 'queries/queryKeys';
import { getChannelDetails } from 'queries/services';
import { useSelector } from 'react-redux';

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
