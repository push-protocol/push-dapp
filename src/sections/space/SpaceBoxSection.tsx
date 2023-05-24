// React + Web3 Essentials
import React, { useContext, useEffect, useState } from 'react';

// External Packages
import styled, { useTheme } from 'styled-components';

// Internal Compoonents
import { ItemVV2 } from 'components/reusables/SharedStylingV2';

import { SpaceBox, WelcomeSpaceContentBox } from 'components/space';
import RequestBox from 'components/space/spaceBox/RequestBox';
import { SpaceGlobalContext, SpaceLocalContext, SpaceTabOption } from 'contexts';

// Internal Configs
import { device } from 'config/Globals';
import { useDeviceWidthCheck } from 'hooks/useDeviceWidthCheck';


export const SpaceBoxSection = ({showSpaceInfoModal,showMemberMenuModal}:{showSpaceInfoModal:any,showMemberMenuModal:()=>void}) => {
  const theme = useTheme();
  const isMobile = useDeviceWidthCheck(768);
  const { selectedSpace, activeTab } = useContext(SpaceLocalContext);
  const { userSpaces } = useContext(SpaceGlobalContext);

  // RENDER
  return (
    <ItemVV2 justifyContent="stretch" background={!isMobile ? theme.space.spaceBoxBg : theme.default.bg} borderRadius={isMobile ? "0px" : "24px"}>
      {/* conditionally Render */}
      {selectedSpace && activeTab === SpaceTabOption.Spaces && (<SpaceBox showSpaceInfoModal={showSpaceInfoModal} showMemberMenuModal={showMemberMenuModal}/>)} 
      {selectedSpace && activeTab === SpaceTabOption.Requests && (<RequestBox />)} 
      {!selectedSpace && (<WelcomeSpaceContentBox />)}
    </ItemVV2>
  );
}
