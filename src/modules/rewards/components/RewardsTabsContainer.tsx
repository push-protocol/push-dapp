import { FC, useEffect, useState } from 'react';

//Components
import { Box } from 'blocks';
import { RewardsTabs } from './RewardsTabs';
import { DashboardSection } from './DashboardSection';
import { LeaderBoardSection } from './LeaderBoardSection';
import { RewardsActivitiesSection } from './RewardsActivitiesSection';

//Types
import { RewardsTabs as RewardsTabsType } from '../Rewards.types';
import { useSelector } from 'react-redux';
import { UserStoreType } from 'types';
import UnlockProfileWrapper from 'components/chat/unlockProfile/UnlockProfileWrapper';
import { UNLOCK_PROFILE_TYPE } from 'components/chat/unlockProfile/UnlockProfile';
import { css } from 'styled-components';

export type RewardsTabsContainerProps = {
  activeTab: RewardsTabsType;
  handleSetActiveTab: (tab: RewardsTabsType) => void;
};

const RewardsTabsContainer: FC<RewardsTabsContainerProps> = ({
  activeTab,
  handleSetActiveTab,
}) => {



  return (
    <Box
      backgroundColor={{ dark: 'gray-900', light: 'white' }}
      borderRadius="r4"
      display="flex"
      flexDirection="column"
      padding={{ ml: 's4 s3', initial: 's6' }}
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

        {activeTab === 'dashboard' && <DashboardSection onGetStarted={() => handleSetActiveTab('activity')} />}
        {activeTab === 'activity' && <RewardsActivitiesSection />}
        {activeTab === 'leaderboard' && <LeaderBoardSection />}

      </Box>
    </Box>
  );
};

export { RewardsTabsContainer };
