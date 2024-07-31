// React and other libraries
import { useState } from 'react';

import { useAccount } from 'hooks';

import { useGetChannelDetails } from 'queries';

// Components
import { Box } from 'blocks';
import { EditChannel } from 'modules/editChannel/EditChannel';
import { ChannelAddSubgraph } from './components/ChannelAddSubgraph';
import { ChannelAddDelegate } from './components/ChannelAddDelegate';
import { ReactivateChannel } from './components/ReactivateChannel';
import { DeactivateChannel } from './components/DeactivateChannel';
import { UserChannelDashboard } from './components/UserChannelDashboard';

// Types
import { DashboardActiveState } from './ChannelDashboard.types';

const ChannelDashboard = () => {
  const { account } = useAccount();

  const [activeState, setActiveState] = useState<DashboardActiveState>('dashboard');
  const { data: channelDetails } = useGetChannelDetails(account);

  return (
    <Box>

      {activeState === 'dashboard' && <UserChannelDashboard setActiveState={setActiveState} />}

      {activeState === 'addDelegate' && <ChannelAddDelegate setActiveState={setActiveState} />}
      {activeState === 'addSubgraph' && <ChannelAddSubgraph setActiveState={setActiveState} />}

      {activeState === 'deactivateChannel' && <DeactivateChannel setActiveState={setActiveState} />}
      {activeState === 'reactivateChannel' && <ReactivateChannel setActiveState={setActiveState} />}

      {activeState === 'editChannel' && channelDetails && (
        <EditChannel setActiveState={setActiveState} channelDetails={channelDetails} />
      )}
    </Box>
  );
};

export { ChannelDashboard };