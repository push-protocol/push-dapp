import { NOTIF_PERMISSION_STATUS } from './types';

export const handleBrowserNotification = (onSuccess?: () => void) => {
  if (!('Notification' in window)) {
    alert('This browser does not support desktop notification');
  } else if (checkPermission() === NOTIF_PERMISSION_STATUS.PENDING) {
    Notification.requestPermission().then(() => {
      onSuccess ? onSuccess() : null;
    });
  }
};

export const checkPermission = () => {
  if (!('Notification' in window)) {
    alert('This browser does not support desktop notification');
  } else if (Notification.permission === 'granted') {
    return NOTIF_PERMISSION_STATUS.GRANTED;
  } else if (Notification.permission !== 'denied') {
    return NOTIF_PERMISSION_STATUS.PENDING;
  }
  return NOTIF_PERMISSION_STATUS.DENIED;
};
