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
      description: string;
      index: number;
      lowerLimit: number;
      upperLimit: number;
    };
