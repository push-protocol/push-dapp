import { FC } from 'react';
import ReactDOM from 'react-dom/client';
import styled from 'styled-components';
import { getTextVariantStyles } from '../Blocks.utils';
import { ThemeColors } from '../theme/Theme.types';
import { Modal, ModalProps } from './Modal';
import { AlertModalTypes, ModalSize, ShowAlertModalConfig } from './Modal.types';
import { alertModalIcon } from './Modal.constants';

export type AlertModalProps = {
  description: string;
  title: string;
  type: AlertModalTypes;
} & Omit<ModalProps, 'children'>;

const Container = styled.div<{ iconColor: ThemeColors; size: ModalSize }>`
  display: flex;
  padding: var(--spacing-none);
  align-items: flex-start;
  gap: var(--spacing-xxxs);
  margin-top: ${({ size }) => (size === 'small' ? '-24px' : '-28px')};

  [role='img'] {
    color: var(--${({ iconColor }) => iconColor});
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-xxxs);
  flex: 1 0 0;
`;

const Title = styled.p<{ size: ModalSize }>`
  ${({ size }) => {
    const variant = size === 'small' ? 'h5-semibold' : size === 'medium' ? 'h4-semibold' : 'h3-semibold';
    return getTextVariantStyles(variant, 'components-modal-text-default');
  }}
`;

const Description = styled.div<{ size: ModalSize }>`
  ${({ size }) => {
    const variant = size === 'small' ? 'bes-regular' : size === 'medium' ? 'bs-regular' : 'bm-regular';
    return getTextVariantStyles(variant, 'components-modal-text-secondary');
  }}
`;

const AlertModal: FC<AlertModalProps> = ({ description, title, type, size = 'small', ...restProps }) => {
  const Icon = alertModalIcon[type].icon;
  return (
    <Modal
      size={size}
      buttonAlignment="end"
      {...restProps}
    >
      <Container
        iconColor={alertModalIcon[type].color}
        size={size}
      >
        <Icon size={24} />
        <TextContainer>
          <Title size={size}>{title}</Title>
          <Description size={size}>{description}</Description>
        </TextContainer>
      </Container>
    </Modal>
  );
};

const renderModal = (props: AlertModalProps) => {
  const div = document.createElement('div');
  document.body.appendChild(div);

  const root = ReactDOM.createRoot(div);

  const handleClose = () => {
    root.unmount();
    document.body.removeChild(div);
    if (props.onClose) props.onClose();
  };

  root.render(
    <AlertModal
      {...props}
      onClose={handleClose}
    />
  );
};

const showModal = (type: AlertModalTypes, config: ShowAlertModalConfig) => {
  renderModal({
    ...config,
    isOpen: true,
    type,
    onClose: () => {},
  });
};

const modal = {
  info: (config: ShowAlertModalConfig) => showModal('info', config),
  success: (config: ShowAlertModalConfig) => showModal('success', config),
  error: (config: ShowAlertModalConfig) => showModal('error', config),
  warning: (config: ShowAlertModalConfig) => showModal('warning', config),
};

export { modal };
