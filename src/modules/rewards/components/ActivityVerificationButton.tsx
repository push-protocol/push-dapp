// React and other libraries
import { useMemo } from 'react';

// third party libraries
import { useSelector } from 'react-redux';

// hooks
import { useAuthWithButton } from '../hooks/useWithAuthButton';
import { useVerifyTwitter } from '../hooks/useVerifyTwitter';
import { useAccount } from 'hooks';
import { useVerifyDiscord } from '../hooks/useVerifyDiscord';
import { useVerifyRewards } from '../hooks/useVerifyRewards';

// helpers
import {
  bonusRewardActivities,
  channelSubscriptionActivities,
  dailyRewardActivities,
  otherRewardActivities,
  stakeRewardActivities,
} from '../utils/activityTypeArray';

// types
import { ActvityType } from 'queries/types';
import { UserStoreType } from 'types';

// components
import { Button } from 'blocks';

type ActivityVerificationButtonProps = {
  userId: string;
  activityTypeId: string;
  activityTypeIndex?: string;
  activityType: ActvityType;
  refetchActivity: () => void;
  setErrorMessage: (errorMessage: string) => void;
  isLoadingActivity: boolean;
  label?: string;
};

export const ActivityVerificationButton = ({
  activityType,
  activityTypeId,
  activityTypeIndex,
  refetchActivity,
  setErrorMessage,
  userId,
  isLoadingActivity,
  label,
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

  const { handleRewardsVerification, verifyingRewards, rewardsActivityStatus } = useVerifyRewards({
    activityTypeId,
    refetchActivity,
    setErrorMessage,
    activityTypeIndex,
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

    if (
      otherRewardActivities.includes(activityType) ||
      bonusRewardActivities.includes(activityType) ||
      stakeRewardActivities.includes(activityType) ||
      channelSubscriptionActivities.includes(activityType)
    ) {
      return {
        isLoading: verifyingRewards,
        label: 'Claim',
        action: handleRewardsVerification,
        isVerificationComplete: rewardsActivityStatus == 'Claimed' || rewardsActivityStatus == 'Pending',
      };
    }

    if (dailyRewardActivities.includes(activityType)) {
      return {
        isLoading: verifyingRewards,
        label: 'Check In',
        action: handleRewardsVerification,
        isVerificationComplete: rewardsActivityStatus == 'Claimed' || rewardsActivityStatus == 'Pending',
      };
    }
  }, [
    activityType,
    userPushSDKInstance,
    twitterActivityStatus,
    discordActivityStatus,
    verifyingRewards,
    verifyingTwitter,
    verifyingDiscord,
  ]);

  const { isAuthenticated, authButton } = useAuthWithButton({
    isLoading: isLoadingActivity,
    onSuccess: (userDetails) => activityData?.action(userDetails?.userId),
    label: label,
  });

  if (isAuthenticated && isWalletConnected && !userPushSDKInstance?.readmode()) {
    return (
      <Button
        variant="tertiary"
        size="small"
        loading={activityData?.isLoading || activityData?.isVerificationComplete}
        onClick={() => activityData?.action(userId)}
        disabled={isLoadingActivity}
      >
        {activityData?.isVerificationComplete ? 'Verifying...' : activityData?.label ? activityData?.label : 'Verify'}
      </Button>
    );
  }

  return authButton;
};
