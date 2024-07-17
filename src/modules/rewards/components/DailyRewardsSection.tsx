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
      status: 'inactive',
    },
    {
      day: 2,
      points: 50,
      status: 'active',
    },
    {
      day: 3,
      points: 25,
      status: 'inactive',
    },
    {
      day: 4,
      points: 25,
      status: 'inactive',
    },

    {
      day: 5,
      points: 75,
      status: 'inactive',
    },
    {
      day: 6,
      points: 75,
      status: 'inactive',
    },
    {
      day: 7,
      points: 150,
      status: 'inactive',
    },
  ];
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
        {dailyRewardsArray.map((item) => (
          <DailyRewardsItem item={item} />
        ))}
      </Box>
    </Box>
  );
};

export { DailyRewardsSection };
