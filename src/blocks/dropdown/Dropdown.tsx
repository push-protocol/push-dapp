import { ReactNode, forwardRef, useState } from 'react';
import styled, { FlattenSimpleInterpolation } from 'styled-components';

import { blocksColors } from 'blocks/Blocks.colors';
import { getVariantStyles } from '../text/Text.utils';
import { getBlocksColor } from 'blocks/Blocks.utils';


type DropdownProps = {
  children?: (isOpen: boolean) => ReactNode; // This will be content upon clicking on which the dropdown overlay will open
  placement?: 'bottom' | 'bottomLeft' | 'top' | 'topRight' | 'bottomRight' | 'topLeft';
  trigger: 'click' | 'hover'; // on which action to open the dropdown
  css?: FlattenSimpleInterpolation; // This is used for custom css instead of style prop, check Box/Text component
  overlay: ReactNode; // This will be the contents of the dropdown overlay
};

const StyledDropdown = styled.div<DropdownProps>`
  /* Variant CSS */

  // color: ${({ color }) => getBlocksColor(color)};
  // background-color: white;
  // border: 1px solid #4A4F67;
  // border-radius: 24px;
  // padding: 7px 20px 7px 15px;
  // margin: 0px;

  .dropdown-item {
    background-color: white;
    border: 1px solid #4A4F67;
    padding: 10px 15px;
    border-radius: 20px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;


    span {
      font-size: 15px;
      font-weight: 400;
      color: #657795;
    }
  }

  .menu-item {
      width: 100%;
  }

  /* Full width of parent container */

  /* Responsive props */

  /* Extra CSS props */
  ${(props) => props.css || ''}
`;

const Dropdown = forwardRef<HTMLElement, DropdownProps>(({ overlay, children, ...props }, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownVisibleChange = (visible: boolean) => {
    setIsOpen(visible);
  }
  return (
    <StyledDropdown
      ref={ref}
      {...props}
      onVisibleChange={handleDropdownVisibleChange}
    >
      <div className='dropdown-item'>
          <span>Hey there</span>
      </div>

      <span className='menu-icon'>{overlay}</span>

      {/* {children(isOpen)} */}
    </StyledDropdown>
  );
});

Dropdown.displayName = 'Dropdown';

export { Dropdown };

