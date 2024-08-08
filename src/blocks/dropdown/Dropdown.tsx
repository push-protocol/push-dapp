import { FC, forwardRef, useState } from 'react';
import styled from 'styled-components';
import * as RadixDropdown from '@radix-ui/react-dropdown-menu';
import { DropdownProps } from './Dropdown.types';

const RadixDropdownContent = styled(RadixDropdown.Content) <DropdownProps>`
  /* Extra CSS props */
  ${(props) => props.css || ''}
`;

const Dropdown: FC<DropdownProps> = forwardRef<HTMLButtonElement, DropdownProps>(
  ({ overlay, trigger = 'click', children, ...props }, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    const showDropdown = () => setIsOpen(true);
    const hideDropdown = () => setIsOpen(false);
    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
      <RadixDropdown.Root
        open={isOpen}
        onOpenChange={setIsOpen}
      >
        <RadixDropdown.Trigger
          asChild
          ref={ref}
          style={{ pointerEvents: trigger === 'hover' ? 'auto' : 'inherit' }}
          onMouseEnter={() => trigger == 'hover' && showDropdown()}
          onMouseLeave={() => trigger == 'hover' && hideDropdown()}
          onClick={() => trigger == 'click' && toggleDropdown}
        >
          {children && typeof children === 'function' ? children({ isOpen }) : children}
        </RadixDropdown.Trigger>
        <RadixDropdown.Portal>
          <RadixDropdownContent
            sideOffset={2}
            alignOffset={-3}
            onMouseEnter={() => trigger == 'hover' && showDropdown()}
            onMouseLeave={() => trigger == 'hover' && hideDropdown()}
            onPointerDownOutside={() => hideDropdown()}
            {...props}
          >
            {typeof overlay === 'function' ? overlay(setIsOpen) : overlay}

          </RadixDropdownContent>
        </RadixDropdown.Portal>
      </RadixDropdown.Root>
    );
  }
);

Dropdown.displayName = 'Dropdown';

export { Dropdown };
