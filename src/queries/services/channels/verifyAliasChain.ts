import { PushAPI } from '@pushprotocol/restapi';
import { verifyAliasChainModelCreator } from '../../models';

type VerifyAliasChainParams = {
  userPushSDKInstance: PushAPI;
  alias: string; //chain address in caip format
};

export const verifyAliasChain = ({ userPushSDKInstance, alias }: VerifyAliasChainParams) =>
  userPushSDKInstance.channel.alias.verify(alias).then(verifyAliasChainModelCreator);
