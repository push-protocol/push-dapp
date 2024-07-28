import { FC } from 'react';

//Components
import { Box } from 'blocks';
import { RewardsTabs } from './RewardsTabs';
import { DashboardSection } from './DashboardSection';
import { LeaderBoardSection } from './LeaderBoardSection';
import { RewardsTabs as RewardsTabsType } from '../Rewards.types';
import { DailyRewardsSection } from './DailyRewardsSection';

export type RewardsTabsContainerProps = {
  activeTab: RewardsTabsType;
  handleSetActiveTab: (tab: RewardsTabsType) => void;
};

const RewardsTabsContainer: FC<RewardsTabsContainerProps> = ({ activeTab, handleSetActiveTab }) => {
  return (
    <Box
      backgroundColor="surface-primary"
      borderRadius="radius-md"
      display="flex"
      flexDirection="column"
      padding={{ ml: 'spacing-sm', initial: 'spacing-md' }}
    >
      <Box
        gap="spacing-md"
        display="flex"
        flexDirection="column"
      >
        <RewardsTabs
          activeTab={activeTab}
          handleSetActiveTab={handleSetActiveTab}
        />

        {activeTab === 'dashboard' && <DashboardSection onGetStarted={() => handleSetActiveTab('activity')} />}
        {activeTab === 'activity' && <DailyRewardsSection />}
        {activeTab === 'leaderboard' && <LeaderBoardSection />}
      </Box>
    </Box>
  );
};

export { RewardsTabsContainer };
