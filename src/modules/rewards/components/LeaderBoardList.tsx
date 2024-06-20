// React and other libraries
import { FC, useCallback, useRef } from 'react';

//Hooks
import { useGetRewardsLeaderboard, ModelledLeaderBoardUser } from 'queries';

//Components
import { LeaderboardListItem } from './LeaderBoardListItem';
import { Box, Text } from 'blocks';

//Helpers
import { caip10ToWallet } from 'helpers/w2w';
import { NullErrorLeaderboardList } from './NullErrorLeaderboardList';

const LeaderboardListColumns = () => {
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
const LeaderBoardList: FC = () => {
  const observer = useRef<IntersectionObserver>();

  const { data, isError, refetch, fetchNextPage, hasNextPage, isLoading, isFetching } = useGetRewardsLeaderboard({
    pageSize: 2,
  });

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

  return !leaderboardList.length ? (
    <NullErrorLeaderboardList
      refetchLeaderboard={isError ? refetch : undefined}
      heading="No Users Found"
      error={isError}
      subHeading={isError ? 'Please refresh to view the Leaderboard' : ''}
    />
  ) : (
    !!leaderboardList.length && (
      <Box
        gap="s4"
        display="flex"
        flexDirection="column"
      >
        <LeaderboardListColumns />
        <Box
          maxHeight="calc(100vh - 356px)"
          overflow="scroll"
        >
          {leaderboardList.map((item: ModelledLeaderBoardUser, index: number) => (
            <LeaderboardListItem
              ref={lastElementRef}
              key={`${index}`}
              rank={item.rank}
              address={caip10ToWallet(item.userWallet)}
              points={item.totalPoints}
              isLoading={isLoading}
            />
          ))}
        </Box>
      </Box>
    )
  );
};

export { LeaderBoardList };
