import { FC, useEffect } from 'react';
import styled from 'styled-components';
import { Cross } from '../icons';
import { NotificationProps } from './Notification.types';
import { Toaster, toast } from 'sonner';
import ReactDOM from 'react-dom/client';
import { getTextVariantStyles } from 'blocks/Blocks.utils';

const NotificationContainer = styled.div`
  position: relative;
  background-color: var(--components-in-app-notification-background-default);
  border-radius: var(--radius-xxs);
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: row;
  align-items: stretch;
  max-height: 111px;
  min-width: 397px;
  max-width: 100%;
  cursor: pointer;
  box-sizing: border-box;
  border: var(--border-sm) solid var(--components-in-app-notification-stroke-bg);
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--spacing-sm);
  flex: 1;
  box-sizing: border-box;
`;

const NotificationTitle = styled.span`
  ${() => getTextVariantStyles('h5-semibold', 'components-in-app-notification-text-default')}
`;

const NotificationDescription = styled.span`
  ${() => getTextVariantStyles('bes-regular', 'components-in-app-notification-text-secondary')}

  /* number of lines to show */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const IconContainer = styled.div`
  padding: var(--spacing-sm) var(--spacing-xs);
  border-radius: var(--radius-xxs) var(--radius-none) var(--radius-none) var(--radius-xxs);
  background: radial-gradient(79.55% 79.55% at 50% 50%, #344efd 0%, #171717 100%);
`;

const CloseButton = styled.div`
  background-color: var(--surface-transparent);
  cursor: pointer;
  color: var(--components-in-app-notification-icon-default);
  padding: var(--spacing-none);
  position: absolute;
  right: var(--spacing-xxs);
  top: var(--spacing-xxs);
`;

// generate custom id for each notification
const notificationId = `notification-${Date.now()}-${Math.random()}`;

const Notification: FC<NotificationProps> = ({
  visible,
  onClose,
  title,
  description,
  image,
  onClick,
  duration = Infinity,
  position = 'bottom-right',
}) => {
  const handleNotificationClick = () => onClick?.();

  const handleNotificationClose = () => {
    onClose?.();
    toast.dismiss(notificationId);
  };

  useEffect(() => {
    if (visible) {
      toast.custom(() => (
        <NotificationContainer onClick={handleNotificationClick}>
          <IconContainer>{image}</IconContainer>
          <CloseButton
            onClick={(e) => {
              e.stopPropagation();
              handleNotificationClose();
            }}
          >
            <Cross size={16} />
          </CloseButton>
          <TextContainer>
            <NotificationTitle>{title}</NotificationTitle>
            <NotificationDescription>{description}</NotificationDescription>
          </TextContainer>
        </NotificationContainer>
      ));
    }
  }, [visible]);

  return (
    <Toaster
      style={{ minWidth: '397px', height: '111px' }}
      expand
      offset={15}
      duration={duration || Infinity}
      position={position}
    />
  );
};

const renderNotification = (props: NotificationProps) => {
  const div = document.createElement('div');
  document.body.appendChild(div);

  const root = ReactDOM.createRoot(div);

  const handleClose = () => {
    root.unmount();
    if (div.parentNode) {
      div.parentNode.removeChild(div); // Ensure the div is part of the DOM before removing it
    }
    if (props.onClose) props.onClose();
  };

  root.render(
    <Notification
      {...props}
      onClose={handleClose}
    />
  );
};

const notification = {
  show: (config: Omit<NotificationProps, 'visible'>) => {
    renderNotification({ ...config, visible: true });
  },
  hide: () => {
    if (notificationId) {
      toast.dismiss(notificationId);
    } else {
      toast.dismiss();
    }
  },
};

export { notification };
