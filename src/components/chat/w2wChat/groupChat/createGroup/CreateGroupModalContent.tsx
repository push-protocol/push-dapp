// React + Web3 Essentials
import { useRef } from 'react';

// External Packages
import styled, { ThemeProvider, useTheme } from 'styled-components';
import { useClickAway } from 'react-use';

// Internal Components
import { ModalInnerComponentType } from 'hooks/useModalBlur';
import { device } from 'config/Globals';
import { CreateGroupModal } from '@pushprotocol/uiweb';

export const CreateGroupModalContent = ({ onClose }: ModalInnerComponentType) => {
  const themes = useTheme();

  const handleClose = () => onClose();

  // to close the modal upon a click on backdrop
  const containerRef = useRef(null);
  useClickAway(containerRef, () => handleClose());

  return (
    <ThemeProvider theme={themes}>
      <ModalContainer>
        <CreateGroupModal onClose={() => handleClose()} />
      </ModalContainer>
    </ThemeProvider>
  );
};

const ModalContainer = styled.div`
  max-height: 78vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 16px;
  background-color: ${(props) => props.background};
  padding: ${(props) => (props.createGroupState == 2 ? '32px 36px' : '32px 17px')};
  margin: 0px;
  overflow-y: auto;
  overflow-x: hidden;
  & > div::-webkit-scrollbar {
    width: 4px;
  }
  & > div::-webkit-scrollbar-thumb {
    background: #cf1c84;
    border-radius: 10px;
  }
  @media ${device.mobileL} {
    max-height: 80vh;
    min-width: 93vw;
    max-width: 95vw;
    padding: ${(props) => (props.createGroupState == 2 ? '32px 24px' : '32px 0px')};
  }
`;
