import { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { Cross } from 'blocks';
import { getTextVariantStyles } from 'blocks/Blocks.utils';
import { Box } from 'blocks';
import { notification } from 'blocks';

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

type NotificationOverlayProps = {
  image: ReactNode;
  /* Title of the notification */
  title: string;
  /* Description of the notification */
  description: string;
  /* Optional onClose action for the notification */
  onClose?: () => void;
};

const NotificationOverlay: FC<NotificationOverlayProps> = ({ onClose, title, description, image }) => {
  const handleNotificationClose = () => {
    onClose?.();
    notification.hide();
  };
  return (
    <NotificationContainer>
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

export { NotificationOverlay };
