// React + Web3 Essentials
import React from 'react';

// External Packages
import styled from 'styled-components';

// Internal Compoonents
import { SpaceSidebar, SpaceSidebarTabs } from 'components/space';
import Profile from 'components/chat/w2wChat/profile';
import { ItemVV2 } from 'components/reusables/SharedStylingV2';
import { SpaceLocalContext } from 'contexts';

// Internal Configs

export const SpaceSidebarSection = () => {
  // RENDER
  return (
    <ItemVV2>
      <SpaceSidebarTabs />
      <SpaceSidebar />
      <Profile />
    </ItemVV2>
  );
};
