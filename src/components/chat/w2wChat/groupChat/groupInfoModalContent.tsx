import React, { useContext } from 'react';

// External Packages
import styled, { ThemeProvider, useTheme } from 'styled-components';
import { useClickAway } from 'react-use';

// Internal Components
import { ModalInnerComponentType } from 'hooks/useModal';
import { ReactComponent as Close } from 'assets/chat/group-chat/close.svg';
import { ReactComponent as Back } from 'assets/chat/arrowleft.svg';
import { ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { AppContext } from 'types/chat';
import { Context } from 'modules/chat/ChatModule';

export const GroupInfoModalContent = ({ onClose, onConfirm: createGroup, toastObject }: ModalInnerComponentType) => {
  const themes = useTheme();

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
        <h2>Group Info</h2>
      </ModalContainer>
    </ThemeProvider>
  );
};

const ModalContainer = styled.div`
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
