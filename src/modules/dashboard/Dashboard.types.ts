import { IllustrationProps } from 'blocks';
import { FC } from 'react';

export const channelListTypeValues = ['trending channels', 'subscribed'] as const;

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
  previewLink: string;
  chatParticipantAlias: string;
  payload: ChatPayloadType;
};

export type EnvKeys = 'prod' | 'staging' | 'dev';
export type SourceKeys = 'ETH_MAINNET' | 'All';
