import { NotificationEvent } from '@pushprotocol/restapi';
import { NotificationItem, chainNameType } from '@pushprotocol/uiweb';
import { Box, Link, notification } from 'blocks';
import { useBlocksTheme } from 'blocks/Blocks.hooks';
import APP_PATHS from 'config/AppPaths';
import { FC } from 'react';

type InAppNotificationsProps = {
  notificationDetails: NotificationEvent | null;
};

const InAppChannelNotifications: FC<InAppNotificationsProps> = ({ notificationDetails }) => {
  const payload = notificationDetails?.message?.payload;
  const { mode } = useBlocksTheme();
  return (
    <Link
      to={payload?.cta || APP_PATHS.Inbox}
      target="_blank"
    >
      <Box
        display="flex"
        width="397px"
      >
        {notificationDetails && (
          <NotificationItem
            isToast
            onClose={() => notification.hide()}
            notificationTitle={payload?.title}
            notificationBody={payload?.body}
            cta={payload?.cta}
            image={payload?.embed}
            app={notificationDetails?.channel?.name}
            icon={notificationDetails?.channel?.icon}
            url={notificationDetails?.channel?.url}
            chainName={notificationDetails?.source as chainNameType}
            theme={mode}
          />
        )}
      </Box>
    </Link>
  );
};

export { InAppChannelNotifications };
