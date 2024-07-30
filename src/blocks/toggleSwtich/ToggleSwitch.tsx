import React from 'react';

import styled, { FlattenSimpleInterpolation } from 'styled-components';
import * as Switch from '@radix-ui/react-switch';

import { TextVariants, textVariants } from '../text';
import { ThemeColors } from 'blocks/theme/Theme.types';

export type ToggleSwitchProps = {
  /* Additional prop from styled components to apply custom css to Toggle switch */
  css?: FlattenSimpleInterpolation;
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
  background-color: var(--components-toggle-switch-background-unselected);
  border-radius: var(--radius-md);
  position: relative;
  &[data-state='checked'] {
    background-color: var(--components-toggle-switch-background-selected);
  }
  &:disabled {
    cursor: not-allowed;
    background: var(--components-toggle-switch-background-disabled);
    span {
      background: var(--components-toggle-switch-icon-disabled);
    }
  }
`;
const StyledToggleThumb = styled(Switch.Thumb)`
  display: block;
  cursor: pointer;
  width: 14px;
  height: 14px;
  background-color: var(--components-toggle-switch-icon-default);
  border-radius: var(--radius-round);
  transition: transform 100ms;
  will-change: transform;
  &[data-state='checked'] {
    transform: translateX(17.5px);
  }
`;

const Container = styled.div<{ css?: FlattenSimpleInterpolation; flexDirection: string }>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || ''};
  gap: var(--spacing-xxs);
  justifycontent: space-between;

  /* Custom CSS applied via styled component css prop */
  ${(props) => props.css || ''};
`;

const LabelContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;
const TextContainer = styled.p<{ variant: TextVariants; color: ThemeColors }>`
  margin: 0;
  color: ${({ color }) => color};
  ${({ variant }) =>
    `font-family: var(--font-family);
      font-size: ${textVariants[variant].fontSize};
      font-style: ${textVariants[variant].fontStyle};
      font-weight: ${textVariants[variant].fontWeight};
      line-height: ${textVariants[variant].lineHeight};`}
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
    <Container flexDirection={leadingToggle ? 'row' : 'row-reverse'}>
      <StyledToggleRoot
        role="switch"
        checked={checked}
        disabled={disabled}
        onCheckedChange={onCheckedChange}
      >
        <StyledToggleThumb />
      </StyledToggleRoot>
      {(label || description) && (
        <LabelContainer>
          {label && (
            <TextContainer
              variant="bs-bold"
              color="components-radio-button-text-default"
            >
              {label}
            </TextContainer>
          )}
          {description && (
            <TextContainer
              variant="c-regular"
              color="components-radio-button-text-secondary"
            >
              {description}
            </TextContainer>
          )}
        </LabelContainer>
      )}
    </Container>
  );
};

ToggleSwitch.displayName = 'ToggleSwitch';

export { ToggleSwitch };
