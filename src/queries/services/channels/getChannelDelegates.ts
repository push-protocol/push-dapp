import { getChannelDelegatesModelCreator } from '../../models';
import { GetChannelDelegatesParams } from 'queries/types';

export const getChannelDelegates = ({ userPushSDKInstance, channelAddressinCAIP }: GetChannelDelegatesParams) => {
  return userPushSDKInstance.channel.delegate
    .get({ channel: channelAddressinCAIP })
    .then(getChannelDelegatesModelCreator);
};
