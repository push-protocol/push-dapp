import { FC } from 'react';
import styled from 'styled-components';

import { useBlocksTheme } from '../Blocks.hooks';
import { ModeProp } from '../Blocks.types';
import { getBlocksColor } from '../Blocks.utils';
import { SeparatorProps } from './Separator.types';
import { getSeparatorResponsiveCSS } from './Separator.utils';
import { separatorRestrictedPropsKeys } from './Separator.constants';

const StyledSeparator = styled.div.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !separatorRestrictedPropsKeys.includes(prop as keyof SeparatorProps) && defaultValidatorFn(prop),
})<SeparatorProps & ModeProp>`
  /* Initial values */
  width: ${({ width, orientation }) => width || (orientation === 'horizontal' ? '100%' : '1px')};
  height: ${({ height, orientation }) => height || (orientation === 'horizontal' ? '1px' : '100%')};

  /* Responsive props */
  ${(props) => getSeparatorResponsiveCSS(props)}

  /* Non-responsive props */
  background-color: ${({ mode }) => getBlocksColor(mode, { light: 'gray-200', dark: 'gray-800' })};

  /* Extra CSS prop */
  ${({ css }) => css || ''}
`;

const Separator: FC<SeparatorProps> = ({ orientation = 'horizontal', ...rest }) => {
  const { mode } = useBlocksTheme();
  return (
    <StyledSeparator
      mode={mode}
      role="separator"
      {...{ orientation }}
      {...rest}
    />
  );
};

Separator.displayName = 'Separator';

export { Separator };
