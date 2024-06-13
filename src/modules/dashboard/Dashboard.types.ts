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
