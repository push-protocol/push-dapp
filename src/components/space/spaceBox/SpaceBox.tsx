// React + Web3 Essentials
import React, { useContext, useEffect, useState } from 'react';

// External Packages
import { useTheme } from 'styled-components';

// Internal Compoonents
import { SpaceGlobalContext, SpaceLocalContext } from 'contexts';
import { useWeb3React } from '@web3-react/core';
import { WelcomeSpaceContentBox } from './WelcomeSpaceContentBox';
import { ScheduledSpace } from './ScheduledSpace';
import { ActiveSpaces } from './ActiveSpaces';
import moment from 'moment';
import { getSpaceStatus, getSpaceTime } from 'helpers/space';

export const SpaceBox = ({showSpaceInfoModal,showMemberMenuModal}:{showSpaceInfoModal:any,showMemberMenuModal:()=>void}) => {
  const { account } = useWeb3React();
  const { selectedSpace } = useContext(SpaceLocalContext);
  const { userSpaces } = useContext(SpaceGlobalContext);
  const [currentSpace, setCurrentSpace] = useState(null);
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (!selectedSpace) {
      setCurrentSpace(null);
      return;
    }
    setCurrentSpace(userSpaces[account]?.spaces[selectedSpace]);
  }, [selectedSpace]);


  useEffect(()=>{
    getCurrentTime();
  },[]);

  const getCurrentTime = async () => {
    if(currentSpace?.scheduleAt === null) return;

    let time = getSpaceStatus(currentSpace?.scheduleAt, currentSpace?.scheduleEnd);
    if(time === 'live'){
      setActive(true);
    }
  }

  //RENDER
  return (
    <>
      {!currentSpace && <WelcomeSpaceContentBox />}
      {currentSpace && !active && <ScheduledSpace currentSpace={currentSpace} showSpaceInfoModal={showSpaceInfoModal}/>}
      {currentSpace && active && (<ActiveSpaces currentSpace={currentSpace} showMemberMenuModal={showMemberMenuModal}/>)}
    </>
  );
};
