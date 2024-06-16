//Hooks
import { useGetUserSubscriptions } from 'queries';

// Components
import { Box, Separator } from 'blocks';
import { ChannelListItem } from './ChannelListItem';

import { EmptyChannelList } from './EmptyChannelList';

const SubscribedChannelsList = () => {
  const { data: subscribedChannels, isLoading, refetch, isSuccess } = useGetUserSubscriptions();

  // If there are channels then render them else render 5 skeletons
  const channelList = isLoading ? Array(5).fill(0) : subscribedChannels;

  return (
    <>
      {isSuccess && !isLoading && !subscribedChannels?.length && (
        <EmptyChannelList
          heading="No Channels Subscribed"
          subHeading="Channels that you are subscribed to will show up here."
        />
      )}
      {channelList?.map((channel, index) => (
        <Box key={`${index}`}>
          <ChannelListItem
            channelAddress={channel.channel}
            isLoading={isLoading}
            refetchChannels={refetch}
          />
          {index != channelList.length - 1 && <Separator />}
        </Box>
      ))}
    </>
  );
};

export { SubscribedChannelsList };
