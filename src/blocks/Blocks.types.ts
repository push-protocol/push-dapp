import { HTMLAttributes } from 'react';
import { BoxResponsiveCSSProperties, BoxResponsiveCSSPropertiesData, BoxResponsivePropValues } from './box';
import { blocksColorsLegacy } from './Blocks.colors';
import {
  SkeletonResponsiveCSSProperties,
  SkeletonResponsiveCSSPropertiesData,
  SkeletonResponsivePropValues,
} from './skeleton';
import {
  SeparatorResponsiveCSSProperties,
  SeparatorResponsiveCSSPropertiesData,
  SeparatorResponsivePropValues,
} from './separator';

export type DeviceSize = '320px' | '375px' | '425px' | '768px' | '1024px' | '1440px' | '2560px';

export type DeviceSizeName = 'mobileS' | 'mobileM' | 'mobileL' | 'tablet' | 'laptop' | 'laptopL' | 'desktop';

export type Breakpoint = 'initial' | 'ms' | 'mm' | 'ml' | 'tb' | 'lp' | 'll' | 'dp';

export type ResponsiveProp<T> = T | { [key in Breakpoint]?: T };

export type RadiusType = `r${number}` | `r${number} r${number}` | `r${number} r${number} r${number} r${number}`;

export type SpaceType = `s${number}` | `s${number} s${number}` | `s${number} s${number} s${number} s${number}`;

export type PixelValue = `${number}px`;

export type ValueOf<T> = T[keyof T];

export type CSSPropName =
  | BoxResponsiveCSSProperties
  | SeparatorResponsiveCSSProperties
  | SkeletonResponsiveCSSProperties;

export type CSSPropValueType = BoxResponsivePropValues | SeparatorResponsivePropValues | SkeletonResponsivePropValues;

export type ResponsiveCSSPropertyData =
  | BoxResponsiveCSSPropertiesData
  | SeparatorResponsiveCSSPropertiesData
  | SkeletonResponsiveCSSPropertiesData;

export type TransformedHTMLAttributes<T> = Omit<HTMLAttributes<T>, 'style' | 'color'>;

/* This needs to be removed when the color dependency from Globals.js is removed. */
export type GlobalColors = Record<keyof typeof blocksColorsLegacy, string>;

type CamelCase<S extends string> = S extends `${infer P1}_${infer P2}${infer P3}`
  ? `${Lowercase<P1>}${Capitalize<Lowercase<P2>>}${CamelCase<P3>}`
  : Lowercase<S>;

export type BlocksColorData = {
  [K in keyof typeof blocksColorsLegacy as CamelCase<K extends string ? K : never>]: (typeof blocksColorsLegacy)[K];
};

export type BlocksColors = keyof BlocksColorData;

export type ThemeMode = 'light' | 'dark';

export type ThemeModeColors = Record<ThemeMode, BlocksColors>;

export type BorderValue = `${number}px ${string} ${BlocksColors}` | 'none';

export type ThemeModeBorder = Record<ThemeMode, BorderValue>;

export type ModeProp = { mode: ThemeMode };
