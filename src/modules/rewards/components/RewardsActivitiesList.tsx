import { FC } from 'react';
import { Box } from 'blocks';
import { RewardsActivitiesListItem } from './RewardsActivitiesListItem';

const rewardsArray = [
  {
    title: 'Follow @PushProtocol on X',
    points: 10000,
    buttonText: 'Follow',
  },
  {
    title: 'Join Push Discord',
    points: 10000,
    buttonText: 'Join Discord',
  },
  {
    title: 'Send 20 Messages using Push Chat',
    points: 1500,
    buttonText: 'Claim',
    disabled: true,
  },
  {
    title: 'Subscribe to 3 Channels on PushX',
    subtitle: 'Visit app.push.org/channels and opt-in to any 3 channels.',
    points: 1500,
    buttonText: 'Follow',
  },
];

export type RewardActivitiesProps = {};

const RewardsActivitiesList: FC<RewardActivitiesProps> = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="s1"
    >
      {rewardsArray.map((item) => (
        <RewardsActivitiesListItem
          title={item.title}
          subtitle={item.subtitle}
          points={item.points}
          buttonText={item.buttonText}
          disabled={item.disabled}
        />
      ))}
    </Box>
  );
};

export { RewardsActivitiesList };
