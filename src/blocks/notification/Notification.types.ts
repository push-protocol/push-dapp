import { ReactNode } from 'react';

export type NotificationProps = {
  /* Custom React component to be passed as the image. */
  overlay: ReactNode;
  /* Optional onClick event for the notification */
  onClick?: () => void;
  /* Position of the notification */
  position?: 'bottom-right' | 'bottom-left';
  /* Optional duration of the notification component */
  duration?: number;
};
