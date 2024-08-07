import { AlertModalProps } from './AlertModal';

export type AlertModalTypes = 'error' | 'info' | 'success' | 'warning';

export type ShowAlertModalConfig = Omit<AlertModalProps, 'type' | 'isOpen' | 'onClose'>;

export type ModalSize = 'small' | 'medium' | 'large';
