import { IconProps } from 'blocks';
import { FC } from 'react';

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

export type ChannelDropdownTypes = {
  title: string;
  logo: FC<IconProps>;
  onClick: () => void;
  // color: 'text-primary' | 'text-state-danger-bold' | 'text-state-success-bold';
  color: '#17181B' | '#D43B3B' | '#00A47F';
  show: boolean;
};

export type DashboardActiveState =
  | 'addSubgraph'
  | 'addDelegate'
  | 'dashboard'
  | 'reactivateChannel'
  | 'deactivateChannel'
  | 'editChannel';
