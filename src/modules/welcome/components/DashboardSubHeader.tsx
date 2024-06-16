// React + Web3 Essentials
import { FC } from 'react';

// Hooks
import { useBlocksTheme } from 'blocks/Blocks.hooks';

// Components
import {
  Box,
  ChatDark,
  ChatIllustration,
  Communication,
  CommunicationDark,
  Notification,
  NotificationDark,
  Text,
} from 'blocks';

export type DashboardSubHeaderProps = {};

const DashboardSubHeader: FC<DashboardSubHeaderProps> = () => {
  const { mode } = useBlocksTheme();

  return (
    <Box
      display="flex"
      flexDirection={{ tb: 'column', ml: 'column', initial: 'row' }}
      padding={{ ml: 's0', initial: 's8 s6' }}
      justifyContent="space-between"
      alignSelf="flex-start"
      gap={{ tb: 's3', ml: 's3', initial: 's6' }}
    >
      <Box
        display="flex"
        flexDirection="row"
        gap="s3"
        alignItems="center"
        width={{ tb: '-webkit-fill-available', initial: 'inherit' }}
      >
        {mode === 'dark' ? <CommunicationDark /> : <Communication />}
        <Text
          variant="h5-semibold"
          color={{ light: 'black', dark: 'white' }}
        >
          Your communication super app for web3 & blockchain.
        </Text>
      </Box>

      <Box
        display="flex"
        flexDirection="row"
        gap="s3"
        alignItems="center"
        width={{ tb: '-webkit-fill-available', initial: 'inherit' }}
      >
        {mode === 'dark' ? <NotificationDark /> : <Notification />}
        <Text
          variant="h5-semibold"
          color={{ light: 'black', dark: 'white' }}
        >
          Subscribe and get notifications from your favorite protocols.
        </Text>
      </Box>

      <Box
        display="flex"
        flexDirection="row"
        gap="s3"
        alignItems="center"
        width={{ tb: '-webkit-fill-available', initial: 'inherit' }}
      >
        {mode === 'dark' ? <ChatDark /> : <ChatIllustration />}
        <Text
          variant="h5-semibold"
          color={{ light: 'black', dark: 'white' }}
        >
          Send and receive chats. Join vibrant communities.
        </Text>
      </Box>
    </Box>
  );
};

export { DashboardSubHeader };
