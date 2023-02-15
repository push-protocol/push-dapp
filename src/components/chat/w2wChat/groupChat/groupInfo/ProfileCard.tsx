import React, { useContext } from 'react';
import { ethers } from 'ethers';
import { useWeb3React } from '@web3-react/core';

// External Packages
import styled, { useTheme } from 'styled-components';
import { useClickAway } from 'react-use';

// Internal Components
import { ReactComponent as MoreDark } from 'assets/chat/group-chat/moredark.svg';
import { ReactComponent as MoreLight } from 'assets/chat/group-chat/more.svg';
import Message from 'assets/chat/group-chat/chat.svg';
import AddAdmin from 'assets/chat/group-chat/addadmin.svg';
import DismissAdmin from 'assets/chat/group-chat/dismissadmin.svg';
import Remove from 'assets/chat/group-chat/remove.svg';
import { ImageV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { shortenText } from 'helpers/UtilityHelper';
import Dropdown from 'components/Dropdown';

export const ProfileCard = ({ key, member, isAccountOwnerAdmin }) => {
  const [showMoreOption, setShowMoreOption] = React.useState<string>(null);
  const dropdownRef = React.useRef<any>(null);
  const theme = useTheme();
  useClickAway(dropdownRef, () => setShowMoreOption(null));

  const messageUser = () => {
    console.log('messaging');
    setShowMoreOption(null);
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
    { title: 'Message user', icon: Message, function: () => messageUser() },
    { title: 'Dismiss as admin', icon: DismissAdmin, function: () => dismissGroupAdmin() },
    { title: 'Remove', icon: Remove, function: () => removeMember() },
  ];
  const adminDropdown = [
    { title: 'Message user', icon: Message, function: () => messageUser() },
    { title: 'Make group admin', icon: AddAdmin, function: () => makeGroupAdmin() },
    { title: 'Remove', icon: Remove, function: () => removeMember() },
  ];
  return (
    <ProfileCardItem key={key}>
      <ItemHV2 justifyContent="flex-start">
        <ItemVV2
          width="48px"
          maxWidth="48px"
          borderRadius="100%"
          overflow="hidden"
          margin="0px 12px 0px 0px"
        >
          <ImageV2 src={member?.image} />
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
        {member?.isAdmin && (
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
              member?.isAdmin && isAccountOwnerAdmin
                ? ownerDropdown
                : isAccountOwnerAdmin
                ? adminDropdown
                : memberDropdown
            }
            hoverBGColor={theme.chat.snapFocusBg}
          />
        </DropdownContainer>
      )}
    </ProfileCardItem>
  );
};

const ProfileCardItem = styled(ItemHV2)`
  justify-content: space-between;
  padding: 8px 16px;
  border-radius: 16px;
  position: unset;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.chat.snapFocusBg};
  margin-bottom: 8px;
  max-height: 64px;
`;

const DropdownContainer = styled(ItemVV2)`
  position: absolute;
  left: 86%;
  top: 72%;
  border-radius: 16px;
  padding: 14px 8px;
  background: ${(props) => props.theme.modalContentBackground};
  z-index: 11;
  @media (max-width: 480px) {
    top: 44px;
    right: 7px;
  }
`;
