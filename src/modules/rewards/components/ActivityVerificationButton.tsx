// React and other libraries
import { useMemo } from 'react';

// third party libraries
import { useSelector } from 'react-redux';
import { css } from 'styled-components';

// hooks
import { useAuthWithButton } from '../hooks/useWithAuthButton';
import { useVerifyTwitter } from '../hooks/useVerifyTwitter';
import { useAccount } from 'hooks';
import { useVerifyDiscord } from '../hooks/useVerifyDiscord';

// types
import { ActvityType } from 'queries/types';
import { UserStoreType } from 'types';

// components
import { Box, Button } from 'blocks';
import UnlockProfileWrapper, { UNLOCK_PROFILE_TYPE } from 'components/chat/unlockProfile/UnlockProfileWrapper';
import { useRewardsAuth } from '../hooks/useRewardsAuth';

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

  // const { setShowConnectModal } = useRewardsAuth();

  const { handleTwitterVerification } = useVerifyTwitter({
    activityTypeId,
    refetchActivity,
    setErrorMessage,
  });

  const { handleDiscordVerification } = useVerifyDiscord({
    activityTypeId,
    refetchActivity,
    setErrorMessage,
  });

  const activityData = useMemo(() => {
    if (activityType === 'follow_push_on_discord') {
      return {
        isLoading: false,
        label: 'Verify',
        action: handleDiscordVerification,
      };
    }

    if (activityType === 'follow_push_on_twitter') {
      return {
        isLoading: false,
        label: 'Verify',
        action: handleTwitterVerification,
      };
    }
  }, [activityType, userPushSDKInstance]);

  const { isAuthenticated, authButton, showConnectModal, setShowConnectModal } = useAuthWithButton({
    onSuccess: (userDetails) => activityData?.action(userDetails?.userId),
  });

  const handleCloseModal = () => {
    setShowConnectModal(false);
  };

  console.log('Modal closed');
  console.log('isAuthenticated:', isAuthenticated);
  console.log('isWalletConnected:', isWalletConnected);
  console.log('showConnectModal:', showConnectModal);

  if (userPushSDKInstance && userPushSDKInstance?.readmode() && showConnectModal) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        width="-webkit-fill-available"
        height="-webkit-fill-available"
        alignItems="center"
        css={css`
          z-index: 99999;
        `}
      >
        <UnlockProfileWrapper
          type={UNLOCK_PROFILE_TYPE.MODAL}
          showConnectModal={showConnectModal}
          // onClose={handleCloseModal}
          // closeIcon={true}
          description="Unlock your profile to proceed."
        />
      </Box>
    );
  }

  if (isAuthenticated && isWalletConnected && !userPushSDKInstance?.readmode()) {
    return (
      <Button
        variant="tertiary"
        size="small"
        onClick={() => activityData?.action(userId)}
      >
        {activityData?.label || 'Verify'}
      </Button>
    );
  }

  return authButton;
};
