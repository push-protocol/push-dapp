import { ReactNode, forwardRef } from 'react';

import styled, { FlattenSimpleInterpolation } from 'styled-components';

import { ModeProp } from '../Blocks.types';

import { getInputFieldState, getInputFieldStateStyles } from './InputField.utils';
import { useBlocksTheme } from 'blocks/Blocks.hooks';
import { CrossFilled } from 'blocks/icons';
import { Text } from 'blocks/text';
import { descriptionColor } from './InputField.constants';

export type InputFieldProps = {
  /* Additional prop from styled components to apply custom css to input field */
  css?: FlattenSimpleInterpolation;
  /* Render an icon before input field contents */
  icon?: ReactNode;
  /* Handles the change in input value */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /* Input value */
  value?: string;
  /* Input type value */
  type?: 'text' | 'password';
  /* Handles the clearing the entire input value */
  onClear?: () => void;
  /* Label for the input field */
  label?: string;
  /* TotalLength of input value */
  totalCount?: number;
  /* Placeholder for input field */
  placeholder?: string;
  /* Sets the input field to be compulsory */
  required?: boolean;
  /* Sets the input field to error state */
  error?: boolean;
  /* Sets the input field to success state */
  success?: boolean;
  /* Sets button as disabled */
  disabled?: boolean;
  /* Description shown below the input field */
  description?: string;
  /* Error message shown below the input field */
  errorMessage?: string;
};

const StyledInputField = styled.div<InputFieldProps & ModeProp>`
  /* Common Input field CSS */
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: var(--s2);
  .label-count {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .input-container {
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    display: flex;
    align-items: center;
    font-family: var(--font-family);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    white-space: nowrap;
    padding: var(--s0) var(--s3);
    border-radius: var(--r3);

    /* Common icon css added through CSS class */
    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 2px;
      span {
        width: 18px;
        height: 13.5px;
      }
    }

    & input {
      border: none;
      background-color: transparent;
      width: 100%;
      padding: var(--s3) var(--s0);
      &:focus {
        outline: none;
      }
      &:hover {
        outline: none;
      }
      :disabled {
        background-color: transparent;
      }
    }
  }
  /* InputField type CSS styles */
  ${({ mode, error, disabled }) =>
    getInputFieldStateStyles({ mode, state: getInputFieldState({ error: !!error, disabled: !!disabled }) })}

  /* Custom CSS applied via styled component css prop */
  ${(props) => props.css || ''}
`;

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      disabled,
      error,
      success,
      required,
      label,
      totalCount,
      placeholder,
      icon,
      type = 'text',
      onChange,
      value,
      onClear,
      description,
      errorMessage,

      ...props
    },
    ref
  ) => {
    const { mode } = useBlocksTheme();
    const state = getInputFieldState({ error: !!error, disabled: !!disabled });
    return (
      <StyledInputField
        disabled={disabled}
        error={error}
        required={required}
        role="input"
        mode={mode}
        ref={ref}
        {...props}
      >
        {(label || totalCount) && (
          <div className="label-count">
            {label && <Text className="label">{label}</Text>}
            {totalCount && <Text className="count">{totalCount}</Text>}
          </div>
        )}
        <div className="input-container">
          {icon && <span className="icon">{icon}</span>}
          <input
            type={type}
            disabled={!!disabled}
            {...(disabled ? { 'aria-disabled': true } : {})}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
          />
          {/* width is not getting applied */}
          {onClear && (
            <CrossFilled
              width="18px"
              height="18px"
              className="clear"
              onClick={() => onClear?.()}
            />
          )}
        </div>
        {description && (
          <Text
            variant="c-regular"
            className="description"
            color={descriptionColor[state]}
          >
            {description}
          </Text>
        )}
        {errorMessage && (
          <Text
            variant="c-regular"
            color={descriptionColor.error}
            className="error-message"
          >
            {errorMessage}
          </Text>
        )}
      </StyledInputField>
    );
  }
);

InputField.displayName = 'InputField';

export { InputField };
