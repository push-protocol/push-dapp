// React and other libraries
import { FC, useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { css } from 'styled-components';
import { MdError } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

import useToast from 'hooks/useToast';
import { useGetAliasInfo, useGetChannelDetails, useInitiateNewChain } from 'queries';
import { useAccount } from 'hooks';

import { addNewChainSteps } from './AddNewChain.constants';
import APP_PATHS from 'config/AppPaths';
import { appConfig } from 'config';

import { NewAddress } from './components/NewAddress';
import { ChangeNetwork } from './components/ChangeNetwork';
import { VerifyAliasChain } from './components/VerifyAliasChain';
import UnlockProfileWrapper, { UNLOCK_PROFILE_TYPE } from 'components/chat/unlockProfile/UnlockProfileWrapper';
import { Alert, Box, Button, Text } from 'blocks';
import { Stepper } from 'common';

import { UserStoreType } from 'types';
import { ALIAS_CHAIN, ActiveStepKey } from './AddNewChain.types';

import { aliasChainIdToChainName } from 'helpers/UtilityHelper';
import { convertAddressToAddrCaip } from 'helpers/CaipHelper';

import { FormikChainAliasProvider } from './AddNewChain.form';

const AddNewChain: FC = () => {
  const [activeStepKey, setActiveStepKey] = useState<ActiveStepKey>('newaddress');
  const [completedSteps, setCompletedSteps] = useState<Array<ActiveStepKey>>(['newaddress']);
  const [isAuthModalVisible, setIsAuthModalVisible] = useState(true);

  const toast = useToast();
  const { mutate: initiateNewChain, isPending, isError } = useInitiateNewChain();
  const { userPushSDKInstance } = useSelector((state: UserStoreType) => state.user);
  const { account, chainId, switchChain } = useAccount();
  const { data: channelDetails } = useGetChannelDetails(account);
  const { data: alaisDetails } = useGetAliasInfo({
    alias: account,
    aliasChain: aliasChainIdToChainName[chainId as keyof typeof aliasChainIdToChainName] as ALIAS_CHAIN,
  });

  const navigate = useNavigate();

  useEffect(() => {
    setIsAuthModalVisible(userPushSDKInstance && userPushSDKInstance?.readmode());
  }, [userPushSDKInstance]);

  const handleInitiate = (alias: string, chainId: string) => {
    setCompletedSteps(['newaddress']);
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

  const handleCloseAuthModal = () => {
    if (channelDetails) navigate(`${APP_PATHS.ChannelDashboard(account)}}`);
    else navigate(APP_PATHS.WelcomeDashboard);
    setIsAuthModalVisible(false);
  };

  return (
    <FormikChainAliasProvider onSubmit={(values) => handleInitiate(values.alias, values.chainId)}>
      <Box
        display="flex"
        flexDirection="column"
        gap="spacing-sm"
        alignItems="center"
      >
        <Box
          width={{ dp: '648px', ml: '357px' }}
          display="flex"
          flexDirection="column"
          alignItems="center"
          margin={{
            ml: 'spacing-lg spacing-md spacing-none spacing-md',
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
              display={{ ml: 'none', initial: 'block' }}
            >
              Add New Chain to Channel
            </Text>
            <Text
              color="text-primary"
              variant="h4-semibold"
              display={{ ml: 'block', initial: 'none' }}
            >
              Add New Chain to Channel
            </Text>
            <Text
              color="text-tertiary"
              variant="bs-regular"
              display={{ ml: 'none', initial: 'block' }}
            >
              Add an alias chain to your channel to enable notifications to that chain.
            </Text>
            <Text
              display={{ ml: 'block', initial: 'none' }}
              color="text-tertiary"
              variant="bes-regular"
            >
              Add an alias chain to your channel to enable notifications to that chain.
            </Text>
          </Box>
          {chainId !== appConfig.coreContractChain && completedSteps.length === 1 ? (
            <>
              <Box
                display="flex"
                padding="spacing-md"
                flexDirection="column"
                gap="spacing-sm"
                alignSelf="stretch"
                alignItems="flex-start"
                borderRadius="radius-sm"
                backgroundColor="surface-secondary"
              >
                <Text
                  textAlign="center"
                  color="text-brand-medium"
                  variant="h5-semibold"
                >
                  Please change your network to Ethereum to proceed.
                </Text>
              </Box>
              <Button onClick={() => switchChain(appConfig.coreContractChain)}>Change Network</Button>
            </>
          ) : channelDetails || alaisDetails ? (
            <>
              <Box width="100%">
                <Stepper
                  steps={addNewChainSteps}
                  completedSteps={completedSteps}
                  setActiveStepKey={(key) => setActiveStepKey(key as ActiveStepKey)}
                />
              </Box>
              {activeStepKey === 'newaddress' && (
                <NewAddress
                  isLoading={isPending && !isError}
                  channelDetails={channelDetails}
                />
              )}
              {activeStepKey === 'changenetwork' && <ChangeNetwork handleNextStep={handleNextStep} />}
              {activeStepKey === 'verifyalias' && <VerifyAliasChain alaisDetails={alaisDetails} />}
            </>
          ) : (
            <>
              <Alert
                variant="error"
                showIcon
                heading="User does not have a channel on Push. Create a channel to proceed."
              />
              <Button onClick={() => navigate(APP_PATHS.CreateChannel)}>Create Channel</Button>
            </>
          )}
          {isAuthModalVisible && (
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
                onClose={handleCloseAuthModal}
                description="Unlock your profile to proceed."
              />
            </Box>
          )}
        </Box>
        <Box margin="spacing-none spacing-md">
          <Text
            color="text-tertiary"
            variant="c-semibold"
          >
            Tip: Please do not exit the process before the address is verified. If you leave, you will need to start
            over.
          </Text>
        </Box>
      </Box>
    </FormikChainAliasProvider>
  );
};

export { AddNewChain };
