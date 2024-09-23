// React and other libraries
import { FC, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { useLocation } from 'react-router-dom';

//Hooks
import { useGetRewardsLeaderboard, ModelledLeaderBoardUser } from 'queries';

//Components
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { LeaderboardListItem } from './LeaderBoardListItem';
import { Box } from 'blocks';

//Helpers
import { caip10ToWallet } from 'helpers/w2w';
import { LeaderBoardNullState } from './LeaderboardNullState';
import { LeaderboardListColumns } from './LeaderBoardListColumns';

const LeaderBoardList: FC = () => {
  const location = useLocation();
  const url = '/points/leaderboard';
  const { data, isError, refetch, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } =
    useGetRewardsLeaderboard({ pageSize: 20 });

  // If there are channels then render them else render 10 skeletons
  const leaderboardList = isLoading ? Array(10).fill(0) : data?.pages.flatMap((page) => page.users) || [];

  const hasMoreData = !isFetchingNextPage && hasNextPage;

  useEffect(() => {
    if (url === location.pathname) {
      refetch();
    }
  }, [location.pathname]);

  return !leaderboardList.length ? (
    <LeaderBoardNullState
      refetchLeaderboard={isError ? refetch : undefined}
      heading="No Users Found"
      error={isError}
      subHeading={isError ? 'Please refresh to view the Leaderboard' : ''}
    />
  ) : (
    !!leaderboardList.length && (
      <Box
        gap="spacing-sm"
        display="flex"
        flexDirection="column"
      >
        <LeaderboardListColumns />
        <Box
          height="calc(100vh - 356px)"
          overflow="auto"
          customScrollbar={true}
        >
          <InfiniteScroll
            pageStart={0}
            loadMore={() => fetchNextPage()}
            hasMore={hasMoreData}
            loader={
              <Box
                margin="spacing-xs"
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
