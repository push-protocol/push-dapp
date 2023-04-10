// React + Web3 Essentials
import React,{useContext} from 'react';

// External Packages
import styled,{useTheme} from 'styled-components';

// Internal Components
import { SpaceSidebar, SpaceSidebarTabs } from 'components/space';
import {ItemHV2, ItemVV2 } from 'components/reusables/SharedStylingV2';
import { SpaceLocalContext } from 'contexts';
import ProfileHeader from 'components/chat/w2wChat/profile';

export const SpaceSidebarSection = () => {
  const { setActiveTab } = useContext(SpaceLocalContext);
  const theme = useTheme();
  // RENDER
  return (
    <ItemVV2>
      <SpaceSidebarTabs />
      <SpaceSidebar />
      <ProfileContainer borderTop={`2px solid ${theme.default.border}`}>
        <ProfileHeader
          setActiveTab={setActiveTab}
          showQR={false}
        />
      </ProfileContainer>
    </ItemVV2>
  );
};

const ProfileContainer = styled(ItemHV2)`
   flex: initial;
   justify-content: space-between;
   margin: 15px 0px 5px 0px;
   padding: 14px 10px 0px 10px;
   border-top: ${props => props.borderTop};
`;