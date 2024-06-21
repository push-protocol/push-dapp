import { FlattenSimpleInterpolation, css } from 'styled-components';

//Types
import { LozengeSize, LozengeVariant } from './Lozenge.types';
import { ThemeMode } from '../Blocks.types';

export const getLozengeVariantStyles = ({
  mode,
  variant,
}: {
  mode?: ThemeMode;
  variant: LozengeVariant;
}): FlattenSimpleInterpolation => {
  if (mode === 'dark') {
    if (variant === 'primary') {
      return css`
        /* Lozenge tag container variant css */
        background-color: var(--pink-300);
        color: var(--pink-800);
        .icon {
          color: var(--pink-400);
        }
      `;
    }
    return css``;
  }
  if (variant === 'primary') {
    return css`
      /* Lozenge tag container variant css */
      background-color: var(--pink-200);
      color: var(--pink-600);
      .icon {
        color: var(--pink-400);
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

      ${iconOnly
        ? `
            border-radius: var(--r1);
            gap: var(--s0);
            padding: var(--s1);
        `
        : `
            border-radius: var(--r1);
            gap: var(--s1);
            padding: var(--s1) var(--s2);
      `}

      /* Lozenge text size css */
      leading-trim: both;
      text-edge: cap;
      font-size: 10px;
      font-style: normal;
      font-weight: 700;
      line-height: 14px;

      .icon > span {
        height: 8px;
        width: 8px;
      }
    `;
  }

  return css`
    /* Lozenge tag container size css 
    note: - add medium small and large sizes */

    ${iconOnly
      ? `
          border-radius: 15.6px;
          gap: var(--s0);
          padding: 15.6px;
      `
      : `
          border-radius: var(--r3);
          gap: var(--s1);
          padding: var(--s4);
    `}

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
