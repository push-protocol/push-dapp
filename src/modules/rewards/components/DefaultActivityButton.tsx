// React and other libraries
import { FC } from 'react';

//Components
import { ActivityStatusButton } from './ActivityStatusButton';

type DefaultActivityButtonProps = {
  userId: string;
  activityTypeId: string;
  refetchActivity: () => void;
};

const DefaultActivityButton: FC<DefaultActivityButtonProps> = ({ userId, activityTypeId, refetchActivity }) => {
  const handleVerification = () => {
    console.log(' Verification is called', userId, activityTypeId, refetchActivity);
  };

  return (
    <ActivityStatusButton
      label='Verify'
      disabled={false}
      onClick={handleVerification}
    />
  );
};

export { DefaultActivityButton };
