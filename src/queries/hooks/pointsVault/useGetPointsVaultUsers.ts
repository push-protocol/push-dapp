import { useInfiniteQuery } from '@tanstack/react-query';
import {
  pointsVaultUsers,
  pointsVaultApprovedUsers,
  pointsVaultPendingUsers,
  pointsVaultRejectedUsers,
} from '../../queryKeys';
import { PointsVaultGetUsersPayload } from 'queries/types';
import { getPointsVaultUsers } from 'queries/services';
import { usePointsVaultToken } from './usePointsVaultToken';

export const useGetPointsVaultUsers = ({ status, pageSize = 20 }: PointsVaultGetUsersPayload) => {
  const token = usePointsVaultToken();

  const getQueryKey = () => {
    if (status === 'COMPLETED') return pointsVaultApprovedUsers;
    else if (status === 'REJECTED') return pointsVaultRejectedUsers;
    else return pointsVaultPendingUsers;
  };

  return useInfiniteQuery({
    queryKey: [pointsVaultUsers, getQueryKey()],
    initialPageParam: 1,
    queryFn: ({ pageParam }) => getPointsVaultUsers({ status, page: pageParam as number, pageSize, token }),
    getNextPageParam: (lastActivity, activities) => {
      if (lastActivity.length < pageSize) return undefined;
      return activities.length + 1;
    },
  });
};
