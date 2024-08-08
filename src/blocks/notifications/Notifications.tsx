import { FC, useEffect } from 'react';
import styled from 'styled-components';
import { Cross } from '../icons';
import { textVariants } from 'blocks/text';
import { NotificationProps } from './Notifications.types';
import { Toaster, toast } from 'sonner';
import ReactDOM from 'react-dom/client';

const NotificationContainer = styled.div`
  position: relative;
  background-color: var(--components-in-app-notification-background-default);
  border-radius: var(--radius-xxs);
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: row;
  align-items: stretch;
  max-width: 100%;
  cursor: pointer;
  box-sizing: border-box;
  border: var(--border-sm) solid var(--components-in-app-notification-stroke-bg);
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: var(--spacing-sm);
  flex: 1;
  box-sizing: border-box;

  .title {
    color: var(--components-in-app-notification-text-default);
    font-family: var(--font-family);
    font-size: ${textVariants['h5-semibold'].fontSize};
    font-style: ${textVariants['h5-semibold'].fontStyle};
    font-weight: ${textVariants['h5-semibold'].fontWeight};
    line-height: ${textVariants['h5-semibold'].lineHeight};
  }

  .description {
    color: var(--components-in-app-notification-text-secondary);
    font-family: var(--font-family);
    font-size: ${textVariants['bes-regular'].fontSize};
    font-style: ${textVariants['bes-regular'].fontStyle};
    font-weight: ${textVariants['bes-regular'].fontWeight};
    line-height: ${textVariants['bes-regular'].lineHeight};
  }
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

const Notifications: FC<NotificationProps> = ({
  isOpen,
  onClose,
  title,
  description,
  icon,
  onClick,
  position = 'bottom-right',
}) => {
  const handleNotificationClick = () => {
    if (onClick) onClick();
    handleNotificationClose();
  };

  const handleNotificationClose = () => {
    if (onClose) onClose();
    toast.dismiss();
  };

  useEffect(() => {
    if (isOpen) {
      toast.custom(() => (
        <NotificationContainer onClick={handleNotificationClick}>
          <IconContainer>{icon}</IconContainer>
          <CloseButton
            onClick={(e) => {
              e.stopPropagation();
              handleNotificationClose();
            }}
          >
            <Cross size={16} />
          </CloseButton>
          <TextContainer>
            <span className="title">{title}</span>
            <span className="description">{description}</span>
          </TextContainer>
        </NotificationContainer>
      ));
    }
  }, [isOpen]);

  return (
    <Toaster
      style={{ width: '397px', height: '78px' }}
      visibleToasts={1}
      offset={15}
      duration={Infinity}
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
    renderNotification({ ...config, isOpen: true });
  },
  hide: () => {
    toast.dismiss();
  },
};

export { Notifications, notifications };
