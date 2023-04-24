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
    <SpaceBoxContainer
    padding="10px"
    spaceActive= {!!selectedSpace}
  >
    <ItemVV2 justifyContent="stretch" background={theme.space.spaceBoxBg} borderRadius="24px">

      {/* conditionally Render */}
      <SpaceBox />
      
    </ItemVV2>
  </SpaceBoxContainer>
  );
}



const SpaceBoxContainer = styled(ItemVV2)`
  @media ${device.tablet} {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 95%;
    margin-left: ${(props) => (props.spaceActive ? '0%' : '100%')};
    transition: margin-left 0.25s;
    max-width: initial;
    min-width: auto;
    z-index: 2;
  }
`;