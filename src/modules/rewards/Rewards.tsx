import { FC } from 'react';

//Hooks
import { useAccount } from 'hooks';
import { useRewardsTabs } from './hooks/useRewardsTabs';

//Components
import { Box, Text } from 'blocks';
import { RefferalSection } from './components/RefferalSection';
import { RewardsTabsContainer } from './components/RewardsTabsContainer';

export type RewardsProps = {};

const Rewards: FC<RewardsProps> = () => {
  const { isWalletConnected } = useAccount();
  const { activeTab, handleSetActiveTab } = useRewardsTabs();
  const heading = activeTab === 'leaderboard' ? 'Push Reward Points' : 'Introducing Push Reward Points Program';

  return (
    <Box
      flexDirection="column"
      display="flex"
      margin={{ initial: 's4 s6 s4 s6', ml: 's4' }}
      gap="s6"
      height="100%"
    >
      <Text
        variant="h3-bold"
        display={{ ml: 'none', dp: 'block' }}
        color={{ light: 'gray-1000', dark: 'gray-100' }}
      >
        {heading}
      </Text>
      <Text
        variant="h4-semibold"
        display={{ ml: 'block', dp: 'none' }}
        color={{ light: 'gray-1000', dark: 'gray-100' }}
      >
        {heading}
      </Text>
      <RewardsTabsContainer
        activeTab={activeTab}
        handleSetActiveTab={handleSetActiveTab}
      />
      {activeTab === 'dashboard' && isWalletConnected && <RefferalSection />}
    </Box>
  );
};

export { Rewards };
