import { FC, useContext, useMemo, useState } from 'react';

import { useSelector } from 'react-redux';

import { Alert, Box, Button, TextInput } from 'blocks';

import { AppContext } from 'contexts/AppContext';
import { ModalHeader } from 'common';

import { useAccount } from 'hooks';

import { useAddDelegate, useGetChannelDelegates } from 'queries';

import { UserStoreType } from 'types';
import { DashboardActiveState } from '../ChannelDashboard.types';
import { createDelegateForm } from '../forms';
import { convertAddressToAddrCaip } from 'helpers/CaipHelper';

type ChannelAddDelegateProps = {
  setActiveState: (activeState: DashboardActiveState) => void;
};

const ChannelAddDelegate: FC<ChannelAddDelegateProps> = ({
  setActiveState
}) => {
  const { userPushSDKInstance } = useSelector((state: UserStoreType) => {
    return state.user;
  });

  const { wallet, chainId, account } = useAccount();

  // @ts-expect-error
  const { handleConnectWalletAndEnableProfile } = useContext(AppContext);

  const [addDelegateError, setAddDelegateError] = useState<string | null>(null);

  const addressinCaip = useMemo(() => {
    return convertAddressToAddrCaip(account, chainId);
  }, [chainId, account]);


  const { data: channel_delegates, refetch: refetchChannelDelegate } = useGetChannelDelegates(userPushSDKInstance, addressinCaip);

  const { mutate: addDelegate, isPending } = useAddDelegate();

  const handleAddDelegate = async () => {

    let userPushInstance = userPushSDKInstance;

    if (userPushSDKInstance?.readmode()) {
      userPushInstance = await handleConnectWalletAndEnableProfile({ wallet });
      if (!userPushInstance || userPushInstance?.readmode()) {
        return;
      }
    }

    addDelegate(
      {
        userPushSDKInstance: userPushInstance,
        delegateAddress: convertAddressToAddrCaip(delegateForm.values.delegateAddress, chainId),
      },
      {
        onSuccess: () => {
          console.log('Channel Delegate Added Successfully');
          refetchChannelDelegate();
          setActiveState('dashboard');
        },
        onError: (error) => {
          console.log('Error in adding delegatee', error);
          setAddDelegateError('Error in delegating. Check console for more reasons');
        },
      }
    );

  }

  const delegateForm = createDelegateForm({
    handleAddDelegate,
    channel_delegates,
  });

  return (
    <Box
      display="flex"
      alignSelf="stretch"
      flexDirection="column"
      backgroundColor="surface-primary"
      borderRadius="radius-lg"
      padding="spacing-lg"
      gap="spacing-xl"
      width={{ initial: '537px', ml: '275px' }}
    >

      <ModalHeader
        title="Add Delegate"
        description="Add an account who can send notifications on behalf of the channel"
      />


      {addDelegateError && (
        <Box width='100%'>
          <Alert
            variant='error'
            heading={addDelegateError}
            showIcon
          />
        </Box>
      )}

      <form onSubmit={delegateForm.handleSubmit}>
        <Box
          display="flex"
          flexDirection="column"
          gap="spacing-md"
        >
          <TextInput
            required
            label="Delegate Address"
            onChange={delegateForm.handleChange('delegateAddress')}
            value={delegateForm.values.delegateAddress}
            error={Boolean(delegateForm.errors.delegateAddress)}
            errorMessage={delegateForm.errors.delegateAddress}
          />

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
            <Button disabled={isPending} loading={isPending}>{isPending ? 'Adding' : 'Add'}</Button>
          </Box>
        </Box>
      </form>


    </Box>
  );
};

export { ChannelAddDelegate };