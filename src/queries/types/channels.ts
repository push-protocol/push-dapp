import { PushAPI } from '@pushprotocol/restapi';
import { ethers } from 'ethers';
import { SourceKeys } from 'modules/dashboard/Dashboard.types';

export type TrendingChannelsParams = {
  startDate: string;
  endDate: string;
  channel: 'All';
  source: SourceKeys;
};

type TrendingChannelDetails = {
  [key: string]: { name: string; icon: string; channel: string };
};
type SubscriberData = {
  subscriber: number;
};

type SubscriberAnalytics = {
  date: string;
} & {
  [key: string]: SubscriberData;
};
export type TrendingChannelsResponse = {
  channelDetails: TrendingChannelDetails;
  subscriberAnalytics: [SubscriberAnalytics];
};

export type GetChannelDetailsParams = {
  userPushSDKInstance: PushAPI;
  address: string;
};

export type ChannelDetailsResponse = {
  activation_status: number;
  alias_address: string | null;
  alias_blockchain_id: string | null;
  alias_verification_event: string | null;
  attempts: number;
  blocked: number;
  channel: string;
  channel_settings: string;
  counter: string | null;
  icon: string;
  iconV2: string;
  icon_migration: number;
  id: number;
  info: string;
  initiate_verification_proof: string | null;
  ipfshash: string;
  is_alias_verified: number;
  minimal_channel_settings: string;
  name: string;
  payload_migration: number;
  processed: number;
  subgraph_attempts: number;
  subgraph_details: string | null;
  subscriber_count: number;
  timestamp: string; // ISO date string
  url: string;
  verified_status: number;
  verify_verification_proof: string | null;
};

export type ChannelDelegatesResponse = Array<string>;

export type RemoveChannelDelegateResponse = {
  transactionHash: string;
};

export type addChannelDelegateParams = {
  userPushSDKInstance: PushAPI;
  delegateAddress: string; //chain address in caip format
};

export type addChannelSubgraphParams = {
  identityBytes: Uint8Array;
  signer: ethers.providers.JsonRpcSigner;
};

export type reactivateChannelParams = {
  fees: ethers.BigNumber;
  signer: ethers.providers.JsonRpcSigner;
};

export type deactivateChannelParams = {
  signer: ethers.providers.JsonRpcSigner;
};

export type GetChannelDelegatesParams = {
  userPushSDKInstance: PushAPI;
};

export type RemoveChannelDelegateParams = {
  userPushSDKInstance: PushAPI;
  delegateAddress: string; //chain address in caip format
};

export type AddChannelDelegateResponse = {
  transactionHash: string;
};
