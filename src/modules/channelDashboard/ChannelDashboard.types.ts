export type ChannelSetting = {
  type: 1 | 2 | 3;
  default:
    | boolean
    | number
    | {
        lower: number;
        upper: number;
      };
  enabled: boolean;
  description: string;
  index: number;
  lowerLimit: number;
  upperLimit: number;
  ticker: number;
};

export type DashboardActiveState =
  | 'addSubgraph'
  | 'addDelegate'
  | 'dashboard'
  | 'reactivateChannel'
  | 'deactivateChannel'
  | 'editChannel';
