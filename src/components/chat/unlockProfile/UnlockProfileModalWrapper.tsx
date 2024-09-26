import { FC, useEffect } from 'react';

import useModalBlur, { MODAL_POSITION } from 'hooks/useModalBlur';

import { UNLOCK_PROFILE_TYPE } from './UnlockProfileWrapper';
import UnlockProfile from './UnlockProfile';


type UnlockProfileModalWrapperProps = {
  type?: UNLOCK_PROFILE_TYPE;
  showConnectModal?: boolean;
  description?: string;
}

const UnlockProfileModalWrapper: FC<UnlockProfileModalWrapperProps> = ({
  type,
  showConnectModal,
  description
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
  );
};

export { UnlockProfileModalWrapper };