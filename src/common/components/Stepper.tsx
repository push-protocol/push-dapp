// React + web3 essentials
import { FC } from 'react';

// Components
import { Box, Text } from 'blocks';
import { css } from 'styled-components';

type StepperProps = {
  steps: Array<{ label: string; value: string }>;
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
      width="inherit"
      justifyContent="space-between"
    >
      {steps.map((step, index) => (
        <Box
          key={index}
          display="flex"
          flexDirection="column"
          gap="spacing-xs"
          css={css`
            flex: 1;
          `}
          cursor="pointer"
          onClick={() => handleChangeActiveStep(step.value)}
        >
          <Text
            textAlign="center"
            color={completedSteps.includes(step.value) ? 'text-brand-medium' : 'text-tertiary'}
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
            borderRadius="radius-xxs"
            // TODO: Monalisha has to fix this
            // @ts-expect-error
            backgroundColor={completedSteps.includes(step.value) ? 'stroke-brand-medium' : 'stroke-tertiary'}
          ></Box>
        </Box>
      ))}
    </Box>
  );
};

export { Stepper };
