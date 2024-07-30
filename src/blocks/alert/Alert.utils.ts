import { AlertVariant } from './Alert.types';
import { IconProps, InfoFilled, TickCircleFilled, WarningCircleFilled } from '../icons';
import { ThemeColors } from 'blocks/theme/Theme.types';
import { FC } from 'react';

export const alertVariants: Record<
  AlertVariant,
  { icon: FC<IconProps>; iconColor: ThemeColors; borderColor: ThemeColors; bgColor: ThemeColors; ctaColor: ThemeColors }
> = {
  success: {
    icon: TickCircleFilled,
    iconColor: 'components-alert-icon-success',
    borderColor: 'components-alert-stroke-success',
    bgColor: 'components-alert-background-success',
    ctaColor: 'components-alert-text-cta-success',
  },
  warning: {
    icon: WarningCircleFilled,
    iconColor: 'components-alert-icon-warning',
    borderColor: 'components-alert-stroke-warning',
    bgColor: 'components-alert-background-warning',
    ctaColor: 'components-alert-text-cta-warning',
  },
  info: {
    icon: InfoFilled,
    iconColor: 'components-alert-icon-info',
    borderColor: 'components-alert-stroke-info',
    bgColor: 'components-alert-background-info',
    ctaColor: 'components-alert-text-cta-info',
  },
  error: {
    icon: WarningCircleFilled,
    iconColor: 'components-alert-icon-error',
    borderColor: 'components-alert-stroke-error',
    bgColor: 'components-alert-background-error',
    ctaColor: 'components-alert-text-cta-error',
  },
};
