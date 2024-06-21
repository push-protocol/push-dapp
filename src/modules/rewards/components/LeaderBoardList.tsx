// React and other libraries
import { FC } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

//Hooks
import { useGetRewardsLeaderboard, ModelledLeaderBoardUser } from 'queries';

//Components
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
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
  const { data, isError, refetch, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } =
    useGetRewardsLeaderboard({ pageSize: 20 });

  // If there are channels then render them else render 5 skeletons
  const leaderboardList = isLoading ? Array(5).fill(0) : data?.pages.flatMap((page) => page.users) || [];

  const hasMoreData = !isFetchingNextPage && hasNextPage;

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
          height="calc(100vh - 356px)"
          overflow="auto"
        >
          <InfiniteScroll
            pageStart={0}
            loadMore={() => fetchNextPage()}
            hasMore={hasMoreData}
            loader={
              <Box
                margin="s3"
                key="loader-spinner"
              >
                <LoaderSpinner
                  spinnerSize={24}
                  type={LOADER_TYPE.SEAMLESS}
                />
              </Box>
            }
            useWindow={false}
            threshold={150}
          >
            {leaderboardList.map((item: ModelledLeaderBoardUser, index: number) => (
              <LeaderboardListItem
                key={`${index}`}
                rank={item.rank}
                address={caip10ToWallet(item.userWallet)}
                points={item.totalPoints}
                isLoading={isLoading}
              />
            ))}
          </InfiniteScroll>
        </Box>
      </Box>
    )
  );
};

export { LeaderBoardList };
