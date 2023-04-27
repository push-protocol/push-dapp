// React + Web3 Essentials
import React, { useContext, useState } from 'react';

// External Packages
import styled, { useTheme } from 'styled-components';

// Internal Components
import { SpaceSidebar, SpaceSidebarTabs } from 'components/space';
import { ItemVV2 } from 'components/reusables/SharedStylingV2';
import { SpaceLocalContext } from 'contexts';
import ProfileHeader from 'components/chat/w2wChat/profile';

// Internal Configs

import { device } from 'config/Globals';

export const SpaceSidebarSection = ({ showCreateSpaceModal }) => {
  const { setActiveTab, selectedSpace } = useContext(SpaceLocalContext);
  const [showQR, setShowQR] = useState(false);
  const theme = useTheme();
  // RENDER
  return (
    <ItemVV2>
      <SpaceSidebarTabs />
      <SpaceSidebar showCreateSpaceModal={showCreateSpaceModal}/>
      <ProfileHeader
        setActiveTab={setActiveTab}
        showQR={showQR}
        setShowQR={setShowQR}
      />
    
    </ItemVV2>
  );
};

