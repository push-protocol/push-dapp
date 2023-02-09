// React + Web3 Essentials
import React from 'react';

// External Packages
import styled, { ThemeProvider, useTheme } from 'styled-components';
import { useClickAway } from 'react-use';

// Internal Components
import { ModalInnerComponentType } from 'hooks/useModalBlur';
import { ReactComponent as Close } from 'assets/chat/group-chat/close.svg';
import { ReactComponent as Back } from 'assets/chat/arrowleft.svg';
import { GroupDetailsContent } from './GroupDetailsContent';
import { AddWalletContent } from './AddWalletContent';
import { ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';

export const CreateGroupModalContent = ({ onClose, onConfirm: createGroup, toastObject }: ModalInnerComponentType) => {
  const [createGroupState, setCreateGroupState] = React.useState<number>(1);
  const themes = useTheme();

  const handlePrevious = () => {
    setCreateGroupState(1);
  };

  const handleClose = () => onClose();

  // to close the modal upon a click on backdrop
  const containerRef = React.useRef(null);
  useClickAway(containerRef, () => handleClose());

  return (
    <ThemeProvider theme={themes}>
      <ModalContainer
        background={themes.modalContentBackground}
        ref={containerRef}
      >
        <ItemHV2
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Back
            onClick={handlePrevious}
            style={{ cursor: 'pointer' }}
          />
          <SpanV2
            fontWeight="500"
            fontSize="24px"
            margin="0px 0px 42px 0px"
            color={themes.modalMessageColor}
          >
            Create Group
          </SpanV2>
          <Close
            onClick={() => handleClose()}
            style={{ cursor: 'pointer', marginTop: '8px' }}
          />
        </ItemHV2>
        {createGroupState == 1 && <GroupDetailsContent setCreateGroupState={setCreateGroupState} />}
        {createGroupState == 2 && <AddWalletContent />}
      </ModalContainer>
    </ThemeProvider>
  );
};

const ModalContainer = styled(ItemVV2)`
  max-height: 500px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: ${(props) => props.background};
  padding: 32px 24px;
  margin: 0px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0px;
  }
`;
