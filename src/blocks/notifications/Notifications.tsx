import { FC, useEffect, useState } from 'react';
import * as Toast from '@radix-ui/react-toast';
import styled from 'styled-components';
import { Cross } from '../icons';
import { textVariants } from 'blocks/text';
import { NotificationProps } from './Notifications.types';

const ToastRoot = styled(Toast.Root)`
  position: relative;
  background-color: var(--components-in-app-notification-background-default);
  border-radius: var(--radius-xxs);
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ToastViewPort = styled(Toast.Viewport)<{ position: 'bottom-right' | 'bottom-left' }>`
  position: fixed;
  bottom: 0;
  ${(props) => (props.position === 'bottom-right' ? 'right: 0;' : 'left: 0;')}
  display: flex;
  flex-direction: column;
  padding: var(--spacing-sm);
  gap: 10px;
  width: 397px;
  max-width: 100vw;
  margin: 0;
  list-style: none;
  z-index: 2147483647;
  outline: none;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: var(--spacing-sm);

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
  padding: var(--spacing-sm, 16px) var(--spacing-xs, 12px);
  border-radius: var(--radius-xxs) var(--radius-none) var(--radius-none) var(--radius-xxs);
  background: radial-gradient(79.55% 79.55% at 50% 50%, #344efd 0%, #171717 100%);
`;

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
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
  position = 'bottom-right',
  onClick,
}) => {
  const [open, setOpen] = useState(isOpen);

  useEffect(() => {
    const storedState = localStorage.getItem(`notification_id`);
    if (storedState !== 'dismissed') {
      setOpen(isOpen);
    } else {
      setOpen(false);
    }
  }, [isOpen]);

  const handleClose = (e?: React.MouseEvent) => {
    if (e !== undefined) e.stopPropagation();

    localStorage.setItem(`notification_id`, 'dismissed');
    setOpen(false);
    if (onClose) onClose();
  };

  const handleAction = () => {
    onClick();
    handleClose();
  };

  return (
    <Toast.Provider
      swipeDirection="right"
      duration={Infinity}
    >
      <ToastRoot
        open={open}
        onOpenChange={setOpen}
        onClick={handleAction}
      >
        <ContentContainer>
          <IconContainer>{icon}</IconContainer>

          <CloseButton onClick={handleClose}>
            <Cross size={16} />
          </CloseButton>

          <TextContainer>
            <span className="title">{title}</span>
            <span className="description">{description}</span>
          </TextContainer>
        </ContentContainer>
      </ToastRoot>
      <ToastViewPort
        className="ToastViewport"
        position={position}
      />
    </Toast.Provider>
  );
};

export { Notifications };
