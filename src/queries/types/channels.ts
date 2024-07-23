import { PushAPI } from '@pushprotocol/restapi';
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
