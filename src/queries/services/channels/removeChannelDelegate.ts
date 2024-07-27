import { removeChannelDelegateModelCreator } from '../../models';
import { RemoveChannelDelegateParams } from 'queries/types';

export const removeChannelDelegate = ({ userPushSDKInstance, delegateAddress }: RemoveChannelDelegateParams) =>
  userPushSDKInstance.channel.delegate.remove(delegateAddress).then(removeChannelDelegateModelCreator);
