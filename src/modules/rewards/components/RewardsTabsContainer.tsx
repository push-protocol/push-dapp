import { FC } from 'react';

//Components
import { Box, TabItem, Tabs } from 'blocks';
import { DashboardSection } from './DashboardSection';
import { LeaderBoardSection } from './LeaderBoardSection';
import { RewardsActivitiesSection } from './RewardsActivitiesSection';
import { RewardsTabs } from '../Rewards.types';

export type RewardsTabsContainerProps = {
  activeTab: RewardsTabs;
  handleSetActiveTab: (tab: RewardsTabs) => void;
};

const RewardsTabsContainer: FC<RewardsTabsContainerProps> = ({ activeTab, handleSetActiveTab }) => {
  const rewardsTabs: TabItem[] = [
    {
      key: 'dashboard',
      label: 'Dashboard',
      children: <DashboardSection onGetStarted={() => handleSetActiveTab('activity')} />,
    },
    {
      key: 'activity',
      label: 'Reward Activities',
      children: <RewardsActivitiesSection />,
    },
    {
      key: 'leaderboard',
      label: 'Leaderboard',
      children: <LeaderBoardSection />,
    },
  ];
  return (
    <Box
      backgroundColor="surface-primary"
      borderRadius="radius-sm"
      display="flex"
      flexDirection="column"
      padding={{ ml: 'spacing-sm spacing-xs', initial: 'spacing-md' }}
    >
      <Box
        gap="spacing-md"
        display="flex"
        flexDirection="column"
      >
        <Tabs
          items={rewardsTabs}
          activeKey={activeTab}
          onChange={(activeKey) => handleSetActiveTab(activeKey as RewardsTabs)}
        />
      </Box>
    </Box>
  );
};

export { RewardsTabsContainer };
