import { Box } from 'blocks';
import { FC } from 'react';
import { RewardsTabs } from './RewardsTabs';
import { RewardsTabs as RewardsTabsType } from '../Rewards.types';
import { DashboardSection } from './DashboardSection';
import { LeaderBoardSection } from './LeaderBoardSection';
import { RewardsActivitiesSection } from './RewardsActivitiesSection';

export type RewardsTabsContainerProps = {
  activeTab: RewardsTabsType;
  handleSetActiveTab: (tab: RewardsTabsType) => void;
};

const RewardsTabsContainer: FC<RewardsTabsContainerProps> = ({ activeTab, handleSetActiveTab }) => {
  return (
    <Box
      borderRadius="r4"
      display="flex"
      flexDirection="column"
      padding={{ ml: "s4 s3", initial: "s6" }}
    >
      <Box
        gap="s6"
        display="flex"
        flexDirection="column"
        color={{ light: 'gray-900', dark: 'gray-100' }}
      >
        <RewardsTabs
          activeTab={activeTab}
          handleSetActiveTab={handleSetActiveTab}
        />
        {activeTab === 'dashboard' && <DashboardSection onGetStarted={() => handleSetActiveTab('activities')} />}
        {activeTab === 'activities' && <RewardsActivitiesSection />}
        {activeTab === 'leaderboard' && <LeaderBoardSection />}
      </Box>
    </Box>
  );
};

export { RewardsTabsContainer };
