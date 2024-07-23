import { FC, useState } from "react";

import { Alert, Box, Button, ErrorFilled, Text } from "blocks";

import { ModalHeader, StakingVariant } from "common";

import { useAccount } from "hooks";

import { useDeactivateChannel, useGetChannelDetails } from "queries";

import { ChannelDashboardInfo } from "./ChannelDashboardInfo";

import { DashboardActiveState } from "../ChannelDashboard.types";

type DeactivateChannelProps = {
  setActiveState: (activeState: DashboardActiveState) => void;
}

const ChannelDeactivationRefund = 40;

const DeactivateChannel: FC<DeactivateChannelProps> = ({
  setActiveState
}) => {

  const { provider, account } = useAccount();

  const { data: channelDetails, isLoading: loadingChannelDetails, refetch: refetchChannelDetails } = useGetChannelDetails(account);
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
          refetchChannelDetails();
          setActiveState('dashboard');
        },
        onError: (error) => {
          console.log("Error in Deactivating Channel", error);
          if (error.code == 'ACTION_REJECTED') {
            setDeactivateError('User rejected signature. Please try again.');
          } else {
            setDeactivateError('Error in deactivating Channel. Check console for more reason.')
          }

        }
      }
    )
  }

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

      {deactivateError && <Alert
        variant='error'
        icon={<ErrorFilled color='text-danger-bold' size={24} />}
        message={deactivateError}
        width='100%'
      />}

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