// React and other libraries
import { FC, useCallback, useEffect, useState } from 'react';

// third party libraries
import { css } from 'styled-components';

// hooks
import { Activity, useGetRewardsActivities, useGetUserRewardsDetails, useSendRecentActivities } from 'queries';
import { useAccount } from 'hooks';

//helpers
import { walletToCAIP10 } from 'helpers/w2w';
import { checkTimeToCurrent, getActivityStatus, getDayNumber } from '../utils/getDailyActivityStatus';

// components
import { Box, Button, Text } from 'blocks';
import { DailyRewardsItem } from './DailyRewardsItem';
import { ActivityVerificationButton } from './ActivityVerificationButton';

export type DailyRewardsSectionProps = {};

const DailyRewardsSection: FC<DailyRewardsSectionProps> = () => {
  const { account, isWalletConnected } = useAccount();
  const [activeItem, setActiveItem] = useState<any | null>(null);
  const [activeDay, setActiveDay] = useState<number>(0);
  const [isActivityDisabled, setIsActivityDisabled] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');
  const [isLoadingRewards, setIsLoadingRewards] = useState(false);

  // Getting user Id by wallet address
  const caip10WalletAddress = walletToCAIP10({ account });
  const { data: userDetails } = useGetUserRewardsDetails({
    caip10WalletAddress: caip10WalletAddress,
  });
  const { data: rewardActivitiesResponse, isLoading: isLoadingActivities } = useGetRewardsActivities({ pageSize: 50 });

  const isLoading = isLoadingActivities;

  // If there are activities then render them else render 2 skeletons
  const activityList = isLoading
    ? Array(7).fill(0)
    : rewardActivitiesResponse?.pages.flatMap((page) => page.activities) || [];

  // Filter activities based on the index
  const dailyActivities = activityList.filter((activity) => activity.index < 0);

  // Sort the activities based on the extracted day number
  const dailyRewardsActivities = dailyActivities?.sort((a, b) => getDayNumber(a) - getDayNumber(b));

  const { mutate: sendRecentActivities } = useSendRecentActivities({
    userId: userDetails?.userId as string,
  });

  const resetState = useCallback(() => {
    setActiveDay(0);
    setActiveItem(null);
    setIsActivityDisabled(false);
    setIsLoadingRewards(false);
  }, []);

  useEffect(() => {
    if (dailyRewardsActivities.length > 0 && isWalletConnected && userDetails?.userId) {
      setIsLoadingRewards(true);
      handleCheckIn();
    }

    if (!isWalletConnected) {
      resetState();
    }
  }, [userDetails?.userId, isWalletConnected, account]);

  const handleCheckIn = () => {
    if (userDetails?.userId == undefined) return;
    // Extract activityType into an array
    const activityTitles = dailyRewardsActivities?.map((activity) => activity.activityType);

    sendRecentActivities(
      {
        userId: userDetails?.userId as string,
        activities: activityTitles,
      },
      {
        onSuccess: (data) => {
          handleSuccess(data);
        },
        onError: (err) => {
          console.error('Error', err);
        },
      }
    );
  };

  const handleSuccess = (data: any) => {
    let dataActivity = data?.activities;
    const { isEmpty, firstEmptyActivity, latestActivityKey } = getActivityStatus(data?.activities);

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

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="spacing-md"
    >
      <Box
        display="flex"
        flexDirection="row"
        width="-webkit-fill-available"
        justifyContent="space-between"
      >
        <Box>
          <Text
            variant="h4-bold"
            color="text-primary"
          >
            Daily Rewards
          </Text>
          <Text
            variant="bm-regular"
            color="text-tertiary"
          >
            Check-in daily and unlock more rewards each day.
          </Text>
        </Box>

        {isActivityDisabled && activeDay > 1 && userDetails && (
          <Button
            variant="tertiary"
            size="small"
            disabled
          >
            Claimed
          </Button>
        )}

        {!isActivityDisabled && activeDay > 0 && activeItem && userDetails && (
          <ActivityVerificationButton
            activityType={activeItem?.activityType}
            userId={userDetails?.userId}
            activityTypeId={activeItem?.id}
            refetchActivity={() => handleCheckIn()}
            setErrorMessage={setErrorMessage}
            isLoadingActivity={false}
            startingLabel="Check In"
          />
        )}
      </Box>

      <Box
        display="grid"
        css={css`
          grid-template-columns: repeat(7, minmax(0, 1fr));
          gap: var(--s4);

          @media (max-width: 1200px) {
            grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          }
        `}
      >
        {dailyRewardsActivities.map((activity) => (
          <DailyRewardsItem
            activity={activity}
            activeDay={activeDay}
            isLoading={isLoadingRewards}
            isActivityDisabled={isActivityDisabled}
          />
        ))}
      </Box>
    </Box>
  );
};

export { DailyRewardsSection };
