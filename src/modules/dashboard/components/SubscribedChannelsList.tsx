//Hooks
import { useAccount } from 'hooks';

//Hooks
import { useGetUserSubscriptions } from 'queries';

//Constants
import { hottestChannels } from '../Dashboard.constants';
import { appConfig } from 'config';

// Components
import { Box, Button, EmptyInbox, Link, Separator, Text } from 'blocks';
import { ChannelListItem } from './ChannelListItem';

//Types
import { EnvKeys } from '../Dashboard.types';
import { EmptyChannelList } from './EmptyChannelList';

const HottestChannelsList = () => {
  return hottestChannels[appConfig.appEnv as EnvKeys]?.map((channel, index) => (
    <Box>
      <ChannelListItem
        key={index}
        channelAddress={channel}
      />
      {index != hottestChannels[appConfig.appEnv as EnvKeys].length - 1 && <Separator />}
    </Box>
  ));
};

const SubscribedChannelsList = () => {
  const { data: userSubscriptions, isLoading, refetch } = useGetUserSubscriptions();

  console.log("User Subscriptions >>", userSubscriptions);

  const { wallet } = useAccount();
  return wallet?.accounts?.length ? (
    <>
      {userSubscriptions?.map((channel, index) => (
        <Box>
          <ChannelListItem
            key={index}
            channelAddress={channel.channel}
            userSetting={JSON.parse(channel.user_settings)}
            isLoading={isLoading}
            refetchUserSubscriptions={refetch}
          />
          {index != userSubscriptions.length - 1 && <Separator />}
        </Box>
      ))}
      {!isLoading && !userSubscriptions?.length && (
        <EmptyChannelList
          heading="No Channels Subscribed"
          subHeading="Channels that you are subscribed to will show up here."
        />
      )}
    </>
  ) : (
    <HottestChannelsList />
  );
};

export { SubscribedChannelsList };
