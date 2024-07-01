import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { useSelector } from 'react-redux';

import { allUserSubscriptions, userSubscription } from '../../queryKeys';
import { getUserSubscriptions } from '../../services';

//Types
import { UserStoreType } from 'types';
import { UserSubscriptionsResponse } from 'queries/types';

/**
 * @param channelAddress
 * @returns query response
 *
 * If address is not passed then it returns list od user subscribed channels.
 * If a sepacifc channel address is passed then it returns details of that particular channel
 */
export const useGetUserSubscriptions = (
  channelAddress?: string,
  config?: Partial<UseQueryOptions<UserSubscriptionsResponse>>
) => {
  const { userPushSDKInstance } = useSelector((state: UserStoreType) => {
    return state.user;
  });

  const key = channelAddress ? userSubscription : allUserSubscriptions;

  const query = useQuery<UserSubscriptionsResponse>({
    queryKey: [key, userPushSDKInstance?.account, channelAddress || null],
    queryFn: () => getUserSubscriptions(userPushSDKInstance, channelAddress),
    ...config,
  });
  return query;
};
