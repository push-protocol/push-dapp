import { FC } from 'react';

import { MdCheckCircle, MdError } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import useToast from 'hooks/useToast';
import { useVerifyAliasChain, AliasInfoResponse, useGetChannelDetails } from 'queries';
import { useAccount } from 'hooks';

import APP_PATHS from 'config/AppPaths';

import { Alert, Box, Button, Text, TextInput } from 'blocks';

import { UserStoreType } from 'types';

import { useChainAliasForm } from '../AddNewChain.form';

export type VerifyAliasChainProps = {
  alaisDetails: AliasInfoResponse | undefined;
};

const VerifyAliasChain: FC<VerifyAliasChainProps> = ({ alaisDetails }) => {
  const { userPushSDKInstance } = useSelector((state: UserStoreType) => {
    return state.user;
  });
  const { account, chainId } = useAccount();
  const { mutate: verifyAliasChain, isPending } = useVerifyAliasChain();

  const { values: formValues } = useChainAliasForm();

  const selectedChainId = parseInt(formValues.chainId);

  const { data: channelDetails, refetch: refetchChannelDetails } = useGetChannelDetails(alaisDetails?.channel || '');

  const aliasAddress = formValues.alias;

  const toast = useToast();
  const navigate = useNavigate();
  const isAliasNetworkVerified = channelDetails?.aliases.find(
    (alias) => alias.alias_blockchain_id === formValues.chainId && alias.is_alias_verified
  );
  const errorMessage = isAliasNetworkVerified
    ? 'Channel already exists on this chain.'
    : account !== aliasAddress
    ? 'Incorrect address. Connect using the correct address to proceed.'
    : '';

  const validateInput = () => {
    if (!isAliasNetworkVerified && chainId === selectedChainId && account === aliasAddress) return false;
    return true;
  };

  const handleVerifyAliasChain = () => {
    verifyAliasChain(
      {
        userPushSDKInstance,
        channelAddress: alaisDetails?.channel ?? '',
      },
      {
        onSuccess: () => {
          toast.showMessageToast({
            toastTitle: 'Success',
            toastMessage: 'Verification Successful',
            toastType: 'SUCCESS',
            getToastIcon: (size) => (
              <MdCheckCircle
                size={size}
                color="green"
              />
            ),
          });
          refetchChannelDetails();
          navigate(`${APP_PATHS.ChannelDashboard(account)}`);
        },
        onError: (error: any) => {
          if (error) {
            toast.showMessageToast({
              toastTitle: 'Error',
              toastMessage: error.message,
              toastType: 'ERROR',
              getToastIcon: (size) => (
                <MdError
                  size={size}
                  color="red"
                />
              ),
            });
          }
        },
      }
    );
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="spacing-xl"
      width="100%"
      alignItems="center"
    >
      {errorMessage && (
        <Box width="100%">
          <Alert
            variant="error"
            heading={errorMessage}
            showIcon
            onAction={isAliasNetworkVerified ? () => navigate(`${APP_PATHS.ChannelDashboard(account)}`) : undefined}
            actionText={isAliasNetworkVerified ? 'Back to Home' : undefined}
          />
        </Box>
      )}

      <Box
        display="flex"
        flexDirection="column"
        gap="spacing-sm"
      >
        <Text
          variant="bs-semibold"
          textAlign="center"
          color="text-primary"
        >
          You’re almost there!
          <br /> Verify the address on the new chain to send notifications.
        </Text>
        <TextInput
          disabled
          value={aliasAddress}
        />
      </Box>
      <Button
        disabled={validateInput()}
        onClick={handleVerifyAliasChain}
        loading={isPending}
      >
        {isPending ? 'Verifying' : 'Verify New Address'}
      </Button>
    </Box>
  );
};

export { VerifyAliasChain };
