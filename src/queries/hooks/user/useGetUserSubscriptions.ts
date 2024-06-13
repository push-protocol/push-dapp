import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';

import { userSubscriptions } from 'queries/queryKeys';
import { getUserSubscriptions } from 'queries/services';

export const useGetUserSubscriptions = () => {
  const { userPushSDKInstance } = useSelector((state: any) => {
    return state.user;
  });
  const query = useQuery({ queryKey: [userSubscriptions], queryFn: () => getUserSubscriptions(userPushSDKInstance) });
  return query;
};
