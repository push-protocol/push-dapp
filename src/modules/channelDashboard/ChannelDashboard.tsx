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
import { EditChannelV2 } from 'modules/editChannel/EditChannelV2';
import useFetchChannelDetails from 'common/hooks/useFetchUsersChannelDetails';
import { useGetChannelCategories } from 'queries';

const ChannelDashboard = () => {
  const [activeState, setActiveState] = useState<DashboardActiveState>('dashboard');

  const { channelDetails, loadingChannelDetails, refetchChannelDetails } = useFetchChannelDetails();
  useGetChannelCategories();
  return (
    <Box>
      {activeState === 'dashboard' && (
        <UserChannelDashboard
          setActiveState={setActiveState}
          channelDetails={channelDetails}
          loadingChannelDetails={loadingChannelDetails}
        />
      )}

      {activeState === 'addDelegate' && <ChannelAddDelegate setActiveState={setActiveState} />}
      {activeState === 'addSubgraph' && <ChannelAddSubgraph setActiveState={setActiveState} />}

      {activeState === 'deactivateChannel' && (
        <DeactivateChannel
          setActiveState={setActiveState}
          channelDetails={channelDetails}
          refetchChannelDetails={refetchChannelDetails}
        />
      )}
      {activeState === 'reactivateChannel' && (
        <ReactivateChannel
          setActiveState={setActiveState}
          channelDetails={channelDetails}
          refetchChannelDetails={refetchChannelDetails}
        />
      )}

      {activeState === 'editChannel' && channelDetails && (
        <EditChannelV2
          setActiveState={setActiveState}
          channelDetails={channelDetails}
        />
      )}
    </Box>
  );
};

export { ChannelDashboard };
