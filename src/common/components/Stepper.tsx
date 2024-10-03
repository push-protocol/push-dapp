// React + web3 essentials
import { FC, useCallback, useEffect, useRef, useState } from 'react';

// Components
import { Box, Text } from 'blocks';
import { css } from 'styled-components';

type StepperProps = {
  steps: Array<{ label: string; value: string }>;
  setActiveStepKey: (step: string) => void;
  completedSteps: Array<string>;
};

const Stepper: FC<StepperProps> = ({ steps, setActiveStepKey, completedSteps }) => {
  const [stepWidth, setStepWidth] = useState(0);
  const parentRef = useRef<HTMLDivElement>(null);
  const stepLength = steps?.length;
  const handleChangeActiveStep = (step: string) => {
    if (completedSteps?.includes(step)) {
      setActiveStepKey(step);
    }
  };
  const updateStepWidth = useCallback(() => {
    if (parentRef.current) {
      setStepWidth((parentRef.current.offsetWidth - 32 * (stepLength - 1)) / stepLength);
    }
  }, []);

  useEffect(() => {
    updateStepWidth();
    window.addEventListener('resize', updateStepWidth);

    return () => {
      window.removeEventListener('resize', updateStepWidth);
    };
  }, [updateStepWidth]);

  return (
    <Box
      display="flex"
      gap="spacing-lg"
      justifyContent="space-between"
      ref={parentRef}
      width="inherit"
      css={css`
        box-sizing: content-box;
      `}
    >
      {steps.map((step, index) => (
        <Box
          key={index}
          display="flex"
          flexDirection="column"
          gap="spacing-xs"
          width={`${stepWidth}px`}
          cursor="pointer"
          onClick={() => handleChangeActiveStep(step.value)}
        >
          <Text
            textAlign="center"
            color={completedSteps.includes(step.value) ? 'text-brand-medium' : 'text-tertiary'}
            variant="h5-semibold"
            ellipsis
            display={{ ml: 'none', initial: 'block' }}
          >
            {step.label}
          </Text>

          <Text
            ellipsis
            textAlign="center"
            variant="h6-semibold"
            display={{ ml: 'block', initial: 'none' }}
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
