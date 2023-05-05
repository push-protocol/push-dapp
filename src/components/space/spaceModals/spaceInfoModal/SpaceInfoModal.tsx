// React + Web3 Essentials
import React, { useContext, useRef, useState } from 'react';
import { useWeb3React } from '@web3-react/core';

// External Packages
import { useClickAway } from 'react-use';
import styled, { ThemeProvider, useTheme } from 'styled-components';

// Internal Components
import { ModalInnerComponentType } from 'hooks/useModalBlur';
import { useDeviceWidthCheck } from 'hooks';
import ModalHeader from 'components/ModalHeader';
import { ItemHV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { PendingMembers } from 'components/PendingMembers';
import { caip10ToWallet } from 'helpers/w2w';
import { DropdownValueType } from 'components/Dropdown';
import Cohost from 'assets/space/cohost.svg';
import Remove from 'assets/chat/group-chat/remove.svg';
import { shortenText } from 'helpers/UtilityHelper';
import InviteMembersModal from '../InviteMembersModal';
import { AddMoreMember } from 'components/AddMoreMember';
import { User } from 'types/chat';
import { MembersProfileList } from 'components/MembersProfileList';
import { ProfileImage } from 'components/ProfileImage';
import { SpaceGlobalContext, SpaceLocalContext } from 'contexts';

export const SpaceInfoModalContent = ({ onClose }: ModalInnerComponentType) => {
  const [selectedMemeberAddress, setSelectedMemeberAddress] = useState('');
  const [showInviteMembersModal, setShowInviteMembersModal] = useState<boolean>(false);
  const [showPendingRequests, setshowPendingRequests] = useState<boolean>(false);
  const [memberList, setMemberList] = React.useState<User[]>([]);
  const { userSpaces } = useContext(SpaceGlobalContext);
  const { selectedSpace } = useContext(SpaceLocalContext);
  const isMobile = useDeviceWidthCheck(480);
  const containerRef = useRef();
  const dropdownRef = useRef();
  const { account } = useWeb3React();

  console.log("Space Info modal data",userSpaces, selectedSpace);

  const selectedSpaceData = userSpaces[account]?.spaces[selectedSpace];

  const theme = useTheme();

  const isAccountOwnerAdmin = selectedSpaceData?.members?.some(
    (member) => caip10ToWallet(member?.wallet) === account && member?.isAdmin
  );

  console.log("Space Info modal data",userSpaces, isAccountOwnerAdmin);


  const handleClose = () => onClose();

  const handlePrevious = () => setShowInviteMembersModal(false);

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
        padding={ showInviteMembersModal ? isMobile ? '24px 10px' : '24px' : '24px 0px 20px 0px' }
        ref={containerRef}
      >
        {!showInviteMembersModal && (
          <>
            <ModalHeader
              handleClose={handleClose}
              title={'Space Info'}
              margin={isMobile ? '0px 24px 34px 24px' : '0px 36px 34px 36px'}
            />
            <BodyContainer padding="0 36px">
              <HostProfile>
                <ProfileImage
                  imageSrc={selectedSpaceData?.spaceImage}
                  dimension="48px"
                  borderRadius="50%"
                  margin="0px 12px 0px 0px"
                />
                <SpanV2
                  color={theme.default.color}
                  fontSize="17px"
                  fontWeight="500"
                  margin="0px 8px 0px"
                >
                  {shortenText(caip10ToWallet(selectedSpaceData?.spaceCreator), 6)}
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
                {shortenText(caip10ToWallet(selectedSpaceData?.spaceCreator), 6)}'s Space
              </SpanV2>
              <Description>{selectedSpaceData?.spaceDescription}</Description>
              {/* {isAccountOwnerAdmin && selectedSpace?.members?.length < 10 && ( */}
                <AddMoreMember
                  showAddMoreMemberModal={setShowInviteMembersModal}
                  title="Invite Members"
                />
              {/* )} */}
              {selectedSpaceData?.pendingMembers?.length > 0 && (
                <PendingMembers
                  setshowPendingRequests={setshowPendingRequests}
                  showPendingRequests={showPendingRequests}
                  pendingMemberData={selectedSpaceData?.pendingMembers}
                  backgroundColor="transparent"
                  pendingHeader="Pending Invites"
                />
              )}
              <MembersProfileList
                memberData={selectedSpaceData}
                makeCohostDropdown={makeCohostDropdown}
                removeCohostDropdown={removeCohostDropdown}
                selectedMemeberAddress={selectedMemeberAddress}
                setSelectedMemeberAddress={setSelectedMemeberAddress}
                dropdownRef={dropdownRef}
                isAccountOwnerAdmin={isAccountOwnerAdmin}
                membersType="space"
              />
            </BodyContainer>
          </>
        )}

        {showInviteMembersModal && (
          <InviteMembersModal
            handleClose={handleClose}
            handleBack={handlePrevious}
            memberList={memberList}
            setMemberList={setMemberList}
          />
        )}
      </ModalContainer>
    </ThemeProvider>
  );
};

const ModalContainer = styled.div`
  box-sizing: border-box;
  border-radius: 16px;
  background-color: ${(props) => props.background};
  margin: 0px;
  padding: ${props => props.padding || '24px 0px 20px 0px'};
  @media(max-width:480px){
    max-width:95vw;
  }
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 60vh;
  max-width: 517px;
  overflow-y: auto;
  overflow-x: hidden;
  padding: ${(props) => props.padding};
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
    max-width: 95vw;
    padding:0px 24px;
    &&::-webkit-scrollbar-thumb {
      border-bottom: 300px solid transparent;
    }
  }
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
