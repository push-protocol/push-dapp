import { useInfiniteQuery } from '@tanstack/react-query';
import { pointsVaultApprovedUsers } from '../../queryKeys';
import { PointsVaultGetUsersPayload } from 'queries/types';
import { getPointsVaultUsers } from 'queries/services';

export const useGetPointsVaultApprovedUsers = ({
  status,
  pageSize = 20,
  token,
  twitter,
  wallet,
  activityTypeId,
}: PointsVaultGetUsersPayload) => {
  return useInfiniteQuery({
    queryKey: [pointsVaultApprovedUsers, `${twitter}-${wallet}`],
    initialPageParam: 1,
    queryFn: ({ pageParam }) =>
      getPointsVaultUsers({ status, page: pageParam as number, pageSize, token, twitter, wallet, activityTypeId }),
    getNextPageParam: ({ page, total }) => {
      if (page >= total) {
        return null;
      }
      return page + 1;
    },
    enabled: !!token,
    refetchInterval: false,
    refetchIntervalInBackground: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    retryOnMount: false,
  });
};
