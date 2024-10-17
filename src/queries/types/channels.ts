import { ChannelListOrderType, ChannelListSortType, PushAPI } from '@pushprotocol/restapi';
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

export type InitiateVerifyAliasChainResponse = {
  tx: string;
};

export type SendNotificationParams = {
  data: string;
  status: number;
  statusText: string;
  headers: {};
  config: {};
  request?: any;
};

export type Alias = {
  id: number;
  channel: string;
  processed: number;
  alias_address: string;
  is_alias_verified: number;
  alias_verification_event: string | null;
  timestamp: string;
  initiate_verification_proof: string;
  verify_verification_proof: string;
  alias_blockchain_id: string;
};
export type ChannelDetails = {
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
  aliases: Array<Alias>;
  tags: string[];
};

export type ChannelDelegatesResponse = Array<string>;

export type GetChannelDelegatesParams = {
  userPushSDKInstance: PushAPI;
  channelAddressinCAIP: string;
};

export type RemoveChannelDelegateParams = {
  userPushSDKInstance: PushAPI;
  delegateAddress: string; //chain address in caip format
};

export type RemoveChannelDelegateResponse = {
  transactionHash: string;
};

export type addChannelDelegateParams = {
  userPushSDKInstance: PushAPI;
  delegateAddress: string; //chain address in caip format
};

export type AddChannelDelegateResponse = {
  transactionHash: string;
};

export type deactivateChannelParams = {
  signer: ethers.providers.JsonRpcSigner;
};

export type addChannelSubgraphParams = {
  identityBytes: Uint8Array;
  signer: ethers.providers.JsonRpcSigner;
};

export type reactivateChannelParams = {
  fees: ethers.BigNumber;
  signer: ethers.providers.JsonRpcSigner;
};

export type EditChannelPayload = {
  signer: ethers.providers.JsonRpcSigner;
  identityBytes: Uint8Array;
  fees: ethers.BigNumber;
  account: string;
};

export type AliasInfoResponse = {
  activation_status: number;
  alias_address: string;
  blocked: number;
  channel: string;
  is_alias_verified: number;
};

export type ChannelNotification = {
  timestamp: string;
  from: string;
  to: string[];
  notifID: number;
  channel: {
    name: string;
    icon: string;
    url: string;
  };
  meta: {
    type: string;
  };
  message: {
    notification: {
      title: string;
      body: string;
    };
    payload: {
      title: string;
      body: string;
      cta: string;
      embed: string;
      meta: {
        domain: string;
      };
    };
  };
  config: {
    expiry: string | null;
    silent: boolean;
    hidden: boolean;
  };
  source: string;
  raw: {
    verificationProof: string;
  };
};

export type ChannelsNotificationsRepsonse = { notifications: ChannelNotification[]; total: number };

export type ChannelsListModelledResponse = {
  channels: Array<ChannelDetails>;
  itemcount: number;
};
export type ChannelsSearchListModelledResponse = {
  channels: Array<ChannelDetails>;
  itemCount: number;
};

export type ChannelListParams = {
  order?: ChannelListOrderType;
  pageSize: number;
  page?: number;
  sort?: ChannelListSortType;
  chain?: string;
  tag?: string;
};

export type ChannelSearchParams = {
  page: number;
  pageSize: number;
  query: string;
  chain?: string;
  tag?: string;
};

export type ChannelCategoriesResponse = {
  tags: {
    tags: string[];
    itemCount: number;
  };
};

export type ChannelCategoriesModelledResponse = {
  tags: string[];
  selectFieldTags: { label: string; value: string }[];
};
