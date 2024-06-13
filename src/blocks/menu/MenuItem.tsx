import { FC,forwardRef } from 'react';
import styled from 'styled-components';

import { MenuProps } from './Menu.types';
import { BlockWithoutStyleProp, ModeProp } from 'blocks/Blocks.types';
import { getVariantStyles } from '../text/Text.utils';
import { getBlocksColor } from '../Blocks.utils';
import { useBlocksTheme } from 'blocks/Blocks.hooks';


const StyledMenuItem = styled.div.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => !['mode'].includes(prop) && defaultValidatorFn(prop),
})<MenuItemProps & ModeProp>`

  padding: 4px 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 8px;

  &:hover {
    background-color: ${({ mode }) => getBlocksColor(mode, { light: 'gray-100', dark: 'gray-1000' })};
  }
  .menu-icon {
    margin-right: 5px;
    padding: 2px;

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
    color: ${({ mode }) => getBlocksColor(mode, { light: 'gray-1000', dark: 'gray-100' })};
  }
  cursor: pointer;
  font-size: 15px;

  /* Extra CSS props */
  ${(props) => props.css || ''}
`;

const MenuItem = forwardRef<HTMLElement, MenuProps>(({ icon, label, onClick, ...props }, ref) => {
  const { mode } = useBlocksTheme();

  return (
    <StyledMenuItem
      onClick={onClick}
      mode={mode}
      {...props}
    >
      {icon && <span className='menu-icon'>{icon()}</span>}
      <span className='menu-label'>{label}</span>
    </StyledMenuItem>
  );
});

MenuItem.displayName = 'MenuItem';

export { MenuItem };
