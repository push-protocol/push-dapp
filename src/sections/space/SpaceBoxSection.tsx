// React + Web3 Essentials
import React, { useContext, useEffect, useState } from 'react';

// External Packages
import styled, { useTheme } from 'styled-components';

// Internal Compoonents
import { ItemVV2 } from 'components/reusables/SharedStylingV2';
import { SpaceBox } from 'components/space';


// Internal Configs
import { device } from 'config/Globals';
import { SpaceLocalContext } from 'contexts';


export const SpaceBoxSection = () => {
  const theme = useTheme();
  const { selectedSpace,activeTab } = useContext(SpaceLocalContext);


  // RENDER
  return (
    <ItemVV2 justifyContent="stretch" background={theme.space.spaceBoxBg} borderRadius="24px">

      {/* conditionally Render */}
      <SpaceBox />
      
    </ItemVV2>
  );
}
