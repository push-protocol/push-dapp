// React and other libraries
import { FC } from 'react';

//Components
import { LeaderBoardList } from './LeaderBoardList';
import { Box, Text } from 'blocks';

export type LeaderBoardSectionProps = {};

const LeaderBoardSection: FC<LeaderBoardSectionProps> = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="spacing-sm"
      backgroundColor="surface-primary"
    >
      <Text
        variant="h4-bold"
        display={{ ml: 'none', initial: 'block' }}
        color="text-primary"
      >
        Leaderboard
      </Text>
      <Text
        variant="h5-bold"
        display={{ ml: 'block', initial: 'none' }}
        color="text-primary"
      >
        Leaderboard
      </Text>

      <LeaderBoardList />
    </Box>
  );
};

export { LeaderBoardSection };
