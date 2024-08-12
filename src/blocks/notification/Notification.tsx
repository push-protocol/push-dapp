import { FC } from 'react';
import styled from 'styled-components';
import { Cross } from '../icons';
import { NotificationProps } from './Notification.types';
import { toast } from 'sonner';
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

const Notification: FC<NotificationProps> = ({ onClose, title, description, image, onClick }) => {
  const handleNotificationClick = () => onClick?.();

  const handleNotificationClose = () => {
    onClose?.();
    notification.hide();
  };

  return (
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
  );
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
