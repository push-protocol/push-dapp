// React and other libraries
import { useEffect } from 'react';

// hooks
import { useAccount } from 'hooks';
import {
  RewardActivityStatus,
  RewardActivityStatusResponse,
  useGetRewardActivityStatus,
  useGetUserRewardsDetails,
} from 'queries';

// helpers
import { walletToCAIP10 } from 'helpers/w2w';
import { isUserNotFound } from '../utils/resolveError';

// types
import { useRewardsContext } from 'contexts/RewardsContext';

const useLockedStatus = () => {
  const { account, isWalletConnected } = useAccount();
  const { setIsLocked } = useRewardsContext();

  const caip10WalletAddress = walletToCAIP10({ account });
  const { data: userDetails, status, error } = useGetUserRewardsDetails({ caip10WalletAddress });

  const {
    data: sendRecentActivities,
    refetch: refetchRecentActivities,
    status: statusRecentActivities,
  } = useGetRewardActivityStatus(
    {
      userId: userDetails?.userId as string,
      activities: ['follow_push_on_discord', 'follow_push_on_twitter'],
    },
    !!userDetails?.userId
  );

  const getLockStatus = () => {
    if (!sendRecentActivities || Object.keys(sendRecentActivities).length === 0) return;

    const activities = sendRecentActivities?.activities as RewardActivityStatusResponse;
    const discordStatus = activities?.follow_push_on_discord as RewardActivityStatus;
    const twitterStatus = activities?.follow_push_on_twitter as RewardActivityStatus;

    if (
      discordStatus?.status === 'COMPLETED' &&
      (twitterStatus?.status === 'COMPLETED' || twitterStatus?.status === 'PENDING')
    ) {
      setIsLocked(false);
    } else {
      setIsLocked(true);
    }
  };

  useEffect(() => {
    if (isWalletConnected && userDetails?.userId) {
      getLockStatus();
    }
    if (status === 'error' && isWalletConnected) {
      if (isUserNotFound(error)) {
        setIsLocked(true);
      }
    }
  }, [userDetails?.userId, isWalletConnected, account, status]);

  return { getLockStatus, refetchRecentActivities, statusRecentActivities };
};

export default useLockedStatus;
