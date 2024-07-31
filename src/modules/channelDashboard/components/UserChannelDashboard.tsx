import { FC, useState } from 'react';

import { Alert, Box, ErrorFilled } from 'blocks';

import { useAccount } from 'hooks';

import { useGetChannelDetails } from 'queries';

import { ChannelDashboardHeader } from './ChannelDashboardHeader';
import { AppFooter } from './AppFooter';
import { ChannelDashboardBody } from './ChannelDashboardBody';

import { DashboardActiveState } from '../ChannelDashboard.types';

type UserChannelDashboardProps = {
  setActiveState: (activeState: DashboardActiveState) => void;
}

const UserChannelDashboard: FC<UserChannelDashboardProps> = ({
  setActiveState
}) => {
  const { account } = useAccount();
  const { data: channelDetails, isLoading: loadingChannelDetails } = useGetChannelDetails(account);

  const [channelDashboardError, setChannelDashboardError] = useState('');

  return (
    <>
      <Box
        display="flex"
        width={{ initial: '846px', ml: '357px' }}
        padding="spacing-md"
        flexDirection="column"
        alignItems="center"
        gap="spacing-lg"
        backgroundColor="surface-primary"
        borderRadius="radius-lg"
        margin="spacing-none spacing-none spacing-sm spacing-none"
      >
        <ChannelDashboardHeader
          channelDetails={channelDetails}
          loadingChannelDetails={loadingChannelDetails}
          setActiveState={setActiveState}
        />

        {channelDashboardError && (
          <Alert
            variant="error"
            icon={<ErrorFilled color="icon-state-danger-bold" size={24} />}
            message={channelDashboardError}
            width="-webkit-fill-available"
          />
        )}

        <ChannelDashboardBody
          setActiveState={setActiveState}
          setChannelDashboardError={setChannelDashboardError}
        />

      </Box>

      <AppFooter />
    </>
  );
};

export { UserChannelDashboard };