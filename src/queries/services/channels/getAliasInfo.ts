import { AliasOptions, PushAPI } from '@pushprotocol/restapi';
import { getAliasInfoModelCreator } from '../../models';

type GetAliasInfoParams = {
  userPushSDKInstance: PushAPI;
  options: AliasOptions;
};

export const getAliasInfo = ({ userPushSDKInstance, options }: GetAliasInfoParams) =>
  userPushSDKInstance.channel.alias.info(options).then(getAliasInfoModelCreator);
