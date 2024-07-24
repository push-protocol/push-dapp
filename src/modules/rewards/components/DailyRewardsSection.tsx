// React and other libraries
import { FC } from 'react';

// third party libraries
import { css } from 'styled-components';

// hooks
import { useGetRewardsActivities } from 'queries';

// components
import { Box, Button, Text } from 'blocks';
import { DailyRewardsItem } from './DailyRewardsItem';

export type DailyRewardsSectionProps = {};

const DailyRewardsSection: FC<DailyRewardsSectionProps> = () => {
  const { data: rewardActivitiesResponse, isLoading: isLoadingActivities } = useGetRewardsActivities({ pageSize: 50 });

  const isLoading = isLoadingActivities;
  // const isLoading = isLoadingUserDetails || isLoadingActivities;

  // If there are activities then render them else render 2 skeletons
  const activityList = isLoading
    ? Array(7).fill(0)
    : rewardActivitiesResponse?.pages.flatMap((page) => page.activities) || [];

  // Filter activities based on the index
  const dailyActivities = activityList.filter((activity) => activity.index < 0);

  // Function to extract the day number from the activity title or type
  const getDayNumber = (activity: any) => {
    const dayMatch = activity?.activityTitle.match(/Day (\d+)/) || activity?.activityType.match(/day(\d+)/);
    return dayMatch ? parseInt(dayMatch[1], 10) : 0;
  };

  // Sort the activities based on the extracted day number
  const dailyRewardsActivities = dailyActivities?.sort((a, b) => getDayNumber(a) - getDayNumber(b));

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

        <Button
          variant="tertiary"
          size="small"
        >
          Check In
        </Button>
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
          <DailyRewardsItem activity={activity} />
        ))}
      </Box>
    </Box>
  );
};

export { DailyRewardsSection };
