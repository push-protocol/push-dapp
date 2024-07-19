// React + web3 essentials
import { FC } from 'react';

// Components
import { Box, Text } from 'blocks';

type StepperProps = {
  steps: Array<{ label: string; key: string }>;
  setActiveStepKey: (step: string) => void;
  completedSteps: Array<string>;
};

const Stepper: FC<StepperProps> = ({ steps, setActiveStepKey, completedSteps }) => {
  const handleChangeActiveStep = (step: string) => {
    if (completedSteps?.includes(step)) {
      setActiveStepKey(step);
    }
  };
  return (
    <Box
      display="flex"
      gap="spacing-lg"
    >
      {steps.map((step) => (
        <Box
          display="flex"
          flexDirection="column"
          gap="spacing-xs"
          width="180px"
          cursor="pointer"
          onClick={() => handleChangeActiveStep(step.key)}
        >
          <Text
            textAlign="center"
            color={completedSteps.includes(step.key) ? 'text-brand-medium' : 'text-tertiary'}
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
            backgroundColor={completedSteps.includes(step.key) ? 'stroke-brand-medium' : 'stroke-tertiary'}
          ></Box>
        </Box>
      ))}
    </Box>
  );
};

export { Stepper };
