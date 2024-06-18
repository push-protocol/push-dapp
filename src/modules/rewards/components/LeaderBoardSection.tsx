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
    >
      <Text variant="h4-bold">Leaderboard</Text>
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
            color="gray-500"
          >
            RANK
          </Text>
          <Text
            variant="c-bold"
            color="gray-500"
          >
            USER
          </Text>
        </Box>
        <Text
          variant="c-bold"
          color="gray-500"
        >
          TOTAL POINTS
        </Text>
      </Box>
      <LeaderBoardList />
    </Box>
  );
};

export { LeaderBoardSection };
