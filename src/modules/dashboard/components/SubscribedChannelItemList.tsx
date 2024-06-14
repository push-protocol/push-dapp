//Hooks
import { useAccount } from 'hooks';

//Constants
import { HottestChannels } from '../Dashboard.constants';

// Components
import { Box, Separator } from 'blocks';
import { ChannelItem } from './ChannelItem';

import { useGetUserSubscriptions } from 'queries';
import { appConfig } from 'config';
import { EnvKeys } from '../Dashboard.types';

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
    : HottestChannels[appConfig.appEnv as EnvKeys]?.map((channel, index) => (
        <Box>
          <ChannelItem
            key={index}
            channelAddress={channel}
          />
          {index != HottestChannels[appConfig.appEnv as EnvKeys].length - 1 && <Separator />}
        </Box>
      ));
};

export { SubscribedChannelItemList };
