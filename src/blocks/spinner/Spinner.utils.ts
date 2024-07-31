import { SpinnerSize, SpinnerVariant } from './Spinner.types';

export const getSpinnerSize = (size: SpinnerSize) => {
  switch (size) {
    case 'small':
      return '16px';
    case 'medium':
      return '24px';
    case 'large':
      return '32px';
    default:
      return '48px';
  }
};
export const getSpinnerStrokeWidth = (size: SpinnerSize) => {
  switch (size) {
    case 'small':
      return 'border-sm';
    case 'medium':
      return 'border-xmd';
    case 'large':
      return 'border-md';
    case 'extraLarge':
      return 'border-lg';
    default:
      return 'border-xs';
  }
};
