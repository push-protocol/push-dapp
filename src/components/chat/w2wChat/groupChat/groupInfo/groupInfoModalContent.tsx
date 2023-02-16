import React, { useContext } from 'react';
import { ethers } from 'ethers';
import { useWeb3React } from '@web3-react/core';

// External Packages
import styled, { ThemeProvider, useTheme } from 'styled-components';
import { useClickAway } from 'react-use';

// Internal Components
import { ModalInnerComponentType } from 'hooks/useModal';
import { ReactComponent as Close } from 'assets/chat/group-chat/close.svg';
import { ReactComponent as Back } from 'assets/chat/arrowleft.svg';
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
import { ProfileCard } from './ProfileCard';
import { getDefaultFeed } from '../../../../../helpers/w2w/user';
import { Feeds } from '../../../../../types/chat';

export const GroupInfoModalContent = ({ onClose, onConfirm: createGroup, toastObject }: ModalInnerComponentType) => {
  const { currentChat ,setChat}: AppContext = useContext<AppContext>(Context);
  const { account } = useWeb3React<ethers.providers.Web3Provider>();
  const [showMoreOption, setShowMoreOption] = React.useState<string>(null);
  const isAccountOwnerAdmin = currentChat?.groupInformation?.groupMembers?.some(
    (member) => caip10ToWallet(member?.wallets) === account && member?.isAdmin
  );
  const dropdownRef = React.useRef<any>(null);
  useClickAway(dropdownRef, () => setShowMoreOption(null));

  const theme = useTheme();

  const handleClose = () => onClose();

  const messageUser = async() => {
    let feed:Feeds = await getDefaultFeed(showMoreOption);
    setChat(feed);
    setShowMoreOption(null);
    handleClose();
  };

  const makeGroupAdmin = () => {
    console.log('make group admin');
    setShowMoreOption(null);
  };

  const dismissGroupAdmin = () => {
    console.log('make group admin');
    setShowMoreOption(null);
  };

  const removeMember = () => {
    console.log('remove group admin');
    setShowMoreOption(null);
  };

  const memberDropdown = [
    { id: 'message_user', value: '', title: 'Message user', icon: Message, function: () => messageUser() },
  ];

  const ownerDropdown = [
    { id: 'message_user', title: 'Message user', icon: Message, function: () => messageUser() },
    { id: 'dismiss_admin', title: 'Dismiss as admin', icon: DismissAdmin, function: () => dismissGroupAdmin() },
    { id: 'remove_member', title: 'Remove', icon: Remove, function: () => removeMember() },
  ];

  const adminDropdown = [
    { id: 'message_user', title: 'Message user', icon: Message, function: () => messageUser() },
    { id: 'dismiss_admin', title: 'Make group admin', icon: AddAdmin, function: () => makeGroupAdmin() },
    { id: 'remove_member', title: 'Remove', icon: Remove, function: () => removeMember() },
  ];

  // to close the modal upon a click on backdrop
  const containerRef = React.useRef(null);
  useClickAway(containerRef, () => handleClose());

  return (
    <ThemeProvider theme={theme}>
      <ModalContainer
        background={theme.blurModalContentBackground}
        ref={containerRef}
      >
        <ItemHV2
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Back
            onClick={() => {}}
            style={{ cursor: 'pointer' }}
          />
          <SpanV2
            fontWeight="500"
            fontSize="24px"
            margin="0px 0px 42px 0px"
            color={theme.default.color}
          >
            Group Info
          </SpanV2>
          <Close
            onClick={() => handleClose()}
            style={{ cursor: 'pointer', marginTop: '8px' }}
          />
        </ItemHV2>
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
            >
              {currentChat?.groupInformation?.groupName}
            </SpanV2>
            <SpanV2
              fontSize="16px"
              fontWeight={500}
              color={theme.modalDescriptionTextColor}
            >
              {`${currentChat?.groupInformation?.groupMembers?.length} members`}
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
        {isAccountOwnerAdmin && currentChat?.groupInformation?.groupMembers?.length < 10 && (
          <AddWalletContainer>
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
        <ProfileContainer>
          {currentChat?.groupInformation?.groupMembers?.map((member, index) => {
            return (
              <ProfileCard
                key={`${member.wallet}${index}`}
                member={member}
                dropdownValues={
                  member?.isAdmin && isAccountOwnerAdmin
                    ? ownerDropdown
                    : isAccountOwnerAdmin
                    ? adminDropdown
                    : memberDropdown
                }
                showMoreOption={showMoreOption}
                setShowMoreOption={setShowMoreOption}
                dropdownRef={dropdownRef}
              />
            );
          })}
        </ProfileContainer>
      </ModalContainer>
    </ThemeProvider>
  );
};

const ModalContainer = styled.div`
  max-height: 517px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: ${(props) => props.background};
  padding: 0px;
  margin: 0px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0px;
  }
`;

const DescriptionContainer = styled(ItemVV2)`
  min-width: 445px;
  box-sizing: border-box;
  @media (max-width: 480px) {
    min-width: 300px;
  }
`;

const InfoContainer = styled(ItemHV2)`
  min-width: 445px;
  box-sizing: border-box;
  @media (max-width: 480px) {
    min-width: 300px;
  }
`;

const AddWalletContainer = styled(ItemHV2)`
  border: 1px solid ${(props) => props.theme.default.border};
  border-radius: 16px;
  padding: 15px 24px;
  margin-bottom: 15px;
  cursor:pointer;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-right:3px;
  align-items: center;
  min-width: 445px;
  max-height: 280px;
  overflow-y: auto;
  overflow-x: hidden;
  &&::-webkit-scrollbar {
    width: 4px;
  }
  &&::-webkit-scrollbar-thumb {
    background: #d53a94;
  }
  @media (max-width: 480px) {
    min-width: 300px;
  }
`;
