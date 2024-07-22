import { getChannelDelegatesModelCreator } from '../../models';
import { GetChannelDelegatesParams } from 'queries/types';

export const getChannelDelegates = ({ userPushSDKInstance }: GetChannelDelegatesParams) => {
  return userPushSDKInstance.channel.delegate.get().then(getChannelDelegatesModelCreator);
};
