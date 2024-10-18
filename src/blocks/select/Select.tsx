import React, { useRef, useState, ReactNode, useEffect, useCallback } from 'react';
import styled, { FlattenSimpleInterpolation, css } from 'styled-components';
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from '@reach/combobox';
import '@reach/combobox/styles.css';

import { textVariants } from '../text';
import { Asterisk, CaretDown } from '../icons';

export type SelectOption = {
  icon?: React.ReactNode;
  label: string;
  value: string;
};

export type SelectProps = {
  /* Additional prop from styled components to apply custom css to Button */
  css?: FlattenSimpleInterpolation;
  /* Description below the select field*/
  description?: string;
  /* Sets button as disabled */
  disabled?: boolean;
  /* Sets error state */
  error?: boolean;
  /* The error message to be shown */
  errorMessage?: string;
  /* Shows the label for the select field */
  label?: string;
  /* Function invoked when an option is selected */
  onSelect?: (value: string) => void;
  /* Select option list */
  options: SelectOption[];
  /* Placeholder to be shown when nothing is selected */
  placeholder?: string;
  /* To make the field compulsory  */
  required?: boolean;
  /* Selected value */
  value?: string;
  /* Sets success state */
  success?: boolean;
  /* Action component on the top left of the Select */
  action?: ReactNode;
};

const Container = styled.div<{ css?: FlattenSimpleInterpolation; label: SelectProps['label'] }>`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
  gap: var(--spacing-${({ label }) => (label ? 'xxs' : 'none')});

  /* Custom CSS applied via styled component css prop */
  ${(props) => props.css || ''};
`;

const StyledBox = styled.div<{
  error?: boolean;
  success?: boolean;
  disabled?: boolean;
}>`
  ${({ theme, success, error, disabled }) => {
    const colors = theme?.blocksTheme?.colors;
    const defaultState = error ? 'danger' : success ? 'success' : disabled ? 'disabled' : 'default';
    const focusState = error ? 'danger' : success ? 'success' : 'focus';

    return css`
      display: flex;
      align-self: stretch;
      cursor: pointer;
      align-items: center;
      justify-content: space-between;
      border-radius: var(--radius-xs, 12px);
      border: 1.5px solid
        var(--components-inputs-stroke-${defaultState}, ${colors[`components-inputs-stroke-${defaultState}`]});
      background: var(
        --components-inputs-background-${defaultState},
        ${colors[`components-inputs-background-${defaultState}`]}
      );
      padding: var(--spacing-xs, 12px);
      &:hover {
        border: 1.5px solid var(--components-inputs-stroke-hover, #c4cbd5);
      }

      &:focus-within {
        border: 1.5px solid
          var(--components-inputs-stroke-${focusState}, ${colors[`components-inputs-stroke-${focusState}`]});
        outline: none;
      }

      [data-reach-combobox-input] {
        background-color: transparent;
        border: none;
        color: var(--components-inputs-text-default, ${colors['components-inputs-text-default']});

        display: flex;

        font-family: var(--font-family);
        font-size: ${textVariants['bs-regular'].fontSize};
        font-style: ${textVariants['bs-regular'].fontStyle};
        font-weight: ${textVariants['bs-regular'].fontWeight};
        line-height: ${textVariants['bs-regular'].lineHeight};

        gap: var(--spacing-none, 0px);

        &:focus {
          outline: none;
        }
        &:hover {
          outline: none;
        }
        &:disabled {
          background-color: transparent;
          cursor: not-allowed;
          color: var(--components-inputs-text-disabled, ${colors['components-inputs-text-disabled']});
        }

        ::placeholder {
          color: var(--components-inputs-text-placeholder, ${colors['components-inputs-text-placeholder']});
        }
      }
    `;
  }}
`;

const StyledPopover = styled(ComboboxPopover)`
  margin: var(--spacing-sm) var(--spacing-none) var(--spacing-none) var(--spacing-none);
  padding: var(--spacing-xxs, 8px);
  border-radius: var(--radius-xs, 12px);
  border: var(--border-sm, 1px) solid var(--stroke-secondary, #eaebf2);
  background: var(--surface-primary, #fff);
  overflow: hidden auto;
  max-height: 20rem;
`;

const StyledCombobox = styled(Combobox)`
  width: 100%;
  position: relative;
`;

const StyledInputContainer = styled.div`
  display: flex;
  width: 100%;
  gap: var(--spacing-xxs);
`;

const StyledInput = styled(ComboboxInput)`
  width: 100%;
`;
const StyledList = styled(ComboboxList)`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs, 12px);
`;

const StyledOption = styled(ComboboxOption)`
  display: flex;
  align-items: center;
  padding: var(--spacing-xxxs, 4px);
  gap: var(--spacing-xxs, 8px);
  color: var(--components-list-item-text-default);
  font-family: var(--font-family);
  font-size: ${textVariants['bs-regular'].fontSize};
  font-style: ${textVariants['bs-regular'].fontStyle};
  font-weight: ${textVariants['bs-regular'].fontWeight};
  line-height: ${textVariants['bs-regular'].lineHeight};
  &:hover {
    border-radius: var(--radius-xxs, 8px);
    background: var(--surface-secondary, #f5f6f8);
  }
  [role='img'] {
    width: 24px;
    height: 24px;
  }
`;
const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const LabelText = styled.span<{ color: string }>`
  color: var(--${({ color }) => color});
  font-family: var(--font-family);
  font-size: ${textVariants['h6-semibold'].fontSize};
  font-style: ${textVariants['h6-semibold'].fontStyle};
  font-weight: ${textVariants['h6-semibold'].fontWeight};
  line-height: ${textVariants['h6-semibold'].lineHeight};
`;

const LabelTextContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-xxxs, 4px);
`;
const Description = styled.span<{ color: string }>`
  color: var(--${({ color }) => color});
  font-family: var(--font-family);
  font-size: ${textVariants['c-regular'].fontSize};
  font-style: ${textVariants['c-regular'].fontStyle};
  font-weight: ${textVariants['c-regular'].fontWeight};
  line-height: ${textVariants['c-regular'].lineHeight};
`;
const Select: React.FC<SelectProps> = ({
  options,
  onSelect,
  css,
  value,
  placeholder = '',
  error,
  success,
  label,
  required,
  description,
  errorMessage,
  action,
  disabled,
}) => {
  const [popoverWidth, setPopoverWidth] = useState(0);
  const [viewPopover, setViewPopover] = useState(false);
  const [popoverLeft, setPopoverLeft] = useState(0);
  const comboboxRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => setViewPopover(false);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const updatePopoverPosition = useCallback(() => {
    if (comboboxRef.current) {
      const comboboxRect = comboboxRef.current.getBoundingClientRect();
      setPopoverWidth(comboboxRect.width);
      setPopoverLeft(comboboxRect.left);
    }
  }, []);

  useEffect(() => {
    updatePopoverPosition();
    window.addEventListener('resize', updatePopoverPosition);

    return () => {
      window.removeEventListener('resize', updatePopoverPosition);
    };
  }, [updatePopoverPosition]);

  const selectedOption = options.find((option) => option.value === value);

  const handleParentFocus = () => {
    childRef?.current?.focus();
  };
  return (
    <Container
      css={css}
      label={label}
    >
      <LabelContainer>
        <LabelText color={disabled ? 'components-inputs-text-disabled' : 'components-inputs-text-default'}>
          <LabelTextContainer>
            {label}
            {required && <Asterisk size={4.6} />}
          </LabelTextContainer>
        </LabelText>
        {action}
      </LabelContainer>

      <StyledCombobox
        ref={comboboxRef}
        aria-labelledby="select"
        openOnFocus
        onSelect={(value: string) => {
          onSelect?.(value);
          setViewPopover(false);
        }}
      >
        <StyledBox
          ref={parentRef}
          error={error}
          success={success}
          disabled={disabled}
          onFocus={handleParentFocus}
          onClick={() => {
            handleParentFocus();
            setViewPopover(true);
          }}
        >
          <StyledInputContainer>
            {selectedOption?.icon}
            <StyledInput
              ref={childRef}
              disabled={disabled}
              placeholder={placeholder}
              value={selectedOption?.label}
            />
          </StyledInputContainer>
          <CaretDown
            size={20}
            color="icon-tertiary"
          />
        </StyledBox>

        {viewPopover && (
          <StyledPopover style={{ width: popoverWidth, left: popoverLeft, boxSizing: 'border-box' }}>
            <StyledList>
              {options.map((option, index) => (
                <StyledOption
                  value={option.value}
                  key={`${option.value}${index}`}
                >
                  {option?.icon}
                  {option.label}
                </StyledOption>
              ))}
            </StyledList>
          </StyledPopover>
        )}
      </StyledCombobox>
      {description && (
        <Description
          color={
            success || error
              ? 'components-inputs-text-default'
              : disabled
              ? 'components-inputs-text-disabled'
              : 'components-inputs-text-placeholder'
          }
        >
          {description}
        </Description>
      )}
      {errorMessage && <Description color="components-inputs-text-danger">{errorMessage}</Description>}
    </Container>
  );
};

Select.displayName = 'Select';

export { Select };
