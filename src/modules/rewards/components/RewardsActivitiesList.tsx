// React and other libraries
import { FC } from 'react';

// Third-party libraries
import { useSelector } from 'react-redux';

//Hooks
import { Activity } from 'queries';
import { useGetRewardsActivities, useGetUserRewardsDetails } from 'queries/hooks/rewards';

//Components
import { Box } from 'blocks';
import { RewardsActivitiesListItem } from './RewardsActivitiesListItem';
import { ActivityTypeID } from '../Rewards.constants';
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';


export type RewardActivitiesProps = {
};

const RewardsActivitiesList: FC<RewardActivitiesProps> = () => {

  const {
    data: rewardActivitiesResponse,
    isLoading: loadingActivities,
  } = useGetRewardsActivities();

  const rewardActivities = rewardActivitiesResponse?.activities;
  const allActivities = [...(rewardActivities ?? [])];

  const filteredActivities = allActivities.filter(activity => activity.id !== ActivityTypeID.TWITTER.Id);

  const { userPushSDKInstance } = useSelector((state: any) => {
    return state.user;
  });


  //Getting user Id by wallet address
  const walletAddressinCaipFormat = `eip155:${userPushSDKInstance.account}`;

  const {
    data: userDetails,
    isLoading,
    error,
    isFetching,
  } = useGetUserRewardsDetails({ walletAddress: walletAddressinCaipFormat });

  const isPending = isLoading || isFetching;

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={{ ml: "s4", initial: "s1" }}
    >
      {loadingActivities ? <LoaderSpinner spinnerSize={32} type={LOADER_TYPE.SEAMLESS} /> : (
        <>
          {userDetails && filteredActivities.map((activity: Activity) => (
            <RewardsActivitiesListItem
              userId={userDetails?.userId}
              activity={activity}
            />
          ))}
        </>
      )}
    </Box>
  );
};

export { RewardsActivitiesList };
