import { CSSProperties } from 'react';

import { ResponsiveProp, SpaceType, ValueOf } from '../Blocks.types';

export type BoxResponsiveProps = {
  alignItems?: ResponsiveProp<CSSProperties['alignItems']>;
  display?: ResponsiveProp<CSSProperties['display']>;
  height?: ResponsiveProp<string>;
  justifyContent?: ResponsiveProp<CSSProperties['justifyContent']>;
  m?: ResponsiveProp<SpaceType>;
  maxH?: ResponsiveProp<string>;
  minH?: ResponsiveProp<string>;
  maxW?: ResponsiveProp<string>;
  minW?: ResponsiveProp<string>;
  p?: ResponsiveProp<SpaceType>;
  width?: ResponsiveProp<string>;
};

export type BoxNonResponsiveProps = {
  border?: string;
  borderRadius?: string;
  bg?: ResponsiveProp<string>;
  color?: string;
  cursor?: CSSProperties['cursor'];
  position?: CSSProperties['position'];
  shadow?: string;
};

export type BoxCSSProps = BoxResponsiveProps & BoxNonResponsiveProps;

export type BoxResponsiveCSSProperties =
  | 'align-items'
  | 'display'
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
