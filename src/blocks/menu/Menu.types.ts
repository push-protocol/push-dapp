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
  /* function attached to the menu item */
  onClick?: () => void;
  /* menu item text */
  label?: string;
  /* Additional prop from styled components to apply custom css to Menu */
  css?: FlattenSimpleInterpolation;
};

export type MenuProps = MenuNonResponsiveProps & MenuComponentProps;
