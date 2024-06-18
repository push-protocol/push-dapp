import { css } from 'styled-components';

import { TextVariants } from './Text.types';
import { textVariants } from './Text.constants';
import { getResponsiveCSS } from '../Blocks.utils';
import { TextResponsiveCSSPropertiesData, TextResponsiveProps } from './Text.types';

export const getVariantStyles = (variantName?: TextVariants) => {
  if (variantName) {
    const variantValue = textVariants[variantName];
    return css`
      font-size: ${variantValue.fontSize};
      ${variantValue.fontStyle ? `font-style: ${variantValue.fontStyle};` : ''}
      font-weight: ${variantValue.fontWeight};
      line-height: ${variantValue.lineHeight};
      ${variantValue.letterSpacing ? `letter-spacing: ${variantValue.letterSpacing};` : ''}
      ${variantValue.textTransform ? `text-transform: ${variantValue.textTransform};` : ''}
    `;
  }

  // When no variant is passed, fallback to bes-regular
  return css`
    font-size: ${textVariants['bes-regular'].fontSize};
    line-height: ${textVariants['bes-regular'].lineHeight};
    font-weight: ${textVariants['bes-regular'].fontWeight};
  `;
};

const getTextResponsiveCSSProperties = (props: TextResponsiveProps): TextResponsiveCSSPropertiesData[] => [
  { propName: 'display', prop: props.display },
];

export const getTextResponsiveCSS = (props: TextResponsiveProps) => {
  const data = getTextResponsiveCSSProperties(props);
  return getResponsiveCSS(data);
};
