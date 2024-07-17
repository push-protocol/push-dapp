// React and other libraries
import { FC } from 'react';

// components
import { Box, Text } from 'blocks';
import RewardsIcon from 'blocks/illustrations/components/RewardsCoin';
import MultipleRewardsIcon from 'blocks/illustrations/components/MultipleRewardsCoin';
import TripleRewardsIcon from 'blocks/illustrations/components/TripleRewardsCoin';

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
      backgroundColor={
        item.status == 'active' ? 'surface-brand-medium' : item.day == 7 ? 'surface-brand-subtle' : 'surface-secondary'
      }
      borderRadius="radius-md"
      display="flex"
      flexDirection="column"
      alignItems="center"
      minHeight="100px"
      justifyContent="space-between"
    >
      <Text
        variant="bm-semibold"
        color={item?.status == 'active' ? 'text-on-dark-bg' : item.day == 7 ? 'text-on-light-bg' : 'text-secondary'}
      >
        Day {item.day}
      </Text>

      {item.day < 5 && <RewardsIcon />}

      {item.day >= 5 && item.day < 7 && <TripleRewardsIcon />}

      {item.day == 7 && <MultipleRewardsIcon />}

      <Text
        variant="bm-semibold"
        color={item?.status == 'active' ? 'text-on-dark-bg' : item.day == 7 ? 'text-on-light-bg' : 'text-secondary'}
      >
        +{item.points}
      </Text>
    </Box>
  );
};

export { DailyRewardsItem };
