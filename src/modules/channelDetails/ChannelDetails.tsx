import { FC, useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import { useGetChannelslist } from 'queries';

import { ChannelDetail } from './components/ChannelDetail';
import { ChannelList } from './components/ChannelList';
import { Box } from 'blocks';

import { isAddress } from 'ethers/lib/utils';
import APP_PATHS from 'config/AppPaths';

const ChannelDetails: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedChannelId, setSelectedChannelId] = useState<string>(id || '');

  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } = useGetChannelslist({
    pageSize: 20,
  });

  const channelsList = isLoading ? Array(10).fill(0) : data?.pages.flatMap((page) => page.channels) || [];
  const hasMoreData = !isFetchingNextPage && hasNextPage;

  const selectedChannel = channelsList?.find((channel) => channel?.channel === selectedChannelId);

  useEffect(() => {
    if (!isAddress(id || '')) navigate(APP_PATHS.Channels);
  }, [id]);

  //channel tutotrial
  //delete old channel and related pages
  return (
    <Box
      width="-webkit-fill-available"
      padding="spacing-md spacing-sm"
      display="flex"
      height={{ dp: '100vh', ml: 'auto' }}
      justifyContent="flex-start"
      borderRadius="radius-md radius-md radius-none radius-none"
      gap="spacing-md"
      border="border-sm solid stroke-secondary"
      backgroundColor="surface-primary"
    >
      <ChannelList
        channels={channelsList}
        fetchNextPage={fetchNextPage}
        hasMoreData={hasMoreData}
        isLoading={isLoading}
        setSelectedChannelId={setSelectedChannelId}
        isFetchingNextPage={isFetchingNextPage}
      />
      <ChannelDetail
        channel={selectedChannel}
        isLoading={isLoading}
      />
    </Box>
  );
};

export { ChannelDetails };
