import { FC } from 'react';
import styled from 'styled-components';

import type { MenuProps } from './Menu.types';
import { getBlocksColor } from 'blocks/Blocks.utils';
import { ModeProp } from 'blocks/Blocks.types';
import { useBlocksTheme } from 'blocks/Blocks.hooks';
import { menuCSSPropsKeys } from './Menu.constants';

const StyledMenu = styled.div.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !menuCSSPropsKeys.includes(prop as keyof MenuProps) && defaultValidatorFn(prop),
})<MenuProps & ModeProp>`
  display: flex;
  flex-direction: column;
  background-color: ${({ mode }) => getBlocksColor(mode, { light: 'white', dark: 'gray-900' })};
  border: 1px solid ${({ mode }) => getBlocksColor(mode, { light: 'gray-200', dark: 'gray-800' })};
  border-radius: var(--r3);
  padding: var(--s2);
  margin: var(--s0);
  gap: var(--s3);

  /* Menu non-responsive styles */
  width: ${(props) => props.width};
  min-width: ${(props) => props.minWidth || '145px'};
  max-width: ${(props) => props.maxWidth};
  height: ${(props) => props.height};
  min-height: ${(props) => props.minHeight};
  max-height: ${(props) => props.maxHeight};

  /* Extra CSS props */
  ${(props) => props.css || ''}
`;

const Menu: FC<MenuProps> = ({ children, ...props }) => {
  const { mode } = useBlocksTheme();

  return (
    <StyledMenu
      mode={mode}
      {...props}
    >
      {children}
    </StyledMenu>
  );
};

Menu.displayName = 'Menu';

export { Menu };
