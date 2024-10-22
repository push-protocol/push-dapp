import { FC } from 'react';

import { css } from 'styled-components';

import { Box, Lock, Text } from 'blocks';
import { useAccount } from 'hooks';
import { walletToCAIP10 } from 'helpers/w2w';
import {
  Activity,
  StakeActivityResponse,
  useGetRewardsActivities,
  useGetRewardsActivity,
  useGetUserRewardsDetails,
} from 'queries';
import { useRewardsContext } from 'contexts/RewardsContext';

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
  const socialActivities = isLoading
    ? Array(2).fill(0)
    : activityList.filter((activity) => activity.index.startsWith(`social-activity`) && activity?.status === 'ENABLED');

  const platformRewardActivities = isLoading
    ? Array(7).fill(0)
    : activityList.filter((activity) => activity.index.startsWith(`reward-activity`) && activity?.status === 'ENABLED');

  const channelSubscriptionActivities = activityList.filter(
    (activity) => activity.index.startsWith(`channel-subscription`) && activity?.status === 'ENABLED'
  );

  const { isLocked } = useRewardsContext();

  // Combine all activities into a single array
  const allActivities = [...socialActivities, ...platformRewardActivities, ...channelSubscriptionActivities];

  // Extract the `activityType` from each activity and filter out any undefined values
  const activityTypes = allActivities
    .map((activity) => activity.activityType) // Extract `activityType`
    .filter(Boolean); // Remove undefined/null values

  const {
    data: allUsersActivity,
    isLoading: isAllActivitiesLoading,
    refetch: refetchActivity,
  } = useGetRewardsActivity(
    { userId: userDetails?.userId as string, activityTypes: activityTypes },
    { enabled: !!userDetails?.userId && activityTypes.length > 0 }
  );

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="spacing-sm"
    >
      {/* These are the social activites Twitter and discord */}
      {socialActivities.map((activity: Activity) => (
        <RewardsActivitiesListItem
          key={activity.activityType}
          userId={userDetails?.userId || ''}
          activity={activity}
          isLoadingItem={isLoading}
          isLocked={isLocked}
          allUsersActivity={allUsersActivity as StakeActivityResponse}
          isAllActivitiesLoading={isAllActivitiesLoading}
          refetchActivity={refetchActivity}
        />
      ))}
      {(isLocked || !isWalletConnected) && (
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          margin="spacing-xxs spacing-none"
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

      {/* Activites related specific channel subscription */}
      {channelSubscriptionActivities.map((activity: Activity) => (
        <RewardsActivitiesListItem
          key={activity.activityType}
          userId={userDetails?.userId || ''}
          activity={activity}
          isLoadingItem={isLoading}
          isLocked={isLocked}
          allUsersActivity={allUsersActivity as StakeActivityResponse}
          isAllActivitiesLoading={isAllActivitiesLoading}
          refetchActivity={refetchActivity}
        />
      ))}

      {/* These are other platform specifc reward activities */}
      {platformRewardActivities.map((activity: Activity) => (
        <RewardsActivitiesListItem
          key={activity.activityType}
          userId={userDetails?.userId || ''}
          activity={activity}
          isLoadingItem={isLoading}
          isLocked={isLocked}
          allUsersActivity={allUsersActivity as StakeActivityResponse}
          isAllActivitiesLoading={isAllActivitiesLoading}
          refetchActivity={refetchActivity}
        />
      ))}
    </Box>
  );
};

export { RewardsActivitiesList };
