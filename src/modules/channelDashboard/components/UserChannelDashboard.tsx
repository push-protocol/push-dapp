import { FC, useState } from "react";

import { Alert, Box, ErrorFilled } from "blocks";

import { useAccount } from "hooks";

import { useGetChannelDetails } from "queries";

import { ChannelDashboardHeader } from "./ChannelDashboardHeader";
import { ChannelDashboardBody } from "./ChannelDashboardBody";
import { PrivacyPolicy } from "./PrivacyPolicy";

import { DashboardActiveState } from "../ChannelDashboard.types";

type UserChannelDashboardProps = {
  setActiveState: (activeState: DashboardActiveState) => void;
}

const UserChannelDashboard: FC<UserChannelDashboardProps> = ({
  setActiveState
}) => {
  const { account } = useAccount();
  const { data: channelDetails, isLoading: loadingChannelDetails } = useGetChannelDetails(account);

  const [channelDashboardError, setChannelDashboardError] = useState('')

  return (
    <>
      <Box
        display='flex'
        width={{ initial: '846px', ml: '357px' }}
        padding='spacing-md'
        flexDirection='column'
        alignItems='center'
        gap='spacing-lg'
        backgroundColor='surface-primary'
        borderRadius='radius-lg'
        margin='spacing-none spacing-none spacing-sm spacing-none'
      >

        <ChannelDashboardHeader
          channelDetails={channelDetails}
          loadingChannelDetails={loadingChannelDetails}
          setActiveState={setActiveState}
        />

        <Box display='flex' flexDirection='column' gap='spacing-sm' width='100%'>
          {channelDashboardError && <Alert
            variant='error'
            icon={<ErrorFilled color='text-danger-bold' size={24} />}
            message={channelDashboardError}
            width='100%'
          />}
          <ChannelDashboardBody
            setChannelDashboardError={setChannelDashboardError}
            setActiveState={setActiveState}
          />
        </Box>

      </Box>
      <PrivacyPolicy />
    </>
  );
};

export { UserChannelDashboard };