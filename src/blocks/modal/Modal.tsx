import { FC, ReactNode } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import styled from 'styled-components';
import { Button, ButtonProps } from '../button';
import { Back, Cross } from '../icons';
import { ModalSize } from './Modal.types';

type ButtonAlignment = 'end' | 'center';

export type ModalProps = {
  acceptButtonProps?: ButtonProps | null;
  buttonAlignment?: ButtonAlignment;
  cancelButtonProps?: ButtonProps | null;
  children: ReactNode;
  closeOnOverlayClick?: boolean;
  isOpen: boolean;
  onBack?: () => void;
  onClose: () => void;
  size?: ModalSize;
};

const Overlay = styled(Dialog.Overlay)`
  background: var(--surface-glass-bold);
  backdrop-filter: blur(calc(var(--blur-lg) / 2));
  position: fixed;
  inset: 0;
  z-index: 1000;
`;

const ContentContainer = styled(Dialog.Content)<{ size: ModalSize }>`
  display: flex;
  border-radius: var(--radius-sm);
  border: var(--border-sm) solid var(--stroke-secondary);
  background: var(--components-modal-background-default);
  padding: var(--spacing-${({ size }) => (size === 'small' ? 'xs' : 'sm')});
  flex-direction: column;
  align-items: flex-start;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 300px;
  width: ${({ size }) => (size === 'small' ? '360px' : size === 'medium' ? '500px' : '700px')};
  gap: var(--spacing-sm);
  z-index: 1100;
`;

const ContentChildren = styled.div<{ size: ModalSize }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
  width: 100%;
  padding-top: var(--spacing-${({ size }) => (size === 'small' ? 'xxs' : 'xs')});
`;

const HeaderContainer = styled.div`
  position: relative;
  width: 100%;
`;

const BackButton = styled.div`
  cursor: pointer;
  color: var(--components-modal-icon-default);
  padding: var(--spacing-none);
  position: absolute;
  left: 0;
  top: 0;
`;

const CloseButton = styled.div`
  background-color: var(--surface-transparent);
  cursor: pointer;
  color: var(--components-modal-icon-default);
  padding: var(--spacing-none);
  position: absolute;
  right: 0;
  top: 0;
`;

const ButtonsContainer = styled.div<{ buttonAlignment: ButtonAlignment }>`
  display: flex;
  padding: var(--spacing-xxs);
  justify-content: center;
  align-items: center;
  gap: var(--spacing-xs);
  align-self: ${({ buttonAlignment }) => (buttonAlignment === 'end' ? 'flex-end' : 'center')};
`;

const Modal: FC<ModalProps> = ({
  acceptButtonProps = { children: 'Accept' },
  closeOnOverlayClick = false,
  buttonAlignment = 'center',
  cancelButtonProps = { children: 'Cancel', onClick: () => onClose() },
  children,
  isOpen,
  onBack,
  onClose,
  size = 'medium',
}) => {
  const handleOverlayClick = () => {
    if (closeOnOverlayClick) {
      onClose();
    }
  };

  const iconSize = size === 'small' ? 16 : 24;
  return (
    <Dialog.Root
      open={isOpen}
      onOpenChange={onClose}
    >
      <Dialog.Portal>
        <Overlay onClick={handleOverlayClick} />
        <ContentContainer
          size={size}
          onInteractOutside={(e) => e.preventDefault()}
        >
          <HeaderContainer>
            {onBack && (
              <BackButton onClick={onBack}>
                <Back size={iconSize} />
              </BackButton>
            )}
            <CloseButton onClick={onClose}>
              <Cross size={iconSize} />
            </CloseButton>
          </HeaderContainer>
          <ContentChildren size={size}>{children}</ContentChildren>
          <ButtonsContainer buttonAlignment={buttonAlignment}>
            {cancelButtonProps && (
              <Button
                aria-label="Cancel"
                size="small"
                variant="outline"
                onClick={cancelButtonProps?.onClick || onClose}
                {...cancelButtonProps}
              >
                {cancelButtonProps?.children}
              </Button>
            )}
            {acceptButtonProps && (
              <Button
                aria-label="Accept"
                size="small"
                variant="primary"
                {...acceptButtonProps}
              >
                {acceptButtonProps?.children}
              </Button>
            )}
          </ButtonsContainer>
        </ContentContainer>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export { Modal };
