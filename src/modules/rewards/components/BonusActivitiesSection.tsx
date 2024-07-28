// React and other libraries
import { FC } from 'react';

// third party libraries
import { css } from 'styled-components';

// hooks
import { useGetRewardsActivities, useGetUserRewardsDetails } from 'queries';
import { useAccount } from 'hooks';

// helpers
import { walletToCAIP10 } from 'helpers/w2w';

// components
import { Box, Text } from 'blocks';
import { BonusActivitiesItem } from './BonusActivitiesItem';

export type BonusActivitiesSectionProps = {};

const BonusActivities: FC<BonusActivitiesSectionProps> = () => {
  const { account } = useAccount();

  const { data: rewardActivitiesResponse, isLoading: isLoadingActivities } = useGetRewardsActivities({ pageSize: 50 });

  // Getting user Id by wallet address
  const caip10WalletAddress = walletToCAIP10({ account });
  const { data: userDetails } = useGetUserRewardsDetails({
    caip10WalletAddress: caip10WalletAddress,
  });

  const isLoading = isLoadingActivities;

  // If there are activities then render them else render 2 skeletons
  const activityList = isLoading
    ? Array(8).fill(0)
    : rewardActivitiesResponse?.pages.flatMap((page) => page.activities) || [];

  const bonusActivities = activityList.filter((activity) => activity.index >= 5 && activity.index <= 12);

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="spacing-sm"
    >
      <Text
        variant="h4-bold"
        color="text-primary"
      >
        Bonus Activities
      </Text>

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
          />
        ))}
      </Box>
    </Box>
  );
};

export { BonusActivities };
