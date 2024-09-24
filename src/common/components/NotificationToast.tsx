import { NotificationEvent } from '@pushprotocol/restapi';
import { NotificationItem, chainNameType } from '@pushprotocol/uiweb';
import { Box, Text } from 'blocks';
import { useBlocksTheme } from 'blocks/Blocks.hooks';
import { FC } from 'react';
import { css, useTheme } from 'styled-components';

type NotificationToastProps = {
  notification: NotificationEvent | null;
};

const NotificationToast: FC<NotificationToastProps> = ({ notification }) => {
  const payload = notification?.message?.payload;
  const { mode } = useBlocksTheme();
  return (
    <Box
      display="flex"
      flexDirection="column"
      borderRadius="radius-sm"
      backgroundColor="surface-primary"
      border="border-sm solid stroke-tertiary"
      padding="spacing-sm"
      gap="spacing-xxs"
    >
      {notification && (
        <NotificationItem
          notificationTitle={payload?.title}
          notificationBody={payload?.body}
          cta={payload?.cta}
          image={payload?.embed}
          app={notification?.channel?.name}
          icon={notification?.channel?.icon}
          url={notification?.channel?.url}
          chainName={notification?.source as chainNameType}
          theme={mode}
        />
      )}
    </Box>
  );
};

export { NotificationToast };
