// React and other libraries
import { useEffect, useState } from 'react';

// hooks
import { useAccount } from 'hooks';
import { useGetRewardActivityStatus, useGetUserRewardsDetails } from 'queries';

// helpers
import { walletToCAIP10 } from 'helpers/w2w';
import { isUserNotFound } from '../utils/resolveError';

// types
import { useRewardsContext } from 'contexts/RewardsContext';

const useLockedStatus = () => {
  const { account, isWalletConnected } = useAccount();
  const { setIsLocked } = useRewardsContext();
  const [hasMounted, setHasMounted] = useState(false);

  const caip10WalletAddress = walletToCAIP10({ account });
  const { data: userDetails, status, error } = useGetUserRewardsDetails({ caip10WalletAddress });

  const { mutate: sendRecentActivities } = useGetRewardActivityStatus({
    userId: userDetails?.userId as string,
  });

  useEffect(() => {
    if (!hasMounted) {
      if (isWalletConnected && userDetails?.userId) {
        // do componentDidMount logic
        setHasMounted(true);
        handleLockStatus();
      }
    }

    if (status === 'error' && isWalletConnected) {
      if (isUserNotFound(error)) {
        setIsLocked(true);
      }
    }
  }, [userDetails?.userId, isWalletConnected, account, status]);

  const getLockStatus = (data: any) => {
    if (
      data?.follow_push_on_discord?.status === 'COMPLETED' &&
      (data?.follow_push_on_twitter?.status === 'COMPLETED' || data?.follow_push_on_twitter?.status === 'PENDING')
    ) {
      setIsLocked(false);
    } else {
      setIsLocked(true);
    }
  };

  const handleLockStatus = () => {
    if (!userDetails?.userId) {
      console.log('No userId, exiting handleLockStatus');
      return;
    }

    sendRecentActivities(
      {
        userId: userDetails?.userId,
        activities: ['follow_push_on_discord', 'follow_push_on_twitter'],
      },
      {
        onSuccess: (data) => {
          getLockStatus(data?.activities);
        },

        onError: (err) => {
          console.error('Error in sendRecentActivities:', err);
        },
      }
    );
  };

  return { handleLockStatus };
};

export default useLockedStatus;
