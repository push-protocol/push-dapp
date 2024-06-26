import { FlattenSimpleInterpolation, css } from 'styled-components';
import { ButtonSize, ButtonVariantStyles } from './Button.types';

export const buttonVariantStyles: ButtonVariantStyles = {
  primary: `
    background-color: var(--pink-400);
    color: var(--white);

    &:hover {
      background-color: var(--pink-400);
    }

    &:active {
      background-color: var(--pink-800);
    }

    &:focus-visible {
      border: 1px solid var(--pink-300);
      outline: none;
    }

    &:disabled {
      background-color: var(--gray-200);
      color: var(--gray-300);
    }
  `,
  secondary: `
    background-color: var(--gray-100);
    color: var(--gray-1000);

    &:hover {
      background-color: var(--gray-200);
    }

    &:active {
      background-color: var(--gray-300);
    }

    &:focus-visible {
      background-color: var(--pink-100);
      border: 1px solid var(--pink-300);
      outline: none;
    }

    &:disabled {
      background-color: var(--gray-200);
      color: var(--gray-300);
    }
  `,
  tertiary: `
    background-color: var(--gray-1000);
    color: var(--white);

    &:hover {
      background-color: var(--gray-900);
    }

    &:active {
      background-color: var(--gray-100);
      color: var(--gray-1000);
    }

    &:focus-visible {
      border: 1px solid var(--pink-300);
      background-color: var(--pink-100);
      color: var(--gray-1000);
      outline: none;
    }

    &:disabled {
      background-color: var(--gray-200);
      color: var(--gray-300);
    }
  `,
  danger: `
    background-color: var(--red-600);
    color: var(--white);

    &:hover {
      background-color: var(--red-500);
    }

    &:active {
      background-color: var(--red-800);
    }

    &:focus-visible {
      background-color: var(--red-500);
      border: 1px solid var(--red-300);
      outline: none;
    }
    
    &:disabled {
      background-color: var(--gray-200);
      color: var(--gray-300);
    }
  `,
  dangerSecondary: `
    background-color: var(--red-200);
    color: var(--red-700);

    &:hover {
      background-color: var(--red-100);
    }

    &:active {
      background-color: var(--red-500);
      color: var(--red-700);
    }

    &:focus-visible {
      background-color: var(--red-100);
      border: 1px solid var(--red-300);
      outline: none;
    }
    
    &:disabled {
      background-color: var(--gray-200);
      color: var(--gray-300);
    }
  `,
  outline: `
    background-color: var(--white);
    border: 1px solid var(--gray-300);
    color: var(--gray-1000);

    &:hover {
      background-color: var(--white);
    }

    &:active {
      background-color: var(--white);
      border: 1px solid var(--gray-600);
    }

    &:focus-visible {
      background-color: var(--white);
      border: 1px solid var(--pink-300);
      outline: none;
    }
    
    &:disabled {
      border: none;
      background-color: var(--gray-200);
      color: var(--gray-300);
    }
  `,
};

export const getButtonSizeStyles = ({
  iconOnly,
  size,
}: {
  iconOnly?: boolean;
  size: ButtonSize;
}): FlattenSimpleInterpolation => {
  if (size === 'extraSmall') {
    return css`
      /* Button tag container size css */

      ${iconOnly
        ? `
            border-radius: 9.6px;
            gap: var(--s0);
            height: 32px;
            width: 32px;
            padding: 9.6px 0px;
        `
        : `
            border-radius: var(--r2);
            gap: var(--s1);
            height: 32px;
            padding: var(--s3) var(--s4);
            min-width: 100px;
      `}

      /* Button text size css */
      leading-trim: both;
      text-edge: cap;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: 16px;

      .icon-text > span {
        height: 16px;
        width: 16px;
      }

      .icon-only > span {
        height: 16px;
        width: 16px;
      }
    `;
  }
  if (size === 'small') {
    return css`
      /* Button tag container size css */

      ${iconOnly
        ? `
            border-radius: var(--r3);
            gap: var(--s0);
            height: 40px;
            width: 40px;
            padding: var(--s3);
        `
        : `
            border-radius: var(--r3);
            gap: var(--s1);
            height: 40px;
            padding: var(--s3) var(--s6);
            min-width: 100px;
      `}

      /* Button text size css */
      leading-trim: both;
      text-edge: cap;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 16px;

      .icon-text > span {
        height: 16px;
        width: 16px;
      }

      .icon-only > span {
        height: 24px;
        width: 24px;
      }
    `;
  }

  if (size === 'medium') {
    return css`
      /* Button tag container size css */

      ${iconOnly
        ? `
            border-radius: 14.4px;
            gap: var(--s0);
            height: 48px;
            width: 48px;
            padding: 14.4px;
        `
        : `
            border-radius: var(--r3);
            gap: var(--s1);
            height: 48px;
            padding: var(--s4) var(--s6);
            min-width: 100px;
      `}

      /* Button text size css */
      leading-trim: both;
      text-edge: cap;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 16px;

      .icon-text > span {
        height: 24px;
        width: 24px;
      }

      .icon-only > span {
        height: 24px;
        width: 24px;
      }
    `;
  }

  return css`
    /* Button tag container size css */

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
          padding: var(--s4) var(--s8);
          min-width: 100px;
    `}

    /* Button text size css */
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
