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
      gap="s4"
      backgroundColor={{ dark: 'gray-900', light: 'white' }}
    >
      <Text
        variant="h4-bold"
        display={{ ml: 'none', dp: 'block' }}
        color={{ light: 'gray-1000', dark: 'gray-100' }}
      >
        Leaderboard
      </Text>
      <Text
        variant="h5-bold"
        display={{ ml: 'block', dp: 'none' }}
        color={{ light: 'gray-1000', dark: 'gray-100' }}
      >
        Leaderboard
      </Text>

      <LeaderBoardList />
    </Box>
  );
};

export { LeaderBoardSection };
