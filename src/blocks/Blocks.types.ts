import { HTMLAttributes } from 'react';
import Globals from 'config/Globals';
import { BoxResponsiveCSSProperties, BoxResponsiveCSSPropertiesData, BoxResponsivePropValues } from './box';

export type DeviceSize = '320px' | '375px' | '425px' | '768px' | '1024px' | '1440px' | '2560px';

export type DeviceSizeName = 'mobileS' | 'mobileM' | 'mobileL' | 'tablet' | 'laptop' | 'laptopL' | 'desktop';

export type Breakpoint = 'initial' | 'ms' | 'mm' | 'ml' | 'tb' | 'lp' | 'll' | 'dp';

export type ResponsiveProp<T> = T | { [key in Breakpoint]?: T };

export type SpaceType = `s${number}`;

export type PixelValue = `${number}px`;

export type ValueOf<T> = T[keyof T];

export type CSSPropName = BoxResponsiveCSSProperties;

export type CSSPropValueType = BoxResponsivePropValues;

export type ResponsiveCSSPropertyData = BoxResponsiveCSSPropertiesData;

export type BlockWithoutStyleProp<T> = Omit<HTMLAttributes<T>, 'style'>;

export type GlobalColors = Record<keyof typeof Globals.COLORS, string>;

type CamelCase<S extends string> = S extends `${infer P1}_${infer P2}${infer P3}`
  ? `${Lowercase<P1>}${Capitalize<Lowercase<`${P2}${CamelCase<P3>}`>>}`
  : Lowercase<S>;

export type BlocksColorData = {
  [K in keyof typeof Globals.COLORS as CamelCase<K extends string ? K : never>]: (typeof Globals.COLORS)[K];
};

export type BlocksColors = keyof BlocksColorData;
