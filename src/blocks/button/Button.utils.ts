import { FlattenSimpleInterpolation, css } from 'styled-components';
import { ButtonSize, ButtonVariant } from './Button.types';
import { ThemeMode } from 'blocks/Blocks.types';
import { getBlocksColor } from 'blocks/Blocks.utils';

export const getButtonVariantStyles = (mode: ThemeMode, variant: ButtonVariant) => {
  switch (variant) {
    case 'primary': {
      return `
        background-color: var(--pink-500);
        color: var(--white);

        &:hover {
          background-color: var(--pink-400);
        }

        &:active {
          background-color: ${getBlocksColor(mode, { light: 'pink-800', dark: 'pink-600' })};
        }

        &:focus-visible {
          background-color: ${getBlocksColor(mode, { light: 'pink-500', dark: 'pink-400' })};
          border: 1px solid ${getBlocksColor(mode, { light: 'pink-700', dark: 'pink-200' })};
          outline: none;
        }

        &:disabled {
          background-color: ${getBlocksColor(mode, { light: 'gray-200', dark: 'gray-800' })};
          color: ${getBlocksColor(mode, { light: 'gray-300', dark: 'gray-700' })};
        }
      `;
    }
    case 'secondary': {
      return `
        background-color: ${getBlocksColor(mode, { light: 'gray-100', dark: 'gray-800' })};
        color: ${getBlocksColor(mode, { light: 'gray-1000', dark: 'white' })};

        &:hover {
          background-color: ${getBlocksColor(mode, { light: 'gray-200', dark: 'gray-700' })};
        }

        &:active {
          background-color: ${getBlocksColor(mode, { light: 'gray-300', dark: 'gray-1000' })};
        }

        &:focus-visible {
          background-color: ${getBlocksColor(mode, { light: 'gray-100', dark: 'gray-800' })};
          border: 1px solid ${getBlocksColor(mode, { light: 'pink-300', dark: 'pink-400' })};
          outline: none;
        }

        &:disabled {
          background-color: ${getBlocksColor(mode, { light: 'gray-200', dark: 'gray-800' })};
          color: ${getBlocksColor(mode, { light: 'gray-300', dark: 'gray-700' })};
        }
      `;
    }
    case 'tertiary': {
      return `
        background-color: ${getBlocksColor(mode, { light: 'gray-1000', dark: 'gray-700' })};
        color: var(--white);

        &:hover {
          color: ${getBlocksColor(mode, { light: 'white', dark: 'gray-200' })};
          background-color: ${getBlocksColor(mode, { light: 'gray-900', dark: 'gray-300' })};
        }

        &:active {
          background-color: ${getBlocksColor(mode, { light: 'gray-100', dark: 'gray-1000' })};
          color: ${getBlocksColor(mode, { light: 'gray-1000', dark: 'white' })};
        }

        &:focus-visible {
          border: 1px solid ${getBlocksColor(mode, { light: 'pink-300', dark: 'pink-400' })};
          background-color: ${getBlocksColor(mode, { light: 'gray-1000', dark: 'gray-700' })};
          color: ${getBlocksColor(mode, { light: 'white', dark: 'gray-200' })};
          outline: none;
        }

        &:disabled {
          background-color: ${getBlocksColor(mode, { light: 'gray-200', dark: 'gray-800' })};
          color: ${getBlocksColor(mode, { light: 'gray-300', dark: 'gray-700' })};
        }
      `;
    }
    case 'danger': {
      return `
        background-color: ${getBlocksColor(mode, { light: 'red-600', dark: 'red-500' })};
        color: var(--white);

        &:hover {
          background-color: ${getBlocksColor(mode, { light: 'red-500', dark: 'red-400' })};
        }

        &:active {
          background-color: ${getBlocksColor(mode, { light: 'red-800', dark: 'red-700' })};
        }

        &:focus-visible {
          background-color: ${getBlocksColor(mode, { light: 'red-500', dark: 'red-400' })};
          border: 1px solid ${getBlocksColor(mode, { light: 'red-800', dark: 'red-600' })};
          outline: none;
        }
        
        &:disabled {
          background-color: ${getBlocksColor(mode, { light: 'gray-200', dark: 'gray-800' })};
          color: ${getBlocksColor(mode, { light: 'gray-300', dark: 'gray-700' })};
        }
      `;
    }
    case 'dangerSecondary': {
      return `
        background-color: ${getBlocksColor(mode, { light: 'red-200', dark: 'red-800' })};
        color: ${getBlocksColor(mode, { light: 'red-700', dark: 'white' })};

        &:hover {
          background-color: ${getBlocksColor(mode, { light: 'red-100', dark: 'red-700' })};
        }

        &:active {
          background-color: ${getBlocksColor(mode, { light: 'red-500', dark: 'red-1000' })};
        }

        &:focus-visible {
          background-color: ${getBlocksColor(mode, { light: 'red-100', dark: 'red-700' })};
          border: 1px solid ${getBlocksColor(mode, { light: 'red-800', dark: 'red-400' })};
          outline: none;
        }
        
        &:disabled {
          background-color: ${getBlocksColor(mode, { light: 'gray-200', dark: 'gray-800' })};
          color: ${getBlocksColor(mode, { light: 'gray-300', dark: 'gray-700' })};
        }
      `;
    }
    case 'outline': {
      return `
        background-color: transparent;
        border: 1px solid ${getBlocksColor(mode, { light: 'gray-300', dark: 'gray-700' })};
        color: ${getBlocksColor(mode, { light: 'gray-1000', dark: 'gray-100' })};
        outline: none;

        &:hover {
          border: 1px solid ${getBlocksColor(mode, { light: 'pink-300', dark: 'gray-800' })};
        }

        &:active {
          border: 1px solid ${getBlocksColor(mode, { light: 'gray-600', dark: 'gray-300' })};
        }

        &:focus-visible {
          border: 1px solid ${getBlocksColor(mode, { light: 'pink-300', dark: 'pink-400' })};
        }
        
        &:disabled {
          border: none;
          background-color: ${getBlocksColor(mode, { light: 'gray-200', dark: 'gray-800' })};
          color: ${getBlocksColor(mode, { light: 'gray-300', dark: 'gray-700' })};
        }
      `;
    }
  }
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

      [role='img'] {
        width: 16px;
        height: 16px;
      }

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

      [role='img'] {
        width: 24px;
        height: 24px;
      }

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

      [role='img'] {
        width: 24px;
        height: 24px;
      }

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

    [role='img'] {
      width: 32px;
      height: 32px;
    }

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
