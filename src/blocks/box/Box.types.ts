import { CSSProperties, ReactNode } from 'react';

import {
  BlocksColors,
  BorderValue,
  RadiusType,
  ResponsiveProp,
  SpaceType,
  ThemeModeBorder,
  ThemeModeColors,
  ValueOf,
} from '../Blocks.types';
import { FlattenSimpleInterpolation } from 'styled-components';

export type BoxResponsiveProps = {
  /* Sets align-items css property */
  alignItems?: ResponsiveProp<CSSProperties['alignItems']>;
  /* Sets align-self css property */
  alignSelf?: ResponsiveProp<CSSProperties['alignSelf']>;
  /* Sets flex-direction css property */
  flexDirection?: ResponsiveProp<CSSProperties['flexDirection']>;
  /* Sets gap between the elements */
  gap?: ResponsiveProp<SpaceType>;
  /* Sets display css property */
  display?: ResponsiveProp<CSSProperties['display']>;
  /* Sets height css property */
  height?: ResponsiveProp<string>;
  /* Sets justify-content css property */
  justifyContent?: ResponsiveProp<CSSProperties['justifyContent']>;
  /* Sets margin css property */
  margin?: ResponsiveProp<SpaceType>;
  /* Sets max-height css property */
  maxHeight?: ResponsiveProp<string>;
  /* Sets min-height css property */
  minHeight?: ResponsiveProp<string>;
  /* Sets max-width css property */
  maxWidth?: ResponsiveProp<string>;
  /* Sets min-width css property */
  minWidth?: ResponsiveProp<string>;
  /* Sets padding css property */
  padding?: ResponsiveProp<SpaceType>;
  /* Sets width css property */
  width?: ResponsiveProp<string>;
};

export type BoxNonResponsiveProps = {
  /* Sets border css property */
  border?: BorderValue | ThemeModeBorder;
  /* Sets border-radius css property */
  borderRadius?: RadiusType;
  /* Sets background-color css property */
  backgroundColor?: BlocksColors | ThemeModeColors;
  /* Sets color css property */
  color?: BlocksColors | ThemeModeColors;
  /* Sets cursor css property */
  cursor?: CSSProperties['cursor'];
  /* Sets position css property */
  position?: CSSProperties['position'];
  /* Sets box-shadow css property */
  boxShadow?: string;
  /* Sets overflow css property */
  overflow?: CSSProperties['overflow'];
};

export type BoxCSSProps = BoxResponsiveProps & BoxNonResponsiveProps;

type BoxHTMLTags = 'div' | 'span';

export type BoxComponentProps = {
  /* Decides which HTML tag to render inside Box */
  as?: BoxHTMLTags;
  /* Additional prop from styled components to apply custom css to Box */
  css?: FlattenSimpleInterpolation;
  /* Child react nodes rendered by Box */
  children?: ReactNode;
};

export type BoxResponsiveCSSProperties =
  | 'align-items'
  | 'align-self'
  | 'display'
  | 'flex-direction'
  | 'gap'
  | 'height'
  | 'justify-content'
  | 'margin'
  | 'max-height'
  | 'min-height'
  | 'max-width'
  | 'min-width'
  | 'padding'
  | 'width';

export type BoxResponsivePropValues = ValueOf<BoxResponsiveProps>;

export type BoxResponsiveCSSPropertiesData = { propName: BoxResponsiveCSSProperties; prop: BoxResponsivePropValues };
