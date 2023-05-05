// React + Web3 Essentials
import React, { useContext, useEffect, useState } from 'react';

// External Packages
import { useTheme } from 'styled-components';

// Internal Compoonents
import { SpaceGlobalContext, SpaceLocalContext } from 'contexts';
import { useWeb3React } from '@web3-react/core';
import { WelcomeSpaceContentBox } from './WelcomeSpaceContentBox';
import { ScheduledSpace } from './ScheduledSpace';

export const SpaceBox = ({showSpaceInfoModal}:any) => {
  const { account } = useWeb3React();
  const { selectedSpace } = useContext(SpaceLocalContext);
  const { userSpaces } = useContext(SpaceGlobalContext);

  const [currentSpace, setCurrentSpace] = useState(null);

  useEffect(() => {
    if (!selectedSpace) {
      setCurrentSpace(null);
      return;
    }
    setCurrentSpace(userSpaces[account]?.spaces[selectedSpace]);
  }, [selectedSpace]);

  //RENDER
  return (
    <>
      {!currentSpace && <WelcomeSpaceContentBox />}
      {currentSpace && <ScheduledSpace currentSpace={currentSpace} showSpaceInfoModal={showSpaceInfoModal}/>}
    </>
  );
};
