// React + Web3 Essentials
import React from 'react';

// External Packages
import styled from 'styled-components';
import { useClickAway } from 'react-use';
import { MdCheckCircle, MdError } from 'react-icons/md';

// Internal Components
import ModalHeader from 'primaries/SharedModalComponents/ModalHeader';
import ModalInput from 'primaries/SharedModalComponents/ModalInput';
import ModalConfirmButton from 'primaries/SharedModalComponents/ModalConfirmButton';
import { ModalInnerComponentType } from 'hooks/useModal';
import BlurBG from 'components/reusables/blurs/BlurBG';

const RemoveDelegateModalContent = ({ onConfirm: removeDelegate, onClose, toastObject }: ModalInnerComponentType) => {
  const delegateAddressInputRef = React.useRef<HTMLInputElement>();

  const [isLoading, setIsLoading] = React.useState(false);

  const handleClose = () => !isLoading && onClose();

  // to close the modal upon a click on backdrop
  const containerRef = React.useRef(null);
  useClickAway(containerRef, () => handleClose());

  const removeDelegateHandler = () => {
    const delegateAddress = delegateAddressInputRef?.current?.value;

    setIsLoading(true);

    removeDelegate(delegateAddress)
      .then(async (tx) => {
        console.log(tx);

        toastObject.showMessageToast({
          toastTitle: 'Delegate Removed',
          toastMessage: 'Delegate has been removed successfully',
          toastType: 'SUCCESS',
          getToastIcon: (size) => (
            <MdCheckCircle
              size={size}
              color="green"
            />
          ),
        });
        onClose();
      })
      .catch((err) => {
        console.log({ err });

        toastObject.showMessageToast({
          toastTitle: 'Transaction Failed',
          toastMessage: 'Removing a delegate failed.',
          toastType: 'ERROR',
          getToastIcon: (size) => (
            <MdError
              size={size}
              color="red"
            />
          ),
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <OuterModalContainer>
      <BlurBG
        blur={10}
        zIndex={-1}
      />
      <ModalContainer ref={containerRef}>
        <ModalHeader
          heading="Remove Delegate"
          subHeading="Remove an account who can send notifications on behalf of the channel"
        />
        <ModalInput
          ref={delegateAddressInputRef}
          title="Delegate Address"
        />
        <ModalConfirmButton
          text="Remove Delegate"
          onClick={removeDelegateHandler}
          isLoading={isLoading}
        />
      </ModalContainer>
    </OuterModalContainer>
  );
};

const OuterModalContainer = styled.div`
  position: absolute;
  top: 25vh;
  right: -59vw;
  transform: translate(-50%, -50%);
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  margin: 6% 1%;
`;

export default RemoveDelegateModalContent;
