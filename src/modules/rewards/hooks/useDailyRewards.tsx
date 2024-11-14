// React and other libraries
import { useCallback, useEffect, useState } from 'react';

// hooks
import {
  RewardActivityStatus,
  RewardActivityStatusResponse,
  useGetRewardActivityStatus,
  useGetRewardsActivities,
  useGetUserRewardsDetails,
} from 'queries';
import { useAccount } from 'hooks';

// helpers
import { walletToCAIP10 } from 'helpers/w2w';
import { checkTimeToCurrent, getActivityStatus, getDayNumber } from '../utils/resolveRecentActivityStatus';

// types
import { Activity } from 'queries';

const useDailyRewards = () => {
  const { account, isWalletConnected } = useAccount();

  // State variables
  const [activeItem, setActiveItem] = useState<Activity | null>(null);
  const [activeDay, setActiveDay] = useState(0);
  const [isActivityDisabled, setIsActivityDisabled] = useState(false);
  const [isLoadingRewards, setIsLoadingRewards] = useState(false);

  // Getting user ID by wallet address
  const caip10WalletAddress = walletToCAIP10({ account });
  const { data: userDetails } = useGetUserRewardsDetails({
    caip10WalletAddress,
  });
  const { data: rewardActivitiesResponse, isLoading: isLoadingActivities } = useGetRewardsActivities();

  const isLoading = isLoadingActivities || isLoadingRewards;

  // Flatten the activities response and filter daily activities
  const activityList = rewardActivitiesResponse?.activities.map((page) => page) || [];

  const dailyActivities = activityList.filter((activity) => activity.index.startsWith(`daily-activity`));
  const dailyRewardsActivities = isLoading
    ? Array(7).fill(0)
    : dailyActivities.sort((a, b) => {
        if (a && b) {
          return getDayNumber(a) - getDayNumber(b);
        }
        return 0;
      });

  const activityTitles = dailyRewardsActivities?.map((activity) => activity.activityType);

  // Check if dailyRewardsActivities is available and all activityTitles are defined
  const areActivitiesDefined = dailyRewardsActivities && activityTitles?.every((title) => title !== undefined);

  const { data: sendRecentActivities, refetch: refetchSendActivities } = useGetRewardActivityStatus(
    {
      userId: userDetails?.userId as string,
      activities: activityTitles as string[],
    },
    !!userDetails?.userId && areActivitiesDefined
  );

  // Reset state function
  const resetState = useCallback(() => {
    setActiveDay(0);
    setActiveItem(null);
    setIsActivityDisabled(false);
    setIsLoadingRewards(false);
  }, []);

  // Handle success response from sending recent activities
  const handleCheckIn = useCallback(() => {
    if (!sendRecentActivities || Object.keys(sendRecentActivities).length === 0) return;
    setIsLoadingRewards(true);

    const dataActivity = sendRecentActivities?.activities as RewardActivityStatusResponse;
    const { isEmpty, firstEmptyActivity, latestActivityKey } = getActivityStatus(dataActivity);

    const targetActivity = isEmpty
      ? dailyRewardsActivities?.find((activity) => activity.activityType === firstEmptyActivity)
      : dailyRewardsActivities?.find((activity) => activity.activityType === latestActivityKey);

    const newDay = isEmpty ? 1 : getDayNumber(targetActivity) + 1;
    const newDayData = dailyRewardsActivities?.find(
      (activity) => activity.activityType === `daily_check_in_7_days_day${newDay}`
    );

    if (latestActivityKey && !isEmpty) {
      const latestActivity = dataActivity?.[latestActivityKey] as RewardActivityStatus;

      const number = checkTimeToCurrent(latestActivity.updatedAt);
      if (number) {
        setIsActivityDisabled(true);
      }
    }

    // first day data after completing all 7
    const firstDayData = dailyRewardsActivities?.find(
      (activity) => activity.activityType === `daily_check_in_7_days_day1`
    );

    // if active day is complete, reset to first day, if not use the next day
    if (newDay <= 7) {
      setActiveDay(newDay);
      setActiveItem(newDayData);
    } else {
      setActiveDay(1);
      setActiveItem(firstDayData);
    }

    setIsLoadingRewards(false);
  }, [sendRecentActivities]);

  // Effect for handling check-in when user details change or wallet is connected
  useEffect(() => {
    if (isWalletConnected && userDetails?.userId) {
      if (isLoadingActivities || dailyRewardsActivities.length <= 0) return;
      handleCheckIn();
    }

    if (!isWalletConnected) {
      resetState();
    }
  }, [userDetails?.userId, isWalletConnected, account, isLoadingActivities, dailyRewardsActivities]);

  return {
    account,
    activeItem,
    activeDay,
    isActivityDisabled,
    isLoading,
    userDetails,
    dailyRewardsActivities,
    handleCheckIn,
    refetchSendActivities,
    resetState,
  };
};

export { useDailyRewards };
