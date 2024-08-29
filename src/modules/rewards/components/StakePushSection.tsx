// React and other libraries
import { FC, useState } from 'react';

// hooks
import { useAccount } from 'hooks';
import { useGetRewardsActivities, useGetUserRewardsDetails } from 'queries';
import { useRewardsContext } from 'contexts/RewardsContext';

// helpers
import { walletToCAIP10 } from 'helpers/w2w';
import { sortByIndexNumber } from '../utils/stakeRewardUtilities';

// components
import { Alert, Box, Clockwise, Skeleton, Text } from 'blocks';
import { StakePushActivitiesListItem } from './StakePushActivitiesListItem';
import { RewardsActivityTitle } from './RewardsActivityTitle';
import { useFormattedDuration } from '../hooks/useFormattedDuration';

export type StakePushPoints = {
  title: string;
  subtitle: string;
  timeline?: boolean;
  bottomText?: boolean;
  multiplier?: boolean;
};

const StakePushSection: FC<StakePushPoints> = ({ title, subtitle, timeline, bottomText, multiplier }) => {
  const { account, isWalletConnected } = useAccount();
  const { isLocked } = useRewardsContext();
  const { formattedDuration } = useFormattedDuration();
  const [errorMessage, setErrorMessage] = useState<string>('');

  const { data: rewardActivitiesResponse, isLoading: isLoadingActivities } = useGetRewardsActivities();

  // Getting user Id by wallet address
  const caip10WalletAddress = walletToCAIP10({ account });
  const { data: userDetails } = useGetUserRewardsDetails({
    caip10WalletAddress: caip10WalletAddress,
  });

  const isLoading = isLoadingActivities;

  // If there are activities then render them else render 2 skeletons
  const activityList = rewardActivitiesResponse?.activities.flatMap((page) => page) || [];

  // Filter and sort activities based on the type
  const stakePushArray = isLoading
    ? Array(5).fill(0)
    : activityList
        .filter((activity) => activity.index.startsWith(multiplier ? 'multiplier-push' : 'point-push'))
        .sort(sortByIndexNumber);

  const uniV2PushArray = isLoading
    ? Array(5).fill(0)
    : activityList
        .filter((activity) => activity.index.startsWith(multiplier ? 'multiplier-uni-v2' : 'point-uni-v2'))
        .sort(sortByIndexNumber);

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="spacing-md"
    >
      <Box
        display="flex"
        flexDirection={{ ml: 'column', initial: 'row' }}
        width="-webkit-fill-available"
        justifyContent="space-between"
        gap={{ ml: 'spacing-sm' }}
      >
        <Box>
          <Text
            variant="h4-bold"
            color="text-primary"
          >
            {title}
          </Text>

          <RewardsActivityTitle
            activityTitle={subtitle}
            isLoading={false}
            color="text-tertiary"
            variant="bm-regular"
          />
        </Box>

        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          gap="spacing-xxxs"
        >
          {isWalletConnected && timeline && (
            <Skeleton
              isLoading={formattedDuration == null}
              width="240px"
              height="20px"
            >
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                gap="spacing-xxxs"
              >
                <Clockwise
                  size={24}
                  color="icon-brand-medium"
                />
                <Text
                  variant="bs-semibold"
                  color="text-tertiary"
                >
                  Activity resets in {formattedDuration}
                </Text>
              </Box>
            </Skeleton>
          )}
        </Box>
      </Box>

      {errorMessage && (
        <Box width="-webkit-fill-available">
          <Alert
            heading={errorMessage}
            variant="error"
            onClose={() => setErrorMessage('')}
          />
        </Box>
      )}

      <Box
        display="flex"
        flexDirection="row"
        width="100%"
        gap="spacing-sm"
      >
        <Box
          display="flex"
          flexDirection="column"
          width="100%"
          gap="spacing-sm"
        >
          {stakePushArray?.map((activity) => (
            <StakePushActivitiesListItem
              key={activity.activityType}
              userId={userDetails?.userId || ''}
              activity={activity}
              isLoadingItem={isLoading}
              setErrorMessage={setErrorMessage}
              isLocked={isLocked}
            />
          ))}
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          width="100%"
          gap="spacing-sm"
        >
          {uniV2PushArray?.map((activity) => (
            <StakePushActivitiesListItem
              key={activity.activityType}
              userId={userDetails?.userId || ''}
              activity={activity}
              isLoadingItem={isLoading}
              setErrorMessage={setErrorMessage}
              isLocked={isLocked}
            />
          ))}
        </Box>
      </Box>

      {bottomText && (
        <Text
          variant="bm-regular"
          color="text-tertiary"
          textAlign="center"
        >
          Activity rewards will be distributed and added to your points after the epoch ends.
        </Text>
      )}
    </Box>
  );
};

export { StakePushSection };
