import { useQuery } from '@tanstack/react-query';
import { subscriberCount } from '../../queryKeys';
import { getSubscriberCount } from '../../services';

export const useGetSubscriberCount = () => {
  return useQuery({
    queryKey: [subscriberCount],
    queryFn: getSubscriberCount,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });
};
