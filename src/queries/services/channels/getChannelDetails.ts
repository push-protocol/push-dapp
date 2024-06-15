import { PushAPI } from '@pushprotocol/restapi';

import { getChannelDetailsModelCreator } from '../../models';

type GetChannelDetailsParams = {
  userPushSDKInstance: PushAPI;
  address: string;
};

export const getChannelDetails = ({ userPushSDKInstance, address }: GetChannelDetailsParams) =>
  userPushSDKInstance.channel.info(address).then(getChannelDetailsModelCreator);
