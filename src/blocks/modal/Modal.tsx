import { FC, ReactNode } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import styled from 'styled-components';
import { Button, ButtonProps } from '../button';
import { Cross } from '../icons';

type ButtonAlignment = 'start' | 'center';

export type ModalProps = {
  acceptButtonProps?: ButtonProps;
  buttonAlignment?: ButtonAlignment;
  cancelButtonProps?: ButtonProps | null;
  children: ReactNode;
  closeOnOverlayClick?: boolean;
  isOpen: boolean;
  onClose: () => void;
  width?: string;
};

const Overlay = styled(Dialog.Overlay)`
  background: var(--surface-glass-bold, rgba(255, 255, 255, 0.5));
  backdrop-filter: blur(calc(var(--blur-lg) / 2));
  position: fixed;
  inset: 0;
  z-index: 1000;
`;

const ContentContainer = styled(Dialog.Content)<{ width: string }>`
  display: flex;
  border-radius: var(--radius-sm);
  border: var(--border-sm) solid var(--stroke-secondary);
  background: var(--components-modal-background-default);
  padding: var(--spacing-xs, 12px);
  flex-direction: column;
  align-items: flex-start;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 300px;
  width: ${({ width }) => width};
  gap: var(--spacing-xs);
  z-index: 1100;
`;

const ContentChildren = styled.div`
  display: flex;
  padding: var(--spacing-xxs) var(--spacing-xxs) var(--spacing-none) var(--spacing-xxs);
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
`;

const CloseButton = styled(Dialog.Close)`
  position: absolute;
  right: var(--spacing-xs);
  cursor: pointer;
  color: var(--components-modal-icon-default);
`;

const ButtonsContainer = styled.div<{ buttonAlignment: ButtonAlignment }>`
  display: flex;
  padding: var(--spacing-xxs);
  justify-content: center;
  align-items: center;
  gap: var(--spacing-xxs);
  align-self: ${({ buttonAlignment }) => (buttonAlignment === 'start' ? 'baseline' : 'center')};
`;

const Modal: FC<ModalProps> = ({
  acceptButtonProps,
  closeOnOverlayClick = false,
  buttonAlignment = 'center',
  cancelButtonProps = { children: 'Cancel', onClick: () => onClose() },
  children,
  isOpen,
  onClose,
  width = 'auto',
}) => {
  const handleOverlayClick = () => {
    if (closeOnOverlayClick) {
      onClose();
    }
  };

  return (
    <Dialog.Root
      open={isOpen}
      onOpenChange={onClose}
    >
      <Dialog.Portal>
        <Overlay onClick={handleOverlayClick} />
        <ContentContainer
          width={width}
          onInteractOutside={(e) => e.preventDefault()}
        >
          <CloseButton asChild>
            <Cross size={16} />
          </CloseButton>
          <ContentChildren>{children}</ContentChildren>
          <ButtonsContainer buttonAlignment={buttonAlignment}>
            {cancelButtonProps && (
              <Button
                size="small"
                variant="outline"
                onClick={cancelButtonProps?.onClick || onClose}
                {...cancelButtonProps}
              >
                {cancelButtonProps?.children}
              </Button>
            )}
            <Button
              size="small"
              variant="primary"
              {...acceptButtonProps}
            >
              {acceptButtonProps?.children || 'Accept'}
            </Button>
          </ButtonsContainer>
        </ContentContainer>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export { Modal };
