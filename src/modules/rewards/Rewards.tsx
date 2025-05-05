// React and other libraries
import { FC } from 'react';

// third party libraries
import { useSearchParams } from 'react-router-dom';

//Hooks
import { useRewardsTabs } from './hooks/useRewardsTabs';
import { useDiscordSession } from './hooks/useDiscordSession';
import { useCreateRewardsUser } from './hooks/useCreateRewardsUser';

//Types

//Components
import { Box, Text } from 'blocks';
import { RewardsTabsContainer } from './components/RewardsTabsContainer';

export type RewardsProps = {};

const Rewards: FC<RewardsProps> = () => {
  //fetch ref from url
  const [searchParams] = useSearchParams();

  const ref = searchParams.get('ref');
  if (ref) sessionStorage.setItem('ref', ref);

  // Used to set the discord session after discord redirects back to the Dapp.
  useDiscordSession();

  const { activeTab } = useRewardsTabs();

  useCreateRewardsUser();

  const heading = activeTab === 'leaderboard' ? 'Push Reward Points' : 'Introducing Push Reward Points Program';

  return (
    <Box
      flexDirection="column"
      display="flex"
      width={{ initial: '100%', ml: '357px' }}
      gap="spacing-md"
      height="100%"
    >
      <Text
        variant="h3-bold"
        display={{ ml: 'none', initial: 'block' }}
        color="text-primary"
      >
        {heading}
      </Text>
      <Text
        variant="h4-semibold"
        display={{ ml: 'block', initial: 'none' }}
        color="text-primary"
      >
        {heading}
      </Text>

      <RewardsTabsContainer />
    </Box>
  );
};

export { Rewards };
