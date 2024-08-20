import { FC } from 'react';

//Components
import { Box, TabItem, Tabs } from 'blocks';
import { DashboardSection } from './DashboardSection';
import { LeaderBoardSection } from './LeaderBoardSection';
import { RewardsTabs } from '../Rewards.types';
import { ReferralSection } from './ReferralSection';
import { RewardsActivitiesBottomSection } from './RewardsActivitiesBottomSection';
import { DailyRewardsSection } from './DailyRewardsSection';

export type RewardsTabsContainerProps = {
  activeTab: RewardsTabs;
  handleSetActiveTab: (tab: RewardsTabs) => void;
  handleUnlockProfile: () => void;
};

const RewardsTabsContainer: FC<RewardsTabsContainerProps> = ({
  activeTab,
  handleSetActiveTab,
  handleUnlockProfile,
}) => {
  const rewardsTabs: TabItem[] = [
    {
      key: 'dashboard',
      label: 'Dashboard',
      children: <DashboardSection onGetStarted={() => handleSetActiveTab('activity')} />,
    },
    {
      key: 'activity',
      label: 'Reward Activities',
      children: <DailyRewardsSection />,
    },
    {
      key: 'leaderboard',
      label: 'Leaderboard',
      children: <LeaderBoardSection />,
    },
  ];

  return (
    <>
      <Box
        backgroundColor="surface-primary"
        borderRadius="radius-md"
        display="flex"
        flexDirection="column"
        padding={{ ml: 'spacing-sm', initial: 'spacing-md' }}
      >
        <Tabs
          items={rewardsTabs}
          activeKey={activeTab}
          onChange={(activeKey) => handleSetActiveTab(activeKey as RewardsTabs)}
        />
      </Box>

      {/* bottom sections */}
      {activeTab === 'dashboard' && <ReferralSection handleUnlockProfile={handleUnlockProfile} />}
      {activeTab === 'activity' && <RewardsActivitiesBottomSection />}
    </>
  );
};

export { RewardsTabsContainer };
