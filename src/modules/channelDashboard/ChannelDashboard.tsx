// React and other libraries
import { useState } from 'react';

// Components
import { Box } from 'blocks';
import { ChannelAddSubgraph } from './components/ChannelAddSubgraph';
import { ChannelAddDelegate } from './components/ChannelAddDelegate';
import { ReactivateChannel } from './components/ReactivateChannel';
import { DeactivateChannel } from './components/DeactivateChannel';
import { UserChannelDashboard } from './components/UserChannelDashboard';

// Types
import { DashboardActiveState } from './ChannelDashboard.types';

const ChannelDashboard = () => {
  const [activeState, setActiveState] = useState<DashboardActiveState>('dashboard');
  /**
   * We need to have 3 things here
   * 1. Channel Dashboard
   * 2. Add Subgraph Details
   * 3. Add Delegate
   * 4. Reactivate Channel
   * 6. Activate Channel
   */

  return (
    <Box>
      {activeState === 'dashboard' && <UserChannelDashboard setActiveState={setActiveState} />}

      {activeState === 'addDelegate' && <ChannelAddDelegate setActiveState={setActiveState} />}
      {activeState === 'addSubgraph' && <ChannelAddSubgraph setActiveState={setActiveState} />}

      {activeState === 'reactivateChannel' && <ReactivateChannel setActiveState={setActiveState} />}
      {activeState === 'deactivateChannel' && <DeactivateChannel setActiveState={setActiveState} />}
    </Box>
  );
};

export { ChannelDashboard };
