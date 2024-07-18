import { Box, Button, Text } from "blocks";
import { ChannelAddHeader } from "./ChannelAddHeader";
import { DashboardActiveState } from "../ChannelDashboard.types";
import { FC, useState } from "react";
import { useDeactivateChannel, useGetChannelDetails } from "queries";
import { useAccount } from "hooks";
import InlineError from "common/components/InlineError";
import { ChannelDashboardInfo } from "./ChannelDashboardInfo";
import { css } from "styled-components";

type DeactivateChannelProps = {
  setActiveState: (activeState: DashboardActiveState) => void;
}

const DeactivateChannel: FC<DeactivateChannelProps> = ({
  setActiveState
}) => {

  const { provider, account } = useAccount();

  const { mutate: deactivateChannel, isPending } = useDeactivateChannel();
  const [deactivateError, setDeactivateError] = useState('');
  const handleDeactivateChannel = () => {
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
      <ChannelAddHeader
        title="Deactivate Channel"
        description="Deactivating your channel will disable sending notifications from it."
      />

      {deactivateError && <InlineError title={deactivateError} />}

      <ChannelDashboardInfo
        channelDetails={channelDetails}
        loadingChannelDetails={loadingChannelDetails}
      />

      <Box display="flex" flexDirection="column" gap="spacing-sm" width='-webkit-fill-available'>
        <Box display="flex" flexDirection="column" alignSelf="stretch">
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            backgroundColor='surface-secondary'
            borderRadius="radius-sm"
            padding="spacing-sm spacing-md"
            alignItems="center"
          >
            <Text
              variant="h4-semibold"
              color='text-primary'
              display={{ ml: 'none', dp: 'block' }}
            >
              You will reveive as a refund
            </Text>

            <Text
              variant="h5-semibold"
              color='text-primary'
              display={{ ml: 'block', dp: 'none' }}
            >
              You will reveive as a refund
            </Text>
            <Box>
              <Text variant="h4-semibold" color='text-brand-medium'>
                40 PUSH
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>

      <Text variant="bs-semibold" color='text-primary'>Are you sure you want to deactivate your channel?</Text>

      <Box display='flex' gap='spacing-sm' justifyContent='center'>
        <Button size="medium" variant="outline" onClick={() => setActiveState('dashboard')}>Back</Button>
        <Button disabled={isPending} variant="danger" onClick={handleDeactivateChannel}>Deactivate</Button>
      </Box>


    </Box>
  );
};

export { DeactivateChannel };