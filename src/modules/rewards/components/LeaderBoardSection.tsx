// React and other libraries
import { FC } from 'react';

//Hooks

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
