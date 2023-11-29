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

export type UserSetting =
| {
    type: 1; // Boolean
    default: boolean;
    description: string;
    index: number;
    user: boolean;
  }
| {
    type: 2; // Range
    default: number;
    enabled: boolean;
    description: string;
    index: number;
    lowerLimit: number;
    upperLimit: number;
    user: number;
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
  user: {
    lower: number;
    upper: number;
  };
  ticker: number;
};
