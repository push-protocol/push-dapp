import { FC } from 'react';

// types
import { RewardsTabs as RewardsTabsType } from '../Rewards.types';

//Components
import { Box } from 'blocks';
import { RewardsTabs } from './RewardsTabs';
import { DashboardSection } from './DashboardSection';
import { LeaderBoardSection } from './LeaderBoardSection';
import { DailyRewardsSection } from './DailyRewardsSection';
import { RewardsActivitiesBottomSection } from './RewardsActivitiesBottomSection';
import { ReferralSection } from './ReferralSection';

export type RewardsTabsContainerProps = {
  activeTab: RewardsTabsType;
  handleSetActiveTab: (tab: RewardsTabsType) => void;
  handleUnlockProfile: () => void;
};

const RewardsTabsContainer: FC<RewardsTabsContainerProps> = ({
  activeTab,
  handleSetActiveTab,
  handleUnlockProfile,
}) => {
  return (
    <>
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
          {/* tabs and top section */}
          <RewardsTabs
            activeTab={activeTab}
            handleSetActiveTab={handleSetActiveTab}
          />

          {activeTab === 'dashboard' && <DashboardSection onGetStarted={() => handleSetActiveTab('activity')} />}
          {activeTab === 'activity' && <DailyRewardsSection />}
          {activeTab === 'leaderboard' && <LeaderBoardSection />}
        </Box>
      </Box>

      {/* bottom sections */}
      {activeTab === 'dashboard' && <ReferralSection handleUnlockProfile={handleUnlockProfile} />}
      {activeTab === 'activity' && <RewardsActivitiesBottomSection />}
    </>
  );
};

export { RewardsTabsContainer };
