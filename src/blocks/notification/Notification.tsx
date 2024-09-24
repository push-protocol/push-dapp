import { FC } from 'react';
import styled from 'styled-components';
import { NotificationProps } from './Notification.types';
import { toast } from 'sonner';

const Notification: FC<NotificationProps> = ({ overlay, onClick }) => {
  const handleNotificationClick = () => onClick?.();

  return <div onClick={handleNotificationClick}>{overlay}</div>;
};

// Store the toastId(s) in an array to manage multiple notifications
const toastIds: Array<string | number> = [];

// Export the notification object with show and hide methods
const notification = {
  show: (config: NotificationProps) => {
    const toastId = toast.custom(() => <Notification {...config} />, {
      duration: config.duration || Infinity,
      position: config.position || 'bottom-right',
    });
    toastIds.push(toastId);
  },
  hide: () => {
    if (toastIds.length > 0) {
      const toastId = toastIds.pop();
      toast.dismiss(toastId);
    }
  },
};

export { notification };
