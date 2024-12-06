// React and other libraries
import { FC } from 'react';

//Queries
import { ActvityType, useGetPushStakeEpoch, useGetUniV2StakeEpoch, UsersActivity } from 'queries';
import { Button } from 'blocks';
import { ActivityVerificationButton } from './ActivityVerificationButton';
import { useRewardsContext } from 'contexts/RewardsContext';

type ActivityButtonProps = {
  userId: string;
  activityTypeId: string;
  activityTypeIndex?: string;
  activityType: ActvityType;
  refetchActivity: () => void;
  setErrorMessage: (errorMessage: string) => void;
  usersSingleActivity?: UsersActivity;
  isLoadingActivity: boolean;
  label?: string;
  isStakeSection?: boolean;
  lifeTime?: boolean;
};

const ActivityButton: FC<ActivityButtonProps> = ({
  userId,
  activityTypeId,
  activityTypeIndex,
  refetchActivity,
  activityType,
  setErrorMessage,
  usersSingleActivity,
  isLoadingActivity,
  label,
}) => {
  const { resetEpoch } = useRewardsContext();
  const { data: pushStakeData } = useGetPushStakeEpoch();
  const { data: uniV2StakeData } = useGetUniV2StakeEpoch();
  const isPushEpochRelated =
    typeof usersSingleActivity?.activityTypeId === 'string' &&
    usersSingleActivity.activityTypeId.endsWith('push_epoch');

  const isUniV2EpochRelated =
    typeof usersSingleActivity?.activityTypeId === 'string' && usersSingleActivity.activityTypeId.endsWith('v2_epoch');

  const isEpochRelated =
    usersSingleActivity?.data?.currentEpoch == pushStakeData?.currentEpoch ||
    usersSingleActivity?.data?.currentEpoch == uniV2StakeData?.currentEpoch;

  // claimed status for the same epoch
  if (usersSingleActivity?.status === 'COMPLETED' && (isPushEpochRelated || isUniV2EpochRelated) && isEpochRelated) {
    console.log('claimed in this epoch button');
    return (
      <Button
        variant="tertiary"
        size="small"
        disabled
      >
        Claimed
      </Button>
    );
  }

  // default verify button for stake epoch section
  if (usersSingleActivity?.status === 'COMPLETED' && resetEpoch && (isPushEpochRelated || isUniV2EpochRelated)) {
    console.log('reset button');
    return (
      <ActivityVerificationButton
        activityType={activityType}
        userId={userId}
        activityTypeId={activityTypeId}
        activityTypeIndex={activityTypeIndex}
        refetchActivity={refetchActivity}
        setErrorMessage={setErrorMessage}
        isLoadingActivity={isLoadingActivity}
        label={label}
      />
    );
  }

  if (usersSingleActivity?.status === 'COMPLETED') {
    return (
      <Button
        variant="tertiary"
        size="small"
        disabled
      >
        Claimed
      </Button>
    );
  }

  if (usersSingleActivity?.status === 'PENDING') {
    return (
      <Button
        variant="tertiary"
        size="small"
        disabled
      >
        Pending
      </Button>
    );
  }

  return (
    // default verify button
    <ActivityVerificationButton
      activityType={activityType}
      userId={userId}
      activityTypeId={activityTypeId}
      activityTypeIndex={activityTypeIndex}
      refetchActivity={refetchActivity}
      setErrorMessage={setErrorMessage}
      isLoadingActivity={isLoadingActivity}
      label={label}
    />
  );
};

export { ActivityButton };
