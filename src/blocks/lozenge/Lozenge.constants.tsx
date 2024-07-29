import { FlattenSimpleInterpolation, css } from 'styled-components';

import { textVariants } from '../text';
import { LozengeSize, LozengeVariant } from './Lozenge.types';

export const getLozengeVariantStyles = (variant: LozengeVariant): FlattenSimpleInterpolation => {
  if (variant === 'primary') {
    return css`
      background-color: var(--surface-brand-subtle);
      color: var(--text-brand-bold);
      .icon {
        color: var(--icon-brand-medium);
      }
    `;
  }

  return css``;
};

export const getLozengeSizeStyles = ({
  iconOnly,
  size,
}: {
  iconOnly?: boolean;
  size: LozengeSize;
}): FlattenSimpleInterpolation => {
  if (size === 'small') {
    return css`
      /* Lozenge tag container size css */
      max-height: 14px;
      min-height: 14px;

      border-radius: var(--radius-xxxs);
      ${iconOnly
        ? `
            gap: var(--spacing-none);
            padding: var(--spacing-xxxs);
        `
        : `
            gap: var(--spacing-xxxs);
            padding: var(--spacing-xxxs) var(--spacing-xxs);
      `}

      /* Lozenge text size css */
      leading-trim: both;
      text-edge: cap;
      font-size: ${textVariants['os-bold'].fontSize};
      font-style: ${textVariants['os-bold'].fontStyle};
      font-weight: ${textVariants['os-bold'].fontWeight};
      line-height: ${textVariants['os-bold'].lineHeight};
      text-transform: ${textVariants['os-bold'].textTransform};

      .icon > span {
        height: 8px;
        width: 8px;
      }
    `;
  }

  return css`
    /* Lozenge tag container size css 
    note: - add medium small and large sizes */

     var(--spacing-sm);

    ${
      iconOnly
        ? `
          border-radius: var(--radius-sm);
          gap: var(--spacing-none);
      `
        : `
          border-radius: var(--radius-xs);
          gap: var(--spacing-xxxs);
    `
    }

    /* Lozenge text size css */
    leading-trim: both;
    text-edge: cap;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;

    .icon > span {
      height: 24px;
      width: 24px;
    }
  `;
};
