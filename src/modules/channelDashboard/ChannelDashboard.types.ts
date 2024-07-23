import { IconProps } from 'blocks';
import { FC } from 'react';

export type ChannelSetting =
  | {
      type: 1; // Boolean
      default: boolean;
      description: string;
      index: number;
    }
  | {
      type: 2; // Range
      default: number;
      enabled: boolean;
      description: string;
      index: number;
      lowerLimit: number;
      upperLimit: number;
      ticker: number;
    }
  | {
      type: 3; // Range
      default: {
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
  color: 'text-primary' | 'text-state-danger-bold' | 'text-state-success-bold';
  show: boolean;
};

export type DashboardActiveState =
  | 'addSubgraph'
  | 'addDelegate'
  | 'dashboard'
  | 'reactivateChannel'
  | 'deactivateChannel'
  | 'editChannel';
