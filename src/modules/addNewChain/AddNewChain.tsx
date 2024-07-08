// React and other libraries
import { FC, useState } from 'react';

// Components
import { Box, Text } from 'blocks';
import { Stepper } from 'common';
import { addNewChainSteps } from './AddNewChain.constants';

import { NewAddress } from './components/NewAddress';
import { ChangeNetwork } from './components/ChangeNetwork';
import { VerifyAliasChain } from './components/VerifyAliasChain';

export type AddNewChainProps = {};

const AddNewChain: FC<AddNewChainProps> = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [address, setAddress] = useState<string>('');

  const handleNextStep = () => {
    if (activeStepIndex < 2) setActiveStepIndex(activeStepIndex + 1);
  };

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
      />
      {/* check if we need formik */}
      {activeStepIndex === 0 && (
        <NewAddress
          setAddress={setAddress}
          handleNextStep={handleNextStep}
        />
      )}
      {activeStepIndex === 1 && <ChangeNetwork handleNextStep={handleNextStep} />}
      {activeStepIndex === 2 && <VerifyAliasChain address={address} />}
    </Box>
  );
};

export { AddNewChain };
// colors > brand tokens > semantics (for individual components)
