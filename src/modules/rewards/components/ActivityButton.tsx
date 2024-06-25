import { FC } from 'react';
import DiscordActivityButton from './DiscordActivityButton';
import TwitterActivityButton from './TwitterActivityButton';
import DefaultActivityButton from './DefaultActivityButton';
import { ActvityType } from 'queries';

type ActivityButtonProps = {
  userId: string;
  activityTypeId: string;
  activityType: ActvityType;
  refetchActivity: () => void;
  setErrorMessage: (errorMessage: string) => void;
};

const ActivityButton: FC<ActivityButtonProps> = ({
  userId,
  activityTypeId,
  refetchActivity,
  activityType,
  setErrorMessage
}) => {


  let componentToRender;
  switch (activityType) {
    case 'follow_push_on_discord':
      componentToRender = (
        <DiscordActivityButton
          userId={userId}
          activityTypeId={activityTypeId}
          refetchActivity={refetchActivity}
          setErrorMessage={setErrorMessage}
        />
      );
      break;
    case 'follow_push_on_twitter':
      componentToRender = (
        <TwitterActivityButton
          userId={userId}
          activityTypeId={activityTypeId}
          refetchActivity={refetchActivity}
        />
      );
      break;
    default:
      componentToRender = (
        <DefaultActivityButton
          userId={userId}
          activityTypeId={activityTypeId}
          refetchActivity={refetchActivity}
        />
      );
      break;
  }

  return <div>{componentToRender}</div>;
};

export default ActivityButton;
