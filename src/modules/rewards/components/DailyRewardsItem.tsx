// React and other libraries
import { FC, useMemo } from 'react';

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
  const isCompleted = activeDay <= day;

  // style variables
  const backgroundColor = useMemo(() => {
    return isActive ? 'surface-brand-medium' : day === 7 && isCompleted ? 'surface-brand-subtle' : 'surface-secondary';
  }, [isActive, day, isCompleted]);

  const textColor = useMemo(() => {
    return isActive
      ? 'text-on-dark-bg'
      : activeDay > day
      ? 'text-tertiary'
      : day === 7 && isCompleted
      ? 'text-on-light-bg'
      : 'text-secondary';
  }, [isActive, activeDay, day, isCompleted]);

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
        border={activeDay > day ? 'border-xs solid stroke-secondary' : 'none'}
        className="item"
      >
        <Text
          variant="bm-semibold"
          color={textColor}
          className="day-text"
        >
          {activity?.activityTitle?.split('-')[1]}
        </Text>

        {isCompleted ? <Box className="inner-item">{getIconComponent(day)}</Box> : <CheckCircle />}

        <Text
          variant="bm-semibold"
          color={textColor}
          className="count-text"
        >
          +{activity.points?.toLocaleString()}
        </Text>
      </Box>
    </Skeleton>
  );
};

export { DailyRewardsItem };
