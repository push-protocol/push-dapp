// React and other libraries
import { FC } from 'react';

//Hooks
import { useGetRewardsLeaderboard } from 'queries';

//Components
import { LeaderboardListItem } from './LeaderBoardListItem';
import { Box, Skeleton } from 'blocks';

//Helpers
import { caip10ToWallet } from 'helpers/w2w';

const LeaderBoardList: FC = () => {
  const { data, isLoading } = useGetRewardsLeaderboard();
  return (
    <Box
      maxHeight="calc(100vh - 356px)"
      overflow="scroll"
    >
      {data?.map((item, index) => (
        <Skeleton
          isLoading={isLoading}
          key={index}
        >
          <LeaderboardListItem
            key={index}
            rank={`${index + 1}`}
            address={caip10ToWallet(item.userWallet)}
            points={item.totalPoints}
          />
        </Skeleton>
      ))}
    </Box>
  );
};

export { LeaderBoardList };
