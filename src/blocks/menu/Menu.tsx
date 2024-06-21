import { FC, forwardRef } from 'react';
import styled from 'styled-components';

import { MenuComponentProps } from './Menu.types';
import { blocksColors } from 'blocks/Blocks.colors';
import { getVariantStyles } from '../text/Text.utils';
import { getBlocksColor } from 'blocks/Blocks.utils';
import { BlockWithoutStyleProp, ModeProp } from 'blocks/Blocks.types';
import { useBlocksTheme } from 'blocks/Blocks.hooks';

const StyledMenu = styled.div.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => !['mode'].includes(prop) && defaultValidatorFn(prop),
})<MenuComponentProps & ModeProp>`
  background-color: ${({ mode }) => getBlocksColor(mode, { light: 'white', dark: 'gray-900' })};
  border: 1px solid ${({ mode }) => getBlocksColor(mode, { light: 'gray-200', dark: 'gray-800' })};
  border-radius: 12px;
  padding: 8px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  /* Full width of parent container */
  /* Extra CSS props */
  ${(props) => props.css || ''}
`;

const Menu = forwardRef<HTMLElement, MenuProps>(({ children, ...props }, ref) => {
  const { mode } = useBlocksTheme();

  return (
    <StyledMenu
      ref={ref}
      mode={mode}
      {...props}
    >
      {children}
    </StyledMenu>
  );
});

Menu.displayName = 'Menu';

export { Menu };
