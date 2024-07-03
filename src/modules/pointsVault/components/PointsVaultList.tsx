import { Box } from 'blocks';
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import InfiniteScroll from 'react-infinite-scroller';
import { PointsVaultListColumns } from './PointsVaultListColumns';
import { PointsVaultListItem } from './PointsVaultListItem';
import { PointsVaultActivitiesResponse } from 'queries';
import { LeaderBoardNullState } from 'modules/rewards/components/LeaderboardNullState';
import { InfiniteData } from '@tanstack/react-query';

export type PointsVaultListProps = {
  isLoading: boolean;
  isFetchingNextPage: boolean;
  hasNextPage: boolean;
  data: InfiniteData<PointsVaultActivitiesResponse> | undefined;
  isError: boolean;
  refetch: () => void;
  fetchNextPage: () => void;
};

const PointsVaultList = ({
  data,
  isLoading,
  hasNextPage,
  isFetchingNextPage,
  isError,
  refetch,
  fetchNextPage,
}: PointsVaultListProps) => {
  const hasMoreData = !isFetchingNextPage && hasNextPage;

  const pointsVaultList = isLoading ? Array(5).fill(0) : data?.pages.flatMap((page: any) => page) || [];

  if (!pointsVaultList.length) {
    return (
      <LeaderBoardNullState
        refetchLeaderboard={isError ? refetch : undefined}
        heading="No Users Found"
        error={isError}
        subHeading={isError ? 'Please refresh to view the List' : ''}
      />
    );
  }

  return (
    <Box
      gap="s4"
      display="flex"
      flexDirection="column"
    >
      <Box
        height="calc(100vh - 356px)"
        overflow="auto"
      >
        <PointsVaultListColumns />
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
          {pointsVaultList.map((item, index) => (
            <PointsVaultListItem
              key={item?.activityId || index}
              item={item}
              isLoading={isLoading}
            />
          ))}
        </InfiniteScroll>
      </Box>
    </Box>
  );
};

export { PointsVaultList };
