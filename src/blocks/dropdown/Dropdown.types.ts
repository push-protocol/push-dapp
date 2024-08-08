import { ReactElement, ReactNode } from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';
import { DropdownMenuContentProps } from '@radix-ui/react-dropdown-menu';

export type DropdownTrigger = 'hover' | 'click';

export type DropdownComponentProps = {
  // This will be content upon clicking on which the dropdown overlay will open
  children: ((props: { isOpen: boolean }) => ReactElement) | ReactNode | any;
  // on which action to open the dropdown
  trigger?: DropdownTrigger;
  // This is used for custom css instead of style prop, check Box/Text component
  css?: FlattenSimpleInterpolation;
  // This will be the contents of the dropdown overlay
  overlay?: ReactNode | ((setIsOpen: (isOpen: boolean) => void) => ReactNode);
};

export type DropdownProps = DropdownComponentProps & DropdownMenuContentProps;
