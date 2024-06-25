import { Dispatch, FC, SetStateAction, useEffect } from 'react';

//3rd party libraries
import { useSelector } from 'react-redux';

//Components
import { Box } from 'blocks';
import { RewardsTabs } from './RewardsTabs';
import { DashboardSection } from './DashboardSection';
import { LeaderBoardSection } from './LeaderBoardSection';
import { RewardsActivitiesSection } from './RewardsActivitiesSection';

//Types
import { RewardsTabs as RewardsTabsType } from '../Rewards.types';
import { UserStoreType } from 'types';
import { UserRewardsDetailResponse } from 'queries';

export type RewardsTabsContainerProps = {
  activeTab: RewardsTabsType;
  handleSetActiveTab: (tab: RewardsTabsType) => void;
  setShowConnectModal: Dispatch<SetStateAction<boolean>>;
  userDetails: UserRewardsDetailResponse | undefined;
};

const RewardsTabsContainer: FC<RewardsTabsContainerProps> = ({
  activeTab,
  handleSetActiveTab,
  setShowConnectModal,
  userDetails
}) => {

  const { userPushSDKInstance } = useSelector((state: UserStoreType) => state.user);

  useEffect(() => {
    if (activeTab === 'activity' && userPushSDKInstance && userPushSDKInstance.readmode()) {
      setShowConnectModal(true);
    }

    if (activeTab !== 'activity' && userDetails) {
      setShowConnectModal(false);
    }
  }, [activeTab, userPushSDKInstance]);

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
        {activeTab === 'activity' && (
          <RewardsActivitiesSection />
        )}
        {activeTab === 'leaderboard' && <LeaderBoardSection />}
      </Box>

    </Box>
  );
};

export { RewardsTabsContainer };
