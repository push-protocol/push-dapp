// React and other libraries
import { FC, useState } from 'react';

// third party libraries
import { css } from 'styled-components';

// hooks
import {
  StakeActivityResponse,
  useGetRewardsActivities,
  useGetRewardsActivity,
  useGetUserRewardsDetails,
} from 'queries';
import { useAccount } from 'hooks';
import { useRewardsContext } from 'contexts/RewardsContext';

// helpers
import { walletToCAIP10 } from 'helpers/w2w';

// components
import { Alert, Box, Lozenge, Star, Text } from 'blocks';
import { BonusActivitiesItem } from './BonusActivitiesItem';

export type BonusActivitiesSectionProps = {};

const BonusActivities: FC<BonusActivitiesSectionProps> = () => {
  const { account } = useAccount();
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

  const bonusActivities = isLoading
    ? Array(8).fill(0)
    : activityList.filter((activity) => activity.index.startsWith(`bonus-activity`) && activity?.status === 'ENABLED');

  const { isLocked } = useRewardsContext();

  // Combine all activities into a single array
  const allActivities = [...bonusActivities];

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
      <Box
        display="flex"
        flexDirection="row"
        gap="spacing-xs"
        alignItems="center"
      >
        <Text
          variant="h4-bold"
          color="text-primary"
        >
          Bonus Activities
        </Text>
        <Lozenge icon={<Star />}>NEW</Lozenge>
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
        display="grid"
        css={css`
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: var(--s4);
          @media (max-width: 1200px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        `}
      >
        {bonusActivities.map((activity) => (
          <BonusActivitiesItem
            key={activity.activityType}
            userId={userDetails?.userId || ''}
            activity={activity}
            isLoadingItem={isLoading}
            setErrorMessage={setErrorMessage}
            isLocked={isLocked}
            allUsersActivity={allUsersActivity as StakeActivityResponse}
            isAllActivitiesLoading={isAllActivitiesLoading}
            refetchActivity={refetchActivity}
          />
        ))}
      </Box>
    </Box>
  );
};

export { BonusActivities };
