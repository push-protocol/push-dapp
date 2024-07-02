import { FC } from 'react';
import styled from 'styled-components';

import { MenuItemComponentProps } from './Menu.types';
import { ModeProp } from 'blocks/Blocks.types';
import { getBlocksColor } from '../Blocks.utils';
import { useBlocksTheme } from 'blocks/Blocks.hooks';
import { Text } from 'blocks/text';
import { Box } from 'blocks/box';

const StyledMenuItem = styled.div.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => !['mode'].includes(prop) && defaultValidatorFn(prop),
})<MenuItemComponentProps & ModeProp>`
  // Menu default styles
  padding: var(--s1);
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
  gap: var(--s1);
  border-radius: var(--r2);
  &:hover {
    background-color: ${({ mode }) => getBlocksColor(mode, { light: 'gray-100', dark: 'gray-1000' })};
  }
  .menu-icon {
    svg {
      width: 100%;
      height: 100%;
    }
  }
  cursor: pointer;
  /* Extra CSS props */
  ${(props) => props.css || ''}
`;

const MenuItem: FC<MenuItemComponentProps> = ({ icon, label, onClick, ...props }) => {
  const { mode } = useBlocksTheme();

  return (
    <StyledMenuItem
      onClick={onClick}
      mode={mode}
      {...props}
    >
      {icon && (
        <Box
          width="24px"
          height="24px"
        >
          {icon && <span className="menu-icon">{icon}</span>}
        </Box>
      )}

      <Text
        className="menu-label"
        variant="bs-regular"
        color={{ light: 'gray-1000', dark: 'gray-100' }}
      >
        {label}
      </Text>
    </StyledMenuItem>
  );
};

MenuItem.displayName = 'MenuItem';

export { MenuItem };
