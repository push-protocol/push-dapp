// React and other libraries
import { FC, useState } from 'react';

import { useSelector } from 'react-redux';
import { css } from 'styled-components';

import { addNewChainSteps } from './AddNewChain.constants';

// Components
import { NewAddress } from './components/NewAddress';
import { ChangeNetwork } from './components/ChangeNetwork';
import { VerifyAliasChain } from './components/VerifyAliasChain';
import { Box, Text } from 'blocks';
import { Stepper } from 'common';
import UnlockProfileWrapper, { UNLOCK_PROFILE_TYPE } from 'components/chat/unlockProfile/UnlockProfileWrapper';

import { UserStoreType } from 'types';

export type AddNewChainProps = {};

const completedSteps = [0];
const AddNewChain: FC<AddNewChainProps> = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [alias, setAlias] = useState<string>('');

  const { userPushSDKInstance } = useSelector((state: UserStoreType) => state.user);

  const handleNextStep = () => {
    if (activeStepIndex < 2) {
      completedSteps.push(activeStepIndex + 1);
      setActiveStepIndex(activeStepIndex + 1);
    }
  };

  return (
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
        setActiveStepIndex={setActiveStepIndex}
      />
      {activeStepIndex === 0 && (
        <NewAddress
          setAddress={setAlias}
          handleNextStep={handleNextStep}
        />
      )}
      {activeStepIndex === 1 && (
        <ChangeNetwork
          handleNextStep={handleNextStep}
          alias={alias}
        />
      )}
      {activeStepIndex === 2 && <VerifyAliasChain alias={alias} />}
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
  );
};

export { AddNewChain };
