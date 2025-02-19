import { useInfiniteQuery } from '@tanstack/react-query';

import { channelSearchList } from '../../queryKeys';
import { ChannelSearchParams, ChannelsSearchListModelledResponse } from '../../types';
import { channelSearch } from 'queries/services/channels/channelSearch';
import { useSelector } from 'react-redux';
import { UserStoreType } from 'types';

export type UseChannelSearchProps = {
  query: ChannelSearchParams['query'];
  pageSize: ChannelSearchParams['pageSize'];
  chain: ChannelSearchParams['chain'];
  tag: ChannelSearchParams['tag'];
  subscribed: ChannelSearchParams['subscribed'];
};

// TODO make it a sdk call in future
export const useChannelSearch = ({ pageSize, query, chain, tag, subscribed }: UseChannelSearchProps) => {
  const { userPushSDKInstance } = useSelector((state: UserStoreType) => {
    return state.user;
  });
  const infiniteQuery = useInfiniteQuery<ChannelsSearchListModelledResponse>({
    queryKey: [channelSearchList, userPushSDKInstance?.account, query, chain, tag, subscribed],
    initialPageParam: 1,
    enabled: !!query,
    queryFn: ({ pageParam }) =>
      channelSearch({
        userPushSDKInstance,
        pageSize,
        page: pageParam as number,
        query,
        chain,
        tag,
        subscribed,
      }),
    getNextPageParam: ({}, allPages, lastPageParam) => {
      if (allPages[(lastPageParam as number) - 1].length < pageSize) {
        return null;
      }
      return (lastPageParam as number) + 1;
    },
  });
  return infiniteQuery;
};
