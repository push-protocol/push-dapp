import { addChannelDelegateModelCreator } from '../../models';
import { addChannelDelegateParams } from 'queries/types';

export const addChannelDelegate = ({ userPushSDKInstance, delegateAddress }: addChannelDelegateParams) =>
  userPushSDKInstance.channel.delegate.add(delegateAddress).then(addChannelDelegateModelCreator);
