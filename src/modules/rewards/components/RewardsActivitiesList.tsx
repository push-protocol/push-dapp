import { FC } from 'react';

import { css } from 'styled-components';

import { Box, Lock, Text } from 'blocks';
import { useAccount } from 'hooks';
import { walletToCAIP10 } from 'helpers/w2w';
import { Activity, useGetRewardsActivities, useGetUserRewardsDetails } from 'queries';
import useLockedStatus from '../hooks/useLockedStatus';

import { RewardsActivitiesListItem } from './RewardsActivitiesListItem';

export type RewardActivitiesProps = {};

const RewardsActivitiesList: FC<RewardActivitiesProps> = () => {
  const { account, isWalletConnected } = useAccount();

  const { data: rewardActivitiesResponse, isLoading: isLoadingActivities } = useGetRewardsActivities();

  // Getting user Id by wallet address
  const caip10WalletAddress = walletToCAIP10({ account });
  const { data: userDetails } = useGetUserRewardsDetails({
    caip10WalletAddress: caip10WalletAddress,
  });

  const isLoading = isLoadingActivities;

  // If there are activities then render them else render 2 skeletons
  const activityList = rewardActivitiesResponse?.activities?.map((page) => page) || [];

  // Filter activities based on the index
  const firstGroupActivities = isLoading
    ? Array(2).fill(0)
    : activityList.filter((activity) => activity.index >= 0 && activity.index <= 1);

  const secondGroupActivities = isLoading ? Array(7).fill(0) : activityList.filter((activity) => activity.index >= 11);

  const { isLocked } = useLockedStatus();

  return (
    <Box
      display="flex"
      flexDirection="column"
      // overflow="auto"
      gap="spacing-sm"
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
      {(isLocked || !isWalletConnected) && (
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
          <Lock
            size={28}
            color="icon-tertiary"
          />
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
    </Box>
  );
};

export { RewardsActivitiesList };
