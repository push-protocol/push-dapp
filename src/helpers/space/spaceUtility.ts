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
    }
  }
  return { spaceId, spaceType: messageType };
};

export const getSpaceData = (spaceId: string): Space => {
  const { userSpaces } = useContext(SpaceGlobalContext);
  const { account } = useWeb3React();

  // use sdk call to get spaceData
  const spaceData = userSpaces[account]?.spaces[1111];
  return spaceData;
};

export const getSpaceTime = (spaceScheduleTime: Date | number): string => {
  // construct date string
  const dateStringArray = new Date(spaceScheduleTime).toString().split(' ');
  const dateString = dateStringArray[2] + ' ' + dateStringArray[1];

  // construct time string
  const timeStringArray = dateStringArray[4].split(':');
  const timePeriod = Number(timeStringArray[0]) > 12 ? 'PM' : 'AM';
  const timeData = timeStringArray[0] + ':' + timeStringArray[1] + timePeriod;

  // final date string
  const spaceTime = dateString + ' ' + timeData;

  return spaceTime;
};

export const getSpaceStatus = (spaceStartTime: Date | number, spaceEndTime: Date | number): string => {
  let spaceStatus='';

  // checks for scheduled space
  if (spaceStartTime > Date.now()) {
    spaceStatus = 'scheduled';
  }

  // checks for live space
  if (spaceStartTime <= Date.now() && spaceEndTime >= Date.now()) {
    spaceStatus = 'live';
  }

  // checks for completed space
  // correct value is 'ended' 
  if (spaceEndTime < Date.now()) {
    spaceStatus = 'scheduled';
  }

  return spaceStatus;
};
