// Components
import { Box, Separator } from 'blocks';
import { ChannelItem } from './ChannelItem';
import { useGetUserSubscriptions } from 'queries';
import { useState } from 'react';

const SubscribedChannelItemList = () => {
  const { data: userSubscriptions, isLoading, isPending } = useGetUserSubscriptions();

  const [subscribed, setSubscribed] = useState(true);
  console.debug(userSubscriptions, 'userSubs');
  return userSubscriptions?.map((channel, index) => (
    <Box>
      <ChannelItem
        key={index}
        channelAddress={channel.channel}
        userSetting={JSON.parse(channel.user_settings)}
        setSubscribed={setSubscribed}
        isLoading={isLoading}
        isPending={isPending}
      />
      {index != userSubscriptions.length - 1 && <Separator />}
    </Box>
  ));
};

export { SubscribedChannelItemList };
