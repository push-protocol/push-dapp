import { useQuery } from '@tanstack/react-query';
import { userTwitterDetails } from 'queries/queryKeys';
import { getUserTwitterDetails } from 'queries/services';

export const useGetUserTwitterDetails = (twitterHandle: string, token: string) => {
  return useQuery({
    queryKey: [userTwitterDetails, twitterHandle],
    queryFn: () => getUserTwitterDetails({ twitterHandle, token }),
    staleTime: Infinity,
    retry: false,
    refetchInterval: false,
    refetchIntervalInBackground: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    retryOnMount: false,
    enabled: !!token && !!twitterHandle,
  });
};
