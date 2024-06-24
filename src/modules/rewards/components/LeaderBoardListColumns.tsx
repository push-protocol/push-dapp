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
        gap="s3"
      >
        <Text
          variant="c-bold"
          color={{ light: 'gray-500', dark: 'gray-600' }}
        >
          RANK
        </Text>
        <Text
          variant="c-bold"
          color={{ light: 'gray-500', dark: 'gray-600' }}
        >
          USER
        </Text>
      </Box>
      <Text
        variant="c-bold"
        color={{ light: 'gray-500', dark: 'gray-600' }}
      >
        TOTAL POINTS
      </Text>
    </Box>
  );
};

export { LeaderboardListColumns };
