import { useQuery } from '@tanstack/react-query';
import { sentMessageCount } from '../../queryKeys';
import { getSentMessageCount } from '../../services';

export const useSentMessageCount = () => {
  return useQuery({
    queryKey: [sentMessageCount],
    queryFn: getSentMessageCount,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });
};
