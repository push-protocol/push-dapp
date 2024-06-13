import { ReactNode } from 'react';

import type { TransformedHTMLAttributes, RadiusType, ResponsiveProp, SpaceType, ValueOf } from '../Blocks.types';
import type { FlattenSimpleInterpolation } from 'styled-components';

export type SkeletonResponsiveProps = {
  /* Sets height css property */
  height?: ResponsiveProp<string>;
  /* Sets margin css property */
  margin?: ResponsiveProp<SpaceType>;
  /* Sets width css property */
  width?: ResponsiveProp<string>;
  /* Sets border radius css property */
  borderRadius?: ResponsiveProp<RadiusType>;
};

export type SkeletonProps = SkeletonResponsiveProps &
  SkeletonComponentProps &
  TransformedHTMLAttributes<HTMLDivElement>;

export type SkeletonComponentProps = {
  /* Sets loading state of Skeleton */
  isLoading?: boolean;
  /* Additional prop from styled components to apply custom css to Skeleton */
  css?: FlattenSimpleInterpolation;
  /* Child react nodes rendered by Skeleton */
  children?: ReactNode;
};

export type SkeletonResponsiveCSSProperties = 'height' | 'margin' | 'width' | 'border-radius';

export type SkeletonResponsivePropValues = ValueOf<SkeletonResponsiveProps>;

export type SkeletonResponsiveCSSPropertiesData = {
  propName: SkeletonResponsiveCSSProperties;
  prop: SkeletonResponsivePropValues;
};
