import { useInfiniteQuery } from '@tanstack/react-query';

import { allChannelsList } from '../../queryKeys';
import { getChannelsList } from '../../services';
import { ChannelsListModelledResponse, ChannelListParams } from '../../types';
import { useSelector } from 'react-redux';
import { UserStoreType } from 'types';

export const useGetChannelslist = ({ order, pageSize, sort }: ChannelListParams) => {
  const { userPushSDKInstance } = useSelector((state: UserStoreType) => {
    return state.user;
  });
  const query = useInfiniteQuery<ChannelsListModelledResponse>({
    queryKey: [allChannelsList, userPushSDKInstance?.account],
    initialPageParam: 1,
    enabled: !!userPushSDKInstance?.account,
    queryFn: ({ pageParam }) =>
      getChannelsList({
        order,
        sort,
        pageSize,
        page: pageParam as number,
        userPushSDKInstance,
      }),
    getNextPageParam: ({ itemcount }, allPages, lastPageParam) => {
      if (pageSize * ((lastPageParam as number) + 1) >= itemcount) {
        return null;
      }
      return (lastPageParam as number) + 1;
    },
  });
  return query;
};
