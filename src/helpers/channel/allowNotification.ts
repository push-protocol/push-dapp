import { NotificationPermissionStatus } from './types';
import { browserFunction } from 'firebase';

export const handleBrowserNotification = (account: string, readOnlyWallet: string, onSuccess?: () => void) => {
  if (!('serviceWorker' in navigator)) return;
  if (!account || account == readOnlyWallet) return;
  const status = checkPermission();
  if (status === 'notValid') alert('This browser does not support desktop notification');
  else if (status === 'pending') {
    Notification.requestPermission().then(async (permission) => {
      if (permission === 'granted') await browserFunction(account);
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
