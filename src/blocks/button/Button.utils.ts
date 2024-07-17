import { FlattenSimpleInterpolation, css } from 'styled-components';
import { ButtonSize, ButtonVariant } from './Button.types';

export const getButtonVariantStyles = (variant: ButtonVariant) => {
  switch (variant) {
    case 'primary': {
      return `
        background-color: var(--components-button-primary-background-default);
        color: var(--components-button-primary-text-default);

        &:hover {
          background-color: var(--components-button-primary-background-hover)
        }

        &:active {
          background-color: var(--components-button-primary-background-pressed);
        }

        &:focus-visible {
          background-color:  var(--components-button-primary-background-focus);
          border: var(--border-sm) solid var(--components-button-primary-stroke-focus);
          outline: none;
        }

        &:disabled {
          background-color: var(--components-button-primary-background-disabled);
          color: var(--components-button-primary-text-disabled);
        }
      `;
    }
    case 'secondary': {
      return `
        background-color: var(--components-button-secondary-background-default);
        color: var(--components-button-secondary-text-default);

        &:hover {
          background-color: var(--components-button-secondary-background-hover);
        }

        &:active {
          background-color: var(--components-button-secondary-background-pressed);
        }

        &:focus-visible {
          background-color: var(--components-button-secondary-background-focus);
          border: var(--border-sm) solid var(--components-button-secondary-stroke-focus);
          outline: none;
        }

        &:disabled {
          background-color: var(--components-button-secondary-background-disabled);
          color: var(--components-button-secondary-text-disabled)
        }
      `;
    }
    case 'tertiary': {
      return `
        background-color: var(--components-button-tertiary-background-default);
        color: var(--components-button-tertiary-text-default);

        &:hover {
          color: var(--components-button-tertiary-text-default);
          background-color: var(--components-button-tertiary-background-hover);
        }

        &:active {
          background-color: var(--components-button-tertiary-background-pressed);
          color: var(--components-button-secondary-text-default);
        }

        &:focus-visible {
          border: var(--border-sm) solid var(--components-button-tertiary-stroke-focus);
          background-color: var(--components-button-tertiary-background-focus);
          color: var(--components-button-tertiary-text-default);
          outline: none;
        }

        &:disabled {
          background-color: var(--components-button-tertiary-background-disabled);
          color: var(--components-button-tertiary-text-disabled);
        }
      `;
    }
    case 'danger': {
      return `
        background-color: var(--components-button-danger-background-default);
        color: var(--components-button-danger-text-default);

        &:hover {
          background-color: var(--components-button-danger-background-hover);
        }

        &:active {
          background-color: var(--components-button-danger-background-pressed);
        }

        &:focus-visible {
          background-color: var(--components-button-danger-background-focus);
          border: var(--border-sm) solid var(--components-button-danger-stroke-focus);
          outline: none;
        }
        
        &:disabled {
          background-color: var(--components-button-danger-background-disabled);
          color: var(--components-button-danger-text-disabled);
        }
      `;
    }
    case 'dangerSecondary': {
      return `
        background-color: var(--components-button-danger-secondary-background-default);
        color: var(--components-button-danger-secondary-text-default);

        &:hover {
          background-color: var(--components-button-danger-secondary-background-hover);
        }

        &:active {
          background-color: var(--components-button-danger-secondary-background-pressed);
        }

        &:focus-visible {
          background-color: var(--components-button-danger-secondary-background-focus);
          border: var(--border-sm) solid var(--components-button-danger-secondary-stroke-focus);
          outline: none;
        }
        
        &:disabled {
          background-color: var(--components-button-danger-secondary-background-disabled);
          color:var(--components-button-danger-secondary-text-disabled);
        }
      `;
    }
    case 'outline': {
      return `
        background-color: var(--components-button-outline-background-default);
        border: var(--border-sm) solid var(--components-button-outline-stroke-default);
        color: var(--components-button-outline-text-default);
        outline: none;

        &:hover {
          border: var(--border-sm) solid var(--components-button-outline-stroke-hover);
          background-color: var(--components-button-outline-background-hover);
        }

        &:active {
          border:  var(--border-sm) solid var(--components-button-outline-stroke-pressed);
          background-color: var(--components-button-outline-background-pressed);
        }

        &:focus-visible {
          border: var(--border-sm) solid var(--components-button-outline-stroke-focus);
          background-color: var(--components-button-outline-background-focus);
        }
        
        &:disabled {
          border: none;
          background-color: var(--components-button-tertiary-background-disabled);
          color: var(--components-button-outline-text-disabled);
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
            gap: var(--spacing-none);
            height: 32px;
            width: 32px;
            padding: 9.6px var(--spacing-none);
        `
        : `
            border-radius: var(--radius-xxs);
            gap: var(--spacing-xxxs);
            height: 32px;
            padding: var(--spacing-xs) var(--spacing-sm);
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
            border-radius: var(--radius-xs);
            gap: var(--spacing-none);
            height: 40px;
            width: 40px;
            padding: var(--spacing-xs);
        `
        : `
            border-radius: var(--radius-xs);
            gap: var(--spacing-xxxs);
            height: 40px;
            padding: var(--spacing-xs) var(--spacing-md);
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
            gap: var(--spacing-none);
            height: 48px;
            width: 48px;
            padding: 14.4px;
        `
        : `
            border-radius: var(--radius-xs);
            gap: var(--spacing-xxxs);
            height: 48px;
            padding: var(--spacing-sm) var(--spacing-md);
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
          gap: var(--spacing-none);
          height: 52px;
          width: 52px;
          padding: 15.6px;
      `
      : `
          border-radius: var(--radius-xs);
          gap: var(--spacing-xxxs);
          height: 52px;
          padding: var(--spacing-sm) var(--spacing-lg);
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
