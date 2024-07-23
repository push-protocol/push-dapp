import { FC, useEffect, useState } from 'react';
import { ethers } from 'ethers';

import { Alert, Box, Button, ErrorFilled } from 'blocks';

import { ModalHeader, StakingVariant } from 'common';

import { addresses } from 'config';

import { getPushTokenApprovalAmount } from 'helpers';

import { useAccount } from 'hooks';

import { useApprovePUSHToken, useGetChannelDetails, useReactivateChannel } from 'queries';

import { ChannelDashboardInfo } from './ChannelDashboardInfo';
import { DashboardActiveState } from '../ChannelDashboard.types';
import ImportPushTokenMessage from 'common/components/ImportPushTokenMessage';

const feesRequiredForReactivation = 50;

type ReactivateChannelProps = {
  setActiveState: (activeState: DashboardActiveState) => void;
};
const ReactivateChannel: FC<ReactivateChannelProps> = ({ setActiveState }) => {
  const { provider, account } = useAccount();

  const {
    data: channelDetails,
    isLoading: loadingChannelDetails,
    refetch: refetchChannelDetails
  } = useGetChannelDetails(account);
  const { mutate: approvePUSHToken, isPending: approvingPUSH } = useApprovePUSHToken();
  const { mutate: reactivateChannel, isPending } = useReactivateChannel();

  const [reactivationError, setReactivationError] = useState('');
  const [pushApprovalAmount, setPushApprovalAmount] = useState(0);

  useEffect(() => {
    if (!account || !provider) return;
    checkApprovedPUSHTokenAmount();
  }, [account, provider]);

  const checkApprovedPUSHTokenAmount = async () => {
    const pushTokenApprovalAmount = await getPushTokenApprovalAmount({
      address: account,
      provider: provider,
      contractAddress: addresses.epnscore
    });
    setPushApprovalAmount(parseInt(pushTokenApprovalAmount));
  };

  const handleApprovePUSH = () => {
    setReactivationError('');

    var signer = provider.getSigner(account);
    console.debug(signer);

    const fees = ethers.utils.parseUnits((feesRequiredForReactivation - pushApprovalAmount).toString(), 18);

    approvePUSHToken(
      {
        noOfTokenToApprove: fees,
        signer
      },
      {
        onSuccess: () => {
          checkApprovedPUSHTokenAmount();
        },
        onError: (error) => {
          console.log('Error in Approving PUSH', error);
          if (error.code == 'ACTION_REJECTED') {
            setReactivationError('User rejected signature. Please try again.');
          } else {
            setReactivationError('Error in approving PUSH Tokens');
          }
        }
      }
    );
  };

  const handleReactivate = () => {
    setReactivationError('');
    const fees = ethers.utils.parseUnits(feesRequiredForReactivation.toString(), 18);
    var signer = provider.getSigner(account);
    console.debug(signer);

    reactivateChannel(
      {
        fees,
        signer
      },
      {
        onSuccess: () => {
          console.log('Channel Reactivated');
          refetchChannelDetails();
          setActiveState('dashboard');
        },
        onError: (error) => {
          console.log('Error in Reactivating channel', error);
          if (error.code == 'ACTION_REJECTED') {
            setReactivationError('User rejected signature. Please try again.');
          } else {
            setReactivationError('Error in reactivating channel. Check console for more reasons.');
          }
        }
      }
    );
  };

  return (
    <Box
      display="flex"
      width={{ initial: '648px', ml: '357px' }}
      padding="spacing-md"
      flexDirection="column"
      alignItems="center"
      gap="spacing-lg"
      backgroundColor="surface-primary"
      borderRadius="radius-lg"
      margin="spacing-none spacing-none spacing-sm spacing-none"
    >
      <ModalHeader
        title="Reactivate Channel"
        description="Performing this action will make your channel visible to users."
      />

      {reactivationError && (
        <Alert
          variant="error"
          icon={<ErrorFilled color="icon-state-danger-bold" size={24} />}
          message={reactivationError}
          width="100%"
        />
      )}

      <ChannelDashboardInfo channelDetails={channelDetails} loadingChannelDetails={loadingChannelDetails} />

      <Box display="flex" flexDirection="column" gap="spacing-sm" width="-webkit-fill-available">
        <StakingVariant
          title="Channel Reactivation Fee"
          fees={feesRequiredForReactivation}
          pushApprovalAmount={pushApprovalAmount}
          showFaucet
          showBalance
        />
        <ImportPushTokenMessage title="Don’t see Push token in your wallet?" />
      </Box>

      <Box display="flex" gap="spacing-sm" justifyContent="center">
        <Button size="medium" variant="outline" onClick={() => setActiveState('dashboard')}>
          Back
        </Button>

        {pushApprovalAmount >= feesRequiredForReactivation ? (
          <Button disabled={isPending} onClick={handleReactivate}>
            {isPending ? 'Activating' : 'Activate'}
          </Button>
        ) : (
          <Button disabled={approvingPUSH} onClick={handleApprovePUSH}>
            {approvingPUSH ? 'Approving' : 'Approve PUSH'}
          </Button>
        )}
      </Box>
    </Box>
  );
};

export { ReactivateChannel };
