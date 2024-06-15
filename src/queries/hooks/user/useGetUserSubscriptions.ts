import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';

import { userSubscriptions } from '../../queryKeys';
import { getUserSubscriptions } from '../../services';

//Types
import { UserStoreType } from 'types';

export const useGetUserSubscriptions = (address?: string) => {
  const { userPushSDKInstance } = useSelector((state: UserStoreType) => {
    return state.user;
  });
  const query = useQuery({
    queryKey: [userSubscriptions, address],
    queryFn: () => getUserSubscriptions(userPushSDKInstance, address),
  });
  return query;
};
