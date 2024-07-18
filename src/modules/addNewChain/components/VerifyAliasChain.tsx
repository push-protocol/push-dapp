import { FC } from 'react';

import { MdCheckCircle, MdError } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useFormikContext } from 'formik';

import useToast from 'hooks/useToast';
import { useVerifyAliasChain } from 'queries';

import APP_PATHS from 'config/AppPaths';

import { Box, Button, Text, TextInput } from 'blocks';

import { convertAddressToAddrCaip } from 'helpers/CaipHelper';

import { UserStoreType } from 'types';

import { NewChainAddressValue } from '../AddNewChain.form';

const VerifyAliasChain: FC = () => {
  const { userPushSDKInstance } = useSelector((state: UserStoreType) => {
    return state.user;
  });
  const { mutate: verifyAliasChain, isPending } = useVerifyAliasChain();

  const { values: formValues } = useFormikContext<NewChainAddressValue>();
  const toast = useToast();
  const navigate = useNavigate();

  const selectedChainId = parseInt(formValues.chainId);
  const aliasAddress = formValues.alias;

  const handleVerifyAliasChain = () => {
    verifyAliasChain(
      {
        userPushSDKInstance,
        alias: convertAddressToAddrCaip(aliasAddress, selectedChainId),
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
          navigate(APP_PATHS.Dashboard);
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
      alignItems="center"
    >
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
        onClick={handleVerifyAliasChain}
        disabled={isPending}
      >
        {isPending ? 'Verifying' : 'Verify New Address'}
      </Button>
    </Box>
  );
};

export { VerifyAliasChain };
