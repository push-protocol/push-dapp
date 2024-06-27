// React and other libraries
import { FC, useState } from 'react';

// Components
import { Box } from 'blocks';
import { DashboardSubHeader } from './components/DashboardSubHeader';
import { FeaturedChannels } from './components/FeaturedChannels';
import { ChannelVariantsSection } from './components/ChannelVariantsSection';
import DashboardHeader from './components/DashboardHeader';

export type DashboardProps = {};

const Dashboard: FC<DashboardProps> = () => {
  const [showSubHeader, setSubHeaderVisibility] = useState(true);

  return (
    <Box
      flexDirection="column"
      display="flex"
      margin={{ initial: 's4 s6 s4 s6', ml: 's4' }}
      gap={{ ml: 's6' }}
      height="100%"
      width="-webkit-fill-available"
    >
      <DashboardHeader
        showSubHeader={showSubHeader}
        setSubHeaderVisibility={setSubHeaderVisibility}
      />

      {showSubHeader && <DashboardSubHeader />}

      <Box
        display="flex"
        flexDirection="column"
        gap="s6"
      >
        <FeaturedChannels />
        <ChannelVariantsSection />
      </Box>
    </Box>
  );
};

export { Dashboard };
