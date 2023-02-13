// React + Web3 Essentials
import React from 'react';

// External Packages
import styled, { useTheme } from 'styled-components';

// Internal Components
import { ReactComponent as AddLight } from 'assets/chat/group-chat/addlight.svg';
import { ReactComponent as AddDark } from 'assets/chat/group-chat/adddark.svg';
import { ReactComponent as RemoveLight } from 'assets/chat/group-chat/removelight.svg';
import { ReactComponent as RemoveDark } from 'assets/chat/group-chat/removedark.svg';
import { ImageV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { shortenText } from 'helpers/UtilityHelper';

const MemberListContainer = ({
    memberData,
    handleMemberList,
    setFilteredUserData,
    members,
    memberList
}) => {

  const theme = useTheme();

  const addMemberToList = (member) => {
    handleMemberList((prev) => [...prev, member]);
    setFilteredUserData('');
  };

  const removeMemberFromList = (member) => {
    const filteredMembers = memberList.filter((user) => user.wallets !== member.wallets);
    handleMemberList(filteredMembers);
  };

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
                {shortenText(memberData.wallets.split(':')[1], 6)}
              </SpanV2>
            </WalletProfile>
            <ItemVV2
              alignItems="flex-end"
              maxWidth="30px"
              style={{ cursor: 'pointer' }}
              onClick={() => {
                members ? removeMemberFromList(memberData) : addMemberToList(memberData)
                }}>
                {
                    members ? 
                        theme.scheme == 'light' ? <RemoveLight /> : <RemoveDark />
                     : 
                        theme.scheme == 'light' ? <AddLight /> : <AddDark />
                }

            </ItemVV2>
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

const MemberList = styled(ItemVV2)`
  margin-top: ${(props) => props.marginTop || '8px'};
  justify-content: 'flex-start';
`;