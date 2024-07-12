// React + web3 essentials
import { FC } from 'react';

// Components
import { Box, Text } from 'blocks';

type StepperProps = {
  steps: Array<{ label: string }>;
  setActiveStepIndex: (stepIndex: number) => void;
  completedSteps: Array<number>;
};

const Stepper: FC<StepperProps> = ({ steps, setActiveStepIndex, completedSteps }) => {
  const handleChangeActiveStep = (stepIndex: number) => {
    if (completedSteps?.includes(stepIndex)) {
      setActiveStepIndex(stepIndex);
    }
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
            display={{ ml: 'none', dp: 'block' }}
          >
            {step.label}
          </Text>

          <Text
            textAlign="center"
            variant="h6-semibold"
            display={{ ml: 'block', dp: 'none' }}
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
