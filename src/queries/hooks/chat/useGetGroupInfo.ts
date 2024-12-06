import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { useSelector } from 'react-redux';

import { groupInfo } from '../../queryKeys';
import { getGroupInfo } from '../../services';

import { UserStoreType } from 'types';
import { GroupInfoResponse } from '../../types';

/**
 * @param chainId
 * @returns query response
 */
export const useGetGroupInfo = (chatId?: string, config?: Partial<UseQueryOptions<GroupInfoResponse>>) => {
  const { userPushSDKInstance } = useSelector((state: UserStoreType) => {
    return state.user;
  });

  const query = useQuery<GroupInfoResponse>({
    queryKey: [groupInfo, userPushSDKInstance?.account, chatId],
    enabled: !!chatId,
    queryFn: () => getGroupInfo(userPushSDKInstance, chatId!),
    ...config,
  });
  return query;
};
