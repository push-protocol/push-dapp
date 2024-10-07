// React and other libraries
import { FC, useState } from 'react';

// Components
import { Box } from 'blocks';
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
      width={{ initial: 'auto', ml: '357px' }}
      margin={{ initial: 'spacing-sm spacing-xl', ml: 'spacing-sm spacing-none' }}
      gap={{ ml: 'spacing-md' }}
      height="100%"
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
        <FeaturedChannels />
        <ChannelVariantsSection />
        <Box
          display="flex"
          flexDirection={{ initial: 'row', ml: 'column' }}
          gap="spacing-md"
        >
          <AnalyticsOverview />
          <StakingPools />
        </Box>
      </Box>
    </Box>
  );
};

export { Dashboard };
