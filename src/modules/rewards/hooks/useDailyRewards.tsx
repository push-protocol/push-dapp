// React and other libraries
import { useCallback, useEffect, useState } from 'react';

// hooks
import { useGetRewardsActivities, useGetUserRewardsDetails, useSendRecentActivities } from 'queries';
import { useAccount } from 'hooks';

// helpers
import { walletToCAIP10 } from 'helpers/w2w';
import { checkTimeToCurrent, getActivityStatus, getDayNumber } from '../utils/getDailyActivityStatus';

const useDailyRewards = () => {
  const { account, isWalletConnected } = useAccount();

  // State variables
  const [activeItem, setActiveItem] = useState<any | null>(null);
  const [activeDay, setActiveDay] = useState<number>(0);
  const [isActivityDisabled, setIsActivityDisabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoadingRewards, setIsLoadingRewards] = useState(false);

  // Getting user ID by wallet address
  const caip10WalletAddress = walletToCAIP10({ account });
  const { data: userDetails } = useGetUserRewardsDetails({
    caip10WalletAddress,
  });
  const { data: rewardActivitiesResponse, isLoading: isLoadingActivities } = useGetRewardsActivities({ pageSize: 50 });

  const isLoading = isLoadingActivities;

  // Flatten the activities response and filter daily activities
  const activityList = isLoading
    ? Array(7).fill(0)
    : rewardActivitiesResponse?.pages.flatMap((page) => page.activities) || [];
  const dailyActivities = activityList.filter((activity) => activity.index < 0);
  const dailyRewardsActivities = dailyActivities?.sort((a, b) => getDayNumber(a) - getDayNumber(b));

  // Mutation for sending recent activities
  const { mutate: sendRecentActivities } = useSendRecentActivities({
    userId: userDetails?.userId as string,
  });

  // Reset state function
  const resetState = useCallback(() => {
    setActiveDay(0);
    setActiveItem(null);
    setIsActivityDisabled(false);
    setIsLoadingRewards(false);
  }, []);

  // Effect for handling check-in on first render
  useEffect(() => {
    if (isWalletConnected && userDetails?.userId) {
      if (dailyRewardsActivities.length <= 0) return;
      setIsLoadingRewards(true);
      handleCheckIn();
    }

    if (!isWalletConnected) {
      resetState();
    }
  }, []);

  // Effect for handling check-in when user details change or wallet is connected
  useEffect(() => {
    if (isWalletConnected && userDetails?.userId) {
      if (dailyRewardsActivities.length <= 0) return;
      setIsLoadingRewards(true);
      handleCheckIn();
    }

    if (!isWalletConnected) {
      resetState();
    }
  }, [userDetails?.userId, isWalletConnected, account]);

  // Handle check-in function
  const handleCheckIn = () => {
    if (!userDetails?.userId) return;

    const activityTitles = dailyRewardsActivities?.map((activity) => activity.activityType);

    sendRecentActivities(
      {
        userId: userDetails?.userId as string,
        activities: activityTitles,
      },
      {
        onSuccess: handleSuccess,
        onError: (err) => {
          console.error('Error', err);
        },
      }
    );
  };

  // Handle success response from sending recent activities
  const handleSuccess = (data: any) => {
    const { activities: dataActivity } = data;
    const { isEmpty, firstEmptyActivity, latestActivityKey } = getActivityStatus(dataActivity);

    const targetActivity = isEmpty
      ? dailyRewardsActivities?.find((activity) => activity.activityType === firstEmptyActivity)
      : dailyRewardsActivities?.find((activity) => activity.activityType === latestActivityKey);

    const newDay = isEmpty ? 1 : getDayNumber(targetActivity) + 1;
    const newDayData = dailyRewardsActivities?.find(
      (activity) => activity.activityType === `daily_check_in_7_days_day${newDay}`
    );

    if (latestActivityKey && !isEmpty) {
      const number = checkTimeToCurrent(dataActivity?.[latestActivityKey]?.updatedAt);
      if (number) {
        setIsActivityDisabled(true);
      }
    }

    setActiveDay(newDay);
    setActiveItem(newDayData);
    setIsLoadingRewards(false);
  };

  return {
    account,
    activeItem,
    activeDay,
    isActivityDisabled,
    errorMessage,
    isLoadingRewards,
    userDetails,
    dailyRewardsActivities,
    handleCheckIn,
    setErrorMessage,
    resetState,
  };
};

export default useDailyRewards;
