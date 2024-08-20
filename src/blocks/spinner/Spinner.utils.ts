import { SpinnerSize, SpinnerVariant } from './Spinner.types';

export const getSpinnerSize = (size: SpinnerSize) => {
  switch (size) {
    case 'small':
      return 16;
    case 'medium':
      return 24;
    case 'large':
      return 32;
    default:
      return 48;
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
