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


export const SpaceBoxSection = ({showSpaceInfoModal}:any) => {
  const theme = useTheme();
  const { selectedSpace,activeTab } = useContext(SpaceLocalContext);
  const { userSpaces } = useContext(SpaceGlobalContext);

  console.log("selectedSpace", selectedSpace);


  // RENDER
  return (
    <ItemVV2 justifyContent="stretch" background={theme.space.spaceBoxBg} borderRadius="24px">
      {!selectedSpace && <button onClick={showSpaceInfoModal}>ShowSpaceInfo</button>}
      {/* conditionally Render */}
      {selectedSpace && activeTab === SpaceTabOption.Spaces && (<SpaceBox />)} 
      {selectedSpace && activeTab === SpaceTabOption.Requests && (<RequestBox />)} 
      {!selectedSpace && (<WelcomeSpaceContentBox />)}

    </ItemVV2>
  );
}
