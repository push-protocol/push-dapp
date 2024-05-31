import { HTMLAttributes } from 'react';
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
