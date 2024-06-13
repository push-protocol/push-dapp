//Hooks
import { useAccount } from 'hooks';

//Constants
import { HottestChannels } from '../Dashboard.constants';

// Components
import { Box, Separator } from 'blocks';
import { ChannelItem } from './ChannelItem';

import { useGetUserSubscriptions } from 'queries';

const SubscribedChannelItemList = () => {
  const { data: userSubscriptions, isLoading, refetch } = useGetUserSubscriptions();

  const { wallet } = useAccount();

  return !!wallet?.accounts?.length
    ? userSubscriptions?.map((channel, index) => (
        <Box>
          <ChannelItem
            key={index}
            channelAddress={channel.channel}
            userSetting={JSON.parse(channel.user_settings)}
            isListLoading={isLoading}
            refetchUserSubscriptions={refetch}
          />
          {index != userSubscriptions.length - 1 && <Separator />}
        </Box>
      ))
    : HottestChannels?.map((channel, index) => (
        <Box>
          <ChannelItem
            key={index}
            channelAddress={channel}
          />
          {index != HottestChannels.length - 1 && <Separator />}
        </Box>
      ));
};

export { SubscribedChannelItemList };
