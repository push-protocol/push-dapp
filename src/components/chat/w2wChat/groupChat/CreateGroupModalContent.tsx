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
import { ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { TextField } from 'components/SharedStyling';
import { ReactComponent as AddGroupIcon } from 'assets/chat/group-chat/creategroupicon.svg';

export const CreateGroupModalContent = ({ onClose, onConfirm: createGroup, toastObject }: ModalInnerComponentType) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const groupNameInputRef = React.useRef<HTMLInputElement>();
  const groupDescriptionInputRef = React.useRef<HTMLInputElement>();
  const fileUploadInputRef = React.useRef<HTMLInputElement>();

  const handleClose = () => onClose();

  const handleUpload=(e)=>{
    fileUploadInputRef.current.click()
  }

  // to close the modal upon a click on backdrop
  const containerRef = React.useRef(null);
  useClickAway(containerRef, () => handleClose());

  return (
    <ModalContainer ref={containerRef}>
      <SpanV2 fontWeight="500" fontSize="24px" margin="0px 0px 0px 42px">Create Group</SpanV2>
      <GroupIconContainer>
      <AddGroupIcon onClick={handleUpload}/>
      <FileInput type="file" ref={fileUploadInputRef}/>
      </GroupIconContainer>
      
      <ModalInput
        ref={groupNameInputRef}
        title="Group Name"
        focusBorder="2px solid #FFDBF0"
      />
      <ModalInput
        ref={groupDescriptionInputRef}
        title="Group Description"
        focusBorder="2px solid #FFDBF0"
      />
      <ItemHV2>
        <ItemVV2
          border="1px solid black"
          borderRadius="12px 0px 0px 12px"
          padding="8px"
          hover="#C2CBDB"
        >
          <SpanV2 fontWeight="500" fontSize="18px">Public</SpanV2>
          <SpanV2 fontWeight="400" fontSize="12px">Chats are not encrypted</SpanV2>
        </ItemVV2>
        <ItemVV2
          border="1px solid black"
          borderRadius="0px 12px 12px 0px"
          padding="8px"
          hover="#C2CBDB"
        >
          <SpanV2 fontWeight="500" fontSize="18px">Private</SpanV2>
          <SpanV2 fontWeight="400" fontSize="12px">Chats are encrypted</SpanV2>
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

const GroupIconContainer=styled.div`
  width:100%;
  display:flex;
  justify-content:center;
  `;

  const FileInput=styled.input`
  display:none;
  `
