// React and other libraries
import { useEffect, useState } from 'react';

// hooks
import { useAccount } from 'hooks';
import { useGetUserRewardsDetails, useSendRecentActivities } from 'queries';

// helpers
import { walletToCAIP10 } from 'helpers/w2w';

const useLockedStatus = () => {
  const { account, isWalletConnected } = useAccount();
  const [isLocked, setIsLocked] = useState(false);

  const caip10WalletAddress = walletToCAIP10({ account });
  const { data: userDetails } = useGetUserRewardsDetails({ caip10WalletAddress });

  const { mutate: sendRecentActivities } = useSendRecentActivities({
    userId: userDetails?.userId as string,
  });

  useEffect(() => {
    if (isWalletConnected && userDetails?.userId) {
      checkIfLocked();
    }

    if (!isWalletConnected) {
      setIsLocked(false); // Reset the lock status when the wallet is not connected
    }
  }, [userDetails?.userId, isWalletConnected, account]);

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

  return { isLocked };
};

export default useLockedStatus;