// React + Web3 Essentials
import React, {useState} from 'react';

// External Packages
import styled, { useTheme } from 'styled-components';
import { useClickAway } from 'react-use';

// Internal Components
import { ImageV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { findObject, shortenText } from 'helpers/UtilityHelper';
import { User } from '../../../../../types/chat';
import Dropdown from 'components/Dropdown';
import { device } from 'config/Globals';
import AddAdmin from 'assets/chat/group-chat/addadmin.svg';
import DismissAdmin from 'assets/chat/group-chat/dismissadmin.svg';
import Remove from 'assets/chat/group-chat/removewallet.svg';
import { DropdownValueType } from '../../../../Dropdown';

type MemberListContainerType = {
  key?: number;
  memberData: User;
  handleMemberList: (member: User) => void;
  handleMembers?: (value: User[]) => void;
  lightIcon: any;
  darkIcon: any;
  memberList?: any;
};
const MemberListContainer = ({ key, memberData, handleMembers, handleMemberList, lightIcon, darkIcon, memberList }: MemberListContainerType) => {
  const [selectedWallet, setSelectedWallet] = React.useState<string>(null);
  const dropdownRef = React.useRef<any>(null);
  const theme = useTheme();
  const [dropdownHeight, setDropdownHeight] = useState(0);

  useClickAway(dropdownRef, () => setSelectedWallet(null));

  const removeAdminDropdown: DropdownValueType =
    { id: 'dismiss_admin', title: 'Dismiss as admin', icon: DismissAdmin, function: () => dismissGroupAdmin() }

  const addAdminDropdown: DropdownValueType =
    { id: 'dismiss_admin', title: 'Make group admin', icon: AddAdmin, function: () => makeGroupAdmin() }

  const removeUserDropdown: DropdownValueType =
    { id: 'remove_user', title: 'Remove', icon: Remove, function: () => removeUser() }

  const dismissGroupAdmin = () => {
    const updatedMembers = memberList.map(member => member.wallets?.toLowerCase() == memberData.wallets?.toLowerCase() ? ({ ...member, isAdmin: false }) : member)
    handleMembers(updatedMembers)
    setSelectedWallet(null)
  }

  const makeGroupAdmin = () => {
    const updatedMembers = memberList.map(member => member.wallets?.toLowerCase() == memberData.wallets?.toLowerCase() ? ({ ...member, isAdmin: true }) : member)
    handleMembers(updatedMembers)
    setSelectedWallet(null)
  }

  const removeUser = () => {
    handleMemberList(memberData)
    setSelectedWallet(null)
  }

  const handleHeight = (id) => {
    // try {
    //   const dropdownHeight = document.getElementById(id);
    //   console.log("heights", dropdownHeight);
    //   // setDropdownHeight(dropdownHeight?.top);
    //   // console.log("height", dropdownHeight);
    // } catch (error) {
    //   console.log("error", error.message);
    // }
    const containerHeight = document.getElementById(id)?.getBoundingClientRect();
    console.log("height", containerHeight);
    setDropdownHeight(containerHeight?.top);
    console.log("height", dropdownHeight);
  };

  return (
    <WalletProfileContainer id={memberData.wallets} background={memberList?'transparent':theme.groupSearchProfilBackground} border={memberList?`1px solid ${theme.modalInputBorderColor}`:'none'}>
      <WalletProfile >
        <ItemVV2
          width="48px"
          maxWidth="48px"
          borderRadius="100%"
          overflow="auto"
          margin="0px 12px 0px 0px"
        >
          <ImageV2 src={memberData?.profilePicture} />
        </ItemVV2>
        <SpanV2
            fontSize="18px" fontWeight="400" color={theme.modalPrimaryTextColor}>{shortenText(memberData.wallets.split(':')[1], 8, 6)}</SpanV2>
      </WalletProfile>
      <ItemHV2 justifyContent="flex-end">
      {memberData?.isAdmin && (
        <SpanV2
         background="#F4DCEA"
            color="#D53A94"
            borderRadius="8px"
            padding="6px"
            fontWeight="500"
            fontSize="10px"
        >
          Admin
        </SpanV2>
      )}
      <ItemVV2
        maxWidth='fit-content'
        onClick={() => {
          handleHeight(memberData.wallets);
          setSelectedWallet(null)
          memberList
            ? findObject(memberData, memberList, 'wallets')
              ? setSelectedWallet(memberData.wallets)
              : handleMemberList(memberData)
            : handleMemberList(memberData)
        }}
      >
        {theme.scheme == 'light' ? lightIcon : darkIcon}
      </ItemVV2>
      </ItemHV2>
      {selectedWallet?.toLowerCase() == memberData.wallets?.toLowerCase() && (
        <DropdownContainer style={{ top: dropdownHeight > 420 ? '-70%' : "70%" }} ref={dropdownRef}>
          <Dropdown
            dropdownValues={memberData?.isAdmin ?[removeAdminDropdown,removeUserDropdown] : [addAdminDropdown, removeUserDropdown]}
            hoverBGColor={theme.chat.snapFocusBg}
          />
        </DropdownContainer>
      )}
    </WalletProfileContainer>
  );
};

export default MemberListContainer;

const WalletProfileContainer = styled(ItemHV2)`
  position: relative;
  padding: 8px 16px;
  margin: 0px 0px 8px 0px;
  justify-content: space-between;
  min-width: 450px;
  box-sizing: border-box;
  align-items: center;
  border-radius: 16px;
  @media (max-width: 480px) {
    min-width: 300px;
  }
`;

const WalletProfile = styled(ItemHV2)`
  justify-content: flex-start;
`;

const DropdownContainer = styled(ItemVV2)`
  position: absolute;
  left: 48%;
  border-radius: 16px;
  padding: 14px 8px;
  background: ${(props) => props.theme.modalContentBackground};
  z-index: 11;
  @media ${device.mobileL} {
    left: 27%;
  }
  @media (min-width: 426px) and (max-width: 1150px) {
    left: 47%;
  }
`;