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
import { EditChannel } from 'modules/editChannel/EditChannel';

const ChannelDashboard = () => {
  const [activeState, setActiveState] = useState<DashboardActiveState>('dashboard');

  return (
    <Box>
      {activeState === 'dashboard' && <UserChannelDashboard setActiveState={setActiveState} />}

      {activeState === 'addDelegate' && <ChannelAddDelegate setActiveState={setActiveState} />}
      {activeState === 'addSubgraph' && <ChannelAddSubgraph setActiveState={setActiveState} />}

      {activeState === 'reactivateChannel' && <ReactivateChannel setActiveState={setActiveState} />}
      {activeState === 'deactivateChannel' && <DeactivateChannel setActiveState={setActiveState} />}

      {activeState === 'editChannel' && <EditChannel setActiveState={setActiveState} />}

    </Box>
  );
};

export { ChannelDashboard };
