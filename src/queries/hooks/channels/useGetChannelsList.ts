import { useInfiniteQuery } from '@tanstack/react-query';

import { allChannelsList } from '../../queryKeys';
import { getChannelsList } from '../../services';
import { ChannelsListModelledResponse, ChannelListParams } from '../../types';

export const useGetChannelslist = ({ order, pageSize, sort }: ChannelListParams) =>
  useInfiniteQuery<ChannelsListModelledResponse>({
    queryKey: [allChannelsList],
    initialPageParam: 1,
    queryFn: ({ pageParam }) =>
      getChannelsList({
        order,
        sort,
        pageSize,
        pageNumber: pageParam as number,
      }),
    getNextPageParam: ({ page, total, pageSize }) => {
      if (pageSize * page >= total) {
        return null;
      }
      return page + 1;
    },
  });
