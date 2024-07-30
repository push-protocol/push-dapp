import { useQuery } from '@tanstack/react-query';
import { sentNotificationCount } from '../../queryKeys';
import { getSentNotificationCount } from '../../services';

export const useSentNotificationCount = () => {
  return useQuery({
    queryKey: [sentNotificationCount],
    queryFn: getSentNotificationCount,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });
};
