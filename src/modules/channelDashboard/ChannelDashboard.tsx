// React and other libraries
import { useState } from 'react';

import { useAccount } from 'hooks';

import { useGetChannelDetails } from 'queries';

// Components
import { Box } from 'blocks';
import { ChannelAddSubgraph } from './components/ChannelAddSubgraph';
import { ChannelAddDelegate } from './components/ChannelAddDelegate';
import { ReactivateChannel } from './components/ReactivateChannel';
import { DeactivateChannel } from './components/DeactivateChannel';
import { UserChannelDashboard } from './components/UserChannelDashboard';

// Types
import { DashboardActiveState } from './ChannelDashboard.types';
import { EditChannelV2 } from 'modules/editChannel/EditChannelV2';

const ChannelDashboard = () => {

  const { account } = useAccount();

  const [activeState, setActiveState] = useState<DashboardActiveState>('dashboard');
  const { data: channelDetails } = useGetChannelDetails(account);

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
      {activeState === 'addSubgraph' && <ChannelAddSubgraph setActiveState={setActiveState} />}

      {activeState === 'deactivateChannel' && <DeactivateChannel setActiveState={setActiveState} />}
      {activeState === 'reactivateChannel' && <ReactivateChannel setActiveState={setActiveState} />}

      {activeState === 'editChannel' && channelDetails && (
        <EditChannelV2 setActiveState={setActiveState} channelDetails={channelDetails} />
      )}
    </Box>
  );
};

export { ChannelDashboard };