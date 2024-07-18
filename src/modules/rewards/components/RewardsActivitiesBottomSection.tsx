// React and other libraries
import { FC } from 'react';

// hooks

// components
import { RewardsActivitiesSection } from './RewardsActivitiesSection';
import { Box } from 'blocks';
import { BonusActivities } from './BonusActivities';

export type RewardsActivitiesBottomSectionProps = {};

const RewardsActivitiesBottomSection: FC<RewardsActivitiesBottomSectionProps> = () => {
  return (
    <>
      <Box
        backgroundColor={{ dark: 'gray-900', light: 'white' }}
        borderRadius="r4"
        display="flex"
        flexDirection="column"
        padding={{ ml: 's4 s3', initial: 's6' }}
      >
        <RewardsActivitiesSection />
      </Box>

      <BonusActivities />
    </>
  );
};

export { RewardsActivitiesBottomSection };
