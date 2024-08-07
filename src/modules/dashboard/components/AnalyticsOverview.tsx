import { FC } from 'react';
import { Box, Skeleton, Text } from 'blocks';
import { useGetSubscriberCount, useSentMessageCount, useSentNotificationCount } from 'queries';

export type AnalyticsOverviewProps = {};

const StatsContainer: FC<{ title: string; stats: number; isLoading: boolean }> = ({ title, stats, isLoading }) => {
  return (
    <Box
      display="flex"
      padding="spacing-sm spacing-md"
      borderRadius="radius-sm"
      border="border-sm solid stroke-secondary"
      backgroundColor="surface-primary"
      flexDirection="column"
      gap="spacing-xxxs"
    >
      <Text variant="h5-semibold">{title}</Text>
      <Skeleton isLoading={isLoading}>
        <Text variant="h3-bold">{stats.toLocaleString()}</Text>
      </Skeleton>
    </Box>
  );
};

const AnalyticsOverview: FC<AnalyticsOverviewProps> = () => {
  const { data: notificationCount, isLoading: loadingNotificationCount } = useSentNotificationCount();

  const { data: subscriberCount, isLoading: loadingSubscriberCount } = useGetSubscriberCount();

  const { data: messageCount, isLoading: loadingMessageCount } = useSentMessageCount();

  return (
    <Box
      backgroundColor="surface-primary"
      borderRadius="radius-md"
      padding="spacing-md"
      display="flex"
      gap="spacing-sm"
      flexDirection="column"
      minWidth={{ initial: '22%', tb: '30%' }}
    >
      <Text variant="h4-bold">Analytics Overview</Text>
      <StatsContainer
        title="Notifications Sent"
        stats={notificationCount || 0}
        isLoading={loadingNotificationCount}
      />
      <StatsContainer
        title="Subscribers"
        stats={subscriberCount || 0}
        isLoading={loadingSubscriberCount}
      />
      <StatsContainer
        title="Messages Sent"
        stats={messageCount || 0}
        isLoading={loadingMessageCount}
      />
    </Box>
  );
};

export { AnalyticsOverview };
