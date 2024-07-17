// React and other libraries
import { FC } from 'react';

// components
import { Box, Text } from 'blocks';

interface DailyItemProp {
  day: number;
  points: number;
  status: string;
}

export type DailyRewardsItemProps = {
  item: DailyItemProp;
};

const DailyRewardsItem: FC<DailyRewardsItemProps> = ({ item }) => {
  return (
    <Box
      padding="spacing-md"
      backgroundColor="surface-secondary"
    >
      <Text
        variant="bm-semibold"
        color="text-secondary"
      >
        Day {item.day}
      </Text>
    </Box>
  );
};

export { DailyRewardsItem };
