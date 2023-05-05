// React + Web3 Essentials
import React from 'react';

// External Packages
import styled from 'styled-components';

// Internal Components
import { ProfileCard } from './ProfileCard';
import { Space } from 'types';

interface MembersProfileListType {
  memberData: Space;
  isAccountOwnerAdmin: boolean;
  removeAdminDropdown?: any;
  removeMemberDropdown?: any;
  makeCohostDropdown?: any;
  removeCohostDropdown?: any;
  addAdminDropdown?: any;
  selectedMemeberAddress: string;
  setSelectedMemeberAddress: (address: string) => void;
  dropdownRef: any;
  membersType: string;
}

export const MembersProfileList = ({
  memberData,
  isAccountOwnerAdmin,
  removeAdminDropdown = null,
  removeMemberDropdown = null,
  addAdminDropdown = null,
  makeCohostDropdown = null,
  removeCohostDropdown = null,
  selectedMemeberAddress,
  setSelectedMemeberAddress,
  dropdownRef,
  membersType,
}: MembersProfileListType) => {
  return (
    <ProfileContainer minHeight={memberData?.members?.length < 4 ? 72 * memberData?.members?.length : 216}>
      {memberData?.members?.map((member, index) => {
        return (
          member && (
            <ProfileCard
              key={index}
              member={member}
              dropdownValues={
                member?.isAdmin && isAccountOwnerAdmin
                  ? membersType === 'group'
                    ? [removeAdminDropdown, removeMemberDropdown]
                    : [removeCohostDropdown, makeCohostDropdown]
                  : isAccountOwnerAdmin
                  ? membersType === 'group'
                    ? [addAdminDropdown, removeMemberDropdown]
                    : [removeCohostDropdown, makeCohostDropdown]
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
  );
};

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
