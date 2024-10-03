import { css } from 'styled-components';
import { deviceMediaQ, deviceSizes, breakpointMap } from './theme';
import {
  Breakpoint,
  CSSPropName,
  CSSPropValueType,
  DeviceSizeName,
  PixelValue,
  ResponsiveCSSPropertyData,
  BorderValue,
  BlocksRadiusType,
} from './Blocks.types';
import { radiusRegex, spacingRegex } from './Blocks.constants';
import { textVariants, TextVariants } from './text';
import { ThemeColors } from './theme/Theme.types';

/**
 * @param propName
 * @param value
 * @returns value of a CSS property
 */
const getCSSValue = (propName: CSSPropName, value: CSSPropValueType | undefined) => {
  if (propName === 'padding' || propName === 'margin') {
    if (typeof value === 'string') {
      return value.replace(spacingRegex, (match) => `var(--${match})`);
    }
  } else if (propName === 'gap' || propName === 'border-radius') {
    return `var(--${value})`;
  }
  return value;
};

/**
 * @param pixelStr
 * @returns numeric values fetched from px values
 *
 * Helper function to parse the pixel values from the strings.
 */
const parsePixels = (pixelStr: PixelValue) => parseFloat(pixelStr.replace('px', ''));

/**
 * @param values
 * @param operation
 * @returns computed values in px
 */
const computePixels = (values: PixelValue[], operation: 'add' | 'sub') =>
  values.reduce((acc, value) => (operation === 'add' ? acc + parsePixels(value) : acc - parsePixels(value)), 0) + 'px';

/**
 * @param breakpointData
 * @returns media query css in string forma for all screen sizes passed on to it
 *
 * Separates css for different screen size from all css properties
 * and combine them into common media queries to avoid applying multiple
 * media queries for every css property.
 */
const createBreakpointCSS = (breakpointData: Record<DeviceSizeName, string>) => {
  const validBreakpointList = Object.entries(breakpointData).filter(([_, css]) => css);

  if (!validBreakpointList.length) return '';

  const singleDeviceMedia = `@media ${deviceMediaQ[validBreakpointList[0][0] as DeviceSizeName]} { 
    ${validBreakpointList[0][1]} 
  }`;

  if (validBreakpointList.length === 1) {
    return singleDeviceMedia;
  } else {
    return (
      `${singleDeviceMedia}` +
      validBreakpointList
        .map(([_bp, css], index) => {
          if (!index) {
            return '';
          } else {
            const previousBp = validBreakpointList[index - 1][0] as DeviceSizeName;

            const previousBpWidth = computePixels([deviceSizes[previousBp], '1px'], 'add');

            const previousBpMediaQ = `@media (min-width: ${previousBpWidth})`;

            const currentBp = _bp as DeviceSizeName;

            const currentBpMediaQ = deviceMediaQ?.[currentBp] ? `and ${deviceMediaQ?.[currentBp]}` : '';

            return `${previousBpMediaQ} ${currentBpMediaQ} { ${css} }`;
          }
        })
        .join(';')
    );
  }
};

/**
 *
 * @param data
 * @returns styled components css
 *
 * This function collects css values for different screen sizes
 * and then combines them into to same media queries classes.
 *
 */
export const getResponsiveCSS = (data: ResponsiveCSSPropertyData[]) => {
  let initialCSS = '';
  const breakpointData: Record<DeviceSizeName, string> = {
    mobileS: '',
    mobileM: '',
    mobileL: '',
    tablet: '',
    laptop: '',
    laptopL: '',
    desktop: '',
    ultrawide: '',
  };

  data.forEach(({ prop, propName }) => {
    if (typeof prop === 'object') {
      Object.entries(prop).forEach(([key, value]) => {
        const breakpoint = breakpointMap[key as Breakpoint];
        if (breakpoint) {
          breakpointData[breakpoint] += `${propName}: ${getCSSValue(propName, value)};`;
        } else {
          initialCSS += `${propName}: ${getCSSValue(propName, value)};`;
        }
      });
    } else if (prop) {
      initialCSS += `${propName}: ${getCSSValue(propName, prop)};`;
    }
  });

  return css`
    ${initialCSS}
    ${createBreakpointCSS(breakpointData)}
  `;
};

/**
 * @param border
 * @returns border
 */
export const getBlocksBorder = (border?: BorderValue) => {
  // If border is not given return undefined, to avoid any breakages
  if (!border) return border;

  let borderValues;

  borderValues = border.split(' ');

  borderValues[0] = `var(--${borderValues[0]})`;

  borderValues[2] = `var(--${borderValues[2]})`;
  return borderValues.join(' ');
};

/**
 * @param radius
 * @returns
 */
export const getBlocksBorderRadius = (radius?: BlocksRadiusType) => {
  // If border-radius is not given return undefined, to avoid any breakages
  if (!radius) return radius;

  const result = radius.replace(radiusRegex, (match) => `var(--${match})`);

  return result;
};

export const getTextVariantStyles = (variant: TextVariants, color: ThemeColors) => css`
  color: var(--${color});
  font-family: var(--font-family);
  font-size: ${textVariants[variant].fontSize};
  font-style: ${textVariants[variant].fontStyle};
  font-weight: ${textVariants[variant].fontWeight};
  line-height: ${textVariants[variant].lineHeight};
  letter-spacing: ${textVariants[variant].letterSpacing};
  text-transform: ${textVariants[variant].textTransform};
  margin: var(--spacing-none);
`;
