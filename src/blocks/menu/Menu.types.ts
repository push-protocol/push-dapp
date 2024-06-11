import { CSSProperties, ReactNode } from 'react';
import { BlockWithoutStyleProp, ResponsiveProp, SpaceType, ValueOf } from '../Blocks.types';
import { FlattenSimpleInterpolation } from 'styled-components';

export type MenuComponentProps = {
  /* Additional prop from styled components to apply custom css to Box */
  css?: FlattenSimpleInterpolation;
  /* Child react nodes rendered by Box */
  children?: ReactNode;
};

export type MenuProps = MenuResponsiveProps & MenuComponentProps & BlockWithoutStyleProp<HTMLDivElement>;

// export type MenuResponsiveCSSProperties = 'height' | 'margin' | 'width';

export type MenuResponsivePropValues = ValueOf<MenuResponsiveProps>;

export type MenuResponsiveCSSPropertiesData = {
  propName: MenuResponsiveCSSProperties;
  prop: MenuResponsivePropValues;
};
