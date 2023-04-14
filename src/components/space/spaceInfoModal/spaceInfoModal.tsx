import React, { useRef } from 'react';
import { useClickAway } from 'react-use';
import styled, { ThemeProvider, useTheme } from 'styled-components';
import { ModalInnerComponentType } from 'hooks/useModalBlur';
import { useDeviceWidthCheck } from 'hooks';
import GroupModalHeader from 'components/chat/w2wChat/groupChat/createGroup/GroupModalHeader';
import { ImageV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import Profile from 'assets/chat/group-chat/profile.svg';
import { ReactComponent as AddMember } from 'assets/chat/group-chat/addicon.svg';

export const SpaceInfoModalContent = ({ onClose }: ModalInnerComponentType) => {
  const theme = useTheme();
  const containerRef = useRef();
  const isMobile = useDeviceWidthCheck(600);

  const handleClose = () => onClose();

  useClickAway(containerRef, () => handleClose());

  return (
    <ThemeProvider theme={theme}>
      <ModalContainer
        background={theme.blurModalContentBackground}
        ref={containerRef}
        padding="24px 0px 20px 0px"
      >
        <GroupModalHeader
          handleClose={handleClose}
          title={'Space Info'}
          margin={isMobile ? '0px 24px 34px 24px' : '0px 36px 34px 36px'}
        />
        <BodyContainer padding="0 36px">
          <HostProfile>
            <ItemVV2
              height="48px"
              maxWidth="48px"
              borderRadius="100%"
              overflow="hidden"
              margin="0px 12px 0px 0px"
            >
              <ImageV2
                maxHeight="100%"
                objectFit="cover"
                src={Profile}
              />
            </ItemVV2>
            <SpanV2
              color={theme.default.color}
              fontSize="17px"
              fontWeight="500"
              margin="0px 8px 0px"
            >
              1234...5566
            </SpanV2>
            <SpanV2
              background="#F3D7FA"
              borderRadius="6px"
              padding="2px 6px"
              fontSize="12px"
              fontWeight="500"
              color="#D53A94"
            >
              Host
            </SpanV2>
          </HostProfile>
          <SpanV2
            fontSize="20px"
            fontWeight="500"
            color={theme.default.color}
            alignSelf="flex-start"
            margin="0px 0px 8px"
          >
            0x1234...3456's Space
          </SpanV2>
          <Description>This is description about the space, for what inention space is happening</Description>
          <AddWalletContainer>
            <AddMember />
            <SpanV2
              color={theme.modalDescriptionTextColor}
              margin="0px  14px"
              fontSize="18px"
              fontWeight="400"
            >
              Invite Members
            </SpanV2>
          </AddWalletContainer>
        </BodyContainer>
      </ModalContainer>
    </ThemeProvider>
  );
};

const ModalContainer = styled.div`
  box-sizing: border-box;
  border-radius: 16px;
  background-color: ${(props) => props.background};
  margin: 0px;
  padding: 0px;
  padding: ${(props) => props.padding};
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 60vh;
  max-width: 517px;
  overflow-y: auto;
  overflow-x: hidden;
  &&::-webkit-scrollbar {
    width: 4px;
  }
  &&::-webkit-scrollbar-thumb {
    background: #cf1c84;
    border-radius: 10px;
    border-bottom: 130px solid transparent;
    background-clip: padding-box;
  }
  @media (max-width: 600px) {
    max-height: 67vh;
    max-width: 94vw;
    &&::-webkit-scrollbar-thumb {
      border-bottom: 300px solid transparent;
    }
  }
  padding: ${(props) => props.padding};
`;

const HostProfile = styled(ItemHV2)`
  width: 445px;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 29px;
`;

const DescriptionContainer = styled(ItemHV2)`
  font-size: 18px;
  font-weight: 400;
  justify-content: flex-start;
  color: ${(props) => props.theme.modalDescriptionTextColor};
  min-width: 445px;
  box-sizing: border-box;
  justify-ceontent: felx-start;
  margin-bottom: 10px;
  @media (max-width: 480px) {
    min-width: 300px;
    max-width: 300px;
  }
`;

const AddWalletContainer = styled(ItemHV2)`
  border: 1px solid ${(props) => props.theme.default.border};
  border-radius: 16px;
  padding: 15px 24px;
  margin-bottom: 15px;
  cursor: pointer;
`;
