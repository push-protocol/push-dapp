import { FC } from 'react';
import { Box, Skeleton, Text } from 'blocks';
import { useGetSentNotificationCount } from 'queries';

export type AnalyticsOverviewProps = {};

const StatsContainer: FC<{ title: string; stats: string; isLoading: boolean }> = ({ title, stats, isLoading }) => {
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
        <Text variant="h3-bold">{Number(stats).toLocaleString()}</Text>
      </Skeleton>
    </Box>
  );
};

const AnalyticsOverview: FC<AnalyticsOverviewProps> = () => {
  const { data: notificationCount, isLoading: loadingNotficationCount } = useGetSentNotificationCount();

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
        stats={`${notificationCount || 0}`}
        isLoading={loadingNotficationCount}
      />
      <StatsContainer
        title="Subscribers"
        stats="123456"
        isLoading={false}
      />
      <StatsContainer
        title="Messages Sent"
        stats="123456"
        isLoading={false}
      />
    </Box>
  );
};

export { AnalyticsOverview };
