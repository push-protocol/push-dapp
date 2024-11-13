import { IllustrationProps } from 'blocks';
import { FC } from 'react';

export type ChannelTabs = 'subscribed' | 'trending' | 'hottest';
export type DashboardChannelTabType = {
  label: string;
  key: ChannelTabs;
};
export type DashboardChannelTabsType = Array<DashboardChannelTabType>;
export type TrendingChannelsType = {
  channel: string;
  icon: string;
  name: string;
  subscriber: number;
  timestamp?: string | Date;
  url?: string;
  trend?: string | number;
};

export type ChatPayloadType = {
  chatId: string;
  chatPic: FC<IllustrationProps>;
  chatParticipant: string;
  chatGroup: boolean;
  chatTimestamp: null;
  chatMsg: {
    messageType: string;
    messageContent: string;
  };
};
export type ChatType = {
  chatParticipantAlias: string;
  payload: ChatPayloadType;
};

export type EnvKeys = 'prod' | 'staging' | 'dev' | 'alpha';
export type SourceKeys = 'ETH_MAINNET' | 'All';
