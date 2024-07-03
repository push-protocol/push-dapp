import { useInfiniteQuery } from '@tanstack/react-query';
import { allActivities } from 'queries/queryKeys';
import { getRewardsActivities } from 'queries/services/rewards';
import { ActivitiesParams } from 'queries/types';

export const useGetRewardsActivities = ({ pageSize }: ActivitiesParams) =>
  useInfiniteQuery({
    queryKey: [allActivities],
    initialPageParam: 1,
    queryFn: ({ pageParam }) =>
      getRewardsActivities({
        pageSize,
        pageNumber: pageParam as number
      }),
    getNextPageParam: ({ page, total, size }) => {
      if (size * page >= total) {
        return null;
      }
      return page + 1;
    }
  });
