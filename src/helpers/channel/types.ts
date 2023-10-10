export type ChannelSetting =
  | {
      type: 1; // Boolean
      isDefaultEnabled: boolean;
      description: string;
      index: number;
    }
  | {
      type: 2; // Range
      defaultValue: number;
      isDefaultEnabled: boolean;
      description: string;
      index: number;
      lowerLimit: number;
      upperLimit: number;
    };
