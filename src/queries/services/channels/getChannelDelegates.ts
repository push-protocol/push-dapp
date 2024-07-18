import { getChannelDelegatesModelCreator } from '../../models';
import { GetChannelDelegatesParams } from 'queries/types';

export const getChannelDelegates = ({ userPushSDKInstance }: GetChannelDelegatesParams) => {
  console.log('User Push SDK Instance in channel delegates>>>', userPushSDKInstance);

  return userPushSDKInstance.channel.delegate.get().then(getChannelDelegatesModelCreator);
};
