import { ReactNode, forwardRef } from 'react';

import styled, { FlattenSimpleInterpolation } from 'styled-components';

import { getLozengeSizeStyles, getLozengeVariantStyles } from './Lozenge.constants';

import { TransformedHTMLAttributes } from '../Blocks.types';
import { LozengeSize, LozengeVariant } from './Lozenge.types';

export type LozengeProps = {
  /* Child react nodes rendered by Box */
  children?: ReactNode;
  /* Additional prop from styled components to apply custom css to Lozenge */
  css?: FlattenSimpleInterpolation;
  /* Render an icon before lozenge contents */
  icon?: ReactNode;
  /* Sets the size of the lozenge */
  size?: LozengeSize;
  /* Sets the variant of the lozenge */
  variant?: LozengeVariant;
} & TransformedHTMLAttributes<HTMLDivElement>;

type StyledLozengeProps = LozengeProps & { iconOnly: boolean };

const StyledLozenge = styled.div<StyledLozengeProps>`
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
  ${({ variant }) => getLozengeVariantStyles(variant || 'primary')}

  /* Lozenge and font size CSS styles */
  ${({ iconOnly, size }) => getLozengeSizeStyles({ iconOnly, size: size || 'small' })}

  /* Custom CSS applied via styled component css prop */
  ${(props) => props.css || ''}
`;

const Lozenge = forwardRef<HTMLDivElement, LozengeProps>(
  ({ variant = 'primary', size = 'small', icon, children, ...props }, ref) => {
    const iconOnly = !children;

    return (
      <StyledLozenge
        role="div"
        iconOnly={iconOnly}
        ref={ref}
        size={size}
        variant={variant}
        {...props}
      >
        {icon && <span className="icon">{icon}</span>}
        <span>{children}</span>
      </StyledLozenge>
    );
  }
);

Lozenge.displayName = 'Lozenge';

export { Lozenge };
