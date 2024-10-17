import { FC } from 'react';

import { NotificationItem, chainNameType } from '@pushprotocol/uiweb';

import { Box, Skeleton, Text } from 'blocks';

import { useBlocksTheme } from 'blocks/Blocks.hooks';
import { useGetChannelNotifications } from 'queries';
import { css } from 'styled-components';

export type RecentNotificationsProps = { channelAddress: string };
const RecentNotifications: FC<RecentNotificationsProps> = ({ channelAddress }) => {
  const { mode } = useBlocksTheme();
  const {
    data: notificationsData,
    isLoading: isNotificationsLoading,
    isSuccess,
  } = useGetChannelNotifications(channelAddress, 1, 20);

  const notifications = isNotificationsLoading ? Array(10).fill(0) : notificationsData;
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      height="100%"
      overflow="scroll"
      customScrollbar
      gap="spacing-sm"
    >
      <Box padding={{ ml: 'spacing-none spacing-sm' }}>
        <Text
          color="text-primary"
          variant="h4-semibold"
        >
          Recent Notifications
        </Text>
      </Box>
      <Box
        display="flex"
        width="-webkit-fill-available"
        height="100%"
        flexDirection="column"
        gap="spacing-sm"
        padding={{ ml: 'spacing-none spacing-xxs', initial: 'spacing-none spacing-xxs spacing-none spacing-none' }}
        margin={{ ml: 'spacing-none spacing-xxs', initial: 'spacing-none spacing-sm spacing-none spacing-none' }}
        overflow="scroll"
        justifyContent="flex-start"
        customScrollbar={true}
      >
        {isSuccess && !isNotificationsLoading && !notifications?.length && (
          <Box
            display="flex"
            alignSelf="center"
            width="fit-content"
            borderRadius="radius-xl"
            backgroundColor="surface-secondary"
            padding="spacing-xxs spacing-sm"
          >
            <Text
              color="text-primary"
              variant="bs-regular"
            >
              {' '}
              No notifications to show yet
            </Text>
          </Box>
        )}
        {notifications?.map((item) => {
          const payload = item?.message?.payload;
          return (
            <Skeleton isLoading={isNotificationsLoading}>
              <Box
                key={item.payload_id}
                css={css`
                  & > div {
                    margin: 0;
                  }
                `}
              >
                <NotificationItem
                  notificationTitle={payload?.title}
                  notificationBody={payload?.body}
                  cta={payload?.cta}
                  image={payload?.embed}
                  app={item?.channel?.name}
                  icon={item?.channel?.icon}
                  url={item?.channel?.url}
                  chainName={item?.source as chainNameType}
                  theme={mode}
                />
              </Box>
            </Skeleton>
          );
        })}
      </Box>
    </Box>
  );
};
export { RecentNotifications };
