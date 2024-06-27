// React and other libraries
import { FC } from 'react';

//Hooks
import { Activity } from 'queries';
import { useGetRewardsActivities, useGetUserRewardsDetails } from 'queries/hooks/rewards';
import { useAccount } from 'hooks';

//Helpers
import { walletToCAIP10 } from 'helpers/w2w';

//Components
import { Box } from 'blocks';
import { RewardsActivitiesListItem } from './RewardsActivitiesListItem';

export type RewardActivitiesProps = {};

const RewardsActivitiesList: FC<RewardActivitiesProps> = () => {
  const { account } = useAccount();

  const { data: rewardActivitiesResponse, isLoading: isLoadingActivities } = useGetRewardsActivities();

  // Getting user Id by wallet address
  const caip10WalletAddress = walletToCAIP10({ account });
  const { data: userDetails, isLoading: isLoadingUserDetails } = useGetUserRewardsDetails({
    caip10WalletAddress: caip10WalletAddress,
  });

  const isLoading = isLoadingUserDetails || isLoadingActivities;

  // If there are activities then render them else render 5 skeletons
  const activityList = isLoading ? Array(3).fill(0) : rewardActivitiesResponse?.activities || [];

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={{ ml: 's4', initial: 's2' }}
    >
      {activityList.map((activity: Activity) => (
        <RewardsActivitiesListItem
          userId={userDetails?.userId || ''}
          activity={activity}
          isLoadingItem={isLoading}
        />
      ))}
    </Box>
  );
};

export { RewardsActivitiesList };
