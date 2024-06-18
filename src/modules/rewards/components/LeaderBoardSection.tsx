import { FC } from 'react';
import { Box, Text } from 'blocks';
import { LeaderBoardList } from './LeaderBoardList';

export type LeaderBoardSectionProps = {};

const LeaderBoardSection: FC<LeaderBoardSectionProps> = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="s4"
      backgroundColor={{ dark: 'gray-900', light: 'white' }}
    >
      <Text
        variant="h4-bold"
        color={{ light: 'gray-1000', dark: 'gray-100' }}
      >
        Leaderboard
      </Text>
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
      <LeaderBoardList />
    </Box>
  );
};

export { LeaderBoardSection };
