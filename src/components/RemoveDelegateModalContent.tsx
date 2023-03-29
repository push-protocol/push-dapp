// React + Web3 Essentials
import React from 'react';

// External Packages
import styled, { useTheme } from 'styled-components';
import { useClickAway } from 'react-use';
import { MdCheckCircle, MdError } from 'react-icons/md';

// Internal Components
import ModalHeader from 'primaries/SharedModalComponents/ModalHeader';
import ModalInput from 'primaries/SharedModalComponents/ModalInput';
import ModalConfirmButton from 'primaries/SharedModalComponents/ModalConfirmButton';
//import { ModalInnerComponentType } from 'hooks/useModalBlur';
import { ShowLoaderToastType, ShowMessageToastType } from '../hooks/useToast';
import BlurBG from 'components/reusables/blurs/BlurBG';

// Internal Configs
import { device } from 'config/Globals';

type ModalInnerComponentType = {
  onConfirm?: (value?: any) => any;
  onClose?: () => void;
  toastObject?: {
    showLoaderToast: ShowLoaderToastType;
    showMessageToast: ShowMessageToastType;
  };
  InnerComponentProps?: any;
};

const RemoveDelegateModalContent = ({
  onConfirm: removeDelegate,
  onClose,
  toastObject,
  InnerComponentProps,
}: ModalInnerComponentType) => {
  const { isNotDropdown } = InnerComponentProps;
  const delegateAddressInputRef = React.useRef<HTMLInputElement>();

  const [isLoading, setIsLoading] = React.useState(false);

  const theme = useTheme();

  console.log('is not dropdown', isNotDropdown);

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
    <OuterModalContainer isNotDropdown={isNotDropdown}>
      <BlurBG
        blur={3}
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
  top: ${(props) => (props.isNotDropdown === true ? '0vh' : '25vh')};
  right: ${(props) => (props.isNotDropdown === true ? '-90vw' : '-59vw')};
  transform: translate(-50%, -50%);
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media(${device.tablet}){
    right: ${(props) => (props.isNotDropdown === true ? '-98vw' : '-60vw')};
    top: ${(props) => (props.isNotDropdown === true ? '-25vh' : '25vh')};
  }
  @media (${device.mobileL}) {
    right: ${(props) => (props.isNotDropdown === true ? '-98vw' : '-84vw')};
    top: ${(props) => (props.isNotDropdown === true ? '-30vh' : '5vh')};
  }
`;

const ModalContainer = styled.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  margin: 6% 1%;
  background: ${(props) => props.theme.modalContentBackground};
  border: 1px solid ${(props) => props.theme.modalBorderColor};
  border-radius: 1rem;
  padding: 1.2% 2%;
  @media (${device.laptop}) {
    width: 50vw;
  }
  @media (${device.mobileL}) {
    width: 95vw;
  }
`;

export default RemoveDelegateModalContent;
