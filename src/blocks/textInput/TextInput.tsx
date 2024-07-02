import { ReactNode, forwardRef } from 'react';

import styled, { FlattenSimpleInterpolation } from 'styled-components';

import { ModeProp } from '../Blocks.types';

import { getTextInputState, getTextInputStateStyles } from './TextInput.utils';
import { useBlocksTheme } from 'blocks/Blocks.hooks';
import { CrossFilled } from 'blocks/icons';
import { Text } from 'blocks/text';

export type TextInputProps = {
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

const StyledTextInput = styled.div<TextInputProps & ModeProp>`
  /* Common Input field CSS */
  display: flex;
  flex-direction: column;
  width: inherit;
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
  /* TextInput type CSS styles */
  ${({ mode, error, disabled }) =>
    getTextInputStateStyles({
      mode,
      state: getTextInputState({ error: !!error, disabled: !!disabled }),
    })}

  /* Custom CSS applied via styled component css prop */
  ${(props) => props.css || ''}
`;

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
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
    return (
      <StyledTextInput
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
            {label && <Text>{label}</Text>}
            {totalCount && <Text>{totalCount}</Text>}
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
            color={{ light: 'gray-600', dark: 'gray-600' }}
          >
            {description}
          </Text>
        )}
        {errorMessage && (
          <Text
            variant="c-regular"
            color={{ light: 'red-700', dark: 'red-700' }}
          >
            {errorMessage}
          </Text>
        )}
      </StyledTextInput>
    );
  }
);

TextInput.displayName = 'TextInput';

export { TextInput };
