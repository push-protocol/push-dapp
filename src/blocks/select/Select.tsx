import styled, { FlattenSimpleInterpolation, css } from 'styled-components';
import { textVariants } from '../text';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
  ComboboxOptionText,
} from '@reach/combobox';
import '@reach/combobox/styles.css';
import { ArrowDown } from '../icons';

export type SelectOption = {
  value: string;
  label: string;
  icon?: React.ReactNode;
};

export type SelectProps = {
  options: SelectOption[];
  onSelect?: (value: string) => void;
  selectedValue?: string;
  css?: FlattenSimpleInterpolation;
  description?: string;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  success?: boolean;
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
      align-items: center;
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

      &:focus {
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
  position: absolute;
  padding: var(--spacing-xxs, 8px);
  border-radius: var(--radius-xs, 12px);
  border: var(--border-sm, 1px) solid var(--stroke-secondary, #eaebf2);
  background: var(--surface-primary, #fff);
`;

const StyledList = styled(ComboboxList)`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs, 12px);
`;
const StyledCombobox = styled(Combobox)`
  position: relative;
`;
const StyledOption = styled(ComboboxOption)`
  display: flex;
  align-items: center;
  padding: var(--spacing-xxxs, 4px);
  gap: var(--spacing-xxs, 8px);
  color: var(--components-dropdown-text-default, #17181b);
  text-align: center;
  font-family: var(--font-family);
  white-space: nowrap;
  font-size: ${textVariants['bs-regular'].fontSize};
  font-style: ${textVariants['bs-regular'].fontStyle};
  font-weight: ${textVariants['bs-regular'].fontWeight};
  line-height: ${textVariants['bs-regular'].lineHeight};
  &:hover {
    border-radius: var(--radius-xxs, 8px);
    background: var(--surface-secondary, #f5f6f8);
  }
  [role:img] {
    width: 24px;
    height: 24px;
  }
`;

const Select: React.FC<SelectProps> = ({
  options,
  onSelect,
  css,
  selectedValue,
  placeholder = '',
  error,
  success,
  disabled,
}) => {
  // check if there is other way to get value
  const selectedOption = options.find((option) => option.value === selectedValue);
  console.debug(selectedOption, 'option');
  return (
    <Container css={css}>
      {/* label will be added here  */}

      <StyledCombobox
        aria-labelledby="select"
        openOnFocus
        //not working because of lable issue
        onSelect={(value: string) => onSelect?.(value)}
      >
        <StyledBox
          error={error}
          success={success}
          disabled={disabled}
        >
          {/* icon not working */}
          {/* {selectedOption?.icon} */}
          <ComboboxInput
            disabled={disabled}
            placeholder={placeholder}
            value={selectedOption?.label}
          />
          <ArrowDown
            size={11}
            color="icon-tertiary"
          />
        </StyledBox>

        <StyledPopover portal={false}>
          <StyledList>
            {options.map((option) => (
              <StyledOption
                value={option.label}
                key={option.value}
              >
                {option?.icon} <ComboboxOptionText />
              </StyledOption>
            ))}
          </StyledList>
        </StyledPopover>
      </StyledCombobox>
      {/* description and error message will be added here  */}
    </Container>
  );
};

Select.displayName = 'Select';

export { Select };
