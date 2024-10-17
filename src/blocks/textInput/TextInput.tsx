import { Asterisk, CrossFilled } from '../icons';
import { TextVariants, textVariants } from '../text';
import React, { ReactNode, forwardRef } from 'react';
import styled, { FlattenSimpleInterpolation, css } from 'styled-components';

export type TextInputProps = {
  css?: FlattenSimpleInterpolation;
  description?: string;
  disabled?: boolean;
  icon?: ReactNode;
  error?: boolean;
  type?: 'text' | 'password' | 'number';
  errorMessage?: string;
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear?: () => void;
  placeholder?: string;
  required?: boolean;
  success?: boolean;
  totalCount?: number;
  value: string | number;
};

const Container = styled.div<{ css?: FlattenSimpleInterpolation; label: TextInputProps['label'] }>`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
  gap: var(--spacing-${({ label }) => (label ? 'xxs' : 'none')});

  /* Custom CSS applied via styled component css prop */
  ${(props) => props.css || ''};
`;

const StyledTextInput = styled.div<{
  error?: boolean;
  success?: boolean;
  disabled?: boolean;
}>`
  ${({ success, error, disabled }) => {
    const defaultState = error ? 'danger' : success ? 'success' : disabled ? 'disabled' : 'default';
    const focusState = error ? 'danger' : success ? 'success' : 'focus';
    return css`
      align-self: stretch;
      justify-content: space-between;
      align-items: flex-start;
      border-radius: var(--radius-xs, 12px);
      border: 1.5px solid var(--components-inputs-stroke-${defaultState});
      background: var(--components-inputs-background-${defaultState});

      display: flex;

      gap: var(--spacing-xxs, 8px);

      padding: var(--spacing-xs, 12px);
      [role='img'] {
        width: 24px;
        height: 24px;

        color: var(--components-inputs-icon-${defaultState});
      }
      & input {
        color: var(--components-inputs-text-${defaultState});

        font-family: var(--font-family);
        font-size: ${textVariants['bs-regular'].fontSize};
        font-style: ${textVariants['bs-regular'].fontStyle};
        font-weight: ${textVariants['bs-regular'].fontWeight};
        line-height: ${textVariants['bs-regular'].lineHeight};
        width: 100%;
        ::placeholder {
          color: var(--components-inputs-text-placeholder);
        }
        border: none;
        background: transparent;
        &:focus,
        :disabled {
          outline: none;
        }
      }

      &:hover {
        border: 1.5px solid var(--components-inputs-stroke-hover);
      }

      &:focus-within {
        border: 1.5px solid var(--components-inputs-stroke-${focusState});
        outline: none;
      }

      &:disabled {
        border: 1.5px solid var(--components-inputs-stroke-default);
        background: var(--components-inputs-background-disabled);
        cursor: not-allowed;
        color: var(--components-inputs-text-disabled);
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

const InputText = styled.span<{ color: string; variant: TextVariants }>`
  color: var(--${({ color }) => color});
  font-family: var(--font-family);
  ${({ variant }) =>
    `
  font-size: ${textVariants[variant].fontSize};
  font-style: ${textVariants[variant].fontStyle};
  font-weight: ${textVariants[variant].fontWeight};
  line-height: ${textVariants[variant].lineHeight};
  `}
`;

const LabelTextContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-xxxs, 4px);
`;

const InputContainer = styled.div`
  display: flex;
  gap: var(--spacing-xxs);
  width: 100%;
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
      <Container
        css={css}
        label={label}
      >
        {label && (
          <LabelContainer>
            <InputText
              color={disabled ? 'components-inputs-text-disabled' : 'components-inputs-text-default'}
              variant="h6-bold"
            >
              <LabelTextContainer>
                {label}
                {required && <Asterisk size={4.6} />}
              </LabelTextContainer>
            </InputText>
            {totalCount && (
              <InputText
                color={disabled ? 'components-inputs-text-disabled' : 'components-inputs-text-secondary'}
                variant="c-regular"
              >
                {`${(typeof value === 'string' && value?.length) || 0} / ${totalCount}`}
              </InputText>
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
          <InputContainer>
            {icon}
            <input
              type={type}
              disabled={!!disabled}
              {...(disabled ? { 'aria-disabled': true } : {})}
              placeholder={placeholder}
              onChange={onChange}
              value={value}
            />
          </InputContainer>
          {onClear && <CrossFilled onClick={() => onClear?.()} />}
        </StyledTextInput>
        {description && (
          <InputText
            color={
              success || error
                ? 'components-inputs-text-default'
                : disabled
                ? 'components-inputs-text-disabled'
                : 'components-inputs-text-placeholder'
            }
            variant="c-regular"
          >
            {description}
          </InputText>
        )}
        {errorMessage && (
          <InputText
            color="components-inputs-text-danger"
            variant="c-regular"
          >
            {errorMessage}
          </InputText>
        )}
      </Container>
    );
  }
);
