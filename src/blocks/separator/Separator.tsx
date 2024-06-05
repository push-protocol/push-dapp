import React from 'react';
import styled from 'styled-components';

import { SeparatorCSSProps, SeparatorComponentProps, separatorCSSPropsKeys } from './Separator.types';
import { getSeparatorResponsiveCSS } from './Separator.utils';
import { BlockWithoutStyleProp } from 'blocks/Blocks.types';
import { blocksColors } from 'blocks/Blocks.colors';

export type SeparatorProps = SeparatorCSSProps & SeparatorComponentProps & BlockWithoutStyleProp<HTMLDivElement>;

const StyledSeparator = styled.div.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !separatorCSSPropsKeys.includes(prop as keyof SeparatorCSSProps) && defaultValidatorFn(prop),
})<SeparatorProps>`
  /* Initial values */
  width: ${({ width, orientation }) => width || (orientation === 'horizontal' ? '100%' : '1px')};
  height: ${({ height, orientation }) => height || (orientation === 'horizontal' ? '1px' : '100%')};

  /* Responsive props */
  ${(props) => getSeparatorResponsiveCSS(props)}

  /* Non-responsive props */
  background-color: ${blocksColors.lightGray};

  /* Extra CSS prop */
  ${({ css }) => css || ''}
`;

const Separator: React.FC<SeparatorProps> = ({ orientation = 'horizontal', ...rest }) => {
  return (
    <StyledSeparator
      role="separator"
      {...{ orientation }}
      {...rest}
    />
  );
};

Separator.displayName = 'Separator';

export { Separator };
