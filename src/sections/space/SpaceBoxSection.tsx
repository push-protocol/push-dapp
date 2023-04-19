// React + Web3 Essentials
import React, { useContext, useEffect, useState } from 'react';

// External Packages
import { useTheme } from 'styled-components';

// Internal Compoonents
import { ItemVV2 } from 'components/reusables/SharedStylingV2';
import { SpaceBox, WelcomeSpaceContentBox } from 'components/space';
import { ScheduledSpace } from 'components/space/spaceBox/ScheduledSpace';
import { SpaceGlobalContext, SpaceLocalContext } from 'contexts';
import { useWeb3React } from '@web3-react/core';

// Internal Configs

export const SpaceBoxSection = () => {
  const { account } = useWeb3React();
  const { selectedSpace } = useContext(SpaceLocalContext);
  const { userSpaces } = useContext(SpaceGlobalContext);
  const theme = useTheme();

  const [currentSpace, setCurrentSpace] = useState(null);

  useEffect(() => {
    if (selectedSpace === '') {
      setCurrentSpace(null);
      return;
    }
    
    setCurrentSpace(userSpaces[account]?.spaces[selectedSpace]);
  }, [selectedSpace])

  // RENDER
  return (
    <ItemVV2 justifyContent="stretch" background={theme.space.spaceBoxBg} borderRadius="24px">
      SpaceBox Section

      {/* conditionally Render */}
      <SpaceBox />
      {!currentSpace && (<WelcomeSpaceContentBox />)}
      {currentSpace && (<ScheduledSpace currentSpace={currentSpace}  />)}
    </ItemVV2>
  );
}
