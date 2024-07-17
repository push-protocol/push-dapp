// React and other libraries
import { FC } from 'react';

// third party libraries
import { css } from 'styled-components';

// components
import { Box, Button, Text } from 'blocks';
import { DailyRewardsItem } from './DailyRewardsItem';

export type DailyRewardsSectionProps = {};

const DailyRewardsSection: FC<DailyRewardsSectionProps> = () => {
  const dailyRewardsArray = [
    {
      day: 1,
      points: 100,
      status: 'active',
    },
    {
      day: 2,
      points: 100,
      status: 'active',
    },
    {
      day: 3,
      points: 100,
      status: 'active',
    },
    {
      day: 4,
      points: 100,
      status: 'active',
    },

    {
      day: 5,
      points: 100,
      status: 'active',
    },
    {
      day: 6,
      points: 100,
      status: 'active',
    },
    {
      day: 7,
      points: 100,
      status: 'active',
    },
  ];
  return (
    <Box>
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
        css={css``}
      >
        {dailyRewardsArray.map((item) => (
          <DailyRewardsItem item={item} />
        ))}
      </Box>
    </Box>
  );
};

export { DailyRewardsSection };
