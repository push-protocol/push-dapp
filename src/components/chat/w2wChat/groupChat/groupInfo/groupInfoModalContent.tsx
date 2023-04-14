import React, { useContext, useEffect } from 'react';
import { ethers } from 'ethers';
import { useWeb3React } from '@web3-react/core';

// External Packages
import styled, { ThemeProvider, useTheme } from 'styled-components';
import { useClickAway } from 'react-use';

// Internal Components
import { ModalInnerComponentType } from 'hooks/useModal';
import { ReactComponent as Lock } from 'assets/chat/group-chat/lockdark.svg';
import { ReactComponent as AddMember } from 'assets/chat/group-chat/addicon.svg';
import Message from 'assets/chat/group-chat/chat.svg';
import AddAdmin from 'assets/chat/group-chat/addadmin.svg';
import DismissAdmin from 'assets/chat/group-chat/dismissadmin.svg';
import Remove from 'assets/chat/group-chat/remove.svg';
import { ImageV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { AppContext } from 'types/chat';
import { caip10ToWallet } from 'helpers/w2w';
import { Context } from 'modules/chat/ChatModule';
import { ChatUserContext } from 'contexts/ChatUserContext';
import { ProfileCard } from './ProfileCard';
import {
  convertToWalletAddressList,
  getAdminList,
  getUpdatedAdminList,
  getUpdatedMemberList,
  updateGroup,
} from '../../../../../helpers/w2w/groupChat';
import { getDefaultFeed } from '../../../../../helpers/w2w/user';
import { Feeds } from '../../../../../types/chat';
import { DropdownValueType } from '../../../../Dropdown';
import { useDeviceWidthCheck } from 'hooks';
import { PendingMembers } from './PendingMembers';

//Internal Configs
import useToast from 'hooks/useToast';
import { MdCheckCircle, MdError } from 'react-icons/md';
import { AddWalletContent } from '../createGroup/AddWalletContent';
import GroupModalHeader from '../createGroup/GroupModalHeader';

export const GroupInfoModalContent = ({ onClose }: ModalInnerComponentType) => {
  const { currentChat, setChat, inbox, receivedIntents }: AppContext = useContext<AppContext>(Context);
  const { connectedUser } = useContext(ChatUserContext);
  const { account } = useWeb3React<ethers.providers.Web3Provider>();
  const groupInfoToast = useToast();
  const [selectedMemeberAddress, setSelectedMemeberAddress] = React.useState<string | null>(null);
  const [showAddMoreWalletModal, setShowAddMoreWalletModal] = React.useState<boolean>(false);
  // const [memberList, setMemberList] = React.useState<any>(currentChat?.groupInformation?.groupMembers);
  const [showPendingRequests, setshowPendingRequests] = React.useState<boolean>(false);
  const [memberList, setMemberList] = React.useState<any>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const groupCreator = currentChat?.groupInformation?.groupCreator;
  const membersExceptGroupCreator = currentChat?.groupInformation?.members.filter((x) => x.wallet !== groupCreator);
  const groupMembers = [...membersExceptGroupCreator, ...currentChat?.groupInformation?.pendingMembers];

  const isAccountOwnerAdmin = currentChat?.groupInformation?.members?.some(
    (member) => caip10ToWallet(member?.wallet) === account && member?.isAdmin
  );
  const dropdownRef = React.useRef<any>(null);
  useClickAway(dropdownRef, () => setSelectedMemeberAddress(null));
  const theme = useTheme();
  const isMobile = useDeviceWidthCheck(600);
  const handleClose = () => onClose();

  const messageUser = async () => {
    let feed: Feeds = await getDefaultFeed({ walletAddress: selectedMemeberAddress!, inbox, intents: receivedIntents });
    setChat(feed);
    setSelectedMemeberAddress(null);
    handleClose();
  };

  const makeGroupAdmin = async () => {
    const groupMemberList = convertToWalletAddressList([
      ...currentChat?.groupInformation?.members,
      ...currentChat?.groupInformation?.pendingMembers,
    ]);
    const newAdminList = getUpdatedAdminList(currentChat?.groupInformation, selectedMemeberAddress, false);
    try {
      const { updateResponse, updatedCurrentChat } = await updateGroup({
        currentChat,
        connectedUser,
        adminList: newAdminList,
        memeberList: groupMemberList,
      });
      if (typeof updateResponse !== 'string') {
        setSelectedMemeberAddress(null);
        if (updatedCurrentChat) setChat(updatedCurrentChat);
      } else {
        groupInfoToast.showMessageToast({
          toastTitle: 'Error',
          toastMessage: updateResponse,
          toastType: 'ERROR',
          getToastIcon: (size) => (
            <MdError
              size={size}
              color="red"
            />
          ),
        });
        setSelectedMemeberAddress(null);
      }
    } catch (e) {
      console.error('Error while adding admin', e);
      groupInfoToast.showMessageToast({
        toastTitle: 'Error',
        toastMessage: e.message,
        toastType: 'ERROR',
        getToastIcon: (size) => (
          <MdError
            size={size}
            color="red"
          />
        ),
      });
    }
    setSelectedMemeberAddress(null);
  };

  const dismissGroupAdmin = async () => {
    const groupMemberList = convertToWalletAddressList([
      ...currentChat?.groupInformation?.members,
      ...currentChat?.groupInformation?.pendingMembers,
    ]);
    const newAdminList = getUpdatedAdminList(currentChat?.groupInformation, selectedMemeberAddress, true);
    try {
      const { updateResponse, updatedCurrentChat } = await updateGroup({
        currentChat,
        connectedUser,
        adminList: newAdminList,
        memeberList: groupMemberList,
      });
      if (typeof updateResponse !== 'string') {
        setSelectedMemeberAddress(null);
        if (updatedCurrentChat) setChat(updatedCurrentChat);
      } else {
        groupInfoToast.showMessageToast({
          toastTitle: 'Error',
          toastMessage: updateResponse,
          toastType: 'ERROR',
          getToastIcon: (size) => (
            <MdError
              size={size}
              color="red"
            />
          ),
        });
        setSelectedMemeberAddress(null);
      }
    } catch (e) {
      console.error('Error while dismissing admin', e);
      groupInfoToast.showMessageToast({
        toastTitle: 'Error',
        toastMessage: e.message,
        toastType: 'ERROR',
        getToastIcon: (size) => (
          <MdError
            size={size}
            color="red"
          />
        ),
      });
    }
    setSelectedMemeberAddress(null);
  };

  const removeMember = async () => {
    const updatedMemberList = getUpdatedMemberList(currentChat, selectedMemeberAddress);
    const adminList = getUpdatedAdminList(currentChat?.groupInformation, selectedMemeberAddress, true);
    try {
      const { updateResponse, updatedCurrentChat } = await updateGroup({
        currentChat,
        connectedUser,
        adminList,
        memeberList: updatedMemberList,
      });

      if (typeof updateResponse !== 'string') {
        setSelectedMemeberAddress(null);
        if (updatedCurrentChat) setChat(updatedCurrentChat);
      } else {
        groupInfoToast.showMessageToast({
          toastTitle: 'Error',
          toastMessage: updateResponse,
          toastType: 'ERROR',
          getToastIcon: (size) => (
            <MdError
              size={size}
              color="red"
            />
          ),
        });
        setSelectedMemeberAddress(null);
      }
    } catch (error) {
      console.error('Error in removing memeber', error);
      groupInfoToast.showMessageToast({
        toastTitle: 'Error',
        toastMessage: error.message,
        toastType: 'ERROR',
        getToastIcon: (size) => (
          <MdError
            size={size}
            color="red"
          />
        ),
      });
    }
    setSelectedMemeberAddress(null);
  };

  const addMembers = async () => {
    //Already Present Members and PendingMembers
    const groupMemberList = convertToWalletAddressList([
      ...currentChat?.groupInformation?.members,
      ...currentChat?.groupInformation?.pendingMembers,
    ]);

    //Newly Added Members and alreadyPresent Members in the groupchat
    const newMembersToAdd = memberList.map((member) => member.wallets);
    const members = [...groupMemberList, ...newMembersToAdd];

    //Admins wallet address from both members and pendingMembers
    const adminList = getAdminList(currentChat?.groupInformation);

    try {
      setIsLoading(true);
      const { updateResponse, updatedCurrentChat } = await updateGroup({
        currentChat,
        connectedUser,
        adminList,
        memeberList: members,
      });

      if (typeof updateResponse !== 'string') {
        setSelectedMemeberAddress(null);
        if (updatedCurrentChat) setChat(updatedCurrentChat);
      } else {
        groupInfoToast.showMessageToast({
          toastTitle: 'Error',
          toastMessage: updateResponse,
          toastType: 'ERROR',
          getToastIcon: (size) => (
            <MdError
              size={size}
              color="red"
            />
          ),
        });
        setSelectedMemeberAddress(null);
      }
      setIsLoading(false);
      groupInfoToast.showMessageToast({
        toastTitle: 'Success',
        toastMessage: 'Group Invitation sent',
        toastType: 'SUCCESS',
        getToastIcon: (size) => (
          <MdCheckCircle
            size={size}
            color="green"
          />
        ),
      });
      handleClose();
    } catch (error) {
      setIsLoading(false);
      console.log('Error', error);
      groupInfoToast.showMessageToast({
        toastTitle: 'Error',
        toastMessage: error.message,
        toastType: 'ERROR',
        getToastIcon: (size) => (
          <MdError
            size={size}
            color="red"
          />
        ),
      });
    }
  };

  const messageUserDropdown: DropdownValueType = {
    id: 'message_user',
    title: 'Message user',
    icon: Message,
    function: () => messageUser(),
  };
  const removeAdminDropdown: DropdownValueType = {
    id: 'dismiss_admin',
    title: 'Dismiss as admin',
    icon: DismissAdmin,
    function: () => dismissGroupAdmin(),
  };
  const addAdminDropdown: DropdownValueType = {
    id: 'dismiss_admin',
    title: 'Make group admin',
    icon: AddAdmin,
    function: () => makeGroupAdmin(),
  };
  const removeMemberDropdown: DropdownValueType = {
    id: 'remove_member',
    title: 'Remove',
    icon: Remove,
    function: () => removeMember(),
    textColor: '#ED5858',
  };

  // to close the modal upon a click on backdrop
  const containerRef = React.useRef(null);
  useClickAway(containerRef, () => handleClose());

  const handlePrevious = () => {
    setShowAddMoreWalletModal(false);
  };

  const handleCloseAddWalletModal = () => {
    setShowAddMoreWalletModal(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <ModalContainer
        background={theme.blurModalContentBackground}
        ref={containerRef}
        padding={
          isMobile
            ? showAddMoreWalletModal
              ? '24px 24px 20px 24px'
              : '24px 0px 20px 0px'
            : showAddMoreWalletModal
            ? '24px 36px 20px 36px'
            : '24px 0px 20px 0px'
        }
      >
        {!showAddMoreWalletModal && (
          <>
            <GroupModalHeader
              handleClose={handleClose}
              title={'Group Info'}
              margin={isMobile ? '0px 24px 34px 24px' : '0px 36px 34px 36px'}
            />
            <BodyContainer
              padding={
                isMobile
                  ? showAddMoreWalletModal
                    ? '0px'
                    : '0px 24px 0px 24px'
                  : showAddMoreWalletModal
                  ? '0px'
                  : '0px 36px 0px 36px'
              }
            >
              <InfoContainer
                justifyContent="flex-start"
                margin="0px 0px 29px 0px"
              >
                <ItemVV2
                  width="64px"
                  height="64px"
                  maxWidth="64px"
                  borderRadius="16px"
                  overflow="hidden"
                  margin="0px 16px 0px 0px"
                >
                  <ImageV2
                    height="100%"
                    objectFit="cover"
                    src={currentChat?.groupInformation?.groupImage}
                    alt="Group Image"
                  />
                </ItemVV2>
                <ItemVV2 alignItems="flex-start">
                  <SpanV2
                    fontSize="20px"
                    fontWeight={500}
                    color={theme.default.color}
                    textAlign="left"
                  >
                    {currentChat?.groupInformation?.groupName}
                  </SpanV2>
                  <SpanV2
                    fontSize="16px"
                    fontWeight={500}
                    color={theme.modalDescriptionTextColor}
                  >
                    {`${
                      currentChat?.groupInformation?.members ? currentChat?.groupInformation?.members?.length : 0
                    } members`}
                  </SpanV2>
                </ItemVV2>
              </InfoContainer>

              <DescriptionContainer
                alignItems="flex-start"
                margin="0px 0px 18px 0px"
              >
                <SpanV2
                  fontSize="18px"
                  fontWeight={500}
                  margin="0px 0px 5px 0px"
                  color={theme.modalProfileTextColor}
                >
                  Group Description
                </SpanV2>
                <ItemHV2
                  fontSize="18px"
                  fontWeight={400}
                  justifyContent="flex-start"
                  style={{ color: `${theme.modalDescriptionTextColor}` }}
                >
                  {currentChat?.groupInformation?.groupDescription
                    ? currentChat?.groupInformation?.groupDescription
                    : 'No Description Added'}
                </ItemHV2>
              </DescriptionContainer>
              <InfoContainer
                justifyContent="flex-start"
                padding="15px 24px 15px 18px"
                borderRadius="16px"
                border={`1px solid ${theme.default.border}`}
                margin="0px 0px 21px 0px"
              >
                <Lock />
                <ItemVV2
                  alignItems="flex-start"
                  margin="0px 0px 0px 12px"
                >
                  <SpanV2
                    fontSize="18px"
                    fontWeight="500"
                    color={theme.default.color}
                  >
                    {currentChat?.groupInformation?.isPublic ? 'Public' : 'Private'}
                  </SpanV2>
                  <SpanV2
                    fontSize="12px"
                    fontWeight="400"
                    color={theme.modalIconColor}
                  >
                    {currentChat?.groupInformation?.isPublic ? 'Chats are not encrypted' : 'Chats are encrypted'}
                  </SpanV2>
                </ItemVV2>
              </InfoContainer>
              {isAccountOwnerAdmin && currentChat?.groupInformation?.members?.length < 10 && (
                <AddWalletContainer onClick={() => setShowAddMoreWalletModal(true)}>
                  <AddMember />
                  <SpanV2
                    color={theme.modalProfileTextColor}
                    margin="0px  14px"
                    fontSize="18px"
                    fontWeight="400"
                  >
                    Add more wallets
                  </SpanV2>
                </AddWalletContainer>
              )}
              {currentChat?.groupInformation?.pendingMembers?.length > 0 && (
                <PendingMembers
                  setshowPendingRequests={setshowPendingRequests}
                  showPendingRequests={showPendingRequests}
                />
              )}
              <ProfileContainer
                minHeight={
                  currentChat?.groupInformation?.members?.length < 4
                    ? 72 * currentChat?.groupInformation?.members?.length
                    : 216
                }
              >
                {currentChat?.groupInformation?.members?.map((member, index) => {
                  return (
                    member && (
                      <ProfileCard
                        key={index}
                        member={member}
                        dropdownValues={
                          member?.isAdmin && isAccountOwnerAdmin
                            ? [removeAdminDropdown, removeMemberDropdown]
                            : isAccountOwnerAdmin
                            ? [addAdminDropdown, removeMemberDropdown]
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
          </>
        )}

        {showAddMoreWalletModal && (
          <AddWalletContent
            onSubmit={addMembers}
            isLoading={isLoading}
            memberList={memberList}
            handleMemberList={setMemberList}
            handlePrevious={handlePrevious}
            handleClose={handleCloseAddWalletModal}
            title={'Add More Wallets'}
            groupMembers={groupMembers}
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

const DescriptionContainer = styled(ItemVV2)`
  min-width: 445px;
  box-sizing: border-box;
  @media (max-width: 480px) {
    min-width: 300px;
    max-width: 300px;
  }
`;

const InfoContainer = styled(ItemHV2)`
  min-width: 445px;
  box-sizing: border-box;
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
