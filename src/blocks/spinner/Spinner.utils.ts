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
export const getSpinnerVariant = (variant: SpinnerVariant) => {
  switch (variant) {
    case 'primary':
      return 'primary';
    case 'secondary':
      return 'secondary';
    case 'tertiary':
      return 'tertiary';
    case 'outline':
      return 'outline';
    case 'danger':
      return 'danger';
    case 'dangerSecondary':
      return 'danger-secondary';
    default:
      return 'default';
  }
};
