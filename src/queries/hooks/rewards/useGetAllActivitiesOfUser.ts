import { useQuery } from '@tanstack/react-query';
import { usersAllActivities } from 'queries/queryKeys';
import { getUsersAllActivities } from 'queries/services/rewards';

export const useGetAllActivitiesOfUser = (userId: string) =>
  useQuery({ queryKey: [usersAllActivities, userId], queryFn: () => getUsersAllActivities(userId) });
