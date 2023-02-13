import React, { useContext } from 'react';

// External Packages
import styled, { ThemeProvider, useTheme } from 'styled-components';
import { useClickAway } from 'react-use';

// Internal Components
import { ModalInnerComponentType } from 'hooks/useModal';
import { ReactComponent as Close } from 'assets/chat/group-chat/close.svg';
import { ReactComponent as Back } from 'assets/chat/arrowleft.svg';
import { ReactComponent as Lock } from 'assets/chat/group-chat/lockdark.svg';
import { ReactComponent as MoreDark } from 'assets/chat/group-chat/moredark.svg';
import { ReactComponent as MoreLight } from 'assets/chat/group-chat/more.svg';
import Profile from 'assets/chat/group-chat/profile.svg';
import Message from 'assets/chat/group-chat/chat.svg';
import AddAdmin from 'assets/chat/group-chat/addadmin.svg';
import RemoveAdmin from 'assets/chat/group-chat/removeadmin.svg';
import { ImageV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { AppContext } from 'types/chat';
import { Context } from 'modules/chat/ChatModule';
import { shortenText } from 'helpers/UtilityHelper';
import Dropdown from 'components/Dropdown';

export const GroupInfoModalContent = ({ onClose, onConfirm: createGroup, toastObject }: ModalInnerComponentType) => {
  const { currentChat }: AppContext = useContext<AppContext>(Context);
  const [showMoreOption, setShowMoreOption] = React.useState<string>(null);
  const dropdownRef = React.useRef<any>(null);

  const memberDropdown = [{ title: 'Message user', icon: Message, function: () => messageUser() }];
  const adminDropdown = [
    { title: 'Message user', icon: Message, function: () => messageUser() },
    { title: 'Make group admin', icon: AddAdmin, function: () => makeGroupAdmin() },
    { title: 'Remove', icon: RemoveAdmin, function: () => removeGroupAdmin() },
  ];

  const theme = useTheme();

  const messageUser = () => {
    console.log('messaging');
    setShowMoreOption(null);
  };

  const makeGroupAdmin = () => {
    console.log('make group admin');
    setShowMoreOption(null);
  };

  const removeGroupAdmin = () => {
    console.log('remove group admin');
    setShowMoreOption(null);
  };

  const handleClose = () => onClose();

  // to close the modal upon a click on backdrop
  const containerRef = React.useRef(null);
  useClickAway(containerRef, () => handleClose());

  useClickAway(dropdownRef, () => setShowMoreOption(null));

  return (
    <ThemeProvider theme={theme}>
      <ModalContainer
        background={theme.modalContentBackground}
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
            color={theme.modalMessageColor}
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
            maxWidth="64px"
            borderRadius="16px"
            overflow="hidden"
            margin="0px 16px 0px 0px"
          >
            <ImageV2
              src={currentChat?.groupInformation?.groupImageCID}
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
              color={theme.default.secondaryColor}
            >
              {`${currentChat?.groupInformation?.groupMembers?.length} members`}
            </SpanV2>
          </ItemVV2>
        </InfoContainer>

        <DescriptionContainer
          alignItems="flex-start"
          margin="0px 0px 16px 0px"
        >
          <SpanV2
            fontSize="18px"
            fontWeight={500}
            margin="0px 0px 5px 0px"
            color={theme.default.color}
          >
            Group Description
          </SpanV2>
          <ItemHV2
            fontSize="18px"
            fontWeight={400}
            justifyContent="flex-start"
            style={{ color: `${theme.default.secondaryColor}` }}
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
              color={theme.default.secondaryColor}
            >
              {currentChat?.groupInformation?.isPublic ? 'Chats are not encrypted' : 'Chats are encrypted'}
            </SpanV2>
          </ItemVV2>
        </InfoContainer>
        <ProfileContainer>
          {currentChat?.groupInformation?.groupMembers?.map((member, index) => {
            return (
              <ProfileCard key={index}>
                <ItemHV2 justifyContent="flex-start">
                  <ItemVV2
                    width="48px"
                    maxWidth="48px"
                    borderRadius="100%"
                    overflow="hidden"
                    margin="0px 12px 0px 0px"
                  >
                    <ImageV2 src={Profile} />
                  </ItemVV2>
                  <SpanV2
                    fontSize="18px"
                    fontWeight="400"
                    color={theme.default.color}
                  >
                    {shortenText(member?.wallets?.split(':')[1], 6)}
                  </SpanV2>
                </ItemHV2>
                <ItemHV2 justifyContent="flex-end">
                  {currentChat?.groupInformation?.groupAdmins?.some((admin) => admin.wallets === member.wallets) && (
                    <SpanV2
                      background="#F4DCEA"
                      color="#D53A94"
                      borderRadius="8px"
                      padding="4px 10px"
                      fontWeight="500"
                      fontSize="12px"
                      lineHeight="16.8px"
                    >
                      Admin
                    </SpanV2>
                  )}
                  <ItemVV2
                    maxWidth="40px"
                    onClick={() => setShowMoreOption(member?.wallets)}
                    style={{ cursor: 'pointer' }}
                  >
                    {theme.scheme == 'light' ? <MoreLight /> : <MoreDark />}
                  </ItemVV2>
                </ItemHV2>
                {showMoreOption == member?.wallets && (
                  <DropdownContainer ref={dropdownRef}>
                    <Dropdown
                      dropdownValues={
                        currentChat?.groupInformation?.groupAdmins?.some((admin) => admin.wallets === member.wallets)
                          ? adminDropdown
                          : memberDropdown
                      }
                      hoverBGColor={theme.chat.snapFocusBg}
                    />
                  </DropdownContainer>
                )}
              </ProfileCard>
            );
          })}
        </ProfileContainer>
      </ModalContainer>
    </ThemeProvider>
  );
};

const ModalContainer = styled.div`
  max-height: 500px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 16px;
  background-color: ${(props) => props.background};
  padding: 5px 10px;
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

const ProfileCard = styled(ItemHV2)`
  justify-content: space-between;
  position: relative;
  padding: 8px 16px;
  border-radius: 16px;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.chat.snapFocusBg};
  margin-bottom: 8px;
  max-height: 64px;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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

const DropdownContainer = styled(ItemVV2)`
  position: absolute;
  top: 27px;
  right: -178px;
  border-radius: 16px;
  padding: 14px 8px;
  background: ${(props) => props.theme.modalContentBackground};
  z-index: 11;
  @media (max-width: 480px) {
    top: 44px;
    right: 7px;
  }
`;
