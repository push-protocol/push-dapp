// React + Web3 Essentials
import React, { useRef, useState } from 'react';
import { useWeb3React } from '@web3-react/core';

// External Packages
import { useClickAway } from 'react-use';
import styled, { ThemeProvider, useTheme } from 'styled-components';

// Internal Components
import { ModalInnerComponentType } from 'hooks/useModalBlur';
import { useDeviceWidthCheck } from 'hooks';
import ModalHeader from 'components/ModalHeader';
import { ImageV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { ReactComponent as AddMember } from 'assets/chat/group-chat/addicon.svg';
import { spaces } from 'services/space/spaceList';
import { PendingInvites } from './PendingInvites';
// import { ProfileCard } from './ProfileCard';
import { ProfileCard } from 'components/chat/w2wChat/groupChat/groupInfo/ProfileCard';
import { caip10ToWallet } from 'helpers/w2w';
import { DropdownValueType } from 'components/Dropdown';
import Cohost from 'assets/space/cohost.svg';
import Remove from 'assets/chat/group-chat/remove.svg';
import { shortenText } from 'helpers/UtilityHelper';

export const SpaceInfoModalContent = ({ onClose }: ModalInnerComponentType) => {
  const selectedSpace = spaces[0];
  const [showPendingInvites, setShowPendingInvites] = useState<boolean>(false);
  const [selectedMemeberAddress, setSelectedMemeberAddress] = useState('');
  const containerRef = useRef();
  const dropdownRef = useRef();
  const { account } = useWeb3React();

  const theme = useTheme();

  const isMobile = useDeviceWidthCheck(600);

  const isAccountOwnerAdmin = selectedSpace?.members?.some(
    (member) => caip10ToWallet(member?.wallet) === account && member?.isAdmin
  );

  const handleClose = () => onClose();

  useClickAway(containerRef, () => handleClose());
  useClickAway(dropdownRef, () => setSelectedMemeberAddress(null));

  const makeCohost = () => {};
  const removeCohost = () => {};

  const makeCohostDropdown: DropdownValueType = {
    id: 'make_cohost',
    title: 'Make co-host',
    icon: Cohost,
    function: () => makeCohost(),
  };
  const removeCohostDropdown: DropdownValueType = {
    id: 'remove_cohost',
    title: 'Remove',
    icon: Remove,
    function: () => removeCohost(),
    textColor: '#ED5858',
  };

  return (
    <ThemeProvider theme={theme}>
      <ModalContainer
        background={theme.blurModalContentBackground}
        ref={containerRef}
        padding="24px 0px 20px 0px"
      >
        <ModalHeader
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
                src={selectedSpace?.spaceImage}
              />
            </ItemVV2>
            <SpanV2
              color={theme.default.color}
              fontSize="17px"
              fontWeight="500"
              margin="0px 8px 0px"
            >
              {shortenText(selectedSpace?.spaceCreator,6)}
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
            {shortenText(selectedSpace?.spaceCreator,6)}'s Space
          </SpanV2>
          <Description>{selectedSpace.spaceDescription}</Description>
          {isAccountOwnerAdmin && selectedSpace?.members?.length < 10 && (
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
          )}
          {selectedSpace?.pendingMembers?.length > 0 && (
            <PendingInvites
              showPendingInvites={showPendingInvites}
              setShowPendingInvites={setShowPendingInvites}
            />
          )}
          <ProfileContainer minHeight={selectedSpace?.members?.length < 4 ? 72 * selectedSpace?.members?.length : 216}>
            {selectedSpace?.members?.map((member, index) => {
              return (
                member && (
                  <ProfileCard
                    key={index}
                    member={member}
                    dropdownValues={
                      member?.isAdmin && isAccountOwnerAdmin
                        ? [makeCohostDropdown, removeCohostDropdown]
                        : isAccountOwnerAdmin
                        ? [makeCohostDropdown, removeCohostDropdown]
                        : []
                    }
                    selectedMemeberAddress={selectedMemeberAddress}
                    setSelectedMemeberAddress={setSelectedMemeberAddress}
                    dropdownRef={dropdownRef}
                  />
                )
              );
            })}
          </ProfileContainer>
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

const Description = styled(ItemHV2)`
  font-size: 18px;
  font-weight: 400;
  justify-content: flex-start;
  color: ${(props) => props.theme.modalDescriptionTextColor};
  min-width: 445px;
  max-width: 445px;
  box-sizing: border-box;
  justify-ceontent: felx-start;
  margin-bottom: 10px;
  @media (max-width: 480px) {
    min-width: 300px;
    max-width: 300px;
  }
`;

const AddWalletContainer = styled(ItemHV2)`
  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.default.border};
  max-width: 445px;
  border-radius: 16px;
  padding: 15px 24px;
  margin-bottom: 15px;
  cursor: pointer;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-right: 3px;
  align-items: center;
  min-width: 445px;
  min-height: 72px;
  max-height: 216px;
  min-height: ${(props) => `${props.minHeight}px`};
  overflow-y: auto;
  overflow-x: hidden;
  &&::-webkit-scrollbar {
    width: 4px;
  }
  &&::-webkit-scrollbar-thumb {
    background: #cf1c84;
    border-radius: 10px;
  }
  @media (max-width: 480px) {
    min-width: 300px;
  }
`;
