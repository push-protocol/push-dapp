import { FC } from 'react';
import styled from 'styled-components';

import { MenuProps } from './Menu.types';
// import { getSeparatorResponsiveCSS } from './Menu.utils';
// import { separatorRestrictedPropsKeys } from './Menu.constants';
// import { blocksColors } from 'blocks/Blocks.colors';

const StyledMenu = styled.p<MenuProps>`
  /* Variant CSS */
  ${({ variant }) => getVariantStyles(variant)}

  color: ${({ color }) => getBlocksColor(color)};
  background-color: ${({ color }) => getBlocksColor(color)};
  margin: 0px;

  /* Full width of parent container */
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};

  /* Responsive props */
  ${(props) => getMenuResponsiveCSS(props)}

  /* Extra CSS props */
  ${(props) => props.css || ''}
`;

const Text = forwardRef<HTMLElement, MenuProps>(({ as = 'div', ...props }, ref) => {
  return (
    <StyledMenu
      as={as}
      ref={ref}
      {...props}
    />
  );
});

Menu.displayName = 'Menu';

export { Menu };
