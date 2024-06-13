// Components
import { Box, Separator } from 'blocks';
import { ChannelItem } from './ChannelItem';
import { useGetUserSubscriptions } from 'queries';

const SubscribedChannelItemList = () => {
  const { data: userSubscriptions, isLoading, isPending } = useGetUserSubscriptions();
  return userSubscriptions?.map((channel, index) => (
    <Box>
      <ChannelItem
        key={index}
        channelAddress={channel}
        subscribed
        isLoading={isLoading}
        isPending={isPending}
      />
      {index != userSubscriptions.length - 1 && <Separator />}
    </Box>
  ));
};

export { SubscribedChannelItemList };
