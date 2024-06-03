import { css } from 'styled-components';
import Globals from 'config/Globals';

import { BlocksColorData, BlocksColors, GlobalColors } from '../Blocks.types';
import { TextVariants } from './Text.types';
import { textVariants } from './Text.constants';

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

export const createBlocksColors = () => {
  const globalColors: GlobalColors = Globals.COLORS;

  const appColors = Object.keys(globalColors).reduce((acc: Partial<BlocksColorData>, key) => {
    const newKey = key.toLowerCase().replace(/_([a-z])/g, (match, letter) => letter.toUpperCase()) as BlocksColors;
    acc[newKey as keyof BlocksColorData] = globalColors[key as keyof GlobalColors];
    return acc;
  }, {});

  return appColors as BlocksColorData;
};
