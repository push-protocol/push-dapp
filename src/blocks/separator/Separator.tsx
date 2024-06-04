import { forwardRef } from 'react';
import styled from 'styled-components';

import { SeparatorCSSProps, SeparatorComponentProps } from './Separator.types';
import { getSeparatorResponsiveCSS, separatorCSSPropsKeys } from './Separator.utils';
import { BlockWithoutStyleProp } from 'blocks/Blocks.types';
import { getBlocksColor } from 'blocks/Blocks.utils';

export type SeparatorProps = SeparatorCSSProps & SeparatorComponentProps & BlockWithoutStyleProp<HTMLDivElement>;

const StyledSeparator = styled.div.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !separatorCSSPropsKeys.includes(prop as keyof SeparatorCSSProps) && defaultValidatorFn(prop),
})<SeparatorProps>`
  /* Initial values */
  width: ${({ width, orientation }) => width || (orientation === 'horizontal' ? 'auto' : '1px')};
  height: ${({ height, orientation }) => height || (orientation === 'horizontal' ? '1px' : 'auto')};

  /* Responsive props */
  ${(props) => getSeparatorResponsiveCSS(props)}

  /* Non-responsive props */
  background-color: ${({ backgroundColor }) => getBlocksColor(backgroundColor)};
  box-shadow: ${({ boxShadow }) => boxShadow};
  border-radius: ${({ borderRadius }) => borderRadius};
  border: ${({ border }) => border};
  position: ${({ position }) => position};

  /* Extra CSS prop */
  ${({ css }) => css || ''}
`;

const Separator = forwardRef<HTMLDivElement, SeparatorProps>(
  ({ backgroundColor = 'lightGray', orientation = 'horizontal', ...props }, ref) => {
    return (
      <StyledSeparator
        ref={ref}
        {...props}
        {...{ orientation, backgroundColor }}
      />
    );
  }
);

Separator.displayName = 'Separator';

export { Separator };
