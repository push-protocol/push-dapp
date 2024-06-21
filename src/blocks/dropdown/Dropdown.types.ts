import { ReactNode } from 'react';

export type DropdownProps = {
  // This will be content upon clicking on which the dropdown overlay will open
  children?: (isOpen: boolean) => ReactNode;
  placement?: 'bottom' | 'bottomLeft' | 'top' | 'topRight' | 'bottomRight' | 'topLeft';
  // on which action to open the dropdown
  trigger?: 'click' | 'hover';
  // This is used for custom css instead of style prop, check Box/Text component
  css?: FlattenSimpleInterpolation;
  // This will be the contents of the dropdown overlay
  overlay: ReactNode;
};
