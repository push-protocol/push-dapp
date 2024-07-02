import { FC } from 'react';
import styled from 'styled-components';

import { MenuItemComponentProps } from './Menu.types';
import { ModeProp } from 'blocks/Blocks.types';
import { getBlocksColor } from '../Blocks.utils';
import { useBlocksTheme } from 'blocks/Blocks.hooks';
import { Text } from 'blocks/text';
import { Box } from 'blocks/box';
import * as RadixDropdown from '@radix-ui/react-dropdown-menu';
import { Link } from 'blocks/link';

const StyledMenuItem = styled(RadixDropdown.Item).withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => !['mode'].includes(prop) && defaultValidatorFn(prop),
})<MenuItemComponentProps & ModeProp>`
  // Menu default styles
  padding: var(--s0) var(--s1);
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
  gap: var(--s1);
  border-radius: var(--r2);

  [role='img'] {
    width: 24px;
    height: 24px;
  }

  &:hover {
    background-color: ${({ mode }) => getBlocksColor(mode, { light: 'gray-100', dark: 'gray-1000' })};
    outline: none !important;
  }

  cursor: pointer;
  min-height: 32px;

  /* Extra CSS props */
  ${(props) => props.css || ''};
`;

const MenuItem: FC<MenuItemComponentProps> = ({ icon, label, onClick, destination, newTab, disabled, ...props }) => {
  const { mode } = useBlocksTheme();

  const menuContent = (
    <StyledMenuItem
      onSelect={onClick}
      disabled={disabled}
      mode={mode}
      {...props}
    >
      {icon}
      <Text
        className="menu-label"
        variant="bs-regular"
        color={{ light: 'gray-1000', dark: 'gray-100' }}
      >
        {label}
      </Text>
    </StyledMenuItem>
  );

  return (
    <Box>
      {destination ? (
        <Link
          to={destination}
          {...(newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {menuContent}
        </Link>
      ) : (
        menuContent
      )}
    </Box>
  );
};

MenuItem.displayName = 'MenuItem';

export { MenuItem };
