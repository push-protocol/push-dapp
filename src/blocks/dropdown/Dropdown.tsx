import { ReactNode, forwardRef, useState } from 'react';
import styled, { FlattenSimpleInterpolation } from 'styled-components';

import { blocksColors } from 'blocks/Blocks.colors';
import { getVariantStyles } from '../text/Text.utils';
import { getBlocksColor } from 'blocks/Blocks.utils';
import { useBlocksTheme } from 'blocks/Blocks.hooks';
import { BlockWithoutStyleProp, ModeProp } from 'blocks/Blocks.types';
import { DropdownProps } from './Dropdown.types'


const StyledDropdown = styled.div.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => !['mode'].includes(prop) && defaultValidatorFn(prop),
})<DropdownProps & ModeProp>`
   min-width: 200px;
  
  .dropdown-item {
    background-color: ${({ mode }) => getBlocksColor(mode, { light: 'white', dark: 'gray-900' })};
    border: 1px solid ${({ mode }) => getBlocksColor(mode, { light: 'gray-200', dark: 'gray-800' })};
    padding: 10px 15px;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    min-width: fit-content;
    max-width: fit-content;
    box-sizing: border-box;

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
    margin-top: 3px;
  }

  /* Extra CSS props */
  ${(props) => props.css || ''}
`;

const Dropdown = forwardRef<HTMLElement, DropdownProps>(({ overlay, trigger, children, ...props }, ref) => {
  const { mode } = useBlocksTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (trigger === 'click') {
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


  return (
    <StyledDropdown
      ref={ref}
      mode={mode}
      trigger={trigger}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <div className='dropdown-item' onClick={handleClick}
      >
          <span>Actions</span>
      </div>

      {isOpen && <div className='menu-overlay'>{overlay}</div>}

      {/* {children(isOpen)} */}
    </StyledDropdown>
  );
});

Dropdown.displayName = 'Dropdown';

export { Dropdown };

