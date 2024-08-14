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
  NotificationImg,
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
      padding={{ ml: 'spacing-none', initial: 'spacing-lg spacing-md' }}
      justifyContent="space-between"
      gap={{ tb: 'spacing-xs', ml: 'spacing-xs', initial: 'spacing-md' }}
    >
      <Box
        display="flex"
        flexDirection="row"
        gap="spacing-xs"
        alignItems="center"
        width={{ tb: '-webkit-fill-available', initial: 'inherit' }}
      >
        {mode === 'dark' ? <CommunicationDark /> : <Communication />}
        <Text
          variant="h5-semibold"
          color="text-primary"
        >
          Your communication super app for web3 & blockchain.
        </Text>
      </Box>

      <Box
        display="flex"
        flexDirection="row"
        gap="spacing-xs"
        alignItems="center"
        width={{ tb: '-webkit-fill-available', initial: 'inherit' }}
      >
        {mode === 'dark' ? <NotificationDark /> : <NotificationImg />}
        <Text
          variant="h5-semibold"
          color="text-primary"
        >
          Subscribe and get notifications from your favorite protocols.
        </Text>
      </Box>

      <Box
        display="flex"
        flexDirection="row"
        gap="spacing-xs"
        alignItems="center"
        width={{ tb: '-webkit-fill-available', initial: 'inherit' }}
      >
        {mode === 'dark' ? <ChatDark /> : <ChatIllustration />}
        <Text
          variant="h5-semibold"
          color="text-primary"
        >
          Send and receive chats. Join vibrant communities.
        </Text>
      </Box>
    </Box>
  );
};

export { DashboardSubHeader };
