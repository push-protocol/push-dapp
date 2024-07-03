// React and other libraries
import { FC } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

//Hooks
import { Activity } from 'queries';
import { useAccount } from 'hooks';
import { useGetRewardsActivities, useGetUserRewardsDetails } from 'queries/hooks/rewards';

//Components
import { RewardsActivitiesListItem } from './RewardsActivitiesListItem';
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';

//Helpers
import { walletToCAIP10 } from 'helpers/w2w';

//Components
import { Box } from 'blocks';

export type RewardActivitiesProps = {};

const RewardsActivitiesList: FC<RewardActivitiesProps> = () => {
  const { account } = useAccount();

  const {
    data: rewardActivitiesResponse,
    isLoading: isLoadingActivities,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = useGetRewardsActivities({ pageSize: 5 });

  // Getting user Id by wallet address
  const caip10WalletAddress = walletToCAIP10({ account });
  const { data: userDetails, isLoading: isLoadingUserDetails } = useGetUserRewardsDetails({
    caip10WalletAddress: caip10WalletAddress,
  });

  const isLoading = isLoadingUserDetails || isLoadingActivities;

  // If there are activities then render them else render 5 skeletons
  const activityList = isLoading ? Array(3).fill(0) : rewardActivitiesResponse?.pages.flatMap((page) => page.activities) || [];

  const hasMoreData = !isFetchingNextPage && hasNextPage;

  return (
    <Box
      display="flex"
      flexDirection="column"
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
        {activityList.map((activity: Activity) => (
          <RewardsActivitiesListItem
            userId={userDetails?.userId || ''}
            activity={activity}
            isLoadingItem={isLoading}
          />
        ))}
      </InfiniteScroll>
    </Box>
  );
};

export { RewardsActivitiesList };
