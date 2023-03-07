// React + Web3 Essentials
import React from 'react';

// External Packages
import styled, { useTheme } from 'styled-components';

// Internal Components

import { ImageV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { shortenText } from 'helpers/UtilityHelper';
import { User } from '../../../../../types/chat';
import Dropdown from 'components/Dropdown';
import AddAdmin from 'assets/chat/group-chat/addadmin.svg';
import DismissAdmin from 'assets/chat/group-chat/dismissadmin.svg';
import { device } from 'config/Globals';

type MemberListContainerType = {
  memberData:User,
  handleMemberList: (member:User)=>void,
  lightIcon:any,
  darkIcon:any
}
const MemberListContainer = ({
    memberData,
    handleMemberList,
    lightIcon,
    darkIcon
}:MemberListContainerType) => {
  const [showDropDown,setShowDropDown]=React.useState<boolean>(false)
  const removeAdminDropdown =
  { id: 'dismiss_admin', title: 'Dismiss as admin', icon: DismissAdmin, function: () => console.log("making admin") }
;

  const theme = useTheme();

    return (
        <WalletProfileContainer background={theme.groupSearchProfilBackground}>
            <WalletProfile>
              <ItemVV2
                width="48px"
                maxWidth="48px"
                borderRadius="100%"
                overflow="hidden"
                margin="0px 12px 0px 0px"
              >
                <ImageV2 src={memberData?.profilePicture} />
              </ItemVV2>
              <SpanV2 color={theme.modalPrimaryTextColor}>
                {shortenText(memberData.wallets.split(':')[1], 8,6)}
              </SpanV2>
            </WalletProfile>
            <ItemVV2
              alignItems="flex-end"
              maxWidth="30px"
              style={{ cursor: 'pointer' }}
              onClick={()=>setShowDropDown(!showDropDown)}
              // onClick={() => {
              //   handleMemberList(memberData)
              // }}
            >
              {
                theme.scheme == 'light' ? lightIcon:darkIcon
              }
            </ItemVV2>
            {
              showDropDown && <DropdownContainer>
              <Dropdown
              dropdownValues={[removeAdminDropdown]}
              hoverBGColor={theme.chat.snapFocusBg}
            />
              </DropdownContainer>
            }
          </WalletProfileContainer>
    );
};

export default MemberListContainer;


const WalletProfileContainer = styled(ItemHV2)`
  padding: 8px;
  margin: 0px 0px 8px 0px;
  justify-content: space-between;
  min-width: 445px;
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
  left: 85.5%;
  top: 69%;
  border-radius: 16px;
  padding: 14px 8px;
  background: ${(props) => props.theme.modalContentBackground};
  z-index: 11;
  @media ${device.mobileL} {
    left: 27%;
  }
  @media (min-width:426px) and (max-width:1150px) {
    left: 48%;
  }
`;
