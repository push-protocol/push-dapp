import { forwardRef, useState } from 'react';
import styled from 'styled-components';

import { getBlocksColor } from 'blocks/Blocks.utils';
import { useBlocksTheme } from 'blocks/Blocks.hooks';
import { ModeProp } from 'blocks/Blocks.types';
import { DropdownProps } from './Dropdown.types';

const StyledDropdown = styled.div.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => !['mode'].includes(prop) && defaultValidatorFn(prop),
})<DropdownProps & ModeProp>`
  position: relative; /* Ensure the dropdown has relative positioning */
  min-width: 200px;
  .dropdown-item {
    background-color: ${({ mode }) => getBlocksColor(mode, { light: 'white', dark: 'gray-900' })};
    border: 1px solid ${({ mode }) => getBlocksColor(mode, { light: 'gray-200', dark: 'gray-800' })};
    padding: 10px 15px;
    border-radius: var(--r5);
    display: flex;
    flex-direction: row;
    align-items: center;
    min-width: fit-content;
    max-width: fit-content;
    box-sizing: border-box;
    // position: relative;
    &:hover {
      cursor: pointer;
    }
    span {
      font-size: 15px;
      font-weight: 400;
      color: #657795;
    }
  }
  .menu-overlay {
    position: absolute;
    border-radius: var(--r1);
    // margin-top: 3px;
    z-index: 1000; /* Ensure it appears above other elements */
    &.top {
      bottom: calc(100% + 3px);
    }
    &.topLeft {
      bottom: calc(100% + 3px);
      left: calc(-60%);
    }
    &.topRight {
      bottom: calc(100% + 3px);
      right: 0;
    }
    &.bottom {
      top: calc(100% + 3px);
    }
    &.bottomLeft {
      top: calc(100% + 3px);
      left: calc(-60%);
    }
    &.bottomRight {
      top: calc(100% + 3px);
      right: 0;
    }
  }
  /* Extra CSS props */
  ${(props) => props.css || ''}
`;

const Dropdown = forwardRef<HTMLElement, DropdownProps>(
  ({ overlay, trigger, children, placement = 'bottom', ...props }, ref) => {
    const { mode } = useBlocksTheme();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
      if (trigger === 'click' || !trigger) {
        setIsOpen(!isOpen);
      }
    };

    const handleMouseEnter = () => {
      if (trigger === 'hover') {
        setIsOpen(true);
      }
    };

    const handleMouseLeave = () => {
      if (trigger === 'hover') {
        setIsOpen(false);
      }
    };

    const getPlacementClass = () => {
      switch (placement) {
        case 'top':
          return 'top';
        case 'topLeft':
          return 'topLeft';
        case 'topRight':
          return 'topRight';
        case 'bottom':
          return 'bottom';
        case 'bottomLeft':
          return 'bottomLeft';
        case 'bottomRight':
          return 'bottomRight';
        default:
          return 'bottom';
      }
    };

    return (
      <StyledDropdown
        ref={ref}
        mode={mode}
        trigger={trigger}
        placement={placement}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <div
          className="dropdown-item"
          onClick={handleClick}
        >
          <span>Actions</span>
        </div>

        {isOpen && <div className={`menu-overlay ${getPlacementClass()}`}>{overlay}</div>}

        {children && children(isOpen)}
      </StyledDropdown>
    );
  }
);

Dropdown.displayName = 'Dropdown';

export { Dropdown };
