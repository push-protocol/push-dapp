import { TransformedHTMLAttributes, ResponsiveProp, BlocksSpaceType, ValueOf } from '../Blocks.types';
import { FlattenSimpleInterpolation } from 'styled-components';

export type SeparatorResponsiveProps = {
  /* Sets height css property */
  height?: ResponsiveProp<string>;
  /* Sets margin css property */
  margin?: ResponsiveProp<BlocksSpaceType>;
  /* Sets width css property */
  width?: ResponsiveProp<string>;
};

export type SeparatorComponentProps = {
  /* Additional prop from styled components to apply custom css to Separator */
  css?: FlattenSimpleInterpolation;
  /* Orientation of the separator */
  orientation?: 'horizontal' | 'vertical';
};

export type SeparatorProps = SeparatorResponsiveProps &
  SeparatorComponentProps &
  TransformedHTMLAttributes<HTMLDivElement>;

export type SeparatorResponsiveCSSProperties = 'height' | 'margin' | 'width';

export type SeparatorResponsivePropValues = ValueOf<SeparatorResponsiveProps>;

export type SeparatorResponsiveCSSPropertiesData = {
  propName: SeparatorResponsiveCSSProperties;
  prop: SeparatorResponsivePropValues;
};
