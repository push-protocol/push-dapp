import { Box } from 'blocks';
import { FC } from 'react';
import { RewardsTabs } from './RewardsTabs';
import { RewardsTabs as RewardsTabsType } from '../Rewards.types';
import { DashboardSection } from './DashboardSection';

export type RewardsTabsContainerProps = {
  activeTab: RewardsTabsType;
  handleSetActiveTab: (tab: RewardsTabsType) => void;
};

const RewardsTabsContainer: FC<RewardsTabsContainerProps> = ({ activeTab, handleSetActiveTab }) => {
  return (
    <Box
      backgroundColor="white"
      borderRadius="var(--r4)"
      display="flex"
      flexDirection="column"
      padding="s6"
    >
      <Box
        gap="s6"
        display="flex"
        flexDirection="column"
      >
        <RewardsTabs
          activeTab={activeTab}
          handleSetActiveTab={handleSetActiveTab}
        />
        {activeTab === 'dashboard' && <DashboardSection onGetStarted={() => handleSetActiveTab('activities')} />}
      </Box>
    </Box>
  );
};

export { RewardsTabsContainer };
