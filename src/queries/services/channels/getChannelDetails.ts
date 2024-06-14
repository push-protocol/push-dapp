import { getChannelDetailsModelCreator } from 'queries/models';
import { GetChannelDetailsParams } from 'queries/types';

export const getChannelDetails = ({ userPushSDKInstance, address }: GetChannelDetailsParams) =>
  userPushSDKInstance.channel.info(address).then(getChannelDetailsModelCreator);
