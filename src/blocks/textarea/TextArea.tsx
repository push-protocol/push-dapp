import { Asterisk } from 'blocks/icons';
import { Text } from 'blocks/text/Text';
import React, { forwardRef } from 'react';
import styled, { FlattenSimpleInterpolation, css } from 'styled-components';

export type TextAreaProps = {
  css?: FlattenSimpleInterpolation;
  description?: string;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  label?: string;
  numberOfLines?: number;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  required?: boolean;
  resizable?: boolean;
  success?: boolean;
  totalCount?: number;
  value?: string;
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

const StyledTextArea = styled.textarea<{
  error?: boolean;
  success?: boolean;
  resizable?: boolean;
}>`
  ${({ theme, resizable, success, error }) => {
    const colors = theme?.blocksTheme?.colors;
    const defaultState = error ? 'danger' : success ? 'success' : 'default';
    const focusState = error ? 'danger' : success ? 'success' : 'focus';
    return css`
      align-self: stretch;
      align-items: flex-start;
      border-radius: var(--radius-xs, 12px);
      border: 1.5px solid
        var(--components-inputs-stroke-${defaultState}, ${colors[`components-inputs-stroke-${defaultState}`]});
      background: var(
        --components-inputs-background-${defaultState},
        ${colors[`components-inputs-background-${defaultState}`]}
      );

      color: var(--components-inputs-text-${defaultState}, ${colors[`components-inputs-text-${defaultState}`]});

      display: flex;

      font-family: var(--font-family);
      font-size: 14px;
      font-style: normal;
      font-weight: 400;

      gap: var(--spacing-none, 0px);

      line-height: 20px;

      padding: var(--spacing-xs, 12px);
      ::placeholder {
        color: var(--components-inputs-text-placeholder, ${colors['components-inputs-text-placeholder']});
      }

      resize: ${resizable ? 'vertical' : 'none'};

      &:hover {
        outline: none;
      }

      &:focus {
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

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      css,
      description,
      disabled,
      error,
      errorMessage,
      label,
      numberOfLines = 4,
      onChange,
      placeholder,
      required,
      resizable,
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
        <StyledTextArea
          disabled={disabled}
          error={error}
          onChange={onChange}
          placeholder={placeholder}
          ref={ref}
          required={required}
          resizable={resizable}
          rows={numberOfLines}
          success={success}
          value={value}
        />
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
