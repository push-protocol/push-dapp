// React and other libraries
import { FC, useState } from 'react';

// Components
import { Box, Table } from 'blocks';
import { AnalyticsOverview } from './components/AnalyticsOverview';
import { ChannelVariantsSection } from './components/ChannelVariantsSection';
import { DashboardHeader } from './components/DashboardHeader';
import { DashboardSubHeader } from './components/DashboardSubHeader';
import { FeaturedChannels } from './components/FeaturedChannels';
import { StakingPools } from './components/StakingPools';

export type DashboardProps = {};

const Dashboard: FC<DashboardProps> = () => {
  const [showSubHeader, setSubHeaderVisibility] = useState(true);

  return (
    <Box
      flexDirection="column"
      display="flex"
      margin={{ initial: 'spacing-sm spacing-xl spacing-sm spacing-xl', ml: 'spacing-sm', lp: 'spacing-sm' }}
      gap={{ ml: 'spacing-md' }}
      height="100%"
      width="auto"
    >
      <DashboardHeader
        showSubHeader={showSubHeader}
        setSubHeaderVisibility={setSubHeaderVisibility}
      />

      {showSubHeader && <DashboardSubHeader />}
      <Box
        display="flex"
        flexDirection="column"
        gap="spacing-md"
      >
        {/* <Table /> */}
      </Box>
    </Box>
  );
};

export { Dashboard };
