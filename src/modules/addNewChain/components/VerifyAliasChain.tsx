import { Box, Button, Text, TextInput } from 'blocks';
import APP_PATHS from 'config/AppPaths';
import useToast from 'hooks/useToast';
import { useVerifyAliasChain } from 'queries';
import { FC } from 'react';
import { MdCheckCircle, MdError } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { UserStoreType } from 'types';

export type VerifyAliasChainProps = {
  alias: string;
};

const VerifyAliasChain: FC<VerifyAliasChainProps> = ({ alias }) => {
  const { userPushSDKInstance } = useSelector((state: UserStoreType) => {
    return state.user;
  });
  const { mutate: verifyAliasChain, isPending } = useVerifyAliasChain();

  const toast = useToast();
  const navigate = useNavigate();

  const aliasParts = alias.split(':');
  const handleVerifyAliasChain = () => {
    verifyAliasChain(
      {
        userPushSDKInstance,
        alias,
      },
      {
        onSuccess: (response) => {
          console.debug(response, 'response');
          toast.showMessageToast({
            toastTitle: 'Success',
            toastMessage: 'Verification Successfull',
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
      gap="s10"
      alignItems="center"
    >
      <Box
        display="flex"
        flexDirection="column"
        gap="s4"
      >
        <Text
          variant="bs-semibold"
          textAlign="center"
        >
          You’re almost there!
          <br /> Verify the address on the new chain to send notifications.
        </Text>
        <TextInput
          disabled
          value={aliasParts[2]}
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