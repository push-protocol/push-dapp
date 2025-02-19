import { useInfiniteQuery } from '@tanstack/react-query';

import { allChannelsList } from '../../queryKeys';
import { getChannelsList } from '../../services';

import { ChannelsListModelledResponse, ChannelListParams } from '../../types';
import { useSelector } from 'react-redux';
import { UserStoreType } from 'types';

export type UseChannelSearchProps = {
  order?: ChannelListParams['order'];
  pageSize: ChannelListParams['pageSize'];
  chain?: ChannelListParams['chain'];
  tag?: ChannelListParams['tag'];
  sort?: ChannelListParams['sort'];
  subscribed: ChannelListParams['subscribed'];
};

// TODO make it a sdk call in future
export const useGetChannelslist = ({ order, pageSize, sort, chain, tag, subscribed }: UseChannelSearchProps) => {
  const { userPushSDKInstance } = useSelector((state: UserStoreType) => {
    return state.user;
  });
  const reactQuery = useInfiniteQuery<ChannelsListModelledResponse>({
    queryKey: [allChannelsList, userPushSDKInstance?.account, chain, tag, subscribed],
    initialPageParam: 1,
    queryFn: ({ pageParam }) =>
      getChannelsList({
        userPushSDKInstance,
        order,
        sort,
        pageSize,
        page: pageParam as number,
        chain,
        tag,
        subscribed,
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
