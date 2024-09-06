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

export type StakeRewardsResetTime = {
  multiplier?: boolean;
};

const useStakeRewardsResetTime = ({ multiplier }: StakeRewardsResetTime) => {
  const [resetDate, setResetDate] = useState<number | null>(null); // Local state for latest timestamp
  const { account, isWalletConnected } = useAccount();
  const { setResetEpoch } = useRewardsContext();
  const SEVEN_DAYS_IN_MS = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds

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

  const allUniV2Array = useMemo(() => {
    return filterAndSortAllActivities(
      'multiplier-uni',
      'point-uni',
      rewardActivitiesResponse?.activities.flatMap((page) => page) || []
    );
  }, [rewardActivitiesResponse]);

  // Function to handle fetch and timestamp/epoch comparison
  const fetchAndHandleData = () => {
    if (!pushStakeData || !uniV2StakeData) {
      console.error('Missing stake data');
      return;
    }

    const latestPushTimestamp = pushStakeData.toTimestamp;
    const latestUniV2Timestamp = uniV2StakeData.toTimestamp;

    // Determine which timestamp is later and store it in state
    const laterTimestamp = latestPushTimestamp > latestUniV2Timestamp ? latestPushTimestamp : latestUniV2Timestamp;
    setResetDate(laterTimestamp); // Update state with the later timestamp

    // Call the appropriate fetch function based on the later timestamp
    if (laterTimestamp === latestPushTimestamp && allPushArray.length > 0) {
      handleFetchData(allPushArray, 'push');
    } else if (laterTimestamp === latestUniV2Timestamp && allUniV2Array.length > 0) {
      handleFetchData(allUniV2Array, 'uniV2');
    }
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
    const currentDate = Date.now();

    const isEpochActive = mostRecentStakeActivity?.data?.currentEpoch === stakeData?.currentEpoch;
    const isPastSevenDays = currentDate > toTimestamp * 1000 + SEVEN_DAYS_IN_MS;

    if (!isEpochActive && isPastSevenDays) {
      setResetEpoch(true);
      console.log(`${stakeType} epoch is reset`);
    } else {
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

  return { stakePushArray, uniV2PushArray, isLoading, resetDate };
};

export { useStakeRewardsResetTime };
