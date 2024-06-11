import { FC,forwardRef } from 'react';
import styled from 'styled-components';

import { MenuProps } from './Menu.types';
// import { getSeparatorResponsiveCSS } from './Menu.utils';
// import { separatorRestrictedPropsKeys } from './Menu.constants';\
import { blocksColors } from 'blocks/Blocks.colors';
import { getVariantStyles } from '../text/Text.utils';
import { getBlocksColor } from 'blocks/Blocks.utils';
import { BlockWithoutStyleProp } from 'blocks/Blocks.types';



// export type MenuProps = MenuCSSProps & MenuComponentProps & BlockWithoutStyleProp<HTMLDivElement>;

const StyledMenu = styled.div<MenuProps>`
  /* Variant CSS */
  // ${({ variant }) => getVariantStyles(variant)};

  // color: ${({ color }) => getBlocksColor(color)};
  background-color: white;
  border: 1px solid #4A4F67;
  border-radius: 24px;
  padding: 7px 20px 7px 15px;
  margin: 0px;

  /* Full width of parent container */

  /* Responsive props */

  /* Extra CSS props */
  ${(props) => props.css || ''}
`;

const Menu = forwardRef<HTMLElement, MenuProps>(({ children ,...props }, ref) => {
  return (
    <StyledMenu
      // as={as}
      ref={ref}
      {...props}
    >
      {children}
    </StyledMenu>
  );
});

Menu.displayName = 'Menu';

export { Menu };
