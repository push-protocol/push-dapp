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
      gap="spacing-lg"
    >
      {steps.map((step, index) => (
        <Box
          display="flex"
          flexDirection="column"
          gap="spacing-xs"
          width="180px"
          cursor="pointer"
          onClick={() => handleChangeActiveStep(index)}
        >
          <Text
            textAlign="center"
            color={completedSteps.includes(index) ? 'text-brand-medium' : 'text-tertiary'}
            variant="h5-semibold"
          >
            {step.label}
          </Text>

          <Box
            height="4px"
            borderRadius="r2"
            backgroundColor={completedSteps.includes(index) ? 'stroke-brand-medium' : 'stroke-tertiary'}
          ></Box>
        </Box>
      ))}
    </Box>
  );
};

export { Stepper };
