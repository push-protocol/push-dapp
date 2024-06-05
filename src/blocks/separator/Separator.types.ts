import { ResponsiveProp, SpaceType, ValueOf } from '../Blocks.types';
import { FlattenSimpleInterpolation } from 'styled-components';

export type SeparatorResponsiveProps = {
  /* Sets height css property */
  height?: ResponsiveProp<string>;
  /* Sets margin css property */
  margin?: ResponsiveProp<SpaceType>;
  /* Sets width css property */
  width?: ResponsiveProp<string>;
};

export type SeparatorNonResponsiveProps = {
  /* Orientation of the separator */
  orientation?: 'horizontal' | 'vertical';
};

export type SeparatorCSSProps = SeparatorResponsiveProps & SeparatorNonResponsiveProps;

export type SeparatorComponentProps = {
  /* Additional prop from styled components to apply custom css to Separator */
  css?: FlattenSimpleInterpolation;
};

export type SeparatorResponsiveCSSProperties = 'height' | 'margin' | 'width';

export type SeparatorResponsivePropValues = ValueOf<SeparatorResponsiveProps>;

export type SeparatorResponsiveCSSPropertiesData = {
  propName: SeparatorResponsiveCSSProperties;
  prop: SeparatorResponsivePropValues;
};

export const separatorCSSPropsKeys: (keyof SeparatorCSSProps)[] = ['height', 'margin', 'width', 'orientation'];
