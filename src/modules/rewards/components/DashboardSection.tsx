import { FC } from 'react';
import { css } from 'styled-components';
import { Box, Button, RewardsCircle, Text } from 'blocks';

export type DashboardSectionProps = {
  onGetStarted: () => void;
};

const DashboardSection: FC<DashboardSectionProps> = ({ onGetStarted }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="s4"
    >
      <Text variant="h4-bold">Dashboard</Text>
      <Box
        borderRadius="var(--r6)"
        display="flex"
        height="108px"
        padding="s0 s6"
        alignItems="center"
        justifyContent="space-between"
        css={css`
          background: radial-gradient(174.95% 108.75% at 64.27% 0%, #debeff 30.74%, #c0fff7 100%);
        `}
      >
        <Box
          gap="s3"
          display="flex"
        >
          <RewardsCircle />
          <Box
            display="flex"
            flexDirection="column"
          >
            <Text variant="h4-semibold">Title line 1</Text>
            <Text variant="bl-regular">Body Text goes here</Text>
          </Box>
        </Box>
        <Button
          variant="tertiary"
          onClick={onGetStarted}
        >
          Get started
        </Button>
      </Box>
      <Box
        display="flex"
        gap="s6"
      >
        <Box
          width="-webkit-fill-available"
          display="flex"
          flexDirection="column"
          padding="s6"
          borderRadius="var(--r6)"
          gap="s3"
          border="1px solid gray-200"
        >
          <Text variant="h5-bold">TOTAL POINTS</Text>
          <Box>
            <Text variant="h1-bold">11,500</Text>
            <Text
              variant="h5-bold"
              color="gray-500"
            >
              Rank #240
            </Text>
          </Box>
        </Box>
        <Box
          width="-webkit-fill-available"
          display="flex"
          flexDirection="column"
          padding="s6"
          borderRadius="var(--r6)"
          gap="s3"
          border="1px solid gray-200"
        >
          <Text variant="h5-bold">REFFERAL POINTS</Text>
          <Box>
            <Text variant="h1-bold">10</Text>
            <Text
              variant="h5-bold"
              color="gray-500"
            >
              2 Users Invited
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { DashboardSection };
