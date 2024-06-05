import { FC, ReactElement, ReactNode, forwardRef, useState } from 'react';
import styled, { FlattenSimpleInterpolation } from 'styled-components';
import { BlockWithoutStyleProp } from '../Blocks.types';

export type ButtonProps = {
  /* Children pass to the Text component */
  children?: ReactNode;
  /* Extra css prop from styled components to apply custom css not supported by Text component */
  css?: FlattenSimpleInterpolation;
} & BlockWithoutStyleProp<HTMLButtonElement>;

const StyledButton = styled.button<ButtonProps>`
  /* Extra CSS props */
  ${(props) => props.css || ''}
`;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ ...props }, ref) => {
  return (
    <StyledButton
      ref={ref}
      {...props}
    />
  );
});

Button.displayName = 'Button';

export { Button };

export type DropdownProps = {
  children: (isOpen: boolean) => ReactElement; // This will be content upon clicking on which the dropdown overlay will open
  placement: 'bottom' | 'bottomLeft' | 'top' | 'topRight' | 'bottomRight' | 'topLeft';
  trigger: 'click' | 'hover'; // on which action to open the dropdown
  css: FlattenSimpleInterpolation; // This is used for custom css instead of style prop, check Box/Text component
  overlay: ReactElement; // This will be the contents of the dropdown overlay
};

const Dropdown: FC<DropdownProps> = () => <div>Dropdown</div>;

const SomeComponent = () => {
  return (
    <Dropdown
      // By using this overlay approach we could pass any items in the dropdown
      overlay={
        <Menu>
          // Menu could be a container component
          <MenuItem
            icon=""
            onClick={() => {}}
            label="Archive"
          />
          // Menu item could be a list item to render an item
        </Menu>
      }
    >
      {(isOpen) => <button>Click me</button>}
    </Dropdown>
  );
};
