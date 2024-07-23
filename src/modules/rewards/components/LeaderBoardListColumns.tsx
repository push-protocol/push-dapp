import { FC } from 'react';
import { Box, Text } from 'blocks';

const LeaderboardListColumns: FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
    >
      <Box
        display="flex"
        gap="spacing-xs"
      >
        <Text
          variant="c-bold"
          color="text-tertiary"
        >
          RANK
        </Text>
        <Text
          variant="c-bold"
          color="text-tertiary"
        >
          USER
        </Text>
      </Box>
      <Text
        variant="c-bold"
        color="text-tertiary"
      >
        TOTAL POINTS
      </Text>
    </Box>
  );
};

export { LeaderboardListColumns };
