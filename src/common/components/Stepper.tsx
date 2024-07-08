// React + web3 essentials
import { FC } from 'react';

// Components
import { Box, Text } from 'blocks';

type StepperProps = {
  steps: Array<{ label: string }>;
  activeStepIndex: number;
  setActiveStep: (stepIndex: number) => void;
};

const Stepper: FC<StepperProps> = ({ steps, setActiveStep, activeStepIndex }) => {
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
          color={activeStepIndex == index ? 'pink-500' : 'gray-500'}
          onClick={() => setActiveStep(1)}
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
            backgroundColor={activeStepIndex == index ? 'pink-500' : 'gray-500'}
          ></Box>
        </Box>
      ))}
    </Box>
  );
};

export { Stepper };
