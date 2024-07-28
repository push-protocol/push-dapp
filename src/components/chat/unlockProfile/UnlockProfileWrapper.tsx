import { FC } from 'react';
import styled from 'styled-components';
import { ItemVV2 } from 'components/reusables/SharedStylingV2';
import UnlockProfile from './UnlockProfile';
import { Modal } from 'blocks';

export enum UNLOCK_PROFILE_TYPE {
  BOTTOM_BAR = 'bottombar',
  MODAL = 'modal',
}

interface IntroContainerProps {
  type?: UNLOCK_PROFILE_TYPE;
  showConnectModal?: boolean;
  description?: string;
  onClose: () => void;
}

const DEFAULT_PROPS = {
  type: UNLOCK_PROFILE_TYPE.MODAL,
};

const UnlockProfileWrapper: FC<IntroContainerProps> = ({
  type = DEFAULT_PROPS.type,
  showConnectModal = false,
  description,
  onClose,
}) => {
  return (
    <>
      {type === UNLOCK_PROFILE_TYPE.MODAL ? (
        <Modal
          isOpen={showConnectModal}
          onClose={onClose}
          size="small"
          closeOnOverlayClick
          cancelButtonProps={null}
          acceptButtonProps={null}
        >
          <UnlockProfile
            InnerComponentProps={{
              type,
              description,
            }}
            onClose={onClose}
          />
        </Modal>
      ) : (
        <Container className={type}>
          <UnlockProfile
            InnerComponentProps={{
              type,
              description,
            }}
            onClose={onClose}
          />
        </Container>
      )}
    </>
  );
};

export default UnlockProfileWrapper;

const Container = styled(ItemVV2)`
  flex: initial;
  border-radius: 24px;
  padding: 24px;
  align-items: center;
  backdrop-filter: blur(8px);

  &.bottombar {
    flex: initial;
    position: absolute;
    left: 0;
    right: 0;
    width: auto;
    bottom: 0;
    flex-direction: row;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: ${(props) => props.theme.chat.modalBg};
    opacity: 0.75;
  }
`;
