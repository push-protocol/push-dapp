import { NotificationEvent } from '@pushprotocol/restapi';
import { NotificationItem, chainNameType } from '@pushprotocol/uiweb';
import { Box } from 'blocks';
import { useBlocksTheme } from 'blocks/Blocks.hooks';
import { FC } from 'react';

type NotificationToastProps = {
  notification: NotificationEvent | null;
};

const NotificationToast: FC<NotificationToastProps> = ({ notification }) => {
  const payload = notification?.message?.payload;
  const { mode } = useBlocksTheme();
  return (
    <Box
      display="flex"
      width="400px"
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
