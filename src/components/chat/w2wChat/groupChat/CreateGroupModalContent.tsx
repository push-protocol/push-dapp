// React + Web3 Essentials
import React from 'react';

// External Packages
import styled from 'styled-components';
import { useClickAway } from 'react-use';

// Internal Components
import ModalHeader from 'primaries/SharedModalComponents/ModalHeader';
import ModalInput from 'primaries/SharedModalComponents/ModalInput';
import ModalConfirmButton from 'primaries/SharedModalComponents/ModalConfirmButton';
import { ModalInnerComponentType } from 'hooks/useModalBlur';

export const CreateGroupModalContent = ({ onClose, onConfirm: createGroup, toastObject }: ModalInnerComponentType) => {
  const subgraphIdInputRef = React.useRef<HTMLInputElement>();
  const pollTimeInputRef = React.useRef<HTMLInputElement>();

  const handleClose = () => onClose();

  // to close the modal upon a click on backdrop
  const containerRef = React.useRef(null);
  useClickAway(containerRef, () => handleClose());

  return (
    <ModalContainer ref={containerRef}>
      <ModalHeader
        heading="Create Group"
        subHeading=""
      />
      <ModalInput
        ref={subgraphIdInputRef}
        title="Group Name"
      />
      <ModalInput
        ref={pollTimeInputRef}
        title="Group Description"
      />
      <ModalInput
        ref={pollTimeInputRef}
        title="Group Type"
      />
      <ModalConfirmButton
        text="Next"
        onClick={() => createGroup()}
        isLoading={false}
      />
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin: 6% 1%;
`;
