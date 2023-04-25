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
    // <SpaceSidebarContainer
    //   flex="1"
    //   maxWidth="310px"
    //   minWidth="280px"
    //   padding="10px 7px 10px 20px"
    //   boxSizing="border-box"
    //   background={theme.default.bg}
    //   spaceActive={!!selectedSpace}
    // >
      <ItemVV2>
        <SpaceSidebarTabs />
        <SpaceSidebar showCreateSpaceModal={showCreateSpaceModal} />
        <ProfileHeader
          setActiveTab={setActiveTab}
          showQR={showQR}
          setShowQR={setShowQR}
        />
      </ItemVV2>
    // </SpaceSidebarContainer>
  );
};

const SpaceSidebarContainer = styled(ItemVV2)`
  @media ${device.tablet} {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 95%;
    margin-right: ${(props) => (props.spaceActive ? '20%' : '0%')};
    opacity: ${(props) => (props.spaceActive ? '0' : '1')};
    opacity: 1;
    transition: margin-right 0.25s;
    max-width: initial;
    min-width: auto;
    z-index: 1;
  }
`;
