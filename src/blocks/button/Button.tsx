import { ReactNode, forwardRef } from 'react';
import styled, { FlattenSimpleInterpolation } from 'styled-components';

import type { TransformedHTMLAttributes } from '../Blocks.types';
import type { ButtonSize, ButtonVariant } from './Button.types';
import { getButtonSizeStyles, getButtonVariantStyles } from './Button.utils';

export type ButtonProps = {
  /* Child react nodes rendered by Box */
  children?: ReactNode;
  /* Renders the iconOnly button as circular */
  circular?: boolean;
  /* Additional prop from styled components to apply custom css to Button */
  css?: FlattenSimpleInterpolation;
  /* Sets button as disabled */
  disabled?: boolean;
  /* Used to render the button with icon only */
  iconOnly?: ReactNode;
  /* Render an icon before button contents */
  leadingIcon?: ReactNode;
  /* Sets the size of the button */
  size?: ButtonSize;
  /* Render an icon after button contents */
  trailingIcon?: ReactNode;
  /* Sets the variant of the button */
  variant?: ButtonVariant;
  /* Button takes the full width if enabled */
  block?: boolean;
} & TransformedHTMLAttributes<HTMLButtonElement>;

const StyledButton = styled.button<ButtonProps>`
  /* Common Button CSS */

  align-items: center;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  display: flex;
  font-family: var(--font-family);
  justify-content: center;
  white-space: nowrap;

  /* Common icon css added through CSS class */
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Button variant CSS styles */
  ${({ variant }) => getButtonVariantStyles(variant || 'primary')}

  /* Button and font size CSS styles */
  ${({ iconOnly, size }) => getButtonSizeStyles({ iconOnly: !!iconOnly, size: size || 'medium' })}

  /* Circular CSS for rounded icon only buttons */
  ${({ circular, iconOnly }) => circular && iconOnly && `border-radius: var(--r10)`}

  /* Prop specific CSS */
  ${({ block }) => block && 'width: 100%;'}

  /* Custom CSS applied via styled component css prop */
  ${(props) => props.css || ''}
`;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      disabled,
      variant = 'primary',
      size = 'medium',
      leadingIcon,
      trailingIcon,
      iconOnly,
      circular = false,
      children,
      ...props
    },
    ref
  ) => (
    <StyledButton
      {...(disabled ? { 'aria-disabled': true } : {})}
      circular={circular}
      disabled={disabled}
      iconOnly={iconOnly}
      role="button"
      ref={ref}
      size={size}
      variant={variant}
      {...props}
    >
      {leadingIcon && <span className="icon icon-text">{leadingIcon}</span>}
      {!iconOnly && children}
      {trailingIcon && <span className="icon icon-text">{trailingIcon}</span>}
      {iconOnly && !children && <span className="icon icon-only">{iconOnly}</span>}
    </StyledButton>
  )
);

Button.displayName = 'Button';

export { Button };
