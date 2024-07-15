import { Box } from 'blocks';
import { Asterisk, CrossFilled } from '../icons';
import { Text, textVariants } from '../text';
import React, { ReactNode, forwardRef } from 'react';
import styled, { FlattenSimpleInterpolation, css } from 'styled-components';

export type TextInputProps = {
  css?: FlattenSimpleInterpolation;
  description?: string;
  disabled?: boolean;
  icon?: ReactNode;
  error?: boolean;
  type?: 'text' | 'password';
  errorMessage?: string;
  label?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear?: () => void;
  placeholder?: string;
  required?: boolean;
  success?: boolean;
  totalCount?: number;
  value: string;
};

const Container = styled.div<{ css?: FlattenSimpleInterpolation }>`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
  gap: var(--spacing-xxs, 8px);

  /* Custom CSS applied via styled component css prop */
  ${(props) => props.css || ''};
`;

const StyledTextInput = styled.div<{
  error?: boolean;
  success?: boolean;
  disabled?: boolean;
}>`
  ${({ theme, success, error, disabled }) => {
    const colors = theme?.blocksTheme?.colors;
    const defaultState = error ? 'danger' : success ? 'success' : disabled ? 'disabled' : 'default';
    const focusState = error ? 'danger' : success ? 'success' : 'focus';
    return css`
      align-self: stretch;
      justify-content: space-between;
      align-items: flex-start;
      border-radius: var(--radius-xs, 12px);
      border: 1.5px solid
        var(--components-inputs-stroke-${defaultState}, ${colors[`components-inputs-stroke-${defaultState}`]});
      background: var(
        --components-inputs-background-${defaultState},
        ${colors[`components-inputs-background-${defaultState}`]}
      );

      display: flex;

      font-family: var(--font-family);
      font-size: ${textVariants['bs-regular'].fontSize};
      font-style: ${textVariants['bs-regular'].fontStyle};
      font-weight: ${textVariants['bs-regular'].fontWeight};
      line-height: ${textVariants['bs-regular'].lineHeight};

      gap: var(--spacing-xxs, 8px);

      padding: var(--spacing-xs, 12px);
      [role='img'] {
        width: 24px;
        height: 24px;

        color: var(--components-inputs-icon-${defaultState}, ${colors[`components-inputs-icon-${defaultState}`]});
      }
      & input {
        color: var(--components-inputs-text-${defaultState}, ${colors[`components-inputs-text-${defaultState}`]});

        width: 100%;
        ::placeholder {
          color: var(--components-inputs-text-placeholder, ${colors['components-inputs-text-placeholder']});
        }
        border: none;
        background: transparent;
        &:focus,
        :disabled {
          outline: none;
        }
      }

      &:hover {
        border: 1.5px solid var(--components-inputs-stroke-hover, ${colors['components-inputs-stroke-hover']});
      }

      &:focus-within {
        border: 1.5px solid
          var(--components-inputs-stroke-${focusState}, ${colors[`components-inputs-stroke-${focusState}`]});
        outline: none;
      }

      &:disabled {
        border: 1.5px solid var(--components-inputs-stroke-default, ${colors['components-inputs-stroke-default']});
        background: var(--components-inputs-background-disabled, ${colors['components-inputs-background-disabled']});
        cursor: not-allowed;
        color: var(--components-inputs-text-disabled, ${colors['components-inputs-text-disabled']});
      }
    `;
  }}
`;

const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const LabelTextContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-xxxs, 4px);
`;

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      css,
      description,
      disabled,
      error,
      errorMessage,
      label,
      onChange,
      onClear,
      placeholder,
      required,
      type = 'text',
      icon,
      success,
      totalCount,
      value,
    },
    ref
  ) => {
    return (
      <Container css={css}>
        {label && (
          <LabelContainer>
            <Text
              variant="h6-semibold"
              color={disabled ? 'components-inputs-text-disabled' : 'components-inputs-text-default'}
            >
              <LabelTextContainer>
                {label}
                {required && <Asterisk size={4.6} />}
              </LabelTextContainer>
            </Text>
            {totalCount && (
              <Text
                variant="c-regular"
                color={disabled ? 'components-inputs-text-disabled' : 'components-inputs-text-secondary'}
              >{`${value?.length || 0} / ${totalCount}`}</Text>
            )}
          </LabelContainer>
        )}
        <StyledTextInput
          disabled={disabled}
          error={error}
          onChange={onChange}
          ref={ref}
          success={success}
        >
          <Box
            display="flex"
            gap="spacing-xxs"
            width="100%"
          >
            {icon}
            <input
              type={type}
              disabled={!!disabled}
              {...(disabled ? { 'aria-disabled': true } : {})}
              placeholder={placeholder}
              required={required}
              onChange={onChange}
              value={value}
            />
          </Box>
          {onClear && <CrossFilled onClick={() => onClear?.()} />}
        </StyledTextInput>
        {description && (
          <Text
            variant="c-regular"
            color={
              success || error
                ? 'components-inputs-text-default'
                : disabled
                ? 'components-inputs-text-disabled'
                : 'components-inputs-text-placeholder'
            }
          >
            {description}
          </Text>
        )}
        {errorMessage && (
          <Text
            variant="c-regular"
            color="components-inputs-text-danger"
          >
            {errorMessage}
          </Text>
        )}
      </Container>
    );
  }
);
