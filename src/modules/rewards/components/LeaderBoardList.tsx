// React and other libraries
import { FC, useCallback, useRef } from 'react';

//Hooks
import { useGetRewardsLeaderboard, ModelledLeaderBoardUser } from 'queries';

//Components
import { LeaderboardListItem } from './LeaderBoardListItem';
import { Box, Button } from 'blocks';

//Helpers
import { caip10ToWallet } from 'helpers/w2w';

const LeaderBoardList: FC = () => {
  const observer = useRef<IntersectionObserver>();

  const { data, fetchNextPage, hasNextPage, isLoading, isFetching } = useGetRewardsLeaderboard({ pageSize: 2 });

  // If there are channels then render them else render 5 skeletons
  const leaderboardList = isLoading ? Array(5).fill(0) : data?.pages?.flatMap((page) => page) || [];

  const lastElementRef = useCallback(
    (node: HTMLElement) => {
      if (isLoading) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetching) {
          fetchNextPage();
        }
      });

      if (node) observer.current.observe(node);
    },
    [fetchNextPage, hasNextPage, isFetching, isLoading]
  );

  return (
    <Box
      maxHeight="calc(100vh - 356px)"
      overflow="scroll"
    >
      {leaderboardList!.map((item: ModelledLeaderBoardUser, index: number) => (
        <LeaderboardListItem
          ref={lastElementRef}
          key={`${index}`}
          rank={item.rank}
          address={caip10ToWallet(item.userWallet)}
          points={item.totalPoints}
          isLoading={isLoading}
        />
      ))}
      <Button
        onClick={() => {
          console.debug('in next fetch', hasNextPage);
          fetchNextPage();
        }}
      >
        more
      </Button>
    </Box>
  );
};

export { LeaderBoardList };
