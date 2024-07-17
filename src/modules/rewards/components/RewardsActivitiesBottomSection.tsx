// React and other libraries
import { FC } from 'react';

// hooks
import { useRewardsTabs } from '../hooks/useRewardsTabs';

// components
import { RewardsActivitiesSection } from './RewardsActivitiesSection';
import { Box } from 'blocks';

export type RewardsActivitiesBottomSectionProps = {};

const RewardsActivitiesBottomSection: FC<RewardsActivitiesBottomSectionProps> = () => {
  const { activeTab } = useRewardsTabs();

  return (
    <>
      <Box
        backgroundColor={{ dark: 'gray-900', light: 'white' }}
        borderRadius="r4"
        display="flex"
        flexDirection="column"
        padding={{ ml: 's4 s3', initial: 's6' }}
      >
        {activeTab === 'activity' && <RewardsActivitiesSection />}
      </Box>{' '}
    </>
  );
};

export { RewardsActivitiesBottomSection };
