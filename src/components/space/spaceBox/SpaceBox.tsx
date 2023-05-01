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


export const SpaceBox = () => {
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
    var today = new Date();
    //date in the between params will be scheduleAt and scheduleEnd for the 
    let howWork = moment(today).isBetween('2023-01-01', '2023-10-25'); 
    await setActive(howWork)
    // return howWork;
  }

  console.log(currentSpace);

  //RENDER
  return (
    <>
      {!currentSpace && <WelcomeSpaceContentBox />}
      {currentSpace && !active && <ScheduledSpace currentSpace={currentSpace} />}
      {currentSpace && active && (<ActiveSpaces currentSpace={currentSpace} />)}
    </>
  );
};
