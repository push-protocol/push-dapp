import { FC } from 'react';
import { Box, Text } from 'blocks';

export type AnalyticsOverviewProps = {};

const StatsContainer: FC<{ title: string; stats: string }> = ({ title, stats }) => {
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
      <Text variant="h3-bold">{Number(stats).toLocaleString()}</Text>
    </Box>
  );
};

const AnalyticsOverview: FC<AnalyticsOverviewProps> = () => {
  return (
    <Box
      backgroundColor="surface-primary"
      borderRadius="radius-md"
      padding="spacing-md"
      display="flex"
      gap="spacing-sm"
      flexDirection="column"
      justifyContent="space-between"
      minWidth="22%"
    >
      <Text variant="h4-bold">Analytics Overview</Text>
      <StatsContainer
        title="Notifications Sent"
        stats="123456"
      />
      <StatsContainer
        title="Subscribers"
        stats="123456"
      />
      <StatsContainer
        title="Messages Sent"
        stats="123456"
      />
    </Box>
  );
};

export { AnalyticsOverview };
