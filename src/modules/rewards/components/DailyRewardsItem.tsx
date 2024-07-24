// React and other libraries
import { FC } from 'react';

// components
import { Box, Text } from 'blocks';
import RewardsIcon from 'blocks/illustrations/components/RewardsCoin';
import MultipleRewardsIcon from 'blocks/illustrations/components/MultipleRewardsCoin';
import TripleRewardsIcon from 'blocks/illustrations/components/TripleRewardsCoin';
import { Activity } from 'queries';

export type DailyRewardsItemProps = {
  activity: Activity;
};

const DailyRewardsItem: FC<DailyRewardsItemProps> = ({ activity }) => {
  const day = parseInt(activity?.activityTitle?.split('- Day')[1]);
  return (
    <Box
      padding="spacing-md"
      backgroundColor={
        activity.status != 'ENABLED' ? 'surface-brand-medium' : day == 7 ? 'surface-brand-subtle' : 'surface-secondary'
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
        color={activity.status != 'ENABLED' ? 'text-on-dark-bg' : day == 7 ? 'text-on-light-bg' : 'text-secondary'}
      >
        {activity?.activityTitle?.split('-')[1]}
      </Text>

      {day < 5 && <RewardsIcon />}

      {day >= 5 && day < 7 && <TripleRewardsIcon />}

      {day == 7 && <MultipleRewardsIcon />}

      <Text
        variant="bm-semibold"
        color={activity.status != 'ENABLED' ? 'text-on-dark-bg' : day == 7 ? 'text-on-light-bg' : 'text-secondary'}
      >
        {activity.points?.toLocaleString()} Points
      </Text>
    </Box>
  );
};

export { DailyRewardsItem };
