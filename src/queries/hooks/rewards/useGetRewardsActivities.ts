import { useQuery } from '@tanstack/react-query';
import { allActivities } from 'queries/queryKeys';
import { getRewardsActivities } from 'queries/services/rewards';

export const useGetRewardsActivities = () => useQuery({ queryKey: [allActivities], queryFn: getRewardsActivities });
