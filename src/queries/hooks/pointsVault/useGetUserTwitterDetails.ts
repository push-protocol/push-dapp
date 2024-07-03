import { useQuery } from '@tanstack/react-query';
import { userTwitterDetails } from 'queries/queryKeys';
import { getUserTwitterDetails } from 'queries/services';
import { usePointsVaultToken } from './usePointsVaultToken';

export const useGetUserTwitterDetails = (twitterHandle: string) => {
  const token = usePointsVaultToken();

  return useQuery({
    queryKey: [userTwitterDetails, twitterHandle],
    queryFn: () => getUserTwitterDetails({ twitterHandle, token }),
    staleTime: Infinity,
    retry: false,
  });
};
