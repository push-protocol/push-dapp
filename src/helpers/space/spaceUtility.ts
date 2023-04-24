import { useWeb3React } from '@web3-react/core';
import React, { useContext } from 'react';

// External Packages
import * as PushAPI from '@pushprotocol/restapi';

//Internal Configs
import { appConfig } from 'config';
import { spaces } from '../../services/space/spaceList';
import { SpaceGlobalContext } from 'contexts';
import { Space } from 'types';

interface CheckSpaceReturnType {
  spaceId: string;
  spaceType: string;
  spaceData: Space;
}

//add sdk call for spaces
export const checkIfSpaceUrl = (url: string): CheckSpaceReturnType => {
  let spaceId = '',
    messageType = '',
    spaceData = null;
  const URL_REGEX = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
  const messageContent = url?.split(' ');

  for (let i = 0; i < messageContent?.length; i++) {
    if (URL_REGEX.test(messageContent[i]) && messageContent[i]?.includes('spaceid')) {
      // Extracting spaceId
      const spaceIdString = messageContent[i]?.split('/')[4]; // split url at '/' and take 4th element

      spaceId = spaceIdString.split(':')[1];
      messageType = 'SpaceLink';
      spaceData=getSpaceData(spaceId)
    }
  }
  return { spaceId, spaceType: messageType, spaceData };
};

export const getSpaceData = (spaceId: string):Space => {
  const { userSpaces } = useContext(SpaceGlobalContext);
  const { account } = useWeb3React();

  // use sdk call to get spaceData
  const spaceData = userSpaces[account]?.spaces[1111];
  return spaceData;
};
