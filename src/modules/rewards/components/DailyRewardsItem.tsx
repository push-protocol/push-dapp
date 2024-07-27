// React and other libraries
import { FC } from 'react';

// types
import { Activity } from 'queries';

// components
import { Box, CheckCircle, Skeleton, Text, RewardsCoin, TripleRewardsCoin, MultipleRewardsCoin } from 'blocks';

export type DailyRewardsItemProps = {
  activity: Activity;
  activeDay: number;
  isLoading: boolean;
  isActivityDisabled: boolean;
};

const DailyRewardsItem: FC<DailyRewardsItemProps> = ({ activity, activeDay, isLoading, isActivityDisabled }) => {
  const day = parseInt(activity?.activityTitle?.split('- Day')[1]);
  const isActive = day === activeDay && !isActivityDisabled;

  // style variables
  const backgroundColor = isActive ? 'surface-brand-medium' : day === 7 ? 'surface-brand-subtle' : 'surface-secondary';

  const textColor = isActive
    ? 'text-on-dark-bg'
    : activeDay > day
    ? 'text-tertiary'
    : day == 7
    ? 'text-on-light-bg'
    : 'text-secondary';

  const getIconComponent = (day: number) => {
    if (day < 5) return <RewardsCoin />;
    if (day >= 5 && day < 7) return <TripleRewardsCoin />;
    return <MultipleRewardsCoin />;
  };

  return (
    <Skeleton
      isLoading={isLoading}
      borderRadius="radius-md"
    >
      <Box
        padding="spacing-md"
        backgroundColor={backgroundColor}
        borderRadius="radius-md"
        display="flex"
        flexDirection="column"
        alignItems="center"
        minHeight="100px"
        justifyContent="space-between"
        border={activeDay > day ? '1px solid gray-200' : 'none'}
      >
        <Text
          variant="bm-semibold"
          color={textColor}
        >
          {activity?.activityTitle?.split('-')[1]}
        </Text>

        {activeDay <= day ? <Box>{getIconComponent(day)}</Box> : <CheckCircle />}

        <Text
          variant="bm-semibold"
          color={textColor}
        >
          +{activity.points?.toLocaleString()}
        </Text>
      </Box>
    </Skeleton>
  );
};

export { DailyRewardsItem };
