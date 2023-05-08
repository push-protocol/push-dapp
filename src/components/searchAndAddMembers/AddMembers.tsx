// React + Web3 Essentials
import React from 'react';

// External Packages
import styled, { useTheme } from 'styled-components';
import { useClickAway } from 'react-use';

// Internal Components
import { ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { ProfileImage } from 'components/ProfileImage';
import { findObject, shortenText } from 'helpers/UtilityHelper';
import { User } from '../../types/chat';
import Dropdown from 'components/Dropdown';
import { device } from 'config/Globals';
import AddAdmin from 'assets/chat/group-chat/addadmin.svg';
import DismissAdmin from 'assets/chat/group-chat/dismissadmin.svg';
import Remove from 'assets/chat/group-chat/removewallet.svg';
import Microphone from "assets//space/MicrophoneStage.svg";
import { DropdownValueType } from '../Dropdown';

type AddMembersType = {
  key?: number;
  memberData: User;
  handleMemberList: (member: User) => void;
  handleMembers?: (value: User[]) => void;
  lightIcon: any;
  darkIcon: any;
  memberList?: any;
  spaces?:boolean
};
const AddMembers = ({ key, memberData, handleMembers, handleMemberList, lightIcon, darkIcon, memberList, spaces }: AddMembersType) => {
  const [selectedWallet, setSelectedWallet] = React.useState<string>(null);
  const dropdownRef = React.useRef<any>(null);
  const theme = useTheme();

  useClickAway(dropdownRef, () => setSelectedWallet(null));

  const removeAdminDropdown: DropdownValueType =
    { id: 'dismiss_admin', title: 'Dismiss as admin', icon: DismissAdmin, function: () => dismissGroupAdmin() }

  const addAdminDropdown: DropdownValueType =
    { id: 'dismiss_admin', title: 'Make group admin', icon: AddAdmin, function: () => makeGroupAdmin() }

  const removeUserDropdown: DropdownValueType =
    { id: 'remove_user', title: 'Remove', icon: Remove, function: () => removeUser() }

  const makeCoHost:DropdownValueType = {
    id:'make_Co_Host', title:'Make co-host',icon:Microphone, function:()=> makecohost()
  }

  const dismissGroupAdmin = () => {
    const updatedMembers = memberList.map(member => member.wallets == memberData.wallets ? ({ ...member, isAdmin: false }) : member)
    handleMembers(updatedMembers)
    setSelectedWallet(null)
  }

  const makeGroupAdmin = () => {
    const updatedMembers = memberList.map(member => member.wallets == memberData.wallets ? ({ ...member, isAdmin: true }) : member)
    handleMembers(updatedMembers)
    setSelectedWallet(null)
  }

  const removeUser = () => {
    handleMemberList(memberData)
    setSelectedWallet(null)
  }

  const makecohost = ()=>{
    console.log("Made Co Host");
    setSelectedWallet(null)
  }

  return (
    <WalletProfileContainer background={memberList?'transparent':theme.groupSearchProfilBackground} border={memberList?`1px solid ${theme.modalInputBorderColor}`:'none'}>
      <WalletProfile>
        <ProfileImage imageSrc={memberData?.profilePicture} dimension="48px" borderRadius="50%" margin="0px 12px 0px 0px"/>
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

      {spaces && (
         <SpanV2
          background="#F4DCEA"
            color="#D53A94"
            borderRadius="8px"
            padding="6px"
            fontWeight="500"
            fontSize="10px"
        >
          Co-Host
        </SpanV2>
      )}


      <ItemVV2
        maxWidth='fit-content'
        onClick={() => {
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
      {selectedWallet == memberData.wallets && (
        <DropdownContainer ref={dropdownRef}>
          <Dropdown
            dropdownValues={memberData?.isAdmin ?[removeAdminDropdown,removeUserDropdown] : [addAdminDropdown, removeUserDropdown]}
            hoverBGColor={theme.chat.snapFocusBg}
          />
        </DropdownContainer>
      )}

      {spaces && selectedWallet &&  (
         <DropdownContainer ref={dropdownRef}>
         <Dropdown
           dropdownValues={[makeCoHost,removeUserDropdown]}
           hoverBGColor={theme.chat.snapFocusBg}
         />
       </DropdownContainer>
      )}




    </WalletProfileContainer>
  );
};

export default AddMembers;

const WalletProfileContainer = styled(ItemHV2)`
  position:unset;
  padding: 8px 16px;
  margin: 0px 0px 8px 0px;
  justify-content: space-between;
  min-width: 424px;
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
  left: 87%;
  top: 55%;
  border-radius: 16px;
  padding: 14px 8px;
  background: ${(props) => props.theme.modalContentBackground};
  border: 1px solid rgba(186, 196, 214, 0.2);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.02);
  z-index: 11;
  @media ${device.mobileL} {
    left: 27%;
  }
  @media (min-width: 426px) and (max-width: 1150px) {
    left: 47%;
  }
`;
