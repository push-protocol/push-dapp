import { useInfiniteQuery } from '@tanstack/react-query';
import { pointsVaultSearch, pointsVaultUsers } from 'queries/queryKeys';
import { getPVSearchResults } from 'queries/services';
import { usePointsVaultToken } from './usePointsVaultToken';
import { PointsVaultSearchPayload } from 'queries/types';

export const useSearchPVUsers = ({ query, pageSize = 20, status }: PointsVaultSearchPayload) => {
  const token = usePointsVaultToken();

  return useInfiniteQuery({
    queryKey: [pointsVaultUsers, pointsVaultSearch, query],
    initialPageParam: 1,
    queryFn: ({ pageParam }) => getPVSearchResults({ page: pageParam as number, pageSize, query, token, status }),
    getNextPageParam: (lastActivity, activities) => {
      if (lastActivity.length < pageSize) return undefined;
      return activities.length + 1;
    },
    enabled: !!query,
  });
};
