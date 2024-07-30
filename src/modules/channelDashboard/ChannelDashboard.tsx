// React and other libraries
import { useState } from 'react';

import { Box } from "blocks";

import { UserChannelDashboard } from './components/UserChannelDashboard';

import { DashboardActiveState } from "./ChannelDashboard.types";
import { ChannelAddDelegate } from './components/ChannelAddDelegate';

const ChannelDashboard = () => {

  const [activeState, setActiveState] = useState<DashboardActiveState>('dashboard');

  return (
    <Box>

      {/* Dashboard Content
      1. User Channel Dashboard
      2. Add Delegate Component
      3. Add Subgraph Component
      4. Reactivate Channel 
      5. Deactivate Channel
      6. Edit Channel
    */}

      {activeState === 'dashboard' && <UserChannelDashboard setActiveState={setActiveState} />}

      {activeState === 'addDelegate' && <ChannelAddDelegate setActiveState={setActiveState} />}

    </Box>
  );
};

export { ChannelDashboard };