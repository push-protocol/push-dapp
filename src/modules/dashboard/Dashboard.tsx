// React and other libraries
import { FC, useState } from 'react';

// Components
import { Box } from 'blocks';
import { DashboardSubHeader } from './components/DashboardSubHeader';
import { FeaturedNotificationsComponent } from './components/FeaturedNotificationsComponent';
import { TrendingRecommended } from './components/TrendingRecommended';
import DashboardHeader from './components/DashboardHeader';

export type DashboardProps = {};

const Dashboard: FC<DashboardProps> = () => {
  const [showSubHeader, setSubHeaderVisibility] = useState(true);

  return (
    <Box
      flexDirection="column"
      display="flex"
      margin="s4 s6 s4 s6"
      gap={{ ml: 's6' }}
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
        <FeaturedNotificationsComponent />
        <TrendingRecommended />
      </Box>
    </Box>
  );
};

export { Dashboard };
