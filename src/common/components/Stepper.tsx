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
      gap="s8"
      width='-webkit-fill-available'
    >
      {steps.map((step, index) => (
        <Box
          key={index}
          display="flex"
          flexDirection="column"
          gap="s3"
          width="inherit"
          cursor="pointer"
          color={completedSteps.includes(index) ? 'pink-500' : 'gray-500'}
          onClick={() => handleChangeActiveStep(index)}
        >
          <Text
            textAlign="center"
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
            backgroundColor={completedSteps.includes(index) ? 'pink-500' : 'gray-500'}
          ></Box>
        </Box>
      ))}
    </Box>
  );
};

export { Stepper };
