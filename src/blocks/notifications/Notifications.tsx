import { FC, useState } from 'react';
import * as Toast from '@radix-ui/react-toast';
import styled from 'styled-components';
import { Cross } from '../icons';
import { textVariants } from 'blocks/text';

export type NotificationProps = {
  isOpen?: boolean;
  icon: any;
  title: string;
  description: string;
  onClick?: () => void;
  onClose?: () => void;
};

const ToastRoot = styled(Toast.Root)`
  position: relative;

  background-color: var(--components-in-app-notification-background-default);
  border-radius: var(--radius-xxs);
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ToastViewPort = styled(Toast.Viewport)`
  position: fixed;
  bottom: 0;
  right: 0;
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
  // isOpen,
  // onClose,
  title,
  description,
  icon,
}) => {
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };

  const iconSize = 16;
  return (
    <Toast.Provider swipeDirection="right">
      {/* <button
        className="Button large violet"
        onClick={() => {
          setOpen(true);
        }}
      >
        Add to calendar
      </button> */}

      <ToastRoot
        open={open}
        onOpenChange={setOpen}
      >
        <ContentContainer>
          <IconContainer>{icon}</IconContainer>

          <CloseButton onClick={onClose}>
            <Cross size={iconSize} />
          </CloseButton>

          <TextContainer>
            <span className="title">{title}</span>
            <span className="description">{description}</span>
          </TextContainer>
        </ContentContainer>
      </ToastRoot>
      <ToastViewPort className="ToastViewport" />
    </Toast.Provider>
  );
};

export { Notifications };
