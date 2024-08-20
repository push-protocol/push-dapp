import { PushAPI } from '@pushprotocol/restapi';
import { initiateNewChainModelCreator } from '../../models';

type InitiateNewChainParams = {
  userPushSDKInstance: PushAPI;
  alias: string; //chain address in caip format
};

export const initiateNewChain = ({ userPushSDKInstance, alias }: InitiateNewChainParams) =>
  userPushSDKInstance.channel.alias.initiate(alias).then(initiateNewChainModelCreator);
