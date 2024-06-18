import { FC } from 'react';
import { css } from 'styled-components';
import { Box } from 'blocks';
import { RewardActivitiesListItem } from './RewardActivitiesListItem';

export type RewardActivitiesProps = {};

const RewardActivitiesList: FC<RewardActivitiesProps> = () => {
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

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="s1"
    >
      {rewardsArray.map((item) => (
        <RewardActivitiesListItem item={item} />
      ))}
    </Box>
  );
};

export { RewardActivitiesList };
