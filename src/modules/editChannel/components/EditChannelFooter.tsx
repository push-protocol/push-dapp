import { FC, useEffect, useMemo, useState } from 'react';

import { ethers } from 'ethers';
import isEqual from 'lodash/isEqual';

import { Box, Button } from 'blocks';

import { abis, addresses, appConfig } from 'config';
import { InlineError, StakingVariant } from 'common';

import { getPushTokenApprovalAmount } from 'helpers';
import { IPFSupload } from 'helpers/IpfsHelper';

import { useAccount } from 'hooks';

import { useApprovePUSHToken, useEditChannel, useGetChannelDetails } from 'queries';
import { useEditChannelForm } from '../EditChannel.forms';
import { DashboardActiveState } from 'modules/channelDashboard/ChannelDashboard.types';

const minFeesForAddChannel = 50;

type EditChannelFooterProps = {
  setActiveState: (activeState: DashboardActiveState) => void;

}

const EditChannelFooter: FC<EditChannelFooterProps> = ({
  setActiveState
}) => {
  const { account, provider, chainId } = useAccount();

  const {
    values: formValues,
    isValid,
    initialValues
  } = useEditChannelForm();

  const { data: channelDetails, refetch: refetchChannelDetails } = useGetChannelDetails(account);
  const { mutate: approvePUSHToken, isPending: approvingPUSH } = useApprovePUSHToken();
  const { mutate: editChannel, isPending: editingChannel } = useEditChannel();


  const [feesRequiredForEdit, setFeesRequiredForEdit] = useState<number>(0);
  const [pushApprovalAmount, setPushApprovalAmount] = useState<number>(0);
  const [updateChannelError, setUpdateChannelError] = useState('');


  useEffect(() => {
    if (!account || !provider) return;
    getChannelUpdateCounter();
    checkApprovedPUSHTokenAmount();
  }, [account, provider]);

  const getChannelUpdateCounter = async () => {
    const onCoreNetwork: boolean = appConfig.coreContractChain === chainId;

    const coreProvider = onCoreNetwork ? provider : new ethers.providers.JsonRpcProvider(appConfig.coreRPC);
    const coreContractInstance = new ethers.Contract(addresses.epnscore, abis.epnscore, coreProvider);

    const amount = await coreContractInstance.channelUpdateCounter(account);

    setFeesRequiredForEdit(minFeesForAddChannel * (Number(amount) + 1)); //50
  }

  const checkApprovedPUSHTokenAmount = async () => {
    const pushTokenApprovalAmount = await getPushTokenApprovalAmount({
      address: account,
      provider: provider,
      contractAddress: addresses.epnscore
    });
    setPushApprovalAmount(parseInt(pushTokenApprovalAmount));
  };


  const checkForChanges = useMemo(() => {
    if (!isEqual(formValues, initialValues)) {
      return false;
    } else {
      return true;
    }
  }, [formValues]);

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
        onError: (error) => {
          console.log('Error in Approving PUSH', error, error.reason);
          if (error.code == 'ACTION_REJECTED') {
            setUpdateChannelError('User rejected signature. Please try again.');
          } else {
            setUpdateChannelError(error.reason);
          }
        }
      }
    );
  };


  const handleEditChannel = async () => {
    setUpdateChannelError('');

    if (!isValid) {
      return;
    }

    var signer = provider.getSigner(account);
    console.debug(signer);

    if (channelDetails) {
      const input = JSON.stringify({
        name: formValues.channelName,
        info: formValues.channelDesc,
        url: formValues.channelURL,
        icon: formValues.channelIcon,
      });

      const storagePointer = await IPFSupload(input);
      console.debug('IPFS storagePointer:', storagePointer);

      const identity = '1+' + storagePointer; // IPFS Storage Type and HASH
      const identityBytes = ethers.utils.toUtf8Bytes(identity);
      const parsedFees = ethers.utils.parseUnits(feesRequiredForEdit.toString(), 18);

      editChannel(
        {
          account,
          identityBytes,
          fees: parsedFees,
          signer
        },
        {
          onSuccess: () => {
            console.log('Successfully edited channel');
            refetchChannelDetails();
            setActiveState('dashboard')
          },
          onError: (error) => {
            console.log('Error in updating channel details', error, error.code);
            if (error.code == 'ACTION_REJECTED') {
              setUpdateChannelError('User rejected signature. Please try again.');
            } else {
              setUpdateChannelError(error.reason);
            }

          }
        }
      );
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignSelf="stretch">
      {updateChannelError && <InlineError title={updateChannelError} />}

      <StakingVariant
        title="Channel edit fee"
        description="Editing channel details requires fees to be deposited"
        fees={feesRequiredForEdit}
        pushApprovalAmount={pushApprovalAmount}
        showFaucet
      />

      <Box
        display="flex"
        justifyContent="end"
        gap="spacing-sm"
        margin="spacing-lg spacing-none spacing-none spacing-none"
      >
        <Button size="medium" variant="outline"
          onClick={() => setActiveState('dashboard')}
        >
          Back
        </Button>

        {feesRequiredForEdit && pushApprovalAmount >= feesRequiredForEdit ? (
          <Button disabled={checkForChanges || editingChannel || !isValid} onClick={handleEditChannel}>
            {editingChannel ? 'Updating' : 'Save Changes'}
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
