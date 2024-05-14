import { NotificationPermissionStatus } from './types';

export const handleBrowserNotification = (onSuccess?: () => void) => {
  const status = checkPermission();
  if (status === 'notValid') alert('This browser does not support desktop notification');
  else if (status === 'pending') {
    Notification.requestPermission().then(() => {
      onSuccess ? onSuccess() : null;
    });
  }
};

export const checkPermission = (): NotificationPermissionStatus => {
  if (!('Notification' in window)) {
    return 'notValid';
  } else if (Notification.permission === 'granted') {
    return 'granted';
  } else if (Notification.permission !== 'denied') {
    return 'pending';
  }
  return 'denied';
};
