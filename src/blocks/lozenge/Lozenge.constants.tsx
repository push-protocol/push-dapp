import { FlattenSimpleInterpolation, css } from 'styled-components';
import { LozengeSize, LozengeVariantStyles } from './Lozenge.types';

export const lozengeVariantStyles: LozengeVariantStyles = {
  primary: `
    background-color: var(--pink-200);
    color: var(--pink-600);
  `,
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
            height: 20px;
            width: 20px;
            padding: var(--s1);
        `
        : `
            border-radius: var(--r1);
            gap: var(--s1);
            height: 20px;
            padding: var(--s1) var(--s2);
      `}

      /* Lozenge text size css */
      leading-trim: both;
      text-edge: cap;
      font-size: 10px;
      font-style: normal;
      font-weight: 700;
      line-height: 14px;

      .icon-text > span {
        height: 8px;
        width: 8px;
      }

      .icon-only > span {
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
          height: 52px;
          width: 52px;
          padding: 15.6px;
      `
      : `
          border-radius: var(--r3);
          gap: var(--s1);
          height: 52px;
          padding: var(--s4);
    `}

    /* Lozenge text size css */
    leading-trim: both;
    text-edge: cap;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;

    .icon-text > span {
      height: 24px;
      width: 24px;
    }

    .icon-only > span {
      height: 32px;
      width: 32px;
    }
  `;
};
