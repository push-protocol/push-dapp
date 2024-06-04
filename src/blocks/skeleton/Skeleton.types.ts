import { CSSProperties, ReactNode } from 'react';

import { BlocksColors, ResponsiveProp, SpaceType, ValueOf } from '../Blocks.types';
import { FlattenSimpleInterpolation } from 'styled-components';

export type SkeletonResponsiveProps = {
  /* Sets display css property */
  display?: ResponsiveProp<CSSProperties['display']>;
  /* Sets height css property */
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
  /* Sets border radius css property */
  borderRadius?: ResponsiveProp<string>;
};

export type SkeletonNonResponsiveProps = {
  /* Sets border css property */
  border?: CSSProperties['border'];
  /* Sets position css property */
  position?: CSSProperties['position'];
  /* Sets box-shadow css property */
  boxShadow?: CSSProperties['boxShadow'];
};

export type SkeletonCSSProps = SkeletonResponsiveProps & SkeletonNonResponsiveProps;

export type SkeletonComponentProps = {
  /* Sets loading state of Skeleton */
  isLoading?: boolean;
  /* Color at the start of the animation */
  startColor?: BlocksColors;
  /* Color at the end of the animation */
  endColor?: BlocksColors;
  /* Additional prop from styled components to apply custom css to Skeleton */
  css?: FlattenSimpleInterpolation;
  /* Child react nodes rendered by Skeleton */
  children?: ReactNode;
};

export type SkeletonResponsiveCSSProperties =
  | 'display'
  | 'height'
  | 'margin'
  | 'max-height'
  | 'min-height'
  | 'max-width'
  | 'min-width'
  | 'padding'
  | 'width'
  | 'border-radius';

export type SkeletonResponsivePropValues = ValueOf<SkeletonResponsiveProps>;

export type SkeletonResponsiveCSSPropertiesData = {
  propName: SkeletonResponsiveCSSProperties;
  prop: SkeletonResponsivePropValues;
};
