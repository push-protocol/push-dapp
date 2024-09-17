import { Box, Chat, TextInput } from 'blocks';
import { FC, useEffect, useState } from 'react';
import { ChannelList } from './components/ChannelList';
import { useGetChannelslist } from 'queries';
import { useSelector } from 'react-redux';
import { UserStoreType } from 'types';
import { useNavigate, useParams } from 'react-router-dom';
import { ChannelDetail } from './components/ChannelDetail';
import { channel } from 'process';
import { convertAddrCaipToAddress } from 'helpers/CaipHelper';
import { isAddress } from 'ethers/lib/utils';
import APP_PATHS from 'config/AppPaths';

const ChannelDetails: FC = () => {
  const { id } = useParams();
  console.debug(id, 'channel id');
  const navigate = useNavigate();
  const [selectedChannelId, setSelectedChannelId] = useState<string>(id || '');

  const { data, isError, refetch, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } = useGetChannelslist({
    pageSize: 20,
  });

  const channelsList = isLoading ? Array(10).fill(0) : data?.pages.flatMap((page) => page.channels) || [];
  const hasMoreData = !isFetchingNextPage && hasNextPage;

  const selectedChannel = channelsList?.find((channel) => channel?.channel === selectedChannelId);
  console.debug(selectedChannel, channelsList, 'channel');

  //redirect if if id is null
  useEffect(() => {
    if (!isAddress(id || '')) navigate(APP_PATHS.Channels);
  }, [id]);

  return (
    <Box
      height="90vh"
      width="-webkit-fill-available"
      padding="spacing-md spacing-sm"
      display="flex"
      justifyContent="flex-start"
      // margin={{ initial: 'spacing-none spacing-sm spacing-sm spacing-xl', ml: 'spacing-sm', lp: 'spacing-sm' }}
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
      />
      <ChannelDetail
        channel={selectedChannel}
        isLoading={isLoading}
      />
    </Box>
  );
};

export { ChannelDetails };
