// React + Web3 Essentials
import React from 'react';

// External Packages
import styled from 'styled-components';
import { useClickAway } from 'react-use';

// Internal Components
import ModalHeader from 'primaries/SharedModalComponents/ModalHeader';
import ModalInput from 'primaries/SharedModalComponents/ModalInput';
import ModalConfirmButton from 'primaries/SharedModalComponents/ModalConfirmButton';
import { ModalInnerComponentType } from 'hooks/useModal';
import { ItemHV2,ItemVV2,SpanV2 } from 'components/reusables/SharedStylingV2';

export const CreateGroupModalContent = ({ onClose, onConfirm: createGroup, toastObject }: ModalInnerComponentType) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
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
        focusBorder="2px solid #FFDBF0"
      />
      <ModalInput
        ref={pollTimeInputRef}
        title="Group Description"
        focusBorder="2px solid #FFDBF0"
      />
      <ItemHV2>
        <ItemVV2 border="1px solid black" borderRadius="12px 0px 0px 12px">
          <SpanV2>Public</SpanV2>
          <SpanV2>Chats are not encrypted</SpanV2>
        </ItemVV2>
        <ItemVV2 border="1px solid black" borderRadius="0px 12px 12px 0px">
          <SpanV2>Private</SpanV2>
          <SpanV2>Chats are encrypted</SpanV2>
        </ItemVV2>
      </ItemHV2>
      <ModalConfirmButton
        text="Next"
        onClick={() => createGroup()}
        isLoading={isLoading}
      />
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  width: 399px;
  height: 70%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin: 6% 1%;
`;
