import { Box, Button, Text } from "blocks";
import { DashboardActiveState } from "../ChannelDashboard.types";
import { FC, useState } from "react";
import { useDeactivateChannel, useGetChannelDetails } from "queries";
import { useAccount } from "hooks";
import { ChannelDashboardInfo } from "./ChannelDashboardInfo";
import { InlineError, ModalHeader, StakingVariant } from "common";

type DeactivateChannelProps = {
  setActiveState: (activeState: DashboardActiveState) => void;
}

const ChannelDeactivationRefund = 40;

const DeactivateChannel: FC<DeactivateChannelProps> = ({
  setActiveState
}) => {

  const { provider, account } = useAccount();

  const { mutate: deactivateChannel, isPending } = useDeactivateChannel();
  const [deactivateError, setDeactivateError] = useState('');
  const handleDeactivateChannel = () => {
    setDeactivateError('');
    var signer = provider.getSigner(account);
    console.debug(signer);

    deactivateChannel({
      signer
    },
      {
        onSuccess: () => {
          console.log("Channel Deactivated Successfully");
          setActiveState('dashboard');
        },
        onError: (error) => {
          console.log("Error in Deactivating Channel", error);
          setDeactivateError('User rejected signature. Please try again.')

        }
      }
    )
  }

  const { data: channelDetails, isLoading: loadingChannelDetails } = useGetChannelDetails(account);

  return (
    <Box
      display='flex'
      width={{ initial: '648px', ml: '357px' }}
      padding='s6'
      flexDirection='column'
      alignItems='center'
      gap='spacing-lg'
      backgroundColor='surface-primary'
      borderRadius='radius-lg'
      margin='spacing-none spacing-none spacing-sm spacing-none'
    >
      <ModalHeader
        title="Deactivate Channel"
        description="Deactivating your channel will disable sending notifications from it."
      />

      {deactivateError && <InlineError title={deactivateError} />}

      <ChannelDashboardInfo
        channelDetails={channelDetails}
        loadingChannelDetails={loadingChannelDetails}
      />

      <StakingVariant fees={ChannelDeactivationRefund} title="You will receive as a refund" />

      <Text variant="bs-semibold" color='text-primary'>Are you sure you want to deactivate your channel?</Text>

      <Box display='flex' gap='spacing-sm' justifyContent='center'>
        <Button size="medium" variant="outline" onClick={() => setActiveState('dashboard')}>Back</Button>
        <Button disabled={isPending} variant="danger" onClick={handleDeactivateChannel}>{isPending ? 'Deactivating' : 'Deactivate'}</Button>
      </Box>


    </Box>
  );
};

export { DeactivateChannel };