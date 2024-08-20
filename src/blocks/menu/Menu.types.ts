import { ReactNode } from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';

export type MenuNonResponsiveProps = {
  /* Sets height css property */
  height?: string;
  /* Sets max-height css property */
  maxHeight?: string;
  /* Sets min-height css property */
  minHeight?: string;
  /* Sets max-width css property */
  maxWidth?: string;
  /* Sets min-width css property */
  minWidth?: string;
  /* Sets width css property */
  width?: string;
};

export type MenuComponentProps = {
  /* Additional prop from styled components to apply custom css to Menu */
  css?: FlattenSimpleInterpolation;
  /* Child react nodes rendered by Menu */
  children: ReactNode;
};

export type MenuItemComponentProps = {
  /* icon element  */
  icon?: ReactNode;
  /* Sets color css property */
  type?: MenuItemTypeVariant;
  /* function attached to the menu item */
  onClick?: () => void;
  /* menu item text */
  label?: string;
  /* link option incase you need to redirect or open a link */
  destination?: string;
  // add the option to open in a new tab
  newTab?: boolean;
  /* disabled option on the item*/
  disabled?: boolean;
  /* Additional prop from styled components to apply custom css to Menu */
  css?: FlattenSimpleInterpolation;
};
export type MenuItemTypeVariant = 'success' | 'error';

export type MenuProps = MenuNonResponsiveProps & MenuComponentProps;
