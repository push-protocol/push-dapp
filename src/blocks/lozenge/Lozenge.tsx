import { ReactNode, forwardRef } from 'react';
import styled, { FlattenSimpleInterpolation } from 'styled-components';
import { getLozengeSizeStyles, lozengeVariantStyles } from './Lozenge.constants';
import { TransformedHTMLAttributes } from '../Blocks.types';
import { LozengeSize, LozengeVariant } from './Lozenge.types';

export type LozengeProps = {
  /* Child react nodes rendered by Box */
  children?: ReactNode;
  /* Renders the iconOnly lozenge as circular */
  circular?: boolean;
  /* Additional prop from styled components to apply custom css to Lozenge */
  css?: FlattenSimpleInterpolation;
  /* Used to render the lozenge with icon only */
  iconOnly?: ReactNode;
  /* Render an icon before lozenge contents */
  icon?: ReactNode;
  /* Sets the size of the lozenge */
  size?: LozengeSize;
  /* Sets the variant of the lozenge */
  variant?: LozengeVariant;
} & TransformedHTMLAttributes<HTMLDivElement>;

const StyledButton = styled.div<LozengeProps>`
  /* Common Lozenge CSS */

  align-items: center;
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

  /* Lozenge variant CSS styles */
  ${(props) => lozengeVariantStyles[props.variant || 'primary']}

  /* Lozenge and font size CSS styles */
  ${({ iconOnly, size }) => getLozengeSizeStyles({ iconOnly: !!iconOnly, size: size || 'small' })}

  /* Circular CSS for rounded icon only Lozenges */
  ${({ circular, iconOnly }) => circular && iconOnly && `border-radius: var(--r10)`}

  /* Custom CSS applied via styled component css prop */
  ${(props) => props.css || ''}
`;

const Lozenge = forwardRef<HTMLDivElement, LozengeProps>(
  ({ variant = 'primary', size = 'small', icon, iconOnly, circular = false, children, ...props }, ref) => {
    return (
      <StyledButton
        circular={circular}
        iconOnly={iconOnly}
        role="div"
        ref={ref}
        size={size}
        variant={variant}
        {...props}
      >
        {icon && <span className="icon icon-text">{icon}</span>}
        {!iconOnly && children}
        {iconOnly && !children && <span className="icon icon-only">{iconOnly}</span>}
      </StyledButton>
    );
  }
);

Lozenge.displayName = 'Lozenge';

export { Lozenge };
