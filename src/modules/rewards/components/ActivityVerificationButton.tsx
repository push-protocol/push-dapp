// React and other libraries
import { useMemo } from 'react';

// third party libraries
import { useSelector } from 'react-redux';

// hooks
import { useAuthWithButton } from '../hooks/useWithAuthButton';
import { useVerifyTwitter } from '../hooks/useVerifyTwitter';
import { useAccount } from 'hooks';
import { useVerifyDiscord } from '../hooks/useVerifyDiscord';

// types
import { ActvityType } from 'queries/types';
import { UserStoreType } from 'types';

// components
import { Button } from 'blocks';

type ActivityVerificationButtonProps = {
  userId: string;
  activityTypeId: string;
  activityType: ActvityType;
  refetchActivity: () => void;
  setErrorMessage: (errorMessage: string) => void;
};

export const ActivityVerificationButton = ({
  activityType,
  activityTypeId,
  refetchActivity,
  setErrorMessage,
  userId,
}: ActivityVerificationButtonProps) => {
  const { isWalletConnected } = useAccount();
  const { userPushSDKInstance } = useSelector((state: UserStoreType) => state.user);

  const { handleTwitterVerification, verifyingTwitter, twitterActivityStatus } = useVerifyTwitter({
    activityTypeId,
    refetchActivity,
    setErrorMessage,
  });

  const { handleDiscordVerification, verifyingDiscord, discordActivityStatus } = useVerifyDiscord({
    activityTypeId,
    refetchActivity,
    setErrorMessage,
  });

  const activityData = useMemo(() => {
    if (activityType === 'follow_push_on_discord') {
      return {
        isLoading: verifyingDiscord,
        label: 'Verify',
        action: handleDiscordVerification,
        isVerificationComplete: discordActivityStatus == 'Claimed',
      };
    }

    if (activityType === 'follow_push_on_twitter') {
      return {
        isLoading: verifyingTwitter,
        label: 'Verify',
        action: handleTwitterVerification,
        isVerificationComplete: twitterActivityStatus == 'Claimed' || twitterActivityStatus == 'Pending',
      };
    }
  }, [activityType, userPushSDKInstance]);

  const { isAuthenticated, authButton } = useAuthWithButton({
    onSuccess: (userDetails) => activityData?.action(userDetails?.userId),
  });

  if (isAuthenticated && isWalletConnected && !userPushSDKInstance?.readmode()) {
    return (
      <Button
        variant="tertiary"
        size="small"
        onClick={() => activityData?.action(userId)}
        disabled={activityData?.isVerificationComplete}
      >
        {activityData?.isVerificationComplete ? 'Verifying...' : activityData?.label ? activityData?.label : 'Verify'}
      </Button>
    );
  }

  return authButton;
};
