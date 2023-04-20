// External Packages
import * as PushAPI from '@pushprotocol/restapi';

//Internal Configs
import { appConfig } from 'config';
import { spaces } from '../../services/space/spaceList';

//add sdk call for spaces
export const checkSpaceUrl = (url: string) => {
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
      spaceData = spaces[0];
    }
  }
  return { spaceId, spaceType: messageType, spaceData };
};
