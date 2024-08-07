import ReactDOM from 'react-dom/client';
import { Notifications } from './Notifications';
import { NotificationProps } from './Notifications.types';

const renderNotification = (props: NotificationProps) => {
  const div = document.createElement('div');
  document.body.appendChild(div);

  const root = ReactDOM.createRoot(div);

  const handleClose = () => {
    root.unmount();
    document.body.removeChild(div);
    if (props.onClose) props.onClose();
  };

  root.render(
    <Notifications
      {...props}
      onClose={handleClose}
    />
  );
};

const notifications = {
  show: (config: Omit<NotificationProps, 'isOpen'>) => {
    const dismissed = localStorage.getItem(`notification_id`) === 'dismissed';
    if (!dismissed) {
      renderNotification({ ...config, isOpen: true });
    }
  },
  hide: (onClose?: () => void) => {
    const event = new CustomEvent('notification-hide', { detail: onClose });
    window.dispatchEvent(event);
  },
};

export { notifications };
