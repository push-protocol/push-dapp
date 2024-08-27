// React and other libraries
import { FC, useState } from 'react';
import { css } from 'styled-components';

// hooks
import useLockedStatus from '../hooks/useLockedStatus';
import { useDailyRewards } from '../hooks/useDailyRewards';

// components
import { Alert, Box, Button, Text } from 'blocks';
import { DailyRewardsItem } from './DailyRewardsItem';
import { ActivityVerificationButton } from './ActivityVerificationButton';

export type DailyRewardsSectionProps = {};

const DailyRewardsSection: FC<DailyRewardsSectionProps> = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const { activeItem, activeDay, isActivityDisabled, isLoading, userDetails, dailyRewardsActivities, handleCheckIn } =
    useDailyRewards();

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
                label="Check In"
              />
            )}
          </>
        )}
      </Box>

      {errorMessage && (
        <Box width="-webkit-fill-available">
          <Alert
            heading={errorMessage}
            variant="error"
            onClose={() => setErrorMessage('')}
          />
        </Box>
      )}

      <Box
        display="grid"
        gap={{ ml: 'spacing-xs', initial: 'spacing-sm' }}
        css={css`
          grid-template-columns: repeat(7, minmax(0, 1fr));

          @media (max-width: 1200px) {
            grid-template-columns: repeat(4, minmax(0, 1fr));
            .item:last-child {
              grid-column: span 2;
              display: grid;
              grid-template-columns: repeat(2, minmax(0, 1fr));

              .day-text {
                margin: 0 0 auto 0;
              }

              .count-text {
                margin: auto 0 0 0;
              }
            }

            .item:last-child .inner-item {
              grid-row: span 2; /* Adjust to span 2 rows on small screens */

              span {
                width: 85%;
                height: 85%;
                svg {
                  width: 100%;
                  height: 100%;
                }
              }
            }
          }

          @media (max-width: 700px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));

            .item:last-child {
              grid-column: span 2; /* Adjust to span 2 columns on small screens */
            }
          }
        `}
      >
        {dailyRewardsActivities?.map((activity) => (
          <DailyRewardsItem
            key={activity.activityType}
            activity={activity}
            activeDay={activeDay}
            isLoading={isLoading}
            isActivityDisabled={isActivityDisabled}
          />
        ))}
      </Box>
    </Box>
  );
};

export { DailyRewardsSection };
