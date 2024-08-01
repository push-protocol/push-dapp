import { FC } from 'react';

import { css } from 'styled-components';
import InfiniteScroll from 'react-infinite-scroller';

import { Box, Lock, Text } from 'blocks';
import { useAccount } from 'hooks';
import { walletToCAIP10 } from 'helpers/w2w';
import { Activity, useGetRewardsActivities, useGetUserRewardsDetails } from 'queries';
import useLockedStatus from '../hooks/useLockedStatus';

import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { RewardsActivitiesListItem } from './RewardsActivitiesListItem';

export type RewardActivitiesProps = {};

const RewardsActivitiesList: FC<RewardActivitiesProps> = () => {
  const { account } = useAccount();

  const {
    data: rewardActivitiesResponse,
    isLoading: isLoadingActivities,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGetRewardsActivities({ pageSize: 50 });

  // Getting user Id by wallet address
  const caip10WalletAddress = walletToCAIP10({ account });
  const { data: userDetails } = useGetUserRewardsDetails({
    caip10WalletAddress: caip10WalletAddress,
  });

  const isLoading = isLoadingActivities;
  // const isLoading = isLoadingUserDetails || isLoadingActivities;

  // If there are activities then render them else render 2 skeletons
  const activityList = rewardActivitiesResponse?.pages.flatMap((page) => page.activities) || [];

  // Filter activities based on the index
  const firstGroupActivities = isLoading
    ? Array(2).fill(0)
    : activityList.filter((activity) => activity.index >= 0 && activity.index <= 1);

  const secondGroupActivities = isLoading ? Array(7).fill(0) : activityList.filter((activity) => activity.index >= 11);

  const hasMoreData = !isFetchingNextPage && hasNextPage;

  const { isLocked } = useLockedStatus();

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
        {firstGroupActivities.map((activity: Activity) => (
          <RewardsActivitiesListItem
            key={activity.activityType}
            userId={userDetails?.userId || ''}
            activity={activity}
            isLoadingItem={isLoading}
            isLocked={isLocked}
          />
        ))}
        {isLocked && (
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            margin="spacing-md spacing-none"
            gap="spacing-xxs"
            css={css`
              &:before,
              &:after {
                content: '';
                flex: 1 1;
                border-bottom: 1px solid var(--stroke-secondary);
                margin: auto;
              }
              &:before {
                margin-right: var(--s3);
              }
              &:after {
                margin-left: var(--s3);
              }
            `}
          >
            <Lock size={28} />
            <Text
              variant="bs-semibold"
              color="text-tertiary"
            >
              Verify X and Discord to unlock more activities
            </Text>
          </Box>
        )}

        {secondGroupActivities.map((activity: Activity) => (
          <RewardsActivitiesListItem
            key={activity.activityType}
            userId={userDetails?.userId || ''}
            activity={activity}
            isLoadingItem={isLoading}
            isLocked={isLocked}
          />
        ))}
      </InfiniteScroll>
    </Box>
  );
};

export { RewardsActivitiesList };
