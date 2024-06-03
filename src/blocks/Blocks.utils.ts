import { css } from 'styled-components';
import { deviceMediaQ, deviceSizes, breakpointMap } from './Blocks.constants';
import {
  BlocksColors,
  Breakpoint,
  CSSPropName,
  CSSPropValueType,
  DeviceSizeName,
  PixelValue,
  ResponsiveCSSPropertyData,
} from './Blocks.types';

/**
 * @param propName
 * @param value
 * @returns value of a CSS property
 */
const getCSSValue = (propName: CSSPropName, value: CSSPropValueType | undefined) => {
  return propName === 'padding' || propName === 'margin' ? `var(--${value})` : value;
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
 * @param color
 * @returns color as a css variable: var(--primary)
 */
export const getBlocksColor = (color?: BlocksColors) => {
  // If color is not given return undefined, to avoid any breakages
  if (!color) return color;

  // If passed a design system color then use color as a variable
  return `var(--${color})`;
};
