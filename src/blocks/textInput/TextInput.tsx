import { ReactNode, forwardRef } from 'react';

import styled, { FlattenSimpleInterpolation } from 'styled-components';

import { ModeProp } from '../Blocks.types';

import { getTextInputState, getTextInputStateStyles } from './TextInput.utils';
import { useBlocksTheme } from 'blocks/Blocks.hooks';
import { Asterisk, CrossFilled } from 'blocks/icons';
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
  .label {
    display: flex;
    gap: var(--s1);
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
    [role='img'] {
      width: 18px;
      height: 18px;
    }

    & input {
      flex: 1;
      border: none;
      background-color: transparent;
      padding: var(--s3) var(--s0);
      margin-left: var(--s1);
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
  ${({ mode, error, disabled, success }) =>
    getTextInputStateStyles({
      mode,
      state: getTextInputState({ error: !!error, disabled: !!disabled, success: !!success }),
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
        success={success}
        required={required}
        role="input"
        mode={mode}
        ref={ref}
        {...props}
      >
        {(label || totalCount) && (
          <div className="label-count">
            {label && (
              <div className="label">
                <Text
                  variant="h6-semibold"
                  color={{ light: disabled ? 'gray-400' : 'gray-1000', dark: disabled ? 'gray-700' : 'gray-100' }}
                >
                  {label}
                </Text>
                {!!required && (
                  <Asterisk
                    color={{ light: disabled ? 'gray-400' : 'gray-500', dark: disabled ? 'gray-700' : 'gray-500' }}
                    size={4.6}
                  />
                )}
              </div>
            )}

            {totalCount && (
              <Text
                variant="c-regular"
                color={{ light: 'gray-600', dark: 'gray-500' }}
              >
                {`${value?.length} / ${totalCount}`}
              </Text>
            )}
          </div>
        )}
        <div className="input-container">
          {icon}
          <input
            type={type}
            disabled={!!disabled}
            {...(disabled ? { 'aria-disabled': true } : {})}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
          />
          {onClear && <CrossFilled onClick={() => onClear?.()} />}
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
