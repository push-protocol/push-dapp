import { useEffect, useMemo, useState } from 'react';

import { useAccount } from 'hooks';
import {
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
  multiplier?: boolean;
};

const useStakeRewardsResetTime = ({ multiplier }: StakeRewardsResetTime) => {
  const [resetDate, setResetDate] = useState<number | null>(null); // Local state for latest timestamp
  const { account, isWalletConnected } = useAccount();
  const { setResetEpoch } = useRewardsContext();

  const { data: rewardActivitiesResponse, isLoading: isLoadingActivities } = useGetRewardsActivities();
  const caip10WalletAddress = walletToCAIP10({ account });
  const { data: userDetails } = useGetUserRewardsDetails({ caip10WalletAddress });

  // Queries for active push and UniV2 stake epoch data
  const { data: pushStakeData, isLoading: isLoadingPushStakeData } = useGetPushStakeEpoch();
  const { data: uniV2StakeData, isLoading: isLoadingPushUniData } = useGetUniV2StakeEpoch();

  // Mutation for sending recent activities
  const { mutate: sendRecentActivities } = useGetRewardActivityStatus({
    userId: userDetails?.userId as string,
  });

  const isLoading = isLoadingActivities;

  // Memoized Push and UniV2 stake arrays to avoid unnecessary recomputation
  const stakePushArray = useMemo(() => {
    return filterAndSortActivities(
      'push',
      rewardActivitiesResponse?.activities.flatMap((page) => page) || [],
      multiplier
    );
  }, [rewardActivitiesResponse, multiplier, isLoadingActivities]);

  const uniV2PushArray = useMemo(() => {
    return filterAndSortActivities(
      'uni-v2',
      rewardActivitiesResponse?.activities.flatMap((page) => page) || [],
      multiplier
    );
  }, [rewardActivitiesResponse, multiplier, isLoadingActivities]);

  // Combined array for both multiplier and point activities for push and uniV2
  const allPushArray = useMemo(() => {
    return filterAndSortAllActivities(
      'multiplier-push',
      'point-push',
      rewardActivitiesResponse?.activities.flatMap((page) => page) || []
    );
  }, [rewardActivitiesResponse]);

  // const allUniV2Array = useMemo(() => {
  //   return filterAndSortAllActivities(
  //     'multiplier-uni',
  //     'point-uni',
  //     rewardActivitiesResponse?.activities.flatMap((page) => page) || []
  //   );
  // }, [rewardActivitiesResponse]);

  const daysToReset = useMemo(() => {
    const currentTime = Date.now() / 1000; // Current time in seconds
    const differenceInSeconds = (resetDate as number) - currentTime;
    return Math.floor(differenceInSeconds / (60 * 60 * 24)); // Convert seconds to days and add the 7 days rest period
  }, [resetDate]);

  // Helper function to check if 7 days have passed since the stored epoch time (in seconds)
  const hasSevenDaysPassed = (storedEpochTime: number) => {
    const currentTime = Math.floor(Date.now() / 1000); // Current time in epoch seconds
    const sevenDays = 7; // 7 days
    const differenceInSeconds = Math.floor((currentTime - storedEpochTime) / (60 * 60 * 24));

    return differenceInSeconds > sevenDays; // Return true if 7 days or more have passed since the stored epoch time
  };

  // Function to handle fetch and timestamp/epoch comparison
  const fetchAndHandleData = () => {
    if (!pushStakeData || !uniV2StakeData) {
      console.error('Missing stake data');
      return;
    }

    const latestPushTimestamp = pushStakeData?.toTimestamp;
    // const latestUniV2Timestamp = uniV2StakeData.toTimestamp;
    const resetStakeEndDate = localStorage.getItem(CommonLocalStorageKeys.resetStakeEndDate);

    // confirm: push timestamp matches yield farming
    const laterTimestamp = latestPushTimestamp;

    if (!resetStakeEndDate || hasSevenDaysPassed(Number(laterTimestamp))) {
      localStorage.setItem(CommonLocalStorageKeys.resetStakeEndDate, laterTimestamp.toString());
    }
    setResetDate(laterTimestamp);
    // Call the appropriate fetch function based on the later timestamp
    handleFetchData(allPushArray, 'push');
  };

  // Handle get latest data function for both push and uniV2
  const handleFetchData = (activities: any[], stakeType: 'push' | 'uniV2') => {
    if (!userDetails?.userId || activities.length <= 0) return;

    const activityTitles = activities.map((activity) => activity.activityType);
    sendRecentActivities(
      {
        userId: userDetails.userId as string,
        activities: activityTitles,
      },
      {
        onSuccess: (data) => handleSuccess(data, stakeType),
        onError: (err) => {
          console.error('Error', err);
        },
      }
    );
  };

  // Handle success response and reset epoch if criteria met
  const handleSuccess = (data: any, stakeType: 'push' | 'uniV2') => {
    const { activities: dataActivity } = data;
    const { latestActivityKey } = getActivityStatus(dataActivity);
    const mostRecentStakeActivity = dataActivity?.[latestActivityKey];
    const stakeData = stakeType === 'push' ? pushStakeData : uniV2StakeData;
    const toTimestamp = stakeData?.toTimestamp as number;

    const isEpochActive = mostRecentStakeActivity?.data?.currentEpoch === stakeData?.currentEpoch;
    const isPastSevenDays = hasSevenDaysPassed(Number(toTimestamp));

    if (!isEpochActive && isPastSevenDays) {
      setResetEpoch(true);
      console.log(`${stakeType} epoch is reset`);
    } else {
      setResetEpoch(false);
      console.log(`${stakeType} epoch is not reset`);
    }
  };

  // Effect for handling fetch data for both arrays
  useEffect(() => {
    if (isWalletConnected && userDetails?.userId && !isLoadingPushStakeData && !isLoadingPushUniData) {
      fetchAndHandleData();
    }

    if (!isWalletConnected) {
      setResetEpoch(false);
    }
  }, [userDetails?.userId, isWalletConnected, isLoadingPushStakeData, isLoadingPushUniData]);

  return { stakePushArray, uniV2PushArray, isLoading, daysToReset };
};

export { useStakeRewardsResetTime };
