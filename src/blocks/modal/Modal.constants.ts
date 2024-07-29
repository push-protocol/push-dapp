import { FC } from 'react';
import { IconProps, InfoFilled, TickCircleFilled, WarningCircleFilled } from '../icons';
import { AlertModalTypes } from './Modal.types';
import { ThemeColors } from 'blocks/theme/Theme.types';

export const alertModalIcon: Record<AlertModalTypes, { icon: FC<IconProps>; color: ThemeColors }> = {
  error: {
    icon: InfoFilled,
    color: 'components-modal-icon-error',
  },
  info: {
    icon: InfoFilled,
    color: 'components-modal-icon-info',
  },
  success: {
    icon: TickCircleFilled,
    color: 'components-modal-icon-success',
  },
  warning: {
    icon: WarningCircleFilled,
    color: 'components-modal-icon-warning',
  },
};
