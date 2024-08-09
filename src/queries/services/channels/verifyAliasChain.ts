import { PushAPI } from '@pushprotocol/restapi';
import { verifyAliasChainModelCreator } from '../../models';

type VerifyAliasChainParams = {
  userPushSDKInstance: PushAPI;
  channelAddress: string; //chain address in caip format
};

export const verifyAliasChain = ({ userPushSDKInstance, channelAddress }: VerifyAliasChainParams) =>
  userPushSDKInstance.channel.alias.verify(channelAddress).then(verifyAliasChainModelCreator);
