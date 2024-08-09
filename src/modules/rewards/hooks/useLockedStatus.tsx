// React and other libraries
import { useEffect, useState } from 'react';

// hooks
import { useAccount } from 'hooks';
import { useGetRewardActivityStatus, useGetUserRewardsDetails } from 'queries';

// helpers
import { walletToCAIP10 } from 'helpers/w2w';

// types
import { AxiosError } from 'axios';

const useLockedStatus = () => {
  const { account, isWalletConnected } = useAccount();
  const [isLocked, setIsLocked] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  const caip10WalletAddress = walletToCAIP10({ account });
  const { data: userDetails, status, error } = useGetUserRewardsDetails({ caip10WalletAddress });

  const { mutate: sendRecentActivities } = useGetRewardActivityStatus({
    userId: userDetails?.userId as string,
  });

  // error responses
  const errorMessage = 'Failed to retrieve user';

  useEffect(() => {
    if (!hasMounted) {
      if (isWalletConnected && userDetails?.userId) {
        // do componentDidMount logic
        setHasMounted(true);
        checkIfLocked();
      }
    }

    if (status === 'error' && isWalletConnected) {
      if (error instanceof AxiosError && error?.response?.data?.error === errorMessage) {
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

  const checkIfLocked = () => {
    if (!userDetails?.userId) return;

    sendRecentActivities(
      {
        userId: userDetails.userId,
        activities: ['follow_push_on_discord', 'follow_push_on_twitter'],
      },
      {
        onSuccess: (data) => {
          getLockStatus(data.activities);
        },
        onError: (err) => {
          console.error('Error', err);
        },
      }
    );
  };

  return { isLocked, isWalletConnected, checkIfLocked };
};

export default useLockedStatus;
