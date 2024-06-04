import { CSSProperties } from 'react';

import { BlocksColors, ResponsiveProp, SpaceType, ValueOf } from '../Blocks.types';
import { FlattenSimpleInterpolation } from 'styled-components';

export type SeparatorResponsiveProps = {
  height?: ResponsiveProp<string>;
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

export type SeparatorNonResponsiveProps = {
  /* Sets border css property */
  border?: string;
  /* Sets border-radius css property */
  borderRadius?: string;
  /* Sets background-color css property */
  backgroundColor?: BlocksColors;
  /* Sets position css property */
  position?: CSSProperties['position'];
  /* Sets box-shadow css property */
  boxShadow?: string;
};

export type SeparatorCSSProps = SeparatorResponsiveProps & SeparatorNonResponsiveProps;

export type SeparatorComponentProps = {
  /* Additional prop from styled components to apply custom css to Separator */
  css?: FlattenSimpleInterpolation;
  /* Orientation of the separator */
  orientation?: 'horizontal' | 'vertical';
};

export type SeparatorResponsiveCSSProperties =
  | 'height'
  | 'margin'
  | 'max-height'
  | 'min-height'
  | 'max-width'
  | 'min-width'
  | 'padding'
  | 'width';

export type SeparatorResponsivePropValues = ValueOf<SeparatorResponsiveProps>;

export type SeparatorResponsiveCSSPropertiesData = {
  propName: SeparatorResponsiveCSSProperties;
  prop: SeparatorResponsivePropValues;
};
