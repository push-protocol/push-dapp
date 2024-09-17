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
    queryFn: ({ pageParam }) =>
      getChannelsList({
        order,
        sort,
        pageSize,
        pageNumber: pageParam as number,
        userPushSDKInstance,
      }),
    getNextPageParam: ({ page, total, pageSize }) => {
      if (pageSize * page >= total) {
        return null;
      }
      return page + 1;
    },
  });
  return query;
};
