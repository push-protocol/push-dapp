import { useQuery } from '@tanstack/react-query';
import { channelCategories } from '../../queryKeys';
import { getChannelCategories } from '../../services';

export const useGetChannelCategories = () => {
  const query = useQuery({
    queryKey: [channelCategories],
    queryFn: () => getChannelCategories(),
  });
  return query;
};
