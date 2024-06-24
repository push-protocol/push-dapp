// React and other libraries
import { FC } from 'react';

// Third-party libraries
import { useSelector } from 'react-redux';

//Hooks
import { Activity } from 'queries';
import { useGetRewardsActivities, useGetUserRewardsDetails } from 'queries/hooks/rewards';
import { useAccount } from 'hooks';

//Components
import { Box } from 'blocks';
import { RewardsActivitiesListItem } from './RewardsActivitiesListItem';
import { ActivityTypeID } from '../Rewards.constants';

export type RewardActivitiesProps = {};

const RewardsActivitiesList: FC<RewardActivitiesProps> = () => {
  const { account } = useAccount();

  const { data: rewardActivitiesResponse, isLoading: isLoadingActivities } = useGetRewardsActivities();

  const rewardActivities = rewardActivitiesResponse?.activities;
  const allActivities = [...(rewardActivities ?? [])];

  const filteredActivities = allActivities.filter((activity) => activity.id !== ActivityTypeID.TWITTER.Id);

  //Getting user Id by wallet address
  const walletAddressinCaipFormat = `eip155:${account}`;

  const { data: userDetails, isLoading: isLoadingUserDetails } = useGetUserRewardsDetails({
    walletAddress: walletAddressinCaipFormat,
  });

  const isLoading = isLoadingUserDetails || isLoadingActivities;

  // If there are activities then render them else render 5 skeletons
  const activityList = isLoading ? Array(3).fill(0) : filteredActivities || [];

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={{ ml: 's4', initial: 's1' }}
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
