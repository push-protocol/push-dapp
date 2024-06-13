export type TrendingChannelsParams = {
  startDate: Date;
  endDate: string;
  channel: 'All';
  source: 'ETH_MAINNET';
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

export type ChannelDetails = {
  id: number;
  name: string;
  subscriberCount: number;
  icon: string;
  url: string;
  aliasAddress: string | null;
  channelSettings: string;
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
