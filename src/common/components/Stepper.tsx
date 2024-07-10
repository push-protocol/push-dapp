// React + web3 essentials
import { FC } from 'react';

// Components
import { Box, Text } from 'blocks';

type StepperProps = {
  steps: Array<{ label: string }>;
  setActiveStepIndex: (stepIndex: number) => void;
  completedSteps: Array<number>;
  config?: {
    restrictedForwardSteps?: Array<number>;
    restrictedBackwardSteps?: Array<number>;
  };
};

const Stepper: FC<StepperProps> = ({ steps, setActiveStepIndex, config, completedSteps }) => {
  const handleChangeActiveStep = (stepIndex: number) => {
    if (!config?.restrictedBackwardSteps?.includes(stepIndex) && !config?.restrictedForwardSteps?.includes(stepIndex))
      setActiveStepIndex(stepIndex);
  };
  return (
    <Box
      display="flex"
      gap="s8"
    >
      {steps.map((step, index) => (
        <Box
          display="flex"
          flexDirection="column"
          gap="s3"
          width="180px"
          cursor="pointer"
          color={completedSteps.includes(index) ? 'pink-500' : 'gray-500'}
          onClick={() => handleChangeActiveStep(index)}
        >
          <Text
            textAlign="center"
            variant="h5-semibold"
          >
            {step.label}
          </Text>

          <Box
            height="4px"
            borderRadius="r2"
            backgroundColor={completedSteps.includes(index) ? 'pink-500' : 'gray-500'}
          ></Box>
        </Box>
      ))}
    </Box>
  );
};

export { Stepper };
