// Components
import { Box, Separator } from 'blocks';
import { ChannelItem } from './ChannelItem';
import { useGetUserSubscriptions } from 'queries';
import { useState } from 'react';

const SubscribedChannelItemList = () => {
  const { data: userSubscriptions, isLoading, isPending } = useGetUserSubscriptions();
  const [subscribed, setSubscribed] = useState(true);
  return userSubscriptions?.map((channel, index) => (
    <Box>
      <ChannelItem
        key={index}
        channelAddress={channel.channel}
        userSetting={channel.user_settings}
        isSubscribed={subscribed}
        setSubscribed={setSubscribed}
        isLoading={isLoading}
        isPending={isPending}
      />
      {index != userSubscriptions.length - 1 && <Separator />}
    </Box>
  ));
};

export { SubscribedChannelItemList };
