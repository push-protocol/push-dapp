// React and other libraries
import { FC } from 'react';

//Queries
import { ActvityType, UsersActivity } from 'queries';
import { Box, Button } from 'blocks';
import { ActivityVerificationButton } from './ActivityVerificationButton';

type ActivityButtonProps = {
  userId: string;
  activityTypeId: string;
  activityType: ActvityType;
  refetchActivity: () => void;
  setErrorMessage: (errorMessage: string) => void;
  usersSingleActivity?: UsersActivity;
};

const ActivityButton: FC<ActivityButtonProps> = ({
  userId,
  activityTypeId,
  refetchActivity,
  activityType,
  setErrorMessage,
  usersSingleActivity,
}) => {
  if (usersSingleActivity?.status === 'COMPLETED') {
    return (
      <Button
        variant="tertiary"
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
        disabled
      >
        Pending
      </Button>
    );
  }

  return (
    // Verify button
    <Box>
      <ActivityVerificationButton
        activityType={activityType}
        userId={userId}
        activityTypeId={activityTypeId}
        refetchActivity={refetchActivity}
        setErrorMessage={setErrorMessage}
      />
    </Box>
  );
};

export { ActivityButton };
