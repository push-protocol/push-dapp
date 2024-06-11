import { FC,forwardRef } from 'react';
import styled from 'styled-components';

import { MenuProps } from './Menu.types';
// import { getSeparatorResponsiveCSS } from './Menu.utils';
// import { separatorRestrictedPropsKeys } from './Menu.constants';
// import { blocksColors } from 'blocks/Blocks.colors';
import { getVariantStyles } from '../text/Text.utils';
import { getBlocksColor } from '../Blocks.utils';

const StyledMenuItem = styled.p<MenuProps>`
  /* Variant CSS */
  ${({ variant }) => getVariantStyles(variant)}

  color: ${({ color }) => getBlocksColor(color)};
  background-color: ${({ color }) => getBlocksColor(color)};
  margin: 0px;

  /* Full width of parent container */
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  &:not(:last-of-type){
    border-bottom: 1px solid red;
  }
  /* Responsive props */

  /* Extra CSS props */
  ${(props) => props.css || ''}
`;

const MenuItem = forwardRef<HTMLElement, MenuProps>(({ icon, label, onClick, ...props }, ref) => {
  return (
    <StyledMenuItem
      onClick={onClick}
      {...props}
    >
      {icon && icon()}
      {label}
    </StyledMenuItem>
  );
});

MenuItem.displayName = 'MenuItem';

export { MenuItem };
