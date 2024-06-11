import { ReactNode, forwardRef } from 'react';
import styled, { FlattenSimpleInterpolation } from 'styled-components';

type DropdownProps = {
  children?: (isOpen: boolean) => ReactNode; // This will be content upon clicking on which the dropdown overlay will open
  placement?: 'bottom' | 'bottomLeft' | 'top' | 'topRight' | 'bottomRight' | 'topLeft';
  trigger: 'click' | 'hover'; // on which action to open the dropdown
  css?: FlattenSimpleInterpolation; // This is used for custom css instead of style prop, check Box/Text component
  overlay: ReactNode; // This will be the contents of the dropdown overlay
};


const Dropdown = forwardRef<HTMLElement, DropdownProps>(({ as = 'div', ...props }, ref) => {
  return (
    <StyledDropdown
      // as={as}
      ref={ref}
      {...props}
    />
  );
});

Dropdown.displayName = 'Dropdown';

export { Dropdown };


const Somecomponent = () => {
  return (   
  <Dropdown 
  // By using this overlay approach we could pass any items in the dropdown
  overlay={
    <Menu>
      <MenuItem
        icon=""
        onClick={() => {}}
        label="Archive" 
        />

        <MenuItem
          icon=""
          onClick={() => {}}
          label="Delete"
        />
        {/* Menu item could be a list item to render an item */}
      </Menu>
    }
    >
   {(isOpen) => <button>Click Me</button>}
  </Dropdown>
  );
}