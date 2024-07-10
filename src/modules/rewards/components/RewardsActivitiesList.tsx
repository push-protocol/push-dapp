import { FC } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import { Box } from 'blocks';
import { useAccount } from 'hooks';
import { walletToCAIP10 } from 'helpers/w2w';
import { Activity, useGetRewardsActivities, useGetUserRewardsDetails } from 'queries';

import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { RewardsActivitiesListItem } from './RewardsActivitiesListItem';
import { appConfig } from 'config';

export type RewardActivitiesProps = {};

const RewardsActivitiesList: FC<RewardActivitiesProps> = () => {
  const { account } = useAccount();

  const {
    data: rewardActivitiesResponse,
    isLoading: isLoadingActivities,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGetRewardsActivities({ pageSize: 5 });

  // Getting user Id by wallet address
  const caip10WalletAddress = walletToCAIP10({ account });
  const { data: userDetails } = useGetUserRewardsDetails({
    caip10WalletAddress: caip10WalletAddress,
  });

  const isLoading = isLoadingActivities;
  // const isLoading = isLoadingUserDetails || isLoadingActivities;

  // If there are activities then render them else render 3 skeletons on dev, and 2 on other env
  const activityList = isLoading
    ? Array(appConfig.appEnv == 'dev' ? 3 : 2).fill(0)
    : rewardActivitiesResponse?.pages.flatMap((page) => page.activities) || [];

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
            key={activity.activityType}
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
