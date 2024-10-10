import { useInfiniteQuery } from '@tanstack/react-query';

import { allChannelsList } from '../../queryKeys';
import { getChannelsList } from '../../services';

import { ChannelsListModelledResponse, ChannelListParams } from '../../types';

export type UseChannelSearchProps = {
  order?: ChannelListParams['order'];
  pageSize: ChannelListParams['pageSize'];
  chain?: ChannelListParams['chain'];
  tag?: ChannelListParams['tag'];
  sort?: ChannelListParams['sort'];
};

// TODO make it a sdk call in future
export const useGetChannelslist = ({ order, pageSize, sort, chain, tag }: UseChannelSearchProps) => {
  const reactQuery = useInfiniteQuery<ChannelsListModelledResponse>({
    queryKey: [allChannelsList, chain, tag],
    initialPageParam: 1,
    queryFn: ({ pageParam }) =>
      getChannelsList({
        order,
        sort,
        pageSize,
        page: pageParam as number,
        chain,
        tag,
      }),
    getNextPageParam: ({ itemcount }, allPages, lastPageParam) => {
      if (pageSize * ((lastPageParam as number) + 1) >= itemcount) {
        return null;
      }
      return (lastPageParam as number) + 1;
    },
  });
  return reactQuery;
};
