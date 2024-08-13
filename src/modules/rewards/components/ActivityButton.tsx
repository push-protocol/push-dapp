// React and other libraries
import { FC } from 'react';

//Queries
import { ActvityType, UsersActivity } from 'queries';
import { Button } from 'blocks';
import { ActivityVerificationButton } from './ActivityVerificationButton';

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
      activityTypeIndex={activityTypeIndex}
      refetchActivity={refetchActivity}
      setErrorMessage={setErrorMessage}
      isLoadingActivity={isLoadingActivity}
      label={label}
    />
  );
};

export { ActivityButton };
