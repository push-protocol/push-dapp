// React and other libraries
import { FC } from 'react';

// Component
import { DiscordActivityButton } from './DiscordActivityButton';
import { TwitterActivityButton } from './TwitterActivityButton';
import { DefaultActivityButton } from './DefaultActivityButton';
import { ActivityStatusButton } from './ActivityStatusButton';

//Queries
import { ActvityType, UsersActivity } from 'queries';

type ActivityButtonProps = {
  userId: string;
  activityTypeId: string;
  activityType: ActvityType;
  refetchActivity: () => void;
  setErrorMessage: (errorMessage: string) => void;
  usersSingleActivity: UsersActivity;
};

const ActivityButton: FC<ActivityButtonProps> = ({
  userId,
  activityTypeId,
  refetchActivity,
  activityType,
  setErrorMessage,
  usersSingleActivity
}) => {

  switch (usersSingleActivity.status) {
    case 'COMPLETED':
      return <ActivityStatusButton label="Claimed" disabled={true} />;
    case 'PENDING':
      return <ActivityStatusButton label="Pending" disabled={true} />;
    default:
      switch (activityType) {
        case 'follow_push_on_discord':
          return <DiscordActivityButton
            userId={userId}
            activityTypeId={activityTypeId}
            refetchActivity={refetchActivity}
            setErrorMessage={setErrorMessage}
          />
        case 'follow_push_on_twitter':
          return <TwitterActivityButton
            userId={userId}
            activityTypeId={activityTypeId}
            refetchActivity={refetchActivity}
            setErrorMessage={setErrorMessage}
          />
        default:
          return <DefaultActivityButton
            userId={userId}
            activityTypeId={activityTypeId}
            refetchActivity={refetchActivity}
          />
      }
  }
};

export { ActivityButton };
