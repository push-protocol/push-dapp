import { DropdownPosition } from './Dropdown.types';
import { DropdownMenuContentProps } from '@radix-ui/react-dropdown-menu';

export const getDropdownPositionalCSS = (dropdownPosition: DropdownPosition) => {
  let style: {
    align: DropdownMenuContentProps['align'];
    side: DropdownMenuContentProps['side'];
  } = {
    align: 'center',
    side: 'bottom',
  };

  switch (dropdownPosition) {
    case 'top':
      style = {
        align: 'center',
        side: 'top',
      };
      break;
    case 'left':
      style = {
        align: 'center',
        side: 'left',
      };
      break;
    case 'right':
      style = {
        align: 'center',
        side: 'right',
      };
      break;
  }

  return style;
};
