import { ItemVV2 } from 'components/reusables/SharedStylingV2';
import useModalBlur, { MODAL_POSITION } from 'hooks/useModalBlur';
import { useEffect } from 'react';
import styled from 'styled-components';
import UnlockProfile from './UnlockProfile';

export enum UNLOCK_PROFILE_TYPE {
  BOTTOM_BAR = 'bottombar',
  MODAL = 'modal',
}

interface IntroContainerProps {
  type?: UNLOCK_PROFILE_TYPE;
  showConnectModal?: boolean;
  description?: string;
  handleClose?: () => void;
  closeIcon?: boolean;
}

const DEFAULT_PROPS = {
  type: UNLOCK_PROFILE_TYPE.MODAL,
};

const UnlockProfileWrapper = ({
  type = DEFAULT_PROPS.type,
  showConnectModal,
  description,
  handleClose,
  closeIcon,
}: IntroContainerProps) => {
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

  if (type === UNLOCK_PROFILE_TYPE.MODAL) {
    return (
      <ProfileModalComponent
        InnerComponent={UnlockProfile}
        InnerComponentProps={{
          type,
          description,
          closeIcon,
        }}
        closeIcon={closeIcon}
        modalRadius="24px"
        modalBorder={false}
        modalPosition={MODAL_POSITION.ON_PARENT}
      />
    );
  } else {
    return (
      <Container className={type}>
        <UnlockProfile
          InnerComponentProps={{ type, description, closeIcon }}
          onClose={onClose}
        />
      </Container>
    );
  }
};

export default UnlockProfileWrapper;

const Container = styled(ItemVV2)`
  flex: initial;
  border-radius: 24px;
  padding: 24px;
  align-items: center;
  // overflow: hidden;
  backdrop-filter: blur(8px);

  &.bottombar {
    flex: initial;
    position: absolute;
    left: 0;
    right: 0;
    width: auto;
    bottom: 0;
    flex-direction: row;
    // overflow: hidden;
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
