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
      return '1px';
    case 'medium':
      return '1.5px';
    case 'large':
      return '2px';
    case 'extraLarge':
      return '3px';
    default:
      return '1px';
  }
};
