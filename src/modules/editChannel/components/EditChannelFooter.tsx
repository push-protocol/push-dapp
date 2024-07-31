import { FC, useEffect, useState } from 'react';

import { ethers } from 'ethers';

import { Alert, Box, Button, ErrorFilled } from 'blocks';

import { abis, addresses, appConfig } from 'config';
import { StakingVariant } from 'common';

import { getPushTokenApprovalAmount, getPushTokenFromWallet } from 'helpers';

import { useAccount } from 'hooks';

import { useApprovePUSHToken } from 'queries';
import { DashboardActiveState } from 'modules/channelDashboard/ChannelDashboard.types';

const minFeesForAddChannel = 50;

type EditChannelFooterProps = {
  setActiveState: (activeState: DashboardActiveState) => void;
};

const EditChannelFooter: FC<EditChannelFooterProps> = ({ setActiveState }) => {
  const { account, provider, chainId } = useAccount();

  const { mutate: approvePUSHToken, isPending: approvingPUSH } = useApprovePUSHToken();

  const [feesRequiredForEdit, setFeesRequiredForEdit] = useState<number>(0);
  const [pushApprovalAmount, setPushApprovalAmount] = useState<number>(0);
  const [updateChannelError, setUpdateChannelError] = useState('');

  const [balance, setBalance] = useState(0);

  // Check PUSH Token in wallet
  const pushTokenInWallet = async () => {
    const amount = await getPushTokenFromWallet({
      address: account,
      provider: provider
    });
    setBalance(amount);
  };

  const getChannelUpdateCounter = async () => {
    const onCoreNetwork: boolean = appConfig.coreContractChain === chainId;

    const coreProvider = onCoreNetwork ? provider : new ethers.providers.JsonRpcProvider(appConfig.coreRPC);
    const coreContractInstance = new ethers.Contract(addresses.epnscore, abis.epnscore, coreProvider);

    const amount = await coreContractInstance.channelUpdateCounter(account);

    setFeesRequiredForEdit(minFeesForAddChannel * (Number(amount) + 1)); //50
  };

  const checkApprovedPUSHTokenAmount = async () => {
    const pushTokenApprovalAmount = await getPushTokenApprovalAmount({
      address: account,
      provider: provider,
      contractAddress: addresses.epnscore
    });
    setPushApprovalAmount(parseInt(pushTokenApprovalAmount));
  };

  useEffect(() => {
    if (!account || !provider) return;
    getChannelUpdateCounter();
    checkApprovedPUSHTokenAmount();
    pushTokenInWallet();
  }, [account, provider]);


  const handleApprovePUSH = () => {
    setUpdateChannelError('');

    if (feesRequiredForEdit == 0) return;

    var signer = provider.getSigner(account);
    console.debug(signer);

    const fees = ethers.utils.parseUnits(feesRequiredForEdit.toString(), 18);

    approvePUSHToken(
      {
        noOfTokenToApprove: fees,
        signer
      },
      {
        onSuccess: () => {
          console.log('Successfully Approved PUSH');
          checkApprovedPUSHTokenAmount();
        },
        onError: (error: any) => {
          console.log('Error in Approving PUSH', error);
          if (error.code == 'ACTION_REJECTED') {
            setUpdateChannelError('User rejected signature. Please try again.');
          } else {
            setUpdateChannelError('Error in approving PUSH Tokens');
          }
        }
      }
    );
  };

  return (
    <Box display="flex" flexDirection="column" alignSelf="stretch">
      {updateChannelError && (
        <Alert
          variant="error"
          icon={<ErrorFilled color="icon-state-danger-bold" size={24} />}
          message={updateChannelError}
          width="100%"
        />
      )}

      <StakingVariant
        title="Channel edit fee"
        description="Editing channel details requires fees to be deposited"
        fees={feesRequiredForEdit}
        pushApprovalAmount={pushApprovalAmount}
        showFaucet
        showBalance
        balance={balance}
        setBalance={setBalance}
      />

      <Box
        display="flex"
        justifyContent="end"
        gap="spacing-sm"
        margin="spacing-lg spacing-none spacing-none spacing-none"
      >
        <Button size="medium" variant="outline" onClick={() => setActiveState('dashboard')}>
          Back
        </Button>

        {feesRequiredForEdit && pushApprovalAmount >= feesRequiredForEdit ? (
          // <Button disabled={checkForChanges || editingChannel || !isValid} onClick={handleEditChannel}>
          //   {editingChannel ? 'Updating' : 'Save Changes'}
          // </Button>
          <Button>
            Save Changes
          </Button>
        ) : (
          <Button variant="primary" size="medium" disabled={approvingPUSH} onClick={handleApprovePUSH}>
            {approvingPUSH ? 'Approving' : 'Approve PUSH'}
          </Button>
        )}
      </Box>
    </Box>
  );
};

export { EditChannelFooter };