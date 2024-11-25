import { useEffect, useMemo, useState } from 'react';

import { useAccount } from 'hooks';
import {
  RewardActivityStatus,
  RewardActivityStatusResponse,
  RewardsStakeParams,
  useGetPushStakeEpoch,
  useGetRewardActivityStatus,
  useGetRewardsActivities,
  useGetUniV2StakeEpoch,
  useGetUserRewardsDetails,
} from 'queries';
import { walletToCAIP10 } from 'helpers/w2w';

import { getActivityStatus } from '../utils/resolveRecentActivityStatus';
import { useRewardsContext } from 'contexts/RewardsContext';
import { filterAndSortActivities, filterAndSortAllActivities } from '../utils/stakeRewardUtilities';
import { CommonLocalStorageKeys } from 'common';

export type StakeRewardsResetTime = {
  lifeTime?: boolean;
};

const useStakeRewardsResetTime = ({ lifeTime }: StakeRewardsResetTime) => {
  const [resetDate, setResetDate] = useState<number | null>(null); // Local state for latest timestamp
  const { account, isWalletConnected } = useAccount();
  const { setResetEpoch } = useRewardsContext();

  const { data: rewardActivitiesResponse, isLoading: isLoadingActivities } = useGetRewardsActivities();
  const caip10WalletAddress = walletToCAIP10({ account });
  const { data: userDetails } = useGetUserRewardsDetails({ caip10WalletAddress });

  // Queries for active push and UniV2 stake epoch data
  const { data: pushStakeData, isLoading: isLoadingPushStakeData } = useGetPushStakeEpoch();
  const { data: uniV2StakeData, isLoading: isLoadingPushUniData } = useGetUniV2StakeEpoch();

  const isLoading = isLoadingActivities;

  // Memoized Push and UniV2 stake arrays to avoid unnecessary recomputation
  const stakePushArray = useMemo(() => {
    return filterAndSortActivities(
      'push',
      rewardActivitiesResponse?.activities.flatMap((page) => page) || [],
      lifeTime
    );
  }, [rewardActivitiesResponse, lifeTime, isLoadingActivities]);

  const uniV2PushArray = useMemo(() => {
    return filterAndSortActivities(
      'uni-v2',
      rewardActivitiesResponse?.activities.flatMap((page) => page) || [],
      lifeTime
    );
  }, [rewardActivitiesResponse, lifeTime, isLoadingActivities]);

  // Combined array for both multiplier and point activities for push and uniV2
  const allPushArray = useMemo(() => {
    return filterAndSortAllActivities(
      'multiplier-push',
      'point-push',
      rewardActivitiesResponse?.activities.flatMap((page) => page) || []
    );
  }, [rewardActivitiesResponse]);

  const activityTitles = allPushArray?.map((activity) => activity.activityType);

  const { data: sendRecentActivities, refetch: refetchSendActivities } = useGetRewardActivityStatus(
    {
      userId: userDetails?.userId as string,
      activities: activityTitles as string[],
    },
    !!userDetails?.userId
  );

  const daysToReset = useMemo(() => {
    if (resetDate == null || resetDate == undefined) return;

    const currentTime = Date.now() / 1000; // Current time in seconds
    const differenceInSeconds = (resetDate as number) - currentTime;
    return Math.floor(differenceInSeconds / (60 * 60 * 24));
  }, [resetDate]);
  // const daysToReset = -2;

  // Helper function to check if 7 days have passed since the stored epoch time (in seconds)
  const hasSevenDaysPassed = (storedEpochTime: number) => {
    const currentTime = Math.floor(Date.now() / 1000); // Current time in epoch seconds
    const sevenDays = 7; // 7 days
    const differenceInDays = Math.floor((currentTime - storedEpochTime) / (60 * 60 * 24));

    return differenceInDays >= sevenDays; // Return true if 7 days or more have passed since the stored epoch time
  };

  // Handle success response and reset epoch if criteria met
  const handleFetchData = (stakeType: 'push' | 'uniV2') => {
    if (!sendRecentActivities || Object.keys(sendRecentActivities).length === 0) return;

    const dataActivity = sendRecentActivities?.activities as RewardActivityStatusResponse;
    const { latestActivityKey } = getActivityStatus(dataActivity);
    const mostRecentStakeActivity = dataActivity?.[latestActivityKey] as RewardActivityStatus;
    const latestStakeActivity = mostRecentStakeActivity?.data as RewardsStakeParams;

    const stakeData = stakeType === 'push' ? pushStakeData : uniV2StakeData;
    const latestTimestamp = pushStakeData?.toTimestamp as number;

    const toTimestamp = latestStakeActivity?.toTimestamp as number;
    const isEpochActive = latestStakeActivity?.currentEpoch === stakeData?.currentEpoch;
    const resetStakeEndDate = localStorage.getItem(CommonLocalStorageKeys.resetStakeEndDate);

    // Check if it's been seven days based on the appropriate timestamp
    const isPastSevenDays =
      toTimestamp !== undefined
        ? hasSevenDaysPassed(Number(toTimestamp)) // If toTimestamp exists, check this
        : hasSevenDaysPassed(Number(resetStakeEndDate)); // If toTimestamp is undefined, check resetStakeEndDat

    const updateResetDate = (timestamp: number) => {
      localStorage.setItem(CommonLocalStorageKeys.resetStakeEndDate, timestamp?.toString());
      setResetDate(timestamp);
    };

    // Determine which timestamp to use for resetting
    if (!resetStakeEndDate || toTimestamp === undefined) {
      updateResetDate(latestTimestamp);
    } else if (!isPastSevenDays) {
      updateResetDate(toTimestamp);
    } else {
      updateResetDate(latestTimestamp);
    }

    if (!isEpochActive) {
      // if (!isEpochActive && isPastSevenDays) {
      setResetEpoch(true);
      console.log(`${stakeType} epoch is reset`);
    } else {
      setResetEpoch(false);
      console.log(`${stakeType} epoch is not reset`);
    }
  };

  // Effect for handling fetch data for both arrays
  useEffect(() => {
    if (
      isWalletConnected &&
      userDetails?.userId &&
      !isLoadingPushStakeData &&
      !isLoadingPushUniData &&
      sendRecentActivities
    ) {
      handleFetchData('push');
    }

    if (!isWalletConnected) {
      setResetEpoch(false);
    }
  }, [userDetails?.userId, isWalletConnected, isLoadingPushStakeData, isLoadingPushUniData, sendRecentActivities]);

  return { stakePushArray, uniV2PushArray, isLoading, daysToReset, refetchSendActivities };
};

export { useStakeRewardsResetTime };
