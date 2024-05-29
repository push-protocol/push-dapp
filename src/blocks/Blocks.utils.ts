import { css } from 'styled-components';
import { DeviceMediaQ, breakpointMap } from './Blocks.constants';
import { Breakpoint, CSSPropName, CSSPropValueType, DeviceSizeName, ResponsiveCSSPropertyData } from './Blocks.types';

export const createBreakpointCSS = (breakpointData: Record<DeviceSizeName, string>) => {
  return Object.entries(breakpointData)
    .filter(([_, css]) => css)
    .map(([bp, css]) => `@media ${DeviceMediaQ[bp as DeviceSizeName]} { ${css} }`)
    .join(';');
};

export const getCSSValue = (propName: CSSPropName, value: CSSPropValueType | undefined) => {
  return propName === 'padding' || propName === 'margin' ? `var(--${value})` : value;
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
