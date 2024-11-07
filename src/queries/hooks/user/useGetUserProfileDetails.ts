import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { useSelector } from 'react-redux';

import { userProfileDetails } from '../../queryKeys';
import { getUserProfileDetails } from '../../services';

import { UserStoreType } from 'types';
import { UserProfileDetailsResponse } from '../../types';

/**
 * @param userAddress
 * @returns query response
 */
export const useGetUserProfileDetails = (
  userAddress?: string,
  config?: Partial<UseQueryOptions<UserProfileDetailsResponse>>
) => {
  const { userPushSDKInstance } = useSelector((state: UserStoreType) => {
    return state.user;
  });

  const query = useQuery<UserProfileDetailsResponse>({
    queryKey: [userProfileDetails, userPushSDKInstance?.account, userAddress],
    enabled: !!userAddress,
    queryFn: () => getUserProfileDetails(userPushSDKInstance, userAddress!),
    ...config,
  });
  return query;
};
