// React and other libraries
import { FC, useState } from 'react';

// Components
import { Box, Text } from 'blocks';
import { Stepper } from 'common';
import { addNewChainSteps } from './AddNewChain.constants';

import { NewAddress } from './components/NewAddress';
import { ChangeNetwork } from './components/ChangeNetwork';
import { VerifyAliasChain } from './components/VerifyAliasChain';
import { useSelector } from 'react-redux';
import { UserStoreType } from 'types';
import { css } from 'styled-components';
import UnlockProfileWrapper, { UNLOCK_PROFILE_TYPE } from 'components/chat/unlockProfile/UnlockProfileWrapper';

export type AddNewChainProps = {};

let restrictedForwardSteps = [1, 2];

const AddNewChain: FC<AddNewChainProps> = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [alias, setAlias] = useState<string>('');

  const { userPushSDKInstance } = useSelector((state: UserStoreType) => state.user);

  const handleNextStep = () => {
    if (activeStepIndex < 2) setActiveStepIndex(activeStepIndex + 1);
  };
  restrictedForwardSteps = restrictedForwardSteps.filter((item) => item !== activeStepIndex);
  console.debug(restrictedForwardSteps);
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      margin="s8 s0 s0 s0"
      padding="s8"
      gap="s8"
      borderRadius="r8"
      backgroundColor="white"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="s1"
      >
        <Text
          color="gray-1000"
          variant="h3-semibold"
        >
          Add New Chain to Channel
        </Text>
        <Text
          color="gray-500"
          variant="bs-regular"
        >
          Add an alias chain to your channel to enable notifications to that chain.
        </Text>
      </Box>
      <Stepper
        steps={addNewChainSteps}
        setActiveStepIndex={setActiveStepIndex}
        activeStepIndex={activeStepIndex}
        config={{ restrictedForwardSteps: restrictedForwardSteps }}
      />
      {/* check if we need formik */}
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
