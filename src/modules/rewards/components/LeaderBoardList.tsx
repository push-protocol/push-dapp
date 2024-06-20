// React and other libraries
import { FC } from 'react';

//Hooks
import { useGetRewardsLeaderboard } from 'queries';

//Components
import { LeaderboardListItem } from './LeaderBoardListItem';
import { Box } from 'blocks';

//Helpers
import { caip10ToWallet } from 'helpers/w2w';

const LeaderBoardList: FC = () => {
  const { data, isLoading } = useGetRewardsLeaderboard();

  // If there are channels then render them else render 5 skeletons
  const leaderboardList = isLoading ? Array(5).fill(0) : data;

  return (
    <Box
      maxHeight="calc(100vh - 356px)"
      overflow="scroll"
    >
      {leaderboardList!.map((item, index) => (
        <LeaderboardListItem
          key={`${index}`}
          rank={`${index + 1}`}
          address={caip10ToWallet(item.userWallet)}
          points={item.totalPoints}
          isLoading={isLoading}
        />
      ))}
    </Box>
  );
};

export { LeaderBoardList };
