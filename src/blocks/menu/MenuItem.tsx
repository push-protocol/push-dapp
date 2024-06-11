import { FC,forwardRef } from 'react';
import styled from 'styled-components';

import { MenuProps } from './Menu.types';
// import { getSeparatorResponsiveCSS } from './Menu.utils';
// import { separatorRestrictedPropsKeys } from './Menu.constants';
// import { blocksColors } from 'blocks/Blocks.colors';
import { getVariantStyles } from '../text/Text.utils';
import { getBlocksColor } from '../Blocks.utils';

const StyledMenuItem = styled.div<MenuItemProps>`
  /* Variant CSS */
  // ${({ variant }) => getVariantStyles(variant)}

  color: ${({ color }) => getBlocksColor(color)};
  background-color: ${({ color }) => getBlocksColor(color)};
  margin: 8px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  .menu-icon {
    margin-right: 5px;
    margin-top: -3px;

    width: 24px;
    height: 24px;
    svg {
      width: 24px;
      height: 24px;
    }
  }
  .menu-label {
    justify-content: center;
    align-items: center;
    color:red;
  }
  cursor: pointer;
  font-size: 15px;

  /* Full width of parent container */
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  // &:not(:last-of-type){
  //   border-bottom: 1px solid red;
  // }
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
      {icon && <span className='menu-icon'>{icon()}</span>}
      <span className='menu-label'>{label}</span>
    </StyledMenuItem>
  );
});

MenuItem.displayName = 'MenuItem';

export { MenuItem };
