import { Box } from "blocks";
import { ChannelDashboardHeader } from "./ChannelDashboardHeader";
import { InlineError, InlineSuccess } from "common";
import { ChannelDashboardBody } from "./ChannelDashboardBody";
import { PrivacyPolicy } from "./PrivacyPolicy";
import { useGetChannelDetails } from "queries";
import { DashboardActiveState } from "../ChannelDashboard.types";
import { FC, useState } from "react";
import { useAccount } from "hooks";


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
        padding='s6'
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
          {/* <InlineSuccess /> */}
          {channelDashboardError && <InlineError title={channelDashboardError} />}
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