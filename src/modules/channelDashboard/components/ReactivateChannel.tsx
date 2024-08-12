import { FC, useEffect, useState } from 'react';
import { ethers } from 'ethers';

import { Alert, Box, Button } from 'blocks';

import { ModalHeader, StakingVariant } from 'common';

import { addresses } from 'config';

import { getPushTokenApprovalAmount, getPushTokenFromWallet } from 'helpers';

import { useAccount } from 'hooks';

import { ChannelDetails, useApprovePUSHToken, useReactivateChannel } from 'queries';

import { ChannelDashboardInfo } from './ChannelDashboardInfo';
import { DashboardActiveState } from '../ChannelDashboard.types';
import { ImportPushTokenMessage } from 'common/components/ImportPushTokenMessage';


type ReactivateChannelProps = {
  setActiveState: (activeState: DashboardActiveState) => void;
  channelDetails?: ChannelDetails;
  refetchChannelDetails: () => void;
};

const feesRequiredForReactivation = 50;

const ReactivateChannel: FC<ReactivateChannelProps> = ({
  setActiveState,
  channelDetails,
  refetchChannelDetails
}) => {

  const { provider, account } = useAccount();

  const [reactivationError, setReactivationError] = useState('');
  const [pushApprovalAmount, setPushApprovalAmount] = useState(0);
  const [balance, setBalance] = useState(0);

  // Check PUSH Token in wallet
  const pushTokenInWallet = async () => {
    const amount = await getPushTokenFromWallet({
      address: account,
      provider: provider,
    });
    setBalance(amount);
  };

  const checkApprovedPUSHTokenAmount = async () => {
    const pushTokenApprovalAmount = await getPushTokenApprovalAmount({
      address: account,
      provider: provider,
      contractAddress: addresses.epnscore,
    });
    setPushApprovalAmount(parseInt(pushTokenApprovalAmount));
  };

  useEffect(() => {
    if (!account || !provider) return;
    checkApprovedPUSHTokenAmount();
    pushTokenInWallet();
  }, [account, provider]);

  const { mutate: approvePUSHToken, isPending: approvingPUSH } = useApprovePUSHToken();

  const handleApprovePUSH = () => {
    setReactivationError('');

    var signer = provider.getSigner(account);
    console.debug(signer);

    const fees = ethers.utils.parseUnits((feesRequiredForReactivation - pushApprovalAmount).toString(), 18);

    approvePUSHToken(
      {
        noOfTokenToApprove: fees,
        signer,
      },
      {
        onSuccess: () => {
          checkApprovedPUSHTokenAmount();
        },
        onError: (error: any) => {
          console.log('Error in Approving PUSH', error);
          if (error.code == 'ACTION_REJECTED') {
            setReactivationError('User rejected signature. Please try again.');
          } else {
            setReactivationError('Error in approving PUSH Tokens');
          }
        },
      }
    );
  };

  const { mutate: reactivateChannel, isPending } = useReactivateChannel();

  const handleReactivate = () => {
    setReactivationError('');
    const fees = ethers.utils.parseUnits(feesRequiredForReactivation.toString(), 18);
    var signer = provider.getSigner(account);
    console.debug(signer);

    reactivateChannel(
      {
        fees,
        signer,
      },
      {
        onSuccess: () => {
          console.log('Channel Reactivated');
          refetchChannelDetails();
          setActiveState('dashboard');
        },
        onError: (error: any) => {
          console.log('Error in Reactivating channel', error);
          if (error.code == 'ACTION_REJECTED') {
            setReactivationError('User rejected signature. Please try again.');
          } else {
            setReactivationError('Error in reactivating channel. Check console for more reasons.');
          }
        },
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
        <Box width='100%'>
          <Alert
            variant='error'
            heading={reactivationError}
            showIcon
          />
        </Box>
      )}

      <ChannelDashboardInfo
        channelDetails={channelDetails}
      />

      <Box
        display="flex"
        flexDirection="column"
        gap="spacing-sm"
        width="-webkit-fill-available"
      >
        <StakingVariant
          title="Channel Reactivation Fee"
          fees={feesRequiredForReactivation}
          pushApprovalAmount={pushApprovalAmount}
          showFaucet
          showBalance
          balance={balance}
          setBalance={setBalance}
        />
        <ImportPushTokenMessage title="Don’t see Push token in your wallet?" />
      </Box>

      <Box
        display="flex"
        gap="spacing-sm"
        justifyContent="center"
      >
        <Button
          size="medium"
          variant="outline"
          onClick={() => setActiveState('dashboard')}
        >
          Back
        </Button>

        {pushApprovalAmount >= feesRequiredForReactivation ? (
          <Button
            disabled={isPending}
            onClick={handleReactivate}
            loading={isPending}
          >
            {isPending ? 'Activating' : 'Activate'}
          </Button>
        ) : (
          <Button
            disabled={approvingPUSH}
            onClick={handleApprovePUSH}
            loading={approvingPUSH}
          >
            {approvingPUSH ? 'Approving' : 'Approve PUSH'}
          </Button>
        )}
      </Box>

    </Box>
  );
};

export { ReactivateChannel };