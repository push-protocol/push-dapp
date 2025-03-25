import { FC } from 'react';

//Components
import { Box } from 'blocks';
import { DashboardSection } from './DashboardSection';

export type RewardsTabsContainerProps = {};

const RewardsTabsContainer: FC<RewardsTabsContainerProps> = ({}) => {
  return (
    <>
      <Box
        backgroundColor="surface-primary"
        borderRadius="radius-md"
        display="flex"
        flexDirection="column"
        padding={{ ml: 'spacing-sm', initial: 'spacing-md' }}
      >
        <DashboardSection />
      </Box>

      {/* bottom sections */}
    </>
  );
};

export { RewardsTabsContainer };
