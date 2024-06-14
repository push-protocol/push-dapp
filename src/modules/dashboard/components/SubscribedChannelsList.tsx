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
const EmptySubscribedChannelsList = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap="s4"
      margin="s9 s0 s0 s0"
    >
      <EmptyInbox
        size={48}
        color="gray-600"
      />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="s1"
        width={{ initial: '50%', ll: 'auto' }}
      >
        <Text
          textAlign="center"
          variant="h5-bold"
          color={{ light: 'black', dark: 'white' }}
        >
          No Channels Subscribed
        </Text>
        <Text
          textAlign="center"
          variant="bs-regular"
          color={{ light: 'gray-600', dark: 'gray-500' }}
        >
          Channels that you are subscribed to will show up here.
        </Text>
      </Box>
      <Link to={'/channels'}>
        <Button
          variant="tertiary"
          size="small"
        >
          Explore Channels
        </Button>
      </Link>
    </Box>
  );
};
const SubscribedChannelsList = () => {
  const { data: userSubscriptions, isLoading, refetch } = useGetUserSubscriptions();

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
      {!isLoading && !userSubscriptions?.length && <EmptySubscribedChannelsList />}
    </>
  ) : (
    <HottestChannelsList />
  );
};

export { SubscribedChannelsList };
