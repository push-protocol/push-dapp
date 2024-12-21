import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { useSelector } from 'react-redux';

import { userProfileInfo } from '../../queryKeys';
import { getUserProfileInfo } from '../../services';

//Types
import { UserStoreType } from 'types';
import { UserProfileInfoResponse } from 'queries/types';

export const useGetUserProfileInfo = (config?: Partial<UseQueryOptions<UserProfileInfoResponse>>) => {
  const { userPushSDKInstance } = useSelector((state: UserStoreType) => {
    return state.user;
  });

  const query = useQuery<UserProfileInfoResponse>({
    queryKey: [userProfileInfo, userPushSDKInstance?.account],
    queryFn: () => getUserProfileInfo(userPushSDKInstance),
    ...config,
  });
  return query;
};
