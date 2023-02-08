// React + Web3 Essentials
import React from 'react';

// External Packages
import styled, { ThemeProvider, useTheme } from 'styled-components';
import { useClickAway } from 'react-use';

// Internal Components
import { ModalInnerComponentType } from 'hooks/useModalBlur';
import { ReactComponent as Close } from 'assets/chat/group-chat/close.svg';
import { CreateGroupData } from './GroupDetailsContent';
import { AddWallet } from './AddWalletContent';
import { SpanV2 } from 'components/reusables/SharedStylingV2';

export const CreateGroupModalContent = ({ onClose, onConfirm: createGroup, toastObject }: ModalInnerComponentType) => {
  const [createGroupState,setCreateGroupState]=React.useState<number>(1)
  const themes = useTheme();

  const handleClose = () => onClose();

  // to close the modal upon a click on backdrop
  const containerRef = React.useRef(null);
  useClickAway(containerRef, () => handleClose());

  return (
    <ThemeProvider theme={themes}>
      <ModalContainer ref={containerRef}>
        <>
          <SpanV2
            fontWeight="500"
            fontSize="24px"
            margin="0px 0px 42px 0px"
            color={themes.modalMessageColor}
          >
            Create Group
          </SpanV2>
          <Close />
        </>
        {createGroupState==1 && <CreateGroupData setCreateGroupState={setCreateGroupState}/>}
        {createGroupState==2 && <AddWallet/>}
      </ModalContainer>
    </ThemeProvider>
  );
};

const ModalContainer = styled.div`
  width: 399px;
  max-height: 500px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 32px 24px;
  margin: 0px;
  overflow-y: auto;
`;
