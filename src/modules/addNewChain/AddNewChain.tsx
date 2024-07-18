// React and other libraries
import { FC, useState } from 'react';

import { useSelector } from 'react-redux';
import { css } from 'styled-components';
import { MdError } from 'react-icons/md';
import { useFormik, FormikProvider } from 'formik';

import useToast from 'hooks/useToast';
import { useInitiateNewChain } from 'queries';

import { addNewChainSteps } from './AddNewChain.constants';

import { NewAddress } from './components/NewAddress';
import { ChangeNetwork } from './components/ChangeNetwork';
import { VerifyAliasChain } from './components/VerifyAliasChain';
import UnlockProfileWrapper, { UNLOCK_PROFILE_TYPE } from 'components/chat/unlockProfile/UnlockProfileWrapper';
import { Box, Text } from 'blocks';
import { Stepper } from 'common';

import { UserStoreType } from 'types';
import { ActiveStepKey } from './AddNewChain.types';

import { convertAddressToAddrCaip } from 'helpers/CaipHelper';

import { validationSchema, NewChainAddressValue, initialValues } from './AddNewChain.form';

const AddNewChain: FC = () => {
  const [activeStepKey, setActiveStepKey] = useState<ActiveStepKey>('newaddress');
  const [completedSteps, setCompletedSteps] = useState<Array<ActiveStepKey>>(['newaddress']);

  const toast = useToast();
  const { mutate: initiateNewChain, isPending, isError } = useInitiateNewChain();
  const { userPushSDKInstance } = useSelector((state: UserStoreType) => state.user);

  const formik = useFormik<NewChainAddressValue>({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleInitiate(values.alias, values.chainId);
    },
  });

  const handleInitiate = (alias: string, chainId: string) => {
    initiateNewChain(
      {
        userPushSDKInstance,
        alias: convertAddressToAddrCaip(alias, parseInt(chainId)),
      },
      {
        onSuccess: () => {
          handleNextStep('changenetwork');
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

  const handleNextStep = (key: ActiveStepKey) => {
    setCompletedSteps([...new Set([...completedSteps, key])]);
    setActiveStepKey(key);
  };

  return (
    <FormikProvider value={formik}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        margin={{
          ml: 'spacing-lg spacing-md',
          dp: 'spacing-lg spacing-none spacing-none spacing-none',
        }}
        padding={{ dp: 'spacing-lg', ml: 'spacing-sm' }}
        gap="spacing-lg"
        borderRadius="radius-lg"
        backgroundColor="surface-primary"
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="spacing-xxxs"
        >
          <Text
            color="text-primary"
            variant="h3-semibold"
            display={{ ml: 'none', dp: 'block' }}
          >
            Add New Chain to Channel
          </Text>
          <Text
            color="text-primary"
            variant="h4-semibold"
            display={{ ml: 'block', dp: 'none' }}
          >
            Add New Chain to Channel
          </Text>
          <Text
            color="text-tertiary"
            variant="bs-regular"
            display={{ ml: 'none', dp: 'block' }}
          >
            Add an alias chain to your channel to enable notifications to that chain.
          </Text>
          <Text
            display={{ ml: 'block', dp: 'none' }}
            color="text-tertiary"
            variant="bes-regular"
          >
            Add an alias chain to your channel to enable notifications to that chain.
          </Text>
        </Box>
        <Stepper
          steps={addNewChainSteps}
          completedSteps={completedSteps}
          setActiveStepKey={(key) => setActiveStepKey(key as ActiveStepKey)}
        />
        {activeStepKey === 'newaddress' && (
          <NewAddress
            // form={formik}
            isLoading={isPending && !isError}
          />
        )}
        {activeStepKey === 'changenetwork' && (
          <ChangeNetwork
            handleNextStep={handleNextStep}
            // form={formik}
          />
        )}
        {activeStepKey === 'verifyalias' && (
          <VerifyAliasChain
          // form={formik}
          />
        )}
        {userPushSDKInstance && userPushSDKInstance?.readmode() && (
          <Box
            display="flex"
            justifyContent="center"
            width="-webkit-fill-available"
            alignItems="center"
            css={css`
              z-index: 99999;
            `}
          >
            <UnlockProfileWrapper
              type={UNLOCK_PROFILE_TYPE.MODAL}
              showConnectModal={true}
            />
          </Box>
        )}
      </Box>
    </FormikProvider>
  );
};

export { AddNewChain };
