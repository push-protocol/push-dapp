import { FC } from 'react';
import styled from 'styled-components';

import { SeparatorProps } from './Separator.types';
import { getSeparatorResponsiveCSS } from './Separator.utils';
import { separatorRestrictedPropsKeys } from './Separator.constants';

const StyledSeparator = styled.div.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !separatorRestrictedPropsKeys.includes(prop as keyof SeparatorProps) && defaultValidatorFn(prop),
})<SeparatorProps>`
  /* Initial values */
  width: ${({ width, orientation }) => width || (orientation === 'horizontal' ? '100%' : '1px')};
  height: ${({ height, orientation }) => height || (orientation === 'horizontal' ? '1px' : '100%')};

  /* Responsive props */
  ${(props) => getSeparatorResponsiveCSS(props)}

  /* Non-responsive props */
  background-color: var(--surface-tertiary);

  /* Extra CSS prop */
  ${({ css }) => css || ''}
`;

const Separator: FC<SeparatorProps> = ({ orientation = 'horizontal', ...rest }) => (
  <StyledSeparator
    role="separator"
    {...{ orientation }}
    {...rest}
  />
);

Separator.displayName = 'Separator';

export { Separator };
