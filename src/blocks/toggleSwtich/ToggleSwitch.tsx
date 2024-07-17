import React from 'react';

import styled from 'styled-components';
import * as Switch from '@radix-ui/react-switch';

import { Box } from '../box';
import { Text } from '../text';

export type ToggleSwitchProps = {
  /* Label for the toggle switch */
  label?: string;
  /* Description for the toggle switch */
  description?: string;
  /* Sets toggle switch as disabled */
  disabled?: boolean;
  /* Render the toggle before text contents */
  leadingToggle?: boolean;
  /* Sets toggle switch to checked */
  checked: boolean;
  /* Function invoked when toggle switch is clicked*/
  onCheckedChange: (checked: boolean) => void;
};

const StyledToggleRoot = styled(Switch.Root)`
  width: 38px;
  height: 20px;
  padding: 3px;
  background-color: var(--components-toggle-switch-background-unselected, #c4cbd5);
  border-radius: var(--radius-md);
  position: relative;
  &[data-state='checked'] {
    background-color: var(--components-toggle-switch-background-selected, #c742dd);
  }
  &:disabled {
    cursor: not-allowed;
    background: var(--components-toggle-switch-background-disabled, #eaebf2);
    span {
      background: var(--components-toggle-switch-icon-disabled, #b0b3b9);
    }
  }
`;
const StyledToggleThumb = styled(Switch.Thumb)`
  display: block;
  cursor: pointer;
  width: 14px;
  height: 14px;
  background-color: var(--components-toggle-switch-icon-default, #fff);
  border-radius: var(--radius-round);
  transition: transform 100ms;
  will-change: transform;
  &[data-state='checked'] {
    transform: translateX(17.5px);
  }
`;
const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  label,
  description,
  disabled = false,
  onCheckedChange,
  leadingToggle = true,
  checked,
}) => {
  return (
    <Box
      display="flex"
      gap="spacing-xxs"
      justifyContent="space-between"
      flexDirection={leadingToggle ? 'row' : 'row-reverse'}
    >
      <StyledToggleRoot
        role="switch"
        checked={checked}
        disabled={disabled}
        onCheckedChange={onCheckedChange}
      >
        <StyledToggleThumb />
      </StyledToggleRoot>
      {(label || description) && (
        <Box
          display="flex"
          alignItems="flex-start"
          flexDirection="column"
        >
          {label && (
            <Text
              variant="bs-bold"
              color="components-radio-button-text-default"
            >
              {label}
            </Text>
          )}
          {description && (
            <Text
              variant="c-regular"
              color="components-radio-button-text-secondary"
            >
              {description}
            </Text>
          )}
        </Box>
      )}
    </Box>
  );
};

ToggleSwitch.displayName = 'ToggleSwitch';

export { ToggleSwitch };
