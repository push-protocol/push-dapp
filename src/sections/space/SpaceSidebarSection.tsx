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
      <ProfileHeader
        setActiveTab={setActiveTab}
        showQR={false}
      />
      
    </ItemVV2>
  );
};