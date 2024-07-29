// React and other libraries
import { FC } from 'react';
import { css } from 'styled-components';

// hooks
import useLockedStatus from '../hooks/useLockedStatus';
import useDailyRewards from '../hooks/useDailyRewards';

// components
import { Box, Button, Text } from 'blocks';
import { DailyRewardsItem } from './DailyRewardsItem';
import { ActivityVerificationButton } from './ActivityVerificationButton';

export type DailyRewardsSectionProps = {};

const DailyRewardsSection: FC<DailyRewardsSectionProps> = () => {
  const {
    activeItem,
    activeDay,
    isActivityDisabled,
    isLoadingRewards,
    userDetails,
    dailyRewardsActivities,
    handleCheckIn,
    setErrorMessage,
  } = useDailyRewards();

  const { isLocked } = useLockedStatus();

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
        {isLocked && (
          <Button
            variant="tertiary"
            size="small"
            disabled
          >
            Locked
          </Button>
        )}

        {!isLocked && (
          <>
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
          </>
        )}
      </Box>

      <Box
        display="grid"
        gap={{ ml: 'spacing-xs', initial: 'spacing-sm' }}
        css={css`
          grid-template-columns: repeat(7, minmax(0, 1fr));

          @media (max-width: 1200px) {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }

          @media (max-width: 700px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        `}
      >
        {dailyRewardsActivities?.map((activity) => (
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
