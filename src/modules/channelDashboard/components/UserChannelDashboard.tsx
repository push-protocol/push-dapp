import { FC } from 'react';

import { Box } from 'blocks';

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

        <ChannelDashboardBody
          setActiveState={setActiveState}
        />

      </Box>

      <AppFooter />
    </>
  );
};

export { UserChannelDashboard };