import { Box } from 'blocks';
import { useQueryClient } from '@tanstack/react-query';
import InfiniteScroll from 'react-infinite-scroller';
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { PointsVaultListColumns } from './PointsVaultListColumns';
import { PointsVaultListItem } from './PointsVaultListItem';
import {
  PointsVaultActivitiesResponse,
  pointsVaultRejectedUsers,
  useGetPointsVaultApprovedUsers,
  usePointsVaultToken,
} from 'queries';
import { LeaderBoardNullState } from 'modules/rewards/components/LeaderboardNullState';

type PointsVaultApprovedListProps = {
  query: {
    wallet?: string;
    twitter?: string;
  };
};

const PointsVaultApprovedList = ({ query }: PointsVaultApprovedListProps) => {
  const token = usePointsVaultToken();

  const queryClient = useQueryClient();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, isError, refetch } =
    useGetPointsVaultApprovedUsers({
      status: 'COMPLETED',
      token,
      pageSize: 20,
      twitter: query.twitter,
      wallet: query.wallet,
      activityTypeId: 'follow_push_on_twitter',
    });

  const hasMoreData = !isFetchingNextPage && hasNextPage;

  const pointsVaultList = isLoading
    ? Array(5).fill(0)
    : data?.pages.flatMap((page: PointsVaultActivitiesResponse) => page.activities) || [];

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

  const handleRefetch = () => {
    refetch();
    queryClient.invalidateQueries({ queryKey: [pointsVaultRejectedUsers] });
  };

  return (
    <Box
      gap="spacing-sm"
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
          {pointsVaultList.map((item, index) => (
            <PointsVaultListItem
              key={item?.activityId || index}
              item={item}
              isLoading={isLoading}
              refetch={handleRefetch}
            />
          ))}
        </InfiniteScroll>
      </Box>
    </Box>
  );
};

export { PointsVaultApprovedList };
