// React and other libraries
import { FC } from 'react';

//Queries
import { ActvityType, UsersActivity } from 'queries';
import { Button } from 'blocks';
import { ActivityVerificationButton } from './ActivityVerificationButton';

type ActivityButtonProps = {
  userId: string;
  activityTypeId: string;
  activityType: ActvityType;
  refetchActivity: () => void;
  setErrorMessage: (errorMessage: string) => void;
  usersSingleActivity?: UsersActivity;
  isLoadingActivity: boolean;
  startingLabel?: string;
};

const ActivityButton: FC<ActivityButtonProps> = ({
  userId,
  activityTypeId,
  refetchActivity,
  activityType,
  setErrorMessage,
  usersSingleActivity,
  isLoadingActivity,
  startingLabel,
}) => {
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
    // Verify button
    <ActivityVerificationButton
      activityType={activityType}
      userId={userId}
      activityTypeId={activityTypeId}
      refetchActivity={refetchActivity}
      setErrorMessage={setErrorMessage}
      isLoadingActivity={isLoadingActivity}
      startingLabel={startingLabel}
    />
  );
};

export { ActivityButton };
