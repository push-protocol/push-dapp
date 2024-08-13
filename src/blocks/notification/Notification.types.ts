import { ReactNode } from 'react';

export type NotificationProps = {
  /* Svg React component to be passed as the image. */
  image: ReactNode;
  /* Title of the notification */
  title: string;
  /* Description of the notification */
  description: string;
  /* Optional onClick event for the notification */
  onClick?: () => void;
  /* Optional onClose action for the notification */
  onClose?: () => void;
  /* Position of the notification */
  position?: 'bottom-right' | 'bottom-left';
  /* Optional duration of the notification component */
  duration?: number;
};
