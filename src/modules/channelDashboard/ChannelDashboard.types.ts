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
  color: 'text-primary' | 'text-danger-bold' | 'text-success-bold';
  show: boolean;
};

export type DashboardActiveState =
  | 'add_subgraph'
  | 'add_delegate'
  | 'dashboard'
  | 'edit_channel'
  | 'reactivate_channel'
  | 'deactivate_channel';

export type ChannelInfoFormValues = {
  channelName: string | undefined;
  channelDesc: string | undefined;
  channelURL: string | undefined;
  channelIcon: string | undefined;
};
