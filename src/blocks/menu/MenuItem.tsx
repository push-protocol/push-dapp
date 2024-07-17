import { FC } from 'react';
import styled from 'styled-components';

import { MenuItemComponentProps } from './Menu.types';
import { Text } from 'blocks/text';
import { Box } from 'blocks/box';
import * as RadixDropdown from '@radix-ui/react-dropdown-menu';
import { Link } from 'blocks/link';

const StyledMenuItem = styled(RadixDropdown.Item)<MenuItemComponentProps>`
  // Menu default styles
  padding: var(--spacing-none) var(--spacing-xxxs);
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
  gap: var(--spacing-xxxs);
  border-radius: var(--radius-xxs);

  [role='img'] {
    width: 24px;
    height: 24px;
  }

  &:hover {
    background-color: var(--surface-secondary);
    outline: none !important;
  }

  cursor: pointer;
  min-height: 32px;

  /* Extra CSS props */
  ${(props) => props.css || ''};
`;

const MenuItem: FC<MenuItemComponentProps> = ({ icon, label, onClick, destination, newTab, disabled, ...props }) => {
  const menuContent = (
    <StyledMenuItem
      onSelect={onClick}
      disabled={disabled}
      {...props}
    >
      {icon}
      <Text
        className="menu-label"
        variant="bs-regular"
        color="components-dropdown-text-default"
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
