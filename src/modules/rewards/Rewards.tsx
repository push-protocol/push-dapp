import { FC, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Box, Text } from 'blocks';
import { RefferalSection } from './components/RefferalSection';
import { useAccount } from 'hooks';
import { RewardsTabsContainer } from './components/RewardsTabsContainer';
import { rewardsTabsList } from './Rewards.constants';
import { RewardsTabs } from './Rewards.types';

export type RewardsProps = {};

const Rewards: FC<RewardsProps> = () => {
  const [activeTab, setActiveTab] = useState(rewardsTabsList[0].value);

  const { isWalletConnected } = useAccount();
  const location = useLocation();
  const navigate = useNavigate();

  const locationArray = location.pathname.split('/');

  const handleSetActiveTab = (tab: RewardsTabs) => {
    setActiveTab(tab);
    navigate(`/rewards/${tab}`);
  };

  useEffect(() => {
    if (locationArray.length === 3) setActiveTab(locationArray[2] as RewardsTabs);
    else setActiveTab(rewardsTabsList[0].value);
  }, [location]);

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
        color={{ light: 'gray-1000', dark: 'gray-100' }}
      >
        Introducing Push Reward Points Program
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

// fix the border-radius in box
