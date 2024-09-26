import { FC, useEffect } from 'react';
import styled from 'styled-components';

import { Modal } from 'blocks';

import { MODAL_POSITION_TYPE } from 'common';
import { ItemVV2 } from 'components/reusables/SharedStylingV2';

import useModalBlur, { MODAL_POSITION } from 'hooks/useModalBlur';

import UnlockProfile from './UnlockProfile';

export enum UNLOCK_PROFILE_TYPE {
  BOTTOM_BAR = 'bottombar',
  MODAL = 'modal',
}

interface IntroContainerProps {
  type?: UNLOCK_PROFILE_TYPE;
  showConnectModal?: boolean;
  description?: string;
  onClose: () => void;
  position?: MODAL_POSITION_TYPE; //Defaults to ON_ROOT
}

const DEFAULT_PROPS = {
  type: UNLOCK_PROFILE_TYPE.MODAL,
};

const UnlockProfileWrapper: FC<IntroContainerProps> = ({
  type = DEFAULT_PROPS.type,
  showConnectModal = false,
  description,
  onClose,
  position = 'ON_ROOT',
}) => {
  const {
    isModalOpen: isProfileModalOpen,
    showModal: showProfileModal,
    ModalComponent: ProfileModalComponent,
  } = useModalBlur();

  useEffect(() => {
    if (type === UNLOCK_PROFILE_TYPE.MODAL && showConnectModal) {
      showProfileModal();
    }
  }, [type, showConnectModal]);


  return (
    <>
      {type === UNLOCK_PROFILE_TYPE.BOTTOM_BAR && (
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

      {type === UNLOCK_PROFILE_TYPE.MODAL && position === 'ON_ROOT' && (
        <Modal
          isOpen={showConnectModal}
          onClose={onClose}
          size="small"
          acceptButtonProps={null}
          cancelButtonProps={null}
        >
          <UnlockProfile
            InnerComponentProps={{
              type,
              description,
            }}
            onClose={onClose}
          />
        </Modal>
      )}

      {/* This is for displaying the Chat profile */}
      {type === UNLOCK_PROFILE_TYPE.MODAL && position === 'ON_PARENT' && (
        <ProfileModalComponent
          InnerComponent={UnlockProfile}
          InnerComponentProps={{
            type,
            description,
          }}
          modalRadius="24px"
          modalBorder={false}
          modalPosition={MODAL_POSITION.ON_PARENT}
        />
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
